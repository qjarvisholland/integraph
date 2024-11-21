// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28701){
var map__28702 = p__28701;
var map__28702__$1 = (((((!((map__28702 == null))))?(((((map__28702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28702):map__28702);
var m = map__28702__$1;
var n = cljs.core.get.call(null,map__28702__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28702__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28704_28736 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28705_28737 = null;
var count__28706_28738 = (0);
var i__28707_28739 = (0);
while(true){
if((i__28707_28739 < count__28706_28738)){
var f_28740 = cljs.core._nth.call(null,chunk__28705_28737,i__28707_28739);
cljs.core.println.call(null,"  ",f_28740);


var G__28741 = seq__28704_28736;
var G__28742 = chunk__28705_28737;
var G__28743 = count__28706_28738;
var G__28744 = (i__28707_28739 + (1));
seq__28704_28736 = G__28741;
chunk__28705_28737 = G__28742;
count__28706_28738 = G__28743;
i__28707_28739 = G__28744;
continue;
} else {
var temp__5720__auto___28745 = cljs.core.seq.call(null,seq__28704_28736);
if(temp__5720__auto___28745){
var seq__28704_28746__$1 = temp__5720__auto___28745;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28704_28746__$1)){
var c__4556__auto___28747 = cljs.core.chunk_first.call(null,seq__28704_28746__$1);
var G__28748 = cljs.core.chunk_rest.call(null,seq__28704_28746__$1);
var G__28749 = c__4556__auto___28747;
var G__28750 = cljs.core.count.call(null,c__4556__auto___28747);
var G__28751 = (0);
seq__28704_28736 = G__28748;
chunk__28705_28737 = G__28749;
count__28706_28738 = G__28750;
i__28707_28739 = G__28751;
continue;
} else {
var f_28752 = cljs.core.first.call(null,seq__28704_28746__$1);
cljs.core.println.call(null,"  ",f_28752);


var G__28753 = cljs.core.next.call(null,seq__28704_28746__$1);
var G__28754 = null;
var G__28755 = (0);
var G__28756 = (0);
seq__28704_28736 = G__28753;
chunk__28705_28737 = G__28754;
count__28706_28738 = G__28755;
i__28707_28739 = G__28756;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28757 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28757);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28757)))?cljs.core.second.call(null,arglists_28757):arglists_28757));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28708_28758 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28709_28759 = null;
var count__28710_28760 = (0);
var i__28711_28761 = (0);
while(true){
if((i__28711_28761 < count__28710_28760)){
var vec__28722_28762 = cljs.core._nth.call(null,chunk__28709_28759,i__28711_28761);
var name_28763 = cljs.core.nth.call(null,vec__28722_28762,(0),null);
var map__28725_28764 = cljs.core.nth.call(null,vec__28722_28762,(1),null);
var map__28725_28765__$1 = (((((!((map__28725_28764 == null))))?(((((map__28725_28764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28725_28764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28725_28764):map__28725_28764);
var doc_28766 = cljs.core.get.call(null,map__28725_28765__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28767 = cljs.core.get.call(null,map__28725_28765__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28763);

cljs.core.println.call(null," ",arglists_28767);

if(cljs.core.truth_(doc_28766)){
cljs.core.println.call(null," ",doc_28766);
} else {
}


var G__28768 = seq__28708_28758;
var G__28769 = chunk__28709_28759;
var G__28770 = count__28710_28760;
var G__28771 = (i__28711_28761 + (1));
seq__28708_28758 = G__28768;
chunk__28709_28759 = G__28769;
count__28710_28760 = G__28770;
i__28711_28761 = G__28771;
continue;
} else {
var temp__5720__auto___28772 = cljs.core.seq.call(null,seq__28708_28758);
if(temp__5720__auto___28772){
var seq__28708_28773__$1 = temp__5720__auto___28772;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28708_28773__$1)){
var c__4556__auto___28774 = cljs.core.chunk_first.call(null,seq__28708_28773__$1);
var G__28775 = cljs.core.chunk_rest.call(null,seq__28708_28773__$1);
var G__28776 = c__4556__auto___28774;
var G__28777 = cljs.core.count.call(null,c__4556__auto___28774);
var G__28778 = (0);
seq__28708_28758 = G__28775;
chunk__28709_28759 = G__28776;
count__28710_28760 = G__28777;
i__28711_28761 = G__28778;
continue;
} else {
var vec__28727_28779 = cljs.core.first.call(null,seq__28708_28773__$1);
var name_28780 = cljs.core.nth.call(null,vec__28727_28779,(0),null);
var map__28730_28781 = cljs.core.nth.call(null,vec__28727_28779,(1),null);
var map__28730_28782__$1 = (((((!((map__28730_28781 == null))))?(((((map__28730_28781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28730_28781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28730_28781):map__28730_28781);
var doc_28783 = cljs.core.get.call(null,map__28730_28782__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28784 = cljs.core.get.call(null,map__28730_28782__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28780);

cljs.core.println.call(null," ",arglists_28784);

if(cljs.core.truth_(doc_28783)){
cljs.core.println.call(null," ",doc_28783);
} else {
}


var G__28785 = cljs.core.next.call(null,seq__28708_28773__$1);
var G__28786 = null;
var G__28787 = (0);
var G__28788 = (0);
seq__28708_28758 = G__28785;
chunk__28709_28759 = G__28786;
count__28710_28760 = G__28787;
i__28711_28761 = G__28788;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__28732 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28733 = null;
var count__28734 = (0);
var i__28735 = (0);
while(true){
if((i__28735 < count__28734)){
var role = cljs.core._nth.call(null,chunk__28733,i__28735);
var temp__5720__auto___28789__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28789__$1)){
var spec_28790 = temp__5720__auto___28789__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28790));
} else {
}


var G__28791 = seq__28732;
var G__28792 = chunk__28733;
var G__28793 = count__28734;
var G__28794 = (i__28735 + (1));
seq__28732 = G__28791;
chunk__28733 = G__28792;
count__28734 = G__28793;
i__28735 = G__28794;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__28732);
if(temp__5720__auto____$1){
var seq__28732__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28732__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28732__$1);
var G__28795 = cljs.core.chunk_rest.call(null,seq__28732__$1);
var G__28796 = c__4556__auto__;
var G__28797 = cljs.core.count.call(null,c__4556__auto__);
var G__28798 = (0);
seq__28732 = G__28795;
chunk__28733 = G__28796;
count__28734 = G__28797;
i__28735 = G__28798;
continue;
} else {
var role = cljs.core.first.call(null,seq__28732__$1);
var temp__5720__auto___28799__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28799__$2)){
var spec_28800 = temp__5720__auto___28799__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28800));
} else {
}


var G__28801 = cljs.core.next.call(null,seq__28732__$1);
var G__28802 = null;
var G__28803 = (0);
var G__28804 = (0);
seq__28732 = G__28801;
chunk__28733 = G__28802;
count__28734 = G__28803;
i__28735 = G__28804;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__28805 = cljs.core.conj.call(null,via,t);
var G__28806 = cljs.core.ex_cause.call(null,t);
via = G__28805;
t = G__28806;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__28809 = datafied_throwable;
var map__28809__$1 = (((((!((map__28809 == null))))?(((((map__28809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28809):map__28809);
var via = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28810 = cljs.core.last.call(null,via);
var map__28810__$1 = (((((!((map__28810 == null))))?(((((map__28810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28810):map__28810);
var type = cljs.core.get.call(null,map__28810__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__28810__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__28810__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28811 = data;
var map__28811__$1 = (((((!((map__28811 == null))))?(((((map__28811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28811):map__28811);
var problems = cljs.core.get.call(null,map__28811__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__28811__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__28811__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28812 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__28812__$1 = (((((!((map__28812 == null))))?(((((map__28812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28812):map__28812);
var top_data = map__28812__$1;
var source = cljs.core.get.call(null,map__28812__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__28817 = phase;
var G__28817__$1 = (((G__28817 instanceof cljs.core.Keyword))?G__28817.fqn:null);
switch (G__28817__$1) {
case "read-source":
var map__28818 = data;
var map__28818__$1 = (((((!((map__28818 == null))))?(((((map__28818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28818):map__28818);
var line = cljs.core.get.call(null,map__28818__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28818__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28820 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__28820__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28820,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28820);
var G__28820__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28820__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28820__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28820__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28820__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28821 = top_data;
var G__28821__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28821,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28821);
var G__28821__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28821__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28821__$1);
var G__28821__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28821__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28821__$2);
var G__28821__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28821__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28821__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28821__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28821__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28822 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28822,(0),null);
var method = cljs.core.nth.call(null,vec__28822,(1),null);
var file = cljs.core.nth.call(null,vec__28822,(2),null);
var line = cljs.core.nth.call(null,vec__28822,(3),null);
var G__28825 = top_data;
var G__28825__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__28825,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28825);
var G__28825__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__28825__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28825__$1);
var G__28825__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__28825__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28825__$2);
var G__28825__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28825__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28825__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28825__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28825__$4;
}

break;
case "execution":
var vec__28826 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28826,(0),null);
var method = cljs.core.nth.call(null,vec__28826,(1),null);
var file = cljs.core.nth.call(null,vec__28826,(2),null);
var line = cljs.core.nth.call(null,vec__28826,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__28808_SHARP_){
var or__4126__auto__ = (p1__28808_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__28808_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__28829 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28829__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__28829,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28829);
var G__28829__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28829__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28829__$1);
var G__28829__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__28829__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28829__$2);
var G__28829__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__28829__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28829__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28829__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28829__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28817__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28833){
var map__28834 = p__28833;
var map__28834__$1 = (((((!((map__28834 == null))))?(((((map__28834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28834):map__28834);
var triage_data = map__28834__$1;
var phase = cljs.core.get.call(null,map__28834__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__28834__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__28834__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28834__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__28834__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__28834__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__28834__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__28834__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__28836 = phase;
var G__28836__$1 = (((G__28836 instanceof cljs.core.Keyword))?G__28836.fqn:null);
switch (G__28836__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28837_28846 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28838_28847 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28839_28848 = true;
var _STAR_print_fn_STAR__temp_val__28840_28849 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28839_28848);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28840_28849);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__28831_SHARP_){
return cljs.core.dissoc.call(null,p1__28831_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28838_28847);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28837_28846);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28841_28850 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28842_28851 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28843_28852 = true;
var _STAR_print_fn_STAR__temp_val__28844_28853 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28843_28852);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28844_28853);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__28832_SHARP_){
return cljs.core.dissoc.call(null,p1__28832_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28842_28851);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28841_28850);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28836__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1731626418561
