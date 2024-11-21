// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__27085 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__27085 == null)){
return null;
} else {
return goog.object.get(G__27085,"requires");
}
}):(function (path){
var G__27086 = goog.object.get(goog.dependencies_.requires,path);
if((G__27086 == null)){
return null;
} else {
return goog.object.getKeys(G__27086);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27087_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27087_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__27088 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__27088__$1 = (((G__27088 == null))?null:goog.object.get(G__27088,"provides"));
if((G__27088__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__27088__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__27089 = cljs.core.seq.call(null,provides);
var chunk__27090 = null;
var count__27091 = (0);
var i__27092 = (0);
while(true){
if((i__27092 < count__27091)){
var prov = cljs.core._nth.call(null,chunk__27090,i__27092);
var seq__27101_27113 = cljs.core.seq.call(null,requires);
var chunk__27102_27114 = null;
var count__27103_27115 = (0);
var i__27104_27116 = (0);
while(true){
if((i__27104_27116 < count__27103_27115)){
var req_27117 = cljs.core._nth.call(null,chunk__27102_27114,i__27104_27116);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27117,prov);


var G__27118 = seq__27101_27113;
var G__27119 = chunk__27102_27114;
var G__27120 = count__27103_27115;
var G__27121 = (i__27104_27116 + (1));
seq__27101_27113 = G__27118;
chunk__27102_27114 = G__27119;
count__27103_27115 = G__27120;
i__27104_27116 = G__27121;
continue;
} else {
var temp__5720__auto___27122 = cljs.core.seq.call(null,seq__27101_27113);
if(temp__5720__auto___27122){
var seq__27101_27123__$1 = temp__5720__auto___27122;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27101_27123__$1)){
var c__4556__auto___27124 = cljs.core.chunk_first.call(null,seq__27101_27123__$1);
var G__27125 = cljs.core.chunk_rest.call(null,seq__27101_27123__$1);
var G__27126 = c__4556__auto___27124;
var G__27127 = cljs.core.count.call(null,c__4556__auto___27124);
var G__27128 = (0);
seq__27101_27113 = G__27125;
chunk__27102_27114 = G__27126;
count__27103_27115 = G__27127;
i__27104_27116 = G__27128;
continue;
} else {
var req_27129 = cljs.core.first.call(null,seq__27101_27123__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27129,prov);


var G__27130 = cljs.core.next.call(null,seq__27101_27123__$1);
var G__27131 = null;
var G__27132 = (0);
var G__27133 = (0);
seq__27101_27113 = G__27130;
chunk__27102_27114 = G__27131;
count__27103_27115 = G__27132;
i__27104_27116 = G__27133;
continue;
}
} else {
}
}
break;
}


var G__27134 = seq__27089;
var G__27135 = chunk__27090;
var G__27136 = count__27091;
var G__27137 = (i__27092 + (1));
seq__27089 = G__27134;
chunk__27090 = G__27135;
count__27091 = G__27136;
i__27092 = G__27137;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27089);
if(temp__5720__auto__){
var seq__27089__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27089__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__27089__$1);
var G__27138 = cljs.core.chunk_rest.call(null,seq__27089__$1);
var G__27139 = c__4556__auto__;
var G__27140 = cljs.core.count.call(null,c__4556__auto__);
var G__27141 = (0);
seq__27089 = G__27138;
chunk__27090 = G__27139;
count__27091 = G__27140;
i__27092 = G__27141;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27089__$1);
var seq__27105_27142 = cljs.core.seq.call(null,requires);
var chunk__27106_27143 = null;
var count__27107_27144 = (0);
var i__27108_27145 = (0);
while(true){
if((i__27108_27145 < count__27107_27144)){
var req_27146 = cljs.core._nth.call(null,chunk__27106_27143,i__27108_27145);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27146,prov);


var G__27147 = seq__27105_27142;
var G__27148 = chunk__27106_27143;
var G__27149 = count__27107_27144;
var G__27150 = (i__27108_27145 + (1));
seq__27105_27142 = G__27147;
chunk__27106_27143 = G__27148;
count__27107_27144 = G__27149;
i__27108_27145 = G__27150;
continue;
} else {
var temp__5720__auto___27151__$1 = cljs.core.seq.call(null,seq__27105_27142);
if(temp__5720__auto___27151__$1){
var seq__27105_27152__$1 = temp__5720__auto___27151__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27105_27152__$1)){
var c__4556__auto___27153 = cljs.core.chunk_first.call(null,seq__27105_27152__$1);
var G__27154 = cljs.core.chunk_rest.call(null,seq__27105_27152__$1);
var G__27155 = c__4556__auto___27153;
var G__27156 = cljs.core.count.call(null,c__4556__auto___27153);
var G__27157 = (0);
seq__27105_27142 = G__27154;
chunk__27106_27143 = G__27155;
count__27107_27144 = G__27156;
i__27108_27145 = G__27157;
continue;
} else {
var req_27158 = cljs.core.first.call(null,seq__27105_27152__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27158,prov);


var G__27159 = cljs.core.next.call(null,seq__27105_27152__$1);
var G__27160 = null;
var G__27161 = (0);
var G__27162 = (0);
seq__27105_27142 = G__27159;
chunk__27106_27143 = G__27160;
count__27107_27144 = G__27161;
i__27108_27145 = G__27162;
continue;
}
} else {
}
}
break;
}


var G__27163 = cljs.core.next.call(null,seq__27089__$1);
var G__27164 = null;
var G__27165 = (0);
var G__27166 = (0);
seq__27089 = G__27163;
chunk__27090 = G__27164;
count__27091 = G__27165;
i__27092 = G__27166;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__27109 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__27110 = null;
var count__27111 = (0);
var i__27112 = (0);
while(true){
if((i__27112 < count__27111)){
var prov = cljs.core._nth.call(null,chunk__27110,i__27112);
goog.object.forEach(deps,((function (seq__27109,chunk__27110,count__27111,i__27112,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__27109,chunk__27110,count__27111,i__27112,prov,requires))
);


var G__27167 = seq__27109;
var G__27168 = chunk__27110;
var G__27169 = count__27111;
var G__27170 = (i__27112 + (1));
seq__27109 = G__27167;
chunk__27110 = G__27168;
count__27111 = G__27169;
i__27112 = G__27170;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27109);
if(temp__5720__auto__){
var seq__27109__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27109__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__27109__$1);
var G__27171 = cljs.core.chunk_rest.call(null,seq__27109__$1);
var G__27172 = c__4556__auto__;
var G__27173 = cljs.core.count.call(null,c__4556__auto__);
var G__27174 = (0);
seq__27109 = G__27171;
chunk__27110 = G__27172;
count__27111 = G__27173;
i__27112 = G__27174;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27109__$1);
goog.object.forEach(deps,((function (seq__27109,chunk__27110,count__27111,i__27112,prov,seq__27109__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__27109,chunk__27110,count__27111,i__27112,prov,seq__27109__$1,temp__5720__auto__,requires))
);


var G__27175 = cljs.core.next.call(null,seq__27109__$1);
var G__27176 = null;
var G__27177 = (0);
var G__27178 = (0);
seq__27109 = G__27175;
chunk__27110 = G__27176;
count__27111 = G__27177;
i__27112 = G__27178;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__27179){
var vec__27180 = p__27179;
var _ = cljs.core.nth.call(null,vec__27180,(0),null);
var v = cljs.core.nth.call(null,vec__27180,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__27183){
var vec__27184 = p__27183;
var k = cljs.core.nth.call(null,vec__27184,(0),null);
var v = cljs.core.nth.call(null,vec__27184,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27196_27204 = cljs.core.seq.call(null,deps);
var chunk__27197_27205 = null;
var count__27198_27206 = (0);
var i__27199_27207 = (0);
while(true){
if((i__27199_27207 < count__27198_27206)){
var dep_27208 = cljs.core._nth.call(null,chunk__27197_27205,i__27199_27207);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_27208;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27208));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27208,(depth + (1)),state);
} else {
}


var G__27209 = seq__27196_27204;
var G__27210 = chunk__27197_27205;
var G__27211 = count__27198_27206;
var G__27212 = (i__27199_27207 + (1));
seq__27196_27204 = G__27209;
chunk__27197_27205 = G__27210;
count__27198_27206 = G__27211;
i__27199_27207 = G__27212;
continue;
} else {
var temp__5720__auto___27213 = cljs.core.seq.call(null,seq__27196_27204);
if(temp__5720__auto___27213){
var seq__27196_27214__$1 = temp__5720__auto___27213;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27196_27214__$1)){
var c__4556__auto___27215 = cljs.core.chunk_first.call(null,seq__27196_27214__$1);
var G__27216 = cljs.core.chunk_rest.call(null,seq__27196_27214__$1);
var G__27217 = c__4556__auto___27215;
var G__27218 = cljs.core.count.call(null,c__4556__auto___27215);
var G__27219 = (0);
seq__27196_27204 = G__27216;
chunk__27197_27205 = G__27217;
count__27198_27206 = G__27218;
i__27199_27207 = G__27219;
continue;
} else {
var dep_27220 = cljs.core.first.call(null,seq__27196_27214__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_27220;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27220));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27220,(depth + (1)),state);
} else {
}


var G__27221 = cljs.core.next.call(null,seq__27196_27214__$1);
var G__27222 = null;
var G__27223 = (0);
var G__27224 = (0);
seq__27196_27204 = G__27221;
chunk__27197_27205 = G__27222;
count__27198_27206 = G__27223;
i__27199_27207 = G__27224;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27200){
var vec__27201 = p__27200;
var seq__27202 = cljs.core.seq.call(null,vec__27201);
var first__27203 = cljs.core.first.call(null,seq__27202);
var seq__27202__$1 = cljs.core.next.call(null,seq__27202);
var x = first__27203;
var xs = seq__27202__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__27187_SHARP_){
return clojure.set.difference.call(null,p1__27187_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__27225_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__27225_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27226 = cljs.core.seq.call(null,provides);
var chunk__27227 = null;
var count__27228 = (0);
var i__27229 = (0);
while(true){
if((i__27229 < count__27228)){
var prov = cljs.core._nth.call(null,chunk__27227,i__27229);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27238_27246 = cljs.core.seq.call(null,requires);
var chunk__27239_27247 = null;
var count__27240_27248 = (0);
var i__27241_27249 = (0);
while(true){
if((i__27241_27249 < count__27240_27248)){
var req_27250 = cljs.core._nth.call(null,chunk__27239_27247,i__27241_27249);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27250,prov);


var G__27251 = seq__27238_27246;
var G__27252 = chunk__27239_27247;
var G__27253 = count__27240_27248;
var G__27254 = (i__27241_27249 + (1));
seq__27238_27246 = G__27251;
chunk__27239_27247 = G__27252;
count__27240_27248 = G__27253;
i__27241_27249 = G__27254;
continue;
} else {
var temp__5720__auto___27255 = cljs.core.seq.call(null,seq__27238_27246);
if(temp__5720__auto___27255){
var seq__27238_27256__$1 = temp__5720__auto___27255;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27238_27256__$1)){
var c__4556__auto___27257 = cljs.core.chunk_first.call(null,seq__27238_27256__$1);
var G__27258 = cljs.core.chunk_rest.call(null,seq__27238_27256__$1);
var G__27259 = c__4556__auto___27257;
var G__27260 = cljs.core.count.call(null,c__4556__auto___27257);
var G__27261 = (0);
seq__27238_27246 = G__27258;
chunk__27239_27247 = G__27259;
count__27240_27248 = G__27260;
i__27241_27249 = G__27261;
continue;
} else {
var req_27262 = cljs.core.first.call(null,seq__27238_27256__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27262,prov);


var G__27263 = cljs.core.next.call(null,seq__27238_27256__$1);
var G__27264 = null;
var G__27265 = (0);
var G__27266 = (0);
seq__27238_27246 = G__27263;
chunk__27239_27247 = G__27264;
count__27240_27248 = G__27265;
i__27241_27249 = G__27266;
continue;
}
} else {
}
}
break;
}


var G__27267 = seq__27226;
var G__27268 = chunk__27227;
var G__27269 = count__27228;
var G__27270 = (i__27229 + (1));
seq__27226 = G__27267;
chunk__27227 = G__27268;
count__27228 = G__27269;
i__27229 = G__27270;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27226);
if(temp__5720__auto__){
var seq__27226__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27226__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__27226__$1);
var G__27271 = cljs.core.chunk_rest.call(null,seq__27226__$1);
var G__27272 = c__4556__auto__;
var G__27273 = cljs.core.count.call(null,c__4556__auto__);
var G__27274 = (0);
seq__27226 = G__27271;
chunk__27227 = G__27272;
count__27228 = G__27273;
i__27229 = G__27274;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27226__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27242_27275 = cljs.core.seq.call(null,requires);
var chunk__27243_27276 = null;
var count__27244_27277 = (0);
var i__27245_27278 = (0);
while(true){
if((i__27245_27278 < count__27244_27277)){
var req_27279 = cljs.core._nth.call(null,chunk__27243_27276,i__27245_27278);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27279,prov);


var G__27280 = seq__27242_27275;
var G__27281 = chunk__27243_27276;
var G__27282 = count__27244_27277;
var G__27283 = (i__27245_27278 + (1));
seq__27242_27275 = G__27280;
chunk__27243_27276 = G__27281;
count__27244_27277 = G__27282;
i__27245_27278 = G__27283;
continue;
} else {
var temp__5720__auto___27284__$1 = cljs.core.seq.call(null,seq__27242_27275);
if(temp__5720__auto___27284__$1){
var seq__27242_27285__$1 = temp__5720__auto___27284__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27242_27285__$1)){
var c__4556__auto___27286 = cljs.core.chunk_first.call(null,seq__27242_27285__$1);
var G__27287 = cljs.core.chunk_rest.call(null,seq__27242_27285__$1);
var G__27288 = c__4556__auto___27286;
var G__27289 = cljs.core.count.call(null,c__4556__auto___27286);
var G__27290 = (0);
seq__27242_27275 = G__27287;
chunk__27243_27276 = G__27288;
count__27244_27277 = G__27289;
i__27245_27278 = G__27290;
continue;
} else {
var req_27291 = cljs.core.first.call(null,seq__27242_27285__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27291,prov);


var G__27292 = cljs.core.next.call(null,seq__27242_27285__$1);
var G__27293 = null;
var G__27294 = (0);
var G__27295 = (0);
seq__27242_27275 = G__27292;
chunk__27243_27276 = G__27293;
count__27244_27277 = G__27294;
i__27245_27278 = G__27295;
continue;
}
} else {
}
}
break;
}


var G__27296 = cljs.core.next.call(null,seq__27226__$1);
var G__27297 = null;
var G__27298 = (0);
var G__27299 = (0);
seq__27226 = G__27296;
chunk__27227 = G__27297;
count__27228 = G__27298;
i__27229 = G__27299;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27300_27304 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27301_27305 = null;
var count__27302_27306 = (0);
var i__27303_27307 = (0);
while(true){
if((i__27303_27307 < count__27302_27306)){
var ns_27308 = cljs.core._nth.call(null,chunk__27301_27305,i__27303_27307);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27308);


var G__27309 = seq__27300_27304;
var G__27310 = chunk__27301_27305;
var G__27311 = count__27302_27306;
var G__27312 = (i__27303_27307 + (1));
seq__27300_27304 = G__27309;
chunk__27301_27305 = G__27310;
count__27302_27306 = G__27311;
i__27303_27307 = G__27312;
continue;
} else {
var temp__5720__auto___27313 = cljs.core.seq.call(null,seq__27300_27304);
if(temp__5720__auto___27313){
var seq__27300_27314__$1 = temp__5720__auto___27313;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27300_27314__$1)){
var c__4556__auto___27315 = cljs.core.chunk_first.call(null,seq__27300_27314__$1);
var G__27316 = cljs.core.chunk_rest.call(null,seq__27300_27314__$1);
var G__27317 = c__4556__auto___27315;
var G__27318 = cljs.core.count.call(null,c__4556__auto___27315);
var G__27319 = (0);
seq__27300_27304 = G__27316;
chunk__27301_27305 = G__27317;
count__27302_27306 = G__27318;
i__27303_27307 = G__27319;
continue;
} else {
var ns_27320 = cljs.core.first.call(null,seq__27300_27314__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27320);


var G__27321 = cljs.core.next.call(null,seq__27300_27314__$1);
var G__27322 = null;
var G__27323 = (0);
var G__27324 = (0);
seq__27300_27304 = G__27321;
chunk__27301_27305 = G__27322;
count__27302_27306 = G__27323;
i__27303_27307 = G__27324;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__27325__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27326__i = 0, G__27326__a = new Array(arguments.length -  0);
while (G__27326__i < G__27326__a.length) {G__27326__a[G__27326__i] = arguments[G__27326__i + 0]; ++G__27326__i;}
  args = new cljs.core.IndexedSeq(G__27326__a,0,null);
} 
return G__27325__delegate.call(this,args);};
G__27325.cljs$lang$maxFixedArity = 0;
G__27325.cljs$lang$applyTo = (function (arglist__27327){
var args = cljs.core.seq(arglist__27327);
return G__27325__delegate(args);
});
G__27325.cljs$core$IFn$_invoke$arity$variadic = G__27325__delegate;
return G__27325;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27328_SHARP_,p2__27329_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27328_SHARP_)),p2__27329_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27330_SHARP_,p2__27331_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27330_SHARP_),p2__27331_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27332 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27332.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__27332.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__27332;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27333){if((e27333 instanceof Error)){
var e = e27333;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27333;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27334){if((e27334 instanceof Error)){
var e = e27334;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27334;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27335 = cljs.core._EQ_;
var expr__27336 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27335.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27336))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27335.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27336))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27335.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27336))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27338,callback){
var map__27339 = p__27338;
var map__27339__$1 = (((((!((map__27339 == null))))?(((((map__27339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27339):map__27339);
var file_msg = map__27339__$1;
var request_url = cljs.core.get.call(null,map__27339__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23360__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_27377){
var state_val_27378 = (state_27377[(1)]);
if((state_val_27378 === (7))){
var inst_27373 = (state_27377[(2)]);
var state_27377__$1 = state_27377;
var statearr_27379_27405 = state_27377__$1;
(statearr_27379_27405[(2)] = inst_27373);

(statearr_27379_27405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (1))){
var state_27377__$1 = state_27377;
var statearr_27380_27406 = state_27377__$1;
(statearr_27380_27406[(2)] = null);

(statearr_27380_27406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (4))){
var inst_27343 = (state_27377[(7)]);
var inst_27343__$1 = (state_27377[(2)]);
var state_27377__$1 = (function (){var statearr_27381 = state_27377;
(statearr_27381[(7)] = inst_27343__$1);

return statearr_27381;
})();
if(cljs.core.truth_(inst_27343__$1)){
var statearr_27382_27407 = state_27377__$1;
(statearr_27382_27407[(1)] = (5));

} else {
var statearr_27383_27408 = state_27377__$1;
(statearr_27383_27408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (15))){
var inst_27356 = (state_27377[(8)]);
var inst_27358 = (state_27377[(9)]);
var inst_27360 = inst_27358.call(null,inst_27356);
var state_27377__$1 = state_27377;
var statearr_27384_27409 = state_27377__$1;
(statearr_27384_27409[(2)] = inst_27360);

(statearr_27384_27409[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (13))){
var inst_27367 = (state_27377[(2)]);
var state_27377__$1 = state_27377;
var statearr_27385_27410 = state_27377__$1;
(statearr_27385_27410[(2)] = inst_27367);

(statearr_27385_27410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (6))){
var state_27377__$1 = state_27377;
var statearr_27386_27411 = state_27377__$1;
(statearr_27386_27411[(2)] = null);

(statearr_27386_27411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (17))){
var inst_27364 = (state_27377[(2)]);
var state_27377__$1 = state_27377;
var statearr_27387_27412 = state_27377__$1;
(statearr_27387_27412[(2)] = inst_27364);

(statearr_27387_27412[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (3))){
var inst_27375 = (state_27377[(2)]);
var state_27377__$1 = state_27377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27377__$1,inst_27375);
} else {
if((state_val_27378 === (12))){
var state_27377__$1 = state_27377;
var statearr_27388_27413 = state_27377__$1;
(statearr_27388_27413[(2)] = null);

(statearr_27388_27413[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (2))){
var state_27377__$1 = state_27377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27377__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27378 === (11))){
var inst_27348 = (state_27377[(10)]);
var inst_27354 = figwheel.client.file_reloading.blocking_load.call(null,inst_27348);
var state_27377__$1 = state_27377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27377__$1,(14),inst_27354);
} else {
if((state_val_27378 === (9))){
var inst_27348 = (state_27377[(10)]);
var state_27377__$1 = state_27377;
if(cljs.core.truth_(inst_27348)){
var statearr_27389_27414 = state_27377__$1;
(statearr_27389_27414[(1)] = (11));

} else {
var statearr_27390_27415 = state_27377__$1;
(statearr_27390_27415[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (5))){
var inst_27343 = (state_27377[(7)]);
var inst_27349 = (state_27377[(11)]);
var inst_27348 = cljs.core.nth.call(null,inst_27343,(0),null);
var inst_27349__$1 = cljs.core.nth.call(null,inst_27343,(1),null);
var state_27377__$1 = (function (){var statearr_27391 = state_27377;
(statearr_27391[(10)] = inst_27348);

(statearr_27391[(11)] = inst_27349__$1);

return statearr_27391;
})();
if(cljs.core.truth_(inst_27349__$1)){
var statearr_27392_27416 = state_27377__$1;
(statearr_27392_27416[(1)] = (8));

} else {
var statearr_27393_27417 = state_27377__$1;
(statearr_27393_27417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (14))){
var inst_27358 = (state_27377[(9)]);
var inst_27348 = (state_27377[(10)]);
var inst_27356 = (state_27377[(2)]);
var inst_27357 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27358__$1 = cljs.core.get.call(null,inst_27357,inst_27348);
var state_27377__$1 = (function (){var statearr_27394 = state_27377;
(statearr_27394[(8)] = inst_27356);

(statearr_27394[(9)] = inst_27358__$1);

return statearr_27394;
})();
if(cljs.core.truth_(inst_27358__$1)){
var statearr_27395_27418 = state_27377__$1;
(statearr_27395_27418[(1)] = (15));

} else {
var statearr_27396_27419 = state_27377__$1;
(statearr_27396_27419[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (16))){
var inst_27356 = (state_27377[(8)]);
var inst_27362 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27356);
var state_27377__$1 = state_27377;
var statearr_27397_27420 = state_27377__$1;
(statearr_27397_27420[(2)] = inst_27362);

(statearr_27397_27420[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (10))){
var inst_27369 = (state_27377[(2)]);
var state_27377__$1 = (function (){var statearr_27398 = state_27377;
(statearr_27398[(12)] = inst_27369);

return statearr_27398;
})();
var statearr_27399_27421 = state_27377__$1;
(statearr_27399_27421[(2)] = null);

(statearr_27399_27421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (8))){
var inst_27349 = (state_27377[(11)]);
var inst_27351 = eval(inst_27349);
var state_27377__$1 = state_27377;
var statearr_27400_27422 = state_27377__$1;
(statearr_27400_27422[(2)] = inst_27351);

(statearr_27400_27422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$state_machine__23266__auto__ = null;
var figwheel$client$file_reloading$state_machine__23266__auto____0 = (function (){
var statearr_27401 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27401[(0)] = figwheel$client$file_reloading$state_machine__23266__auto__);

(statearr_27401[(1)] = (1));

return statearr_27401;
});
var figwheel$client$file_reloading$state_machine__23266__auto____1 = (function (state_27377){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_27377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e27402){if((e27402 instanceof Object)){
var ex__23269__auto__ = e27402;
var statearr_27403_27423 = state_27377;
(statearr_27403_27423[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27424 = state_27377;
state_27377 = G__27424;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23266__auto__ = function(state_27377){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23266__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23266__auto____1.call(this,state_27377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23266__auto____0;
figwheel$client$file_reloading$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23266__auto____1;
return figwheel$client$file_reloading$state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_27404 = f__23361__auto__.call(null);
(statearr_27404[(6)] = c__23360__auto__);

return statearr_27404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));

return c__23360__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27426 = arguments.length;
switch (G__27426) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27428,callback){
var map__27429 = p__27428;
var map__27429__$1 = (((((!((map__27429 == null))))?(((((map__27429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27429):map__27429);
var file_msg = map__27429__$1;
var namespace = cljs.core.get.call(null,map__27429__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27431){
var map__27432 = p__27431;
var map__27432__$1 = (((((!((map__27432 == null))))?(((((map__27432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27432):map__27432);
var file_msg = map__27432__$1;
var namespace = cljs.core.get.call(null,map__27432__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27434){
var map__27435 = p__27434;
var map__27435__$1 = (((((!((map__27435 == null))))?(((((map__27435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27435):map__27435);
var file_msg = map__27435__$1;
var namespace = cljs.core.get.call(null,map__27435__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27437,callback){
var map__27438 = p__27437;
var map__27438__$1 = (((((!((map__27438 == null))))?(((((map__27438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27438):map__27438);
var file_msg = map__27438__$1;
var request_url = cljs.core.get.call(null,map__27438__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27438__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23360__auto___27488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_27473){
var state_val_27474 = (state_27473[(1)]);
if((state_val_27474 === (1))){
var inst_27447 = cljs.core.seq.call(null,files);
var inst_27448 = cljs.core.first.call(null,inst_27447);
var inst_27449 = cljs.core.next.call(null,inst_27447);
var inst_27450 = files;
var state_27473__$1 = (function (){var statearr_27475 = state_27473;
(statearr_27475[(7)] = inst_27449);

(statearr_27475[(8)] = inst_27450);

(statearr_27475[(9)] = inst_27448);

return statearr_27475;
})();
var statearr_27476_27489 = state_27473__$1;
(statearr_27476_27489[(2)] = null);

(statearr_27476_27489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (2))){
var inst_27450 = (state_27473[(8)]);
var inst_27456 = (state_27473[(10)]);
var inst_27455 = cljs.core.seq.call(null,inst_27450);
var inst_27456__$1 = cljs.core.first.call(null,inst_27455);
var inst_27457 = cljs.core.next.call(null,inst_27455);
var inst_27458 = (inst_27456__$1 == null);
var inst_27459 = cljs.core.not.call(null,inst_27458);
var state_27473__$1 = (function (){var statearr_27477 = state_27473;
(statearr_27477[(11)] = inst_27457);

(statearr_27477[(10)] = inst_27456__$1);

return statearr_27477;
})();
if(inst_27459){
var statearr_27478_27490 = state_27473__$1;
(statearr_27478_27490[(1)] = (4));

} else {
var statearr_27479_27491 = state_27473__$1;
(statearr_27479_27491[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (3))){
var inst_27471 = (state_27473[(2)]);
var state_27473__$1 = state_27473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27473__$1,inst_27471);
} else {
if((state_val_27474 === (4))){
var inst_27456 = (state_27473[(10)]);
var inst_27461 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27456);
var state_27473__$1 = state_27473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27473__$1,(7),inst_27461);
} else {
if((state_val_27474 === (5))){
var inst_27467 = cljs.core.async.close_BANG_.call(null,out);
var state_27473__$1 = state_27473;
var statearr_27480_27492 = state_27473__$1;
(statearr_27480_27492[(2)] = inst_27467);

(statearr_27480_27492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (6))){
var inst_27469 = (state_27473[(2)]);
var state_27473__$1 = state_27473;
var statearr_27481_27493 = state_27473__$1;
(statearr_27481_27493[(2)] = inst_27469);

(statearr_27481_27493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (7))){
var inst_27457 = (state_27473[(11)]);
var inst_27463 = (state_27473[(2)]);
var inst_27464 = cljs.core.async.put_BANG_.call(null,out,inst_27463);
var inst_27450 = inst_27457;
var state_27473__$1 = (function (){var statearr_27482 = state_27473;
(statearr_27482[(8)] = inst_27450);

(statearr_27482[(12)] = inst_27464);

return statearr_27482;
})();
var statearr_27483_27494 = state_27473__$1;
(statearr_27483_27494[(2)] = null);

(statearr_27483_27494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23266__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23266__auto____0 = (function (){
var statearr_27484 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27484[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23266__auto__);

(statearr_27484[(1)] = (1));

return statearr_27484;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23266__auto____1 = (function (state_27473){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_27473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e27485){if((e27485 instanceof Object)){
var ex__23269__auto__ = e27485;
var statearr_27486_27495 = state_27473;
(statearr_27486_27495[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27496 = state_27473;
state_27473 = G__27496;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23266__auto__ = function(state_27473){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23266__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23266__auto____1.call(this,state_27473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23266__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23266__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_27487 = f__23361__auto__.call(null);
(statearr_27487[(6)] = c__23360__auto___27488);

return statearr_27487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27497,opts){
var map__27498 = p__27497;
var map__27498__$1 = (((((!((map__27498 == null))))?(((((map__27498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27498):map__27498);
var eval_body = cljs.core.get.call(null,map__27498__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27498__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27500){var e = e27500;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__27501_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27501_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27502){
var vec__27503 = p__27502;
var k = cljs.core.nth.call(null,vec__27503,(0),null);
var v = cljs.core.nth.call(null,vec__27503,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27506){
var vec__27507 = p__27506;
var k = cljs.core.nth.call(null,vec__27507,(0),null);
var v = cljs.core.nth.call(null,vec__27507,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27513,p__27514){
var map__27515 = p__27513;
var map__27515__$1 = (((((!((map__27515 == null))))?(((((map__27515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27515):map__27515);
var opts = map__27515__$1;
var before_jsload = cljs.core.get.call(null,map__27515__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27515__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27515__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27516 = p__27514;
var map__27516__$1 = (((((!((map__27516 == null))))?(((((map__27516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27516):map__27516);
var msg = map__27516__$1;
var files = cljs.core.get.call(null,map__27516__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27516__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27516__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23360__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_27670){
var state_val_27671 = (state_27670[(1)]);
if((state_val_27671 === (7))){
var inst_27530 = (state_27670[(7)]);
var inst_27531 = (state_27670[(8)]);
var inst_27533 = (state_27670[(9)]);
var inst_27532 = (state_27670[(10)]);
var inst_27538 = cljs.core._nth.call(null,inst_27531,inst_27533);
var inst_27539 = figwheel.client.file_reloading.eval_body.call(null,inst_27538,opts);
var inst_27540 = (inst_27533 + (1));
var tmp27672 = inst_27530;
var tmp27673 = inst_27531;
var tmp27674 = inst_27532;
var inst_27530__$1 = tmp27672;
var inst_27531__$1 = tmp27673;
var inst_27532__$1 = tmp27674;
var inst_27533__$1 = inst_27540;
var state_27670__$1 = (function (){var statearr_27675 = state_27670;
(statearr_27675[(7)] = inst_27530__$1);

(statearr_27675[(8)] = inst_27531__$1);

(statearr_27675[(9)] = inst_27533__$1);

(statearr_27675[(11)] = inst_27539);

(statearr_27675[(10)] = inst_27532__$1);

return statearr_27675;
})();
var statearr_27676_27759 = state_27670__$1;
(statearr_27676_27759[(2)] = null);

(statearr_27676_27759[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (20))){
var inst_27573 = (state_27670[(12)]);
var inst_27581 = figwheel.client.file_reloading.sort_files.call(null,inst_27573);
var state_27670__$1 = state_27670;
var statearr_27677_27760 = state_27670__$1;
(statearr_27677_27760[(2)] = inst_27581);

(statearr_27677_27760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (27))){
var state_27670__$1 = state_27670;
var statearr_27678_27761 = state_27670__$1;
(statearr_27678_27761[(2)] = null);

(statearr_27678_27761[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (1))){
var inst_27522 = (state_27670[(13)]);
var inst_27519 = before_jsload.call(null,files);
var inst_27520 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27521 = (function (){return (function (p1__27510_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27510_SHARP_);
});
})();
var inst_27522__$1 = cljs.core.filter.call(null,inst_27521,files);
var inst_27523 = cljs.core.not_empty.call(null,inst_27522__$1);
var state_27670__$1 = (function (){var statearr_27679 = state_27670;
(statearr_27679[(13)] = inst_27522__$1);

(statearr_27679[(14)] = inst_27520);

(statearr_27679[(15)] = inst_27519);

return statearr_27679;
})();
if(cljs.core.truth_(inst_27523)){
var statearr_27680_27762 = state_27670__$1;
(statearr_27680_27762[(1)] = (2));

} else {
var statearr_27681_27763 = state_27670__$1;
(statearr_27681_27763[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (24))){
var state_27670__$1 = state_27670;
var statearr_27682_27764 = state_27670__$1;
(statearr_27682_27764[(2)] = null);

(statearr_27682_27764[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (39))){
var inst_27623 = (state_27670[(16)]);
var state_27670__$1 = state_27670;
var statearr_27683_27765 = state_27670__$1;
(statearr_27683_27765[(2)] = inst_27623);

(statearr_27683_27765[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (46))){
var inst_27665 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27684_27766 = state_27670__$1;
(statearr_27684_27766[(2)] = inst_27665);

(statearr_27684_27766[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (4))){
var inst_27567 = (state_27670[(2)]);
var inst_27568 = cljs.core.List.EMPTY;
var inst_27569 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27568);
var inst_27570 = (function (){return (function (p1__27511_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27511_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27511_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27511_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_27571 = cljs.core.filter.call(null,inst_27570,files);
var inst_27572 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27573 = cljs.core.concat.call(null,inst_27571,inst_27572);
var state_27670__$1 = (function (){var statearr_27685 = state_27670;
(statearr_27685[(17)] = inst_27567);

(statearr_27685[(18)] = inst_27569);

(statearr_27685[(12)] = inst_27573);

return statearr_27685;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27686_27767 = state_27670__$1;
(statearr_27686_27767[(1)] = (16));

} else {
var statearr_27687_27768 = state_27670__$1;
(statearr_27687_27768[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (15))){
var inst_27557 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27688_27769 = state_27670__$1;
(statearr_27688_27769[(2)] = inst_27557);

(statearr_27688_27769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (21))){
var inst_27583 = (state_27670[(19)]);
var inst_27583__$1 = (state_27670[(2)]);
var inst_27584 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27583__$1);
var state_27670__$1 = (function (){var statearr_27689 = state_27670;
(statearr_27689[(19)] = inst_27583__$1);

return statearr_27689;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27670__$1,(22),inst_27584);
} else {
if((state_val_27671 === (31))){
var inst_27668 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27670__$1,inst_27668);
} else {
if((state_val_27671 === (32))){
var inst_27623 = (state_27670[(16)]);
var inst_27628 = inst_27623.cljs$lang$protocol_mask$partition0$;
var inst_27629 = (inst_27628 & (64));
var inst_27630 = inst_27623.cljs$core$ISeq$;
var inst_27631 = (cljs.core.PROTOCOL_SENTINEL === inst_27630);
var inst_27632 = ((inst_27629) || (inst_27631));
var state_27670__$1 = state_27670;
if(cljs.core.truth_(inst_27632)){
var statearr_27690_27770 = state_27670__$1;
(statearr_27690_27770[(1)] = (35));

} else {
var statearr_27691_27771 = state_27670__$1;
(statearr_27691_27771[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (40))){
var inst_27645 = (state_27670[(20)]);
var inst_27644 = (state_27670[(2)]);
var inst_27645__$1 = cljs.core.get.call(null,inst_27644,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27646 = cljs.core.get.call(null,inst_27644,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27647 = cljs.core.not_empty.call(null,inst_27645__$1);
var state_27670__$1 = (function (){var statearr_27692 = state_27670;
(statearr_27692[(21)] = inst_27646);

(statearr_27692[(20)] = inst_27645__$1);

return statearr_27692;
})();
if(cljs.core.truth_(inst_27647)){
var statearr_27693_27772 = state_27670__$1;
(statearr_27693_27772[(1)] = (41));

} else {
var statearr_27694_27773 = state_27670__$1;
(statearr_27694_27773[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (33))){
var state_27670__$1 = state_27670;
var statearr_27695_27774 = state_27670__$1;
(statearr_27695_27774[(2)] = false);

(statearr_27695_27774[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (13))){
var inst_27543 = (state_27670[(22)]);
var inst_27547 = cljs.core.chunk_first.call(null,inst_27543);
var inst_27548 = cljs.core.chunk_rest.call(null,inst_27543);
var inst_27549 = cljs.core.count.call(null,inst_27547);
var inst_27530 = inst_27548;
var inst_27531 = inst_27547;
var inst_27532 = inst_27549;
var inst_27533 = (0);
var state_27670__$1 = (function (){var statearr_27696 = state_27670;
(statearr_27696[(7)] = inst_27530);

(statearr_27696[(8)] = inst_27531);

(statearr_27696[(9)] = inst_27533);

(statearr_27696[(10)] = inst_27532);

return statearr_27696;
})();
var statearr_27697_27775 = state_27670__$1;
(statearr_27697_27775[(2)] = null);

(statearr_27697_27775[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (22))){
var inst_27587 = (state_27670[(23)]);
var inst_27591 = (state_27670[(24)]);
var inst_27586 = (state_27670[(25)]);
var inst_27583 = (state_27670[(19)]);
var inst_27586__$1 = (state_27670[(2)]);
var inst_27587__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27586__$1);
var inst_27588 = (function (){var all_files = inst_27583;
var res_SINGLEQUOTE_ = inst_27586__$1;
var res = inst_27587__$1;
return (function (p1__27512_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27512_SHARP_));
});
})();
var inst_27589 = cljs.core.filter.call(null,inst_27588,inst_27586__$1);
var inst_27590 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27591__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27590);
var inst_27592 = cljs.core.not_empty.call(null,inst_27591__$1);
var state_27670__$1 = (function (){var statearr_27698 = state_27670;
(statearr_27698[(23)] = inst_27587__$1);

(statearr_27698[(26)] = inst_27589);

(statearr_27698[(24)] = inst_27591__$1);

(statearr_27698[(25)] = inst_27586__$1);

return statearr_27698;
})();
if(cljs.core.truth_(inst_27592)){
var statearr_27699_27776 = state_27670__$1;
(statearr_27699_27776[(1)] = (23));

} else {
var statearr_27700_27777 = state_27670__$1;
(statearr_27700_27777[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (36))){
var state_27670__$1 = state_27670;
var statearr_27701_27778 = state_27670__$1;
(statearr_27701_27778[(2)] = false);

(statearr_27701_27778[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (41))){
var inst_27645 = (state_27670[(20)]);
var inst_27649 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27650 = cljs.core.map.call(null,inst_27649,inst_27645);
var inst_27651 = cljs.core.pr_str.call(null,inst_27650);
var inst_27652 = ["figwheel-no-load meta-data: ",inst_27651].join('');
var inst_27653 = figwheel.client.utils.log.call(null,inst_27652);
var state_27670__$1 = state_27670;
var statearr_27702_27779 = state_27670__$1;
(statearr_27702_27779[(2)] = inst_27653);

(statearr_27702_27779[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (43))){
var inst_27646 = (state_27670[(21)]);
var inst_27656 = (state_27670[(2)]);
var inst_27657 = cljs.core.not_empty.call(null,inst_27646);
var state_27670__$1 = (function (){var statearr_27703 = state_27670;
(statearr_27703[(27)] = inst_27656);

return statearr_27703;
})();
if(cljs.core.truth_(inst_27657)){
var statearr_27704_27780 = state_27670__$1;
(statearr_27704_27780[(1)] = (44));

} else {
var statearr_27705_27781 = state_27670__$1;
(statearr_27705_27781[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (29))){
var inst_27587 = (state_27670[(23)]);
var inst_27623 = (state_27670[(16)]);
var inst_27589 = (state_27670[(26)]);
var inst_27591 = (state_27670[(24)]);
var inst_27586 = (state_27670[(25)]);
var inst_27583 = (state_27670[(19)]);
var inst_27619 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27622 = (function (){var all_files = inst_27583;
var res_SINGLEQUOTE_ = inst_27586;
var res = inst_27587;
var files_not_loaded = inst_27589;
var dependencies_that_loaded = inst_27591;
return (function (p__27621){
var map__27706 = p__27621;
var map__27706__$1 = (((((!((map__27706 == null))))?(((((map__27706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27706):map__27706);
var namespace = cljs.core.get.call(null,map__27706__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_27623__$1 = cljs.core.group_by.call(null,inst_27622,inst_27589);
var inst_27625 = (inst_27623__$1 == null);
var inst_27626 = cljs.core.not.call(null,inst_27625);
var state_27670__$1 = (function (){var statearr_27708 = state_27670;
(statearr_27708[(16)] = inst_27623__$1);

(statearr_27708[(28)] = inst_27619);

return statearr_27708;
})();
if(inst_27626){
var statearr_27709_27782 = state_27670__$1;
(statearr_27709_27782[(1)] = (32));

} else {
var statearr_27710_27783 = state_27670__$1;
(statearr_27710_27783[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (44))){
var inst_27646 = (state_27670[(21)]);
var inst_27659 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27646);
var inst_27660 = cljs.core.pr_str.call(null,inst_27659);
var inst_27661 = ["not required: ",inst_27660].join('');
var inst_27662 = figwheel.client.utils.log.call(null,inst_27661);
var state_27670__$1 = state_27670;
var statearr_27711_27784 = state_27670__$1;
(statearr_27711_27784[(2)] = inst_27662);

(statearr_27711_27784[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (6))){
var inst_27564 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27712_27785 = state_27670__$1;
(statearr_27712_27785[(2)] = inst_27564);

(statearr_27712_27785[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (28))){
var inst_27589 = (state_27670[(26)]);
var inst_27616 = (state_27670[(2)]);
var inst_27617 = cljs.core.not_empty.call(null,inst_27589);
var state_27670__$1 = (function (){var statearr_27713 = state_27670;
(statearr_27713[(29)] = inst_27616);

return statearr_27713;
})();
if(cljs.core.truth_(inst_27617)){
var statearr_27714_27786 = state_27670__$1;
(statearr_27714_27786[(1)] = (29));

} else {
var statearr_27715_27787 = state_27670__$1;
(statearr_27715_27787[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (25))){
var inst_27587 = (state_27670[(23)]);
var inst_27603 = (state_27670[(2)]);
var inst_27604 = cljs.core.not_empty.call(null,inst_27587);
var state_27670__$1 = (function (){var statearr_27716 = state_27670;
(statearr_27716[(30)] = inst_27603);

return statearr_27716;
})();
if(cljs.core.truth_(inst_27604)){
var statearr_27717_27788 = state_27670__$1;
(statearr_27717_27788[(1)] = (26));

} else {
var statearr_27718_27789 = state_27670__$1;
(statearr_27718_27789[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (34))){
var inst_27639 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
if(cljs.core.truth_(inst_27639)){
var statearr_27719_27790 = state_27670__$1;
(statearr_27719_27790[(1)] = (38));

} else {
var statearr_27720_27791 = state_27670__$1;
(statearr_27720_27791[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (17))){
var state_27670__$1 = state_27670;
var statearr_27721_27792 = state_27670__$1;
(statearr_27721_27792[(2)] = recompile_dependents);

(statearr_27721_27792[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (3))){
var state_27670__$1 = state_27670;
var statearr_27722_27793 = state_27670__$1;
(statearr_27722_27793[(2)] = null);

(statearr_27722_27793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (12))){
var inst_27560 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27723_27794 = state_27670__$1;
(statearr_27723_27794[(2)] = inst_27560);

(statearr_27723_27794[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (2))){
var inst_27522 = (state_27670[(13)]);
var inst_27529 = cljs.core.seq.call(null,inst_27522);
var inst_27530 = inst_27529;
var inst_27531 = null;
var inst_27532 = (0);
var inst_27533 = (0);
var state_27670__$1 = (function (){var statearr_27724 = state_27670;
(statearr_27724[(7)] = inst_27530);

(statearr_27724[(8)] = inst_27531);

(statearr_27724[(9)] = inst_27533);

(statearr_27724[(10)] = inst_27532);

return statearr_27724;
})();
var statearr_27725_27795 = state_27670__$1;
(statearr_27725_27795[(2)] = null);

(statearr_27725_27795[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (23))){
var inst_27587 = (state_27670[(23)]);
var inst_27589 = (state_27670[(26)]);
var inst_27591 = (state_27670[(24)]);
var inst_27586 = (state_27670[(25)]);
var inst_27583 = (state_27670[(19)]);
var inst_27594 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27596 = (function (){var all_files = inst_27583;
var res_SINGLEQUOTE_ = inst_27586;
var res = inst_27587;
var files_not_loaded = inst_27589;
var dependencies_that_loaded = inst_27591;
return (function (p__27595){
var map__27726 = p__27595;
var map__27726__$1 = (((((!((map__27726 == null))))?(((((map__27726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27726):map__27726);
var request_url = cljs.core.get.call(null,map__27726__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_27597 = cljs.core.reverse.call(null,inst_27591);
var inst_27598 = cljs.core.map.call(null,inst_27596,inst_27597);
var inst_27599 = cljs.core.pr_str.call(null,inst_27598);
var inst_27600 = figwheel.client.utils.log.call(null,inst_27599);
var state_27670__$1 = (function (){var statearr_27728 = state_27670;
(statearr_27728[(31)] = inst_27594);

return statearr_27728;
})();
var statearr_27729_27796 = state_27670__$1;
(statearr_27729_27796[(2)] = inst_27600);

(statearr_27729_27796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (35))){
var state_27670__$1 = state_27670;
var statearr_27730_27797 = state_27670__$1;
(statearr_27730_27797[(2)] = true);

(statearr_27730_27797[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (19))){
var inst_27573 = (state_27670[(12)]);
var inst_27579 = figwheel.client.file_reloading.expand_files.call(null,inst_27573);
var state_27670__$1 = state_27670;
var statearr_27731_27798 = state_27670__$1;
(statearr_27731_27798[(2)] = inst_27579);

(statearr_27731_27798[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (11))){
var state_27670__$1 = state_27670;
var statearr_27732_27799 = state_27670__$1;
(statearr_27732_27799[(2)] = null);

(statearr_27732_27799[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (9))){
var inst_27562 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27733_27800 = state_27670__$1;
(statearr_27733_27800[(2)] = inst_27562);

(statearr_27733_27800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (5))){
var inst_27533 = (state_27670[(9)]);
var inst_27532 = (state_27670[(10)]);
var inst_27535 = (inst_27533 < inst_27532);
var inst_27536 = inst_27535;
var state_27670__$1 = state_27670;
if(cljs.core.truth_(inst_27536)){
var statearr_27734_27801 = state_27670__$1;
(statearr_27734_27801[(1)] = (7));

} else {
var statearr_27735_27802 = state_27670__$1;
(statearr_27735_27802[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (14))){
var inst_27543 = (state_27670[(22)]);
var inst_27552 = cljs.core.first.call(null,inst_27543);
var inst_27553 = figwheel.client.file_reloading.eval_body.call(null,inst_27552,opts);
var inst_27554 = cljs.core.next.call(null,inst_27543);
var inst_27530 = inst_27554;
var inst_27531 = null;
var inst_27532 = (0);
var inst_27533 = (0);
var state_27670__$1 = (function (){var statearr_27736 = state_27670;
(statearr_27736[(7)] = inst_27530);

(statearr_27736[(8)] = inst_27531);

(statearr_27736[(9)] = inst_27533);

(statearr_27736[(32)] = inst_27553);

(statearr_27736[(10)] = inst_27532);

return statearr_27736;
})();
var statearr_27737_27803 = state_27670__$1;
(statearr_27737_27803[(2)] = null);

(statearr_27737_27803[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (45))){
var state_27670__$1 = state_27670;
var statearr_27738_27804 = state_27670__$1;
(statearr_27738_27804[(2)] = null);

(statearr_27738_27804[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (26))){
var inst_27587 = (state_27670[(23)]);
var inst_27589 = (state_27670[(26)]);
var inst_27591 = (state_27670[(24)]);
var inst_27586 = (state_27670[(25)]);
var inst_27583 = (state_27670[(19)]);
var inst_27606 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27608 = (function (){var all_files = inst_27583;
var res_SINGLEQUOTE_ = inst_27586;
var res = inst_27587;
var files_not_loaded = inst_27589;
var dependencies_that_loaded = inst_27591;
return (function (p__27607){
var map__27739 = p__27607;
var map__27739__$1 = (((((!((map__27739 == null))))?(((((map__27739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27739):map__27739);
var namespace = cljs.core.get.call(null,map__27739__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27739__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_27609 = cljs.core.map.call(null,inst_27608,inst_27587);
var inst_27610 = cljs.core.pr_str.call(null,inst_27609);
var inst_27611 = figwheel.client.utils.log.call(null,inst_27610);
var inst_27612 = (function (){var all_files = inst_27583;
var res_SINGLEQUOTE_ = inst_27586;
var res = inst_27587;
var files_not_loaded = inst_27589;
var dependencies_that_loaded = inst_27591;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_27613 = setTimeout(inst_27612,(10));
var state_27670__$1 = (function (){var statearr_27741 = state_27670;
(statearr_27741[(33)] = inst_27606);

(statearr_27741[(34)] = inst_27611);

return statearr_27741;
})();
var statearr_27742_27805 = state_27670__$1;
(statearr_27742_27805[(2)] = inst_27613);

(statearr_27742_27805[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (16))){
var state_27670__$1 = state_27670;
var statearr_27743_27806 = state_27670__$1;
(statearr_27743_27806[(2)] = reload_dependents);

(statearr_27743_27806[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (38))){
var inst_27623 = (state_27670[(16)]);
var inst_27641 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27623);
var state_27670__$1 = state_27670;
var statearr_27744_27807 = state_27670__$1;
(statearr_27744_27807[(2)] = inst_27641);

(statearr_27744_27807[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (30))){
var state_27670__$1 = state_27670;
var statearr_27745_27808 = state_27670__$1;
(statearr_27745_27808[(2)] = null);

(statearr_27745_27808[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (10))){
var inst_27543 = (state_27670[(22)]);
var inst_27545 = cljs.core.chunked_seq_QMARK_.call(null,inst_27543);
var state_27670__$1 = state_27670;
if(inst_27545){
var statearr_27746_27809 = state_27670__$1;
(statearr_27746_27809[(1)] = (13));

} else {
var statearr_27747_27810 = state_27670__$1;
(statearr_27747_27810[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (18))){
var inst_27577 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
if(cljs.core.truth_(inst_27577)){
var statearr_27748_27811 = state_27670__$1;
(statearr_27748_27811[(1)] = (19));

} else {
var statearr_27749_27812 = state_27670__$1;
(statearr_27749_27812[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (42))){
var state_27670__$1 = state_27670;
var statearr_27750_27813 = state_27670__$1;
(statearr_27750_27813[(2)] = null);

(statearr_27750_27813[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (37))){
var inst_27636 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27751_27814 = state_27670__$1;
(statearr_27751_27814[(2)] = inst_27636);

(statearr_27751_27814[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (8))){
var inst_27530 = (state_27670[(7)]);
var inst_27543 = (state_27670[(22)]);
var inst_27543__$1 = cljs.core.seq.call(null,inst_27530);
var state_27670__$1 = (function (){var statearr_27752 = state_27670;
(statearr_27752[(22)] = inst_27543__$1);

return statearr_27752;
})();
if(inst_27543__$1){
var statearr_27753_27815 = state_27670__$1;
(statearr_27753_27815[(1)] = (10));

} else {
var statearr_27754_27816 = state_27670__$1;
(statearr_27754_27816[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23266__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23266__auto____0 = (function (){
var statearr_27755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27755[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23266__auto__);

(statearr_27755[(1)] = (1));

return statearr_27755;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23266__auto____1 = (function (state_27670){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_27670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e27756){if((e27756 instanceof Object)){
var ex__23269__auto__ = e27756;
var statearr_27757_27817 = state_27670;
(statearr_27757_27817[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27818 = state_27670;
state_27670 = G__27818;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23266__auto__ = function(state_27670){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23266__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23266__auto____1.call(this,state_27670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23266__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23266__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_27758 = f__23361__auto__.call(null);
(statearr_27758[(6)] = c__23360__auto__);

return statearr_27758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));

return c__23360__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27821,link){
var map__27822 = p__27821;
var map__27822__$1 = (((((!((map__27822 == null))))?(((((map__27822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27822):map__27822);
var file = cljs.core.get.call(null,map__27822__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__27819_SHARP_,p2__27820_SHARP_){
if(cljs.core._EQ_.call(null,p1__27819_SHARP_,p2__27820_SHARP_)){
return p1__27819_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27825){
var map__27826 = p__27825;
var map__27826__$1 = (((((!((map__27826 == null))))?(((((map__27826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27826):map__27826);
var match_length = cljs.core.get.call(null,map__27826__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27826__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27824_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27824_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27828_SHARP_,p2__27829_SHARP_){
return cljs.core.assoc.call(null,p1__27828_SHARP_,cljs.core.get.call(null,p2__27829_SHARP_,key),p2__27829_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_27830 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27830);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27830);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27831,p__27832){
var map__27833 = p__27831;
var map__27833__$1 = (((((!((map__27833 == null))))?(((((map__27833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27833):map__27833);
var on_cssload = cljs.core.get.call(null,map__27833__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27834 = p__27832;
var map__27834__$1 = (((((!((map__27834 == null))))?(((((map__27834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27834):map__27834);
var files_msg = map__27834__$1;
var files = cljs.core.get.call(null,map__27834__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1731626418113
