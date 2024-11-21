// Compiled by ClojureScript 1.10.773 {}
goog.provide('integraph.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('cljsjs.d3');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/integraph/core.cljs. Go ahead and edit it and see reloading in action.");
if((typeof integraph !== 'undefined') && (typeof integraph.core !== 'undefined') && (typeof integraph.core.app_state !== 'undefined')){
} else {
integraph.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"node1",new cljs.core.Keyword(null,"label","label",1718410804),"a"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"node2",new cljs.core.Keyword(null,"label","label",1718410804),"b"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"node3",new cljs.core.Keyword(null,"label","label",1718410804),"c"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"node4",new cljs.core.Keyword(null,"label","label",1718410804),"d"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"node5",new cljs.core.Keyword(null,"label","label",1718410804),"e"], null)], null),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),"node1",new cljs.core.Keyword(null,"target","target",253001721),"node2"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),"node4",new cljs.core.Keyword(null,"target","target",253001721),"node5"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),"node5",new cljs.core.Keyword(null,"target","target",253001721),"node3"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),"node5",new cljs.core.Keyword(null,"target","target",253001721),"node1"], null)], null)], null));
}
integraph.core.hello_world = (function integraph$core$hello_world(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,integraph.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Edit this and watch it change! omg wow deeeeso dsscool yeah"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svag","svag",1189035983),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"viz",new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"height","height",1025178622),(300)], null)], null)], null);
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [integraph.core.hello_world], null),document.getElementById("app"));
integraph.core.on_js_reload = (function integraph$core$on_js_reload(){
return document.getElementById("viz");
});

//# sourceMappingURL=core.js.map?rel=1732161403053
