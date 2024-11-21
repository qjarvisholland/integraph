// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e29048){if((e29048 instanceof Error)){
var e = e29048;
return "Error: Unable to stringify";
} else {
throw e29048;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29051 = arguments.length;
switch (G__29051) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29049_SHARP_){
if(typeof p1__29049_SHARP_ === 'string'){
return p1__29049_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29049_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29054 = arguments.length;
var i__4737__auto___29055 = (0);
while(true){
if((i__4737__auto___29055 < len__4736__auto___29054)){
args__4742__auto__.push((arguments[i__4737__auto___29055]));

var G__29056 = (i__4737__auto___29055 + (1));
i__4737__auto___29055 = G__29056;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29053){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29053));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29058 = arguments.length;
var i__4737__auto___29059 = (0);
while(true){
if((i__4737__auto___29059 < len__4736__auto___29058)){
args__4742__auto__.push((arguments[i__4737__auto___29059]));

var G__29060 = (i__4737__auto___29059 + (1));
i__4737__auto___29059 = G__29060;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29057){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29057));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29061){
var map__29062 = p__29061;
var map__29062__$1 = (((((!((map__29062 == null))))?(((((map__29062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29062):map__29062);
var message = cljs.core.get.call(null,map__29062__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29062__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23360__auto___29141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_29113){
var state_val_29114 = (state_29113[(1)]);
if((state_val_29114 === (7))){
var inst_29109 = (state_29113[(2)]);
var state_29113__$1 = state_29113;
var statearr_29115_29142 = state_29113__$1;
(statearr_29115_29142[(2)] = inst_29109);

(statearr_29115_29142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (1))){
var state_29113__$1 = state_29113;
var statearr_29116_29143 = state_29113__$1;
(statearr_29116_29143[(2)] = null);

(statearr_29116_29143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (4))){
var inst_29066 = (state_29113[(7)]);
var inst_29066__$1 = (state_29113[(2)]);
var state_29113__$1 = (function (){var statearr_29117 = state_29113;
(statearr_29117[(7)] = inst_29066__$1);

return statearr_29117;
})();
if(cljs.core.truth_(inst_29066__$1)){
var statearr_29118_29144 = state_29113__$1;
(statearr_29118_29144[(1)] = (5));

} else {
var statearr_29119_29145 = state_29113__$1;
(statearr_29119_29145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (15))){
var inst_29073 = (state_29113[(8)]);
var inst_29088 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29073);
var inst_29089 = cljs.core.first.call(null,inst_29088);
var inst_29090 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29089);
var inst_29091 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29090)].join('');
var inst_29092 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29091);
var state_29113__$1 = state_29113;
var statearr_29120_29146 = state_29113__$1;
(statearr_29120_29146[(2)] = inst_29092);

(statearr_29120_29146[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (13))){
var inst_29097 = (state_29113[(2)]);
var state_29113__$1 = state_29113;
var statearr_29121_29147 = state_29113__$1;
(statearr_29121_29147[(2)] = inst_29097);

(statearr_29121_29147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (6))){
var state_29113__$1 = state_29113;
var statearr_29122_29148 = state_29113__$1;
(statearr_29122_29148[(2)] = null);

(statearr_29122_29148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (17))){
var inst_29095 = (state_29113[(2)]);
var state_29113__$1 = state_29113;
var statearr_29123_29149 = state_29113__$1;
(statearr_29123_29149[(2)] = inst_29095);

(statearr_29123_29149[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (3))){
var inst_29111 = (state_29113[(2)]);
var state_29113__$1 = state_29113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29113__$1,inst_29111);
} else {
if((state_val_29114 === (12))){
var inst_29072 = (state_29113[(9)]);
var inst_29086 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29072,opts);
var state_29113__$1 = state_29113;
if(inst_29086){
var statearr_29124_29150 = state_29113__$1;
(statearr_29124_29150[(1)] = (15));

} else {
var statearr_29125_29151 = state_29113__$1;
(statearr_29125_29151[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (2))){
var state_29113__$1 = state_29113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29113__$1,(4),ch);
} else {
if((state_val_29114 === (11))){
var inst_29073 = (state_29113[(8)]);
var inst_29078 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29079 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29073);
var inst_29080 = cljs.core.async.timeout.call(null,(1000));
var inst_29081 = [inst_29079,inst_29080];
var inst_29082 = (new cljs.core.PersistentVector(null,2,(5),inst_29078,inst_29081,null));
var state_29113__$1 = state_29113;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29113__$1,(14),inst_29082);
} else {
if((state_val_29114 === (9))){
var inst_29073 = (state_29113[(8)]);
var inst_29099 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29100 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29073);
var inst_29101 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29100);
var inst_29102 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29101)].join('');
var inst_29103 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29102);
var state_29113__$1 = (function (){var statearr_29126 = state_29113;
(statearr_29126[(10)] = inst_29099);

return statearr_29126;
})();
var statearr_29127_29152 = state_29113__$1;
(statearr_29127_29152[(2)] = inst_29103);

(statearr_29127_29152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (5))){
var inst_29066 = (state_29113[(7)]);
var inst_29068 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29069 = (new cljs.core.PersistentArrayMap(null,2,inst_29068,null));
var inst_29070 = (new cljs.core.PersistentHashSet(null,inst_29069,null));
var inst_29071 = figwheel.client.focus_msgs.call(null,inst_29070,inst_29066);
var inst_29072 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29071);
var inst_29073 = cljs.core.first.call(null,inst_29071);
var inst_29074 = figwheel.client.autoload_QMARK_.call(null);
var state_29113__$1 = (function (){var statearr_29128 = state_29113;
(statearr_29128[(8)] = inst_29073);

(statearr_29128[(9)] = inst_29072);

return statearr_29128;
})();
if(cljs.core.truth_(inst_29074)){
var statearr_29129_29153 = state_29113__$1;
(statearr_29129_29153[(1)] = (8));

} else {
var statearr_29130_29154 = state_29113__$1;
(statearr_29130_29154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (14))){
var inst_29084 = (state_29113[(2)]);
var state_29113__$1 = state_29113;
var statearr_29131_29155 = state_29113__$1;
(statearr_29131_29155[(2)] = inst_29084);

(statearr_29131_29155[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (16))){
var state_29113__$1 = state_29113;
var statearr_29132_29156 = state_29113__$1;
(statearr_29132_29156[(2)] = null);

(statearr_29132_29156[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (10))){
var inst_29105 = (state_29113[(2)]);
var state_29113__$1 = (function (){var statearr_29133 = state_29113;
(statearr_29133[(11)] = inst_29105);

return statearr_29133;
})();
var statearr_29134_29157 = state_29113__$1;
(statearr_29134_29157[(2)] = null);

(statearr_29134_29157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (8))){
var inst_29072 = (state_29113[(9)]);
var inst_29076 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29072,opts);
var state_29113__$1 = state_29113;
if(cljs.core.truth_(inst_29076)){
var statearr_29135_29158 = state_29113__$1;
(statearr_29135_29158[(1)] = (11));

} else {
var statearr_29136_29159 = state_29113__$1;
(statearr_29136_29159[(1)] = (12));

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
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23266__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23266__auto____0 = (function (){
var statearr_29137 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29137[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23266__auto__);

(statearr_29137[(1)] = (1));

return statearr_29137;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23266__auto____1 = (function (state_29113){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_29113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e29138){if((e29138 instanceof Object)){
var ex__23269__auto__ = e29138;
var statearr_29139_29160 = state_29113;
(statearr_29139_29160[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29161 = state_29113;
state_29113 = G__29161;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23266__auto__ = function(state_29113){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23266__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23266__auto____1.call(this,state_29113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23266__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23266__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_29140 = f__23361__auto__.call(null);
(statearr_29140[(6)] = c__23360__auto___29141);

return statearr_29140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29162_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29162_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29168 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29164 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29165 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29166 = true;
var _STAR_print_fn_STAR__temp_val__29167 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29166);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29167);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29165);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29164);
}}catch (e29163){if((e29163 instanceof Error)){
var e = e29163;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29168], null));
} else {
var e = e29163;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29169){
var map__29170 = p__29169;
var map__29170__$1 = (((((!((map__29170 == null))))?(((((map__29170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29170):map__29170);
var opts = map__29170__$1;
var build_id = cljs.core.get.call(null,map__29170__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__29172){
var vec__29173 = p__29172;
var seq__29174 = cljs.core.seq.call(null,vec__29173);
var first__29175 = cljs.core.first.call(null,seq__29174);
var seq__29174__$1 = cljs.core.next.call(null,seq__29174);
var map__29176 = first__29175;
var map__29176__$1 = (((((!((map__29176 == null))))?(((((map__29176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29176):map__29176);
var msg = map__29176__$1;
var msg_name = cljs.core.get.call(null,map__29176__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29174__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29178){
var vec__29179 = p__29178;
var seq__29180 = cljs.core.seq.call(null,vec__29179);
var first__29181 = cljs.core.first.call(null,seq__29180);
var seq__29180__$1 = cljs.core.next.call(null,seq__29180);
var map__29182 = first__29181;
var map__29182__$1 = (((((!((map__29182 == null))))?(((((map__29182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29182):map__29182);
var msg = map__29182__$1;
var msg_name = cljs.core.get.call(null,map__29182__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29180__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29184){
var map__29185 = p__29184;
var map__29185__$1 = (((((!((map__29185 == null))))?(((((map__29185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29185):map__29185);
var on_compile_warning = cljs.core.get.call(null,map__29185__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29185__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__29187){
var vec__29188 = p__29187;
var seq__29189 = cljs.core.seq.call(null,vec__29188);
var first__29190 = cljs.core.first.call(null,seq__29189);
var seq__29189__$1 = cljs.core.next.call(null,seq__29189);
var map__29191 = first__29190;
var map__29191__$1 = (((((!((map__29191 == null))))?(((((map__29191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29191):map__29191);
var msg = map__29191__$1;
var msg_name = cljs.core.get.call(null,map__29191__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29189__$1;
var pred__29193 = cljs.core._EQ_;
var expr__29194 = msg_name;
if(cljs.core.truth_(pred__29193.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29194))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29193.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29194))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23360__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_29283){
var state_val_29284 = (state_29283[(1)]);
if((state_val_29284 === (7))){
var inst_29203 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
if(cljs.core.truth_(inst_29203)){
var statearr_29285_29332 = state_29283__$1;
(statearr_29285_29332[(1)] = (8));

} else {
var statearr_29286_29333 = state_29283__$1;
(statearr_29286_29333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (20))){
var inst_29277 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29287_29334 = state_29283__$1;
(statearr_29287_29334[(2)] = inst_29277);

(statearr_29287_29334[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (27))){
var inst_29273 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29288_29335 = state_29283__$1;
(statearr_29288_29335[(2)] = inst_29273);

(statearr_29288_29335[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (1))){
var inst_29196 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29283__$1 = state_29283;
if(cljs.core.truth_(inst_29196)){
var statearr_29289_29336 = state_29283__$1;
(statearr_29289_29336[(1)] = (2));

} else {
var statearr_29290_29337 = state_29283__$1;
(statearr_29290_29337[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (24))){
var inst_29275 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29291_29338 = state_29283__$1;
(statearr_29291_29338[(2)] = inst_29275);

(statearr_29291_29338[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (4))){
var inst_29281 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29283__$1,inst_29281);
} else {
if((state_val_29284 === (15))){
var inst_29279 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29292_29339 = state_29283__$1;
(statearr_29292_29339[(2)] = inst_29279);

(statearr_29292_29339[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (21))){
var inst_29232 = (state_29283[(2)]);
var inst_29233 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29234 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29233);
var state_29283__$1 = (function (){var statearr_29293 = state_29283;
(statearr_29293[(7)] = inst_29232);

return statearr_29293;
})();
var statearr_29294_29340 = state_29283__$1;
(statearr_29294_29340[(2)] = inst_29234);

(statearr_29294_29340[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (31))){
var inst_29262 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29283__$1 = state_29283;
if(inst_29262){
var statearr_29295_29341 = state_29283__$1;
(statearr_29295_29341[(1)] = (34));

} else {
var statearr_29296_29342 = state_29283__$1;
(statearr_29296_29342[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (32))){
var inst_29271 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29297_29343 = state_29283__$1;
(statearr_29297_29343[(2)] = inst_29271);

(statearr_29297_29343[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (33))){
var inst_29258 = (state_29283[(2)]);
var inst_29259 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29260 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29259);
var state_29283__$1 = (function (){var statearr_29298 = state_29283;
(statearr_29298[(8)] = inst_29258);

return statearr_29298;
})();
var statearr_29299_29344 = state_29283__$1;
(statearr_29299_29344[(2)] = inst_29260);

(statearr_29299_29344[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (13))){
var inst_29217 = figwheel.client.heads_up.clear.call(null);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29283__$1,(16),inst_29217);
} else {
if((state_val_29284 === (22))){
var inst_29238 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29239 = figwheel.client.heads_up.append_warning_message.call(null,inst_29238);
var state_29283__$1 = state_29283;
var statearr_29300_29345 = state_29283__$1;
(statearr_29300_29345[(2)] = inst_29239);

(statearr_29300_29345[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (36))){
var inst_29269 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29301_29346 = state_29283__$1;
(statearr_29301_29346[(2)] = inst_29269);

(statearr_29301_29346[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (29))){
var inst_29249 = (state_29283[(2)]);
var inst_29250 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29251 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29250);
var state_29283__$1 = (function (){var statearr_29302 = state_29283;
(statearr_29302[(9)] = inst_29249);

return statearr_29302;
})();
var statearr_29303_29347 = state_29283__$1;
(statearr_29303_29347[(2)] = inst_29251);

(statearr_29303_29347[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (6))){
var inst_29198 = (state_29283[(10)]);
var state_29283__$1 = state_29283;
var statearr_29304_29348 = state_29283__$1;
(statearr_29304_29348[(2)] = inst_29198);

(statearr_29304_29348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (28))){
var inst_29245 = (state_29283[(2)]);
var inst_29246 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29247 = figwheel.client.heads_up.display_warning.call(null,inst_29246);
var state_29283__$1 = (function (){var statearr_29305 = state_29283;
(statearr_29305[(11)] = inst_29245);

return statearr_29305;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29283__$1,(29),inst_29247);
} else {
if((state_val_29284 === (25))){
var inst_29243 = figwheel.client.heads_up.clear.call(null);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29283__$1,(28),inst_29243);
} else {
if((state_val_29284 === (34))){
var inst_29264 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29283__$1,(37),inst_29264);
} else {
if((state_val_29284 === (17))){
var inst_29223 = (state_29283[(2)]);
var inst_29224 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29225 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29224);
var state_29283__$1 = (function (){var statearr_29306 = state_29283;
(statearr_29306[(12)] = inst_29223);

return statearr_29306;
})();
var statearr_29307_29349 = state_29283__$1;
(statearr_29307_29349[(2)] = inst_29225);

(statearr_29307_29349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (3))){
var inst_29215 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29283__$1 = state_29283;
if(inst_29215){
var statearr_29308_29350 = state_29283__$1;
(statearr_29308_29350[(1)] = (13));

} else {
var statearr_29309_29351 = state_29283__$1;
(statearr_29309_29351[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (12))){
var inst_29211 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29310_29352 = state_29283__$1;
(statearr_29310_29352[(2)] = inst_29211);

(statearr_29310_29352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (2))){
var inst_29198 = (state_29283[(10)]);
var inst_29198__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29283__$1 = (function (){var statearr_29311 = state_29283;
(statearr_29311[(10)] = inst_29198__$1);

return statearr_29311;
})();
if(cljs.core.truth_(inst_29198__$1)){
var statearr_29312_29353 = state_29283__$1;
(statearr_29312_29353[(1)] = (5));

} else {
var statearr_29313_29354 = state_29283__$1;
(statearr_29313_29354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (23))){
var inst_29241 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29283__$1 = state_29283;
if(inst_29241){
var statearr_29314_29355 = state_29283__$1;
(statearr_29314_29355[(1)] = (25));

} else {
var statearr_29315_29356 = state_29283__$1;
(statearr_29315_29356[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (35))){
var state_29283__$1 = state_29283;
var statearr_29316_29357 = state_29283__$1;
(statearr_29316_29357[(2)] = null);

(statearr_29316_29357[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (19))){
var inst_29236 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29283__$1 = state_29283;
if(inst_29236){
var statearr_29317_29358 = state_29283__$1;
(statearr_29317_29358[(1)] = (22));

} else {
var statearr_29318_29359 = state_29283__$1;
(statearr_29318_29359[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (11))){
var inst_29207 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29319_29360 = state_29283__$1;
(statearr_29319_29360[(2)] = inst_29207);

(statearr_29319_29360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (9))){
var inst_29209 = figwheel.client.heads_up.clear.call(null);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29283__$1,(12),inst_29209);
} else {
if((state_val_29284 === (5))){
var inst_29200 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29283__$1 = state_29283;
var statearr_29320_29361 = state_29283__$1;
(statearr_29320_29361[(2)] = inst_29200);

(statearr_29320_29361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (14))){
var inst_29227 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29283__$1 = state_29283;
if(inst_29227){
var statearr_29321_29362 = state_29283__$1;
(statearr_29321_29362[(1)] = (18));

} else {
var statearr_29322_29363 = state_29283__$1;
(statearr_29322_29363[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (26))){
var inst_29253 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29283__$1 = state_29283;
if(inst_29253){
var statearr_29323_29364 = state_29283__$1;
(statearr_29323_29364[(1)] = (30));

} else {
var statearr_29324_29365 = state_29283__$1;
(statearr_29324_29365[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (16))){
var inst_29219 = (state_29283[(2)]);
var inst_29220 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29221 = figwheel.client.heads_up.display_exception.call(null,inst_29220);
var state_29283__$1 = (function (){var statearr_29325 = state_29283;
(statearr_29325[(13)] = inst_29219);

return statearr_29325;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29283__$1,(17),inst_29221);
} else {
if((state_val_29284 === (30))){
var inst_29255 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29256 = figwheel.client.heads_up.display_warning.call(null,inst_29255);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29283__$1,(33),inst_29256);
} else {
if((state_val_29284 === (10))){
var inst_29213 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29326_29366 = state_29283__$1;
(statearr_29326_29366[(2)] = inst_29213);

(statearr_29326_29366[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (18))){
var inst_29229 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29230 = figwheel.client.heads_up.display_exception.call(null,inst_29229);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29283__$1,(21),inst_29230);
} else {
if((state_val_29284 === (37))){
var inst_29266 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29327_29367 = state_29283__$1;
(statearr_29327_29367[(2)] = inst_29266);

(statearr_29327_29367[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (8))){
var inst_29205 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29283__$1,(11),inst_29205);
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
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23266__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23266__auto____0 = (function (){
var statearr_29328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29328[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23266__auto__);

(statearr_29328[(1)] = (1));

return statearr_29328;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23266__auto____1 = (function (state_29283){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_29283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e29329){if((e29329 instanceof Object)){
var ex__23269__auto__ = e29329;
var statearr_29330_29368 = state_29283;
(statearr_29330_29368[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29369 = state_29283;
state_29283 = G__29369;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23266__auto__ = function(state_29283){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23266__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23266__auto____1.call(this,state_29283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23266__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23266__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_29331 = f__23361__auto__.call(null);
(statearr_29331[(6)] = c__23360__auto__);

return statearr_29331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));

return c__23360__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23360__auto___29398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_29384){
var state_val_29385 = (state_29384[(1)]);
if((state_val_29385 === (1))){
var state_29384__$1 = state_29384;
var statearr_29386_29399 = state_29384__$1;
(statearr_29386_29399[(2)] = null);

(statearr_29386_29399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (2))){
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29384__$1,(4),ch);
} else {
if((state_val_29385 === (3))){
var inst_29382 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29384__$1,inst_29382);
} else {
if((state_val_29385 === (4))){
var inst_29372 = (state_29384[(7)]);
var inst_29372__$1 = (state_29384[(2)]);
var state_29384__$1 = (function (){var statearr_29387 = state_29384;
(statearr_29387[(7)] = inst_29372__$1);

return statearr_29387;
})();
if(cljs.core.truth_(inst_29372__$1)){
var statearr_29388_29400 = state_29384__$1;
(statearr_29388_29400[(1)] = (5));

} else {
var statearr_29389_29401 = state_29384__$1;
(statearr_29389_29401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (5))){
var inst_29372 = (state_29384[(7)]);
var inst_29374 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29372);
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29384__$1,(8),inst_29374);
} else {
if((state_val_29385 === (6))){
var state_29384__$1 = state_29384;
var statearr_29390_29402 = state_29384__$1;
(statearr_29390_29402[(2)] = null);

(statearr_29390_29402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (7))){
var inst_29380 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29391_29403 = state_29384__$1;
(statearr_29391_29403[(2)] = inst_29380);

(statearr_29391_29403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (8))){
var inst_29376 = (state_29384[(2)]);
var state_29384__$1 = (function (){var statearr_29392 = state_29384;
(statearr_29392[(8)] = inst_29376);

return statearr_29392;
})();
var statearr_29393_29404 = state_29384__$1;
(statearr_29393_29404[(2)] = null);

(statearr_29393_29404[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23266__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23266__auto____0 = (function (){
var statearr_29394 = [null,null,null,null,null,null,null,null,null];
(statearr_29394[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23266__auto__);

(statearr_29394[(1)] = (1));

return statearr_29394;
});
var figwheel$client$heads_up_plugin_$_state_machine__23266__auto____1 = (function (state_29384){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_29384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e29395){if((e29395 instanceof Object)){
var ex__23269__auto__ = e29395;
var statearr_29396_29405 = state_29384;
(statearr_29396_29405[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29406 = state_29384;
state_29384 = G__29406;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23266__auto__ = function(state_29384){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23266__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23266__auto____1.call(this,state_29384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23266__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23266__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_29397 = f__23361__auto__.call(null);
(statearr_29397[(6)] = c__23360__auto___29398);

return statearr_29397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23360__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_29412){
var state_val_29413 = (state_29412[(1)]);
if((state_val_29413 === (1))){
var inst_29407 = cljs.core.async.timeout.call(null,(3000));
var state_29412__$1 = state_29412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29412__$1,(2),inst_29407);
} else {
if((state_val_29413 === (2))){
var inst_29409 = (state_29412[(2)]);
var inst_29410 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29412__$1 = (function (){var statearr_29414 = state_29412;
(statearr_29414[(7)] = inst_29409);

return statearr_29414;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29412__$1,inst_29410);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23266__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23266__auto____0 = (function (){
var statearr_29415 = [null,null,null,null,null,null,null,null];
(statearr_29415[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23266__auto__);

(statearr_29415[(1)] = (1));

return statearr_29415;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23266__auto____1 = (function (state_29412){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_29412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e29416){if((e29416 instanceof Object)){
var ex__23269__auto__ = e29416;
var statearr_29417_29419 = state_29412;
(statearr_29417_29419[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29420 = state_29412;
state_29412 = G__29420;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23266__auto__ = function(state_29412){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23266__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23266__auto____1.call(this,state_29412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23266__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23266__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_29418 = f__23361__auto__.call(null);
(statearr_29418[(6)] = c__23360__auto__);

return statearr_29418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));

return c__23360__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23360__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_29427){
var state_val_29428 = (state_29427[(1)]);
if((state_val_29428 === (1))){
var inst_29421 = cljs.core.async.timeout.call(null,(2000));
var state_29427__$1 = state_29427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29427__$1,(2),inst_29421);
} else {
if((state_val_29428 === (2))){
var inst_29423 = (state_29427[(2)]);
var inst_29424 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29425 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29424);
var state_29427__$1 = (function (){var statearr_29429 = state_29427;
(statearr_29429[(7)] = inst_29423);

return statearr_29429;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29427__$1,inst_29425);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23266__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23266__auto____0 = (function (){
var statearr_29430 = [null,null,null,null,null,null,null,null];
(statearr_29430[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23266__auto__);

(statearr_29430[(1)] = (1));

return statearr_29430;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23266__auto____1 = (function (state_29427){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_29427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e29431){if((e29431 instanceof Object)){
var ex__23269__auto__ = e29431;
var statearr_29432_29434 = state_29427;
(statearr_29432_29434[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29435 = state_29427;
state_29427 = G__29435;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23266__auto__ = function(state_29427){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23266__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23266__auto____1.call(this,state_29427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23266__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23266__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_29433 = f__23361__auto__.call(null);
(statearr_29433[(6)] = c__23360__auto__);

return statearr_29433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));

return c__23360__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29436){
var map__29437 = p__29436;
var map__29437__$1 = (((((!((map__29437 == null))))?(((((map__29437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29437):map__29437);
var file = cljs.core.get.call(null,map__29437__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29437__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29437__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29439 = "";
var G__29439__$1 = (cljs.core.truth_(file)?[G__29439,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29439);
var G__29439__$2 = (cljs.core.truth_(line)?[G__29439__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29439__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__29439__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29439__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29440){
var map__29441 = p__29440;
var map__29441__$1 = (((((!((map__29441 == null))))?(((((map__29441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29441):map__29441);
var ed = map__29441__$1;
var exception_data = cljs.core.get.call(null,map__29441__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29441__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_29444 = (function (){var G__29443 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29443)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__29443;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_29444);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29445){
var map__29446 = p__29445;
var map__29446__$1 = (((((!((map__29446 == null))))?(((((map__29446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29446):map__29446);
var w = map__29446__$1;
var message = cljs.core.get.call(null,map__29446__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29448 = cljs.core.seq.call(null,plugins);
var chunk__29449 = null;
var count__29450 = (0);
var i__29451 = (0);
while(true){
if((i__29451 < count__29450)){
var vec__29458 = cljs.core._nth.call(null,chunk__29449,i__29451);
var k = cljs.core.nth.call(null,vec__29458,(0),null);
var plugin = cljs.core.nth.call(null,vec__29458,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29464 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29448,chunk__29449,count__29450,i__29451,pl_29464,vec__29458,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29464.call(null,msg_hist);
});})(seq__29448,chunk__29449,count__29450,i__29451,pl_29464,vec__29458,k,plugin))
);
} else {
}


var G__29465 = seq__29448;
var G__29466 = chunk__29449;
var G__29467 = count__29450;
var G__29468 = (i__29451 + (1));
seq__29448 = G__29465;
chunk__29449 = G__29466;
count__29450 = G__29467;
i__29451 = G__29468;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29448);
if(temp__5720__auto__){
var seq__29448__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29448__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29448__$1);
var G__29469 = cljs.core.chunk_rest.call(null,seq__29448__$1);
var G__29470 = c__4556__auto__;
var G__29471 = cljs.core.count.call(null,c__4556__auto__);
var G__29472 = (0);
seq__29448 = G__29469;
chunk__29449 = G__29470;
count__29450 = G__29471;
i__29451 = G__29472;
continue;
} else {
var vec__29461 = cljs.core.first.call(null,seq__29448__$1);
var k = cljs.core.nth.call(null,vec__29461,(0),null);
var plugin = cljs.core.nth.call(null,vec__29461,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29473 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29448,chunk__29449,count__29450,i__29451,pl_29473,vec__29461,k,plugin,seq__29448__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29473.call(null,msg_hist);
});})(seq__29448,chunk__29449,count__29450,i__29451,pl_29473,vec__29461,k,plugin,seq__29448__$1,temp__5720__auto__))
);
} else {
}


var G__29474 = cljs.core.next.call(null,seq__29448__$1);
var G__29475 = null;
var G__29476 = (0);
var G__29477 = (0);
seq__29448 = G__29474;
chunk__29449 = G__29475;
count__29450 = G__29476;
i__29451 = G__29477;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__29479 = arguments.length;
switch (G__29479) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__29480_29485 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29481_29486 = null;
var count__29482_29487 = (0);
var i__29483_29488 = (0);
while(true){
if((i__29483_29488 < count__29482_29487)){
var msg_29489 = cljs.core._nth.call(null,chunk__29481_29486,i__29483_29488);
figwheel.client.socket.handle_incoming_message.call(null,msg_29489);


var G__29490 = seq__29480_29485;
var G__29491 = chunk__29481_29486;
var G__29492 = count__29482_29487;
var G__29493 = (i__29483_29488 + (1));
seq__29480_29485 = G__29490;
chunk__29481_29486 = G__29491;
count__29482_29487 = G__29492;
i__29483_29488 = G__29493;
continue;
} else {
var temp__5720__auto___29494 = cljs.core.seq.call(null,seq__29480_29485);
if(temp__5720__auto___29494){
var seq__29480_29495__$1 = temp__5720__auto___29494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29480_29495__$1)){
var c__4556__auto___29496 = cljs.core.chunk_first.call(null,seq__29480_29495__$1);
var G__29497 = cljs.core.chunk_rest.call(null,seq__29480_29495__$1);
var G__29498 = c__4556__auto___29496;
var G__29499 = cljs.core.count.call(null,c__4556__auto___29496);
var G__29500 = (0);
seq__29480_29485 = G__29497;
chunk__29481_29486 = G__29498;
count__29482_29487 = G__29499;
i__29483_29488 = G__29500;
continue;
} else {
var msg_29501 = cljs.core.first.call(null,seq__29480_29495__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29501);


var G__29502 = cljs.core.next.call(null,seq__29480_29495__$1);
var G__29503 = null;
var G__29504 = (0);
var G__29505 = (0);
seq__29480_29485 = G__29502;
chunk__29481_29486 = G__29503;
count__29482_29487 = G__29504;
i__29483_29488 = G__29505;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29510 = arguments.length;
var i__4737__auto___29511 = (0);
while(true){
if((i__4737__auto___29511 < len__4736__auto___29510)){
args__4742__auto__.push((arguments[i__4737__auto___29511]));

var G__29512 = (i__4737__auto___29511 + (1));
i__4737__auto___29511 = G__29512;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29507){
var map__29508 = p__29507;
var map__29508__$1 = (((((!((map__29508 == null))))?(((((map__29508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29508):map__29508);
var opts = map__29508__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29506){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29506));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29513){if((e29513 instanceof Error)){
var e = e29513;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29513;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__29514){
var map__29515 = p__29514;
var map__29515__$1 = (((((!((map__29515 == null))))?(((((map__29515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29515):map__29515);
var msg_name = cljs.core.get.call(null,map__29515__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1731626418743
