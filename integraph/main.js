const svg = d3.select("svg");
const width = +svg.attr("width");
const height = +svg.attr("height");
const radius = 40; // Circle radius doubled
const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSoGZvHUIzGlIJl-LGpAkdMSCifya8UTdfCYkzZHsPTGSC6wNczM_m7lmhOqExTcbg0P9Di4tf3SBlN/pub?output=csv";

/*
/// DO NOT DELETE THIS SECTION
// *** DATA INPUT ***
// Input data array with links
const inputData = [{
        id: 1,
        label: 'a',
        url: 'http://example.com/a',
        link: []
    },
    {
        id: 2,
        label: 'b',
        url: 'http://example.com/b',
        link: [1,3]
    },
    {
        id: 3,
        label: 'c',
        url: 'http://example.com/c',
        link: [1,2]
    },
    {
        id: 4,
        label: 'd',
        url: 'http://example.com/d',
        link: [1]
    },
    {
        id: 5,
        label: 'e',
        url: 'http://example.com/e',
        link: [1]
    }
		  ];
*/

function parseCSV(text) {
    const lines = text.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    
    return lines.slice(1).map(line => 
        line.split(/,(?![^\[]*\])/)
            .reduce((obj, val, i) => {
                const value = val.trim();
                obj[headers[i]] = value.includes('[') 
                    ? value.replace(/^"(.*)"$/, '$1')
                          .replace(/[\[\]]/g, '')
                          .trim()
                          .split(',')
                          .filter(Boolean)
                          .map(num => parseInt(num, 10)) 
                    : headers[i] === 'id' 
                        ? parseInt(value, 10) 
                        : value;
                return obj;
            }, {})
    );
}
/*
// Test cases:
const testData = `id,label,url,link
1,a,http://example.com/a,[0]
2,b,http://example.com/b,"[1,3]"
3,c,http://example.com/c,"[1,2]"
4,d,http://example.com/d,[]
5,e,http://example.com/e,"[]"
6,f,http://example.com/f,[1]`;

const parsed = parseCSV(testData);
console.log(JSON.stringify(parsed, null, 2));
*/

async function fetchData(csvUrl) {
    try {
        const response = await fetch(csvUrl, {
            method: "GET",
            headers: {
                "Content-Type": "text/csv",
                "Accept": "text/csv"
	    }});
        if (!response.ok) {
            throw new Error(`Failed to fetch ${csvUrl}: ${response.statusText}`);
        }
        const fetchedData = await response.text(); // Read file content as text
	console.log("unparsed text", fetchedData);
        return fetchedData; // Return the data
    } catch (error) {
        console.error(`Error fetching {$csvUrl}:`, error);
        throw error;
    }
}



async function processCSV(url) {
    try {
        const rawData = await fetchData(url);
        const parsedData = parseCSV(rawData);
	console.log("processCSV running!");
        console.log(JSON.stringify(parsedData, null, 2));
	return parsedData;
    } catch (error) {
        console.error('Error processing CSV:', error);
    }
}

// *** D3 GRAPH CONFIG ***
async function graphData(dataUrl) {
    // First get the data
    const inputData = await processCSV(dataUrl);
    
    // All your D3 code goes here
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const nodesData = inputData;
    const linksData = inputData.flatMap(d =>
        d.link.map(targetId => {
            const target = nodesData.find(node => node.id === targetId);
            return target ? {
                source: d,
                target
            } : null;
        }).filter(link => link !== null)
    );

    const simulation = d3.forceSimulation(nodesData)
        .force("link", d3.forceLink(linksData).distance(100))
        .force("charge", d3.forceManyBody().strength(-500))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collision", d3.forceCollide().radius(radius * 2.71))
        .on("tick", ticked);

    const link = svg.selectAll(".link")
        .data(linksData)
        .enter().append("line")
        .style("stroke", "#ccc");

    const node = svg.selectAll(".node")
        .data(nodesData)
        .enter().append("g")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended))
        .on("dblclick", function(event, d) {
            window.location.href = d.url;
        });

    node.append("circle")
        .attr("r", radius)
        .attr("fill", d => color(d.id));

    node.append("text")
        .text(d => d.label)
        .attr("dy", "0.35em");

    // Keep your existing helper functions
    function ticked() {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node.attr("transform", d => `translate(${d.x}, ${d.y})`);
    }

    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }
}

// Call the function to start the visualization
graphData(csvUrl).catch(error => {
    console.error('Error creating visualization:', error);
});
