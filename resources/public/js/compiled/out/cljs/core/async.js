// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23420 = arguments.length;
switch (G__23420) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23421 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23421 = (function (f,blockable,meta23422){
this.f = f;
this.blockable = blockable;
this.meta23422 = meta23422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23423,meta23422__$1){
var self__ = this;
var _23423__$1 = this;
return (new cljs.core.async.t_cljs$core$async23421(self__.f,self__.blockable,meta23422__$1));
}));

(cljs.core.async.t_cljs$core$async23421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23423){
var self__ = this;
var _23423__$1 = this;
return self__.meta23422;
}));

(cljs.core.async.t_cljs$core$async23421.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23421.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23421.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async23421.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async23421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23422","meta23422",-1272345576,null)], null);
}));

(cljs.core.async.t_cljs$core$async23421.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23421");

(cljs.core.async.t_cljs$core$async23421.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async23421");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23421.
 */
cljs.core.async.__GT_t_cljs$core$async23421 = (function cljs$core$async$__GT_t_cljs$core$async23421(f__$1,blockable__$1,meta23422){
return (new cljs.core.async.t_cljs$core$async23421(f__$1,blockable__$1,meta23422));
});

}

return (new cljs.core.async.t_cljs$core$async23421(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23427 = arguments.length;
switch (G__23427) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23430 = arguments.length;
switch (G__23430) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23433 = arguments.length;
switch (G__23433) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23435 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23435);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_23435);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23437 = arguments.length;
switch (G__23437) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___23439 = n;
var x_23440 = (0);
while(true){
if((x_23440 < n__4613__auto___23439)){
(a[x_23440] = x_23440);

var G__23441 = (x_23440 + (1));
x_23440 = G__23441;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23442 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23442 = (function (flag,meta23443){
this.flag = flag;
this.meta23443 = meta23443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23444,meta23443__$1){
var self__ = this;
var _23444__$1 = this;
return (new cljs.core.async.t_cljs$core$async23442(self__.flag,meta23443__$1));
}));

(cljs.core.async.t_cljs$core$async23442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23444){
var self__ = this;
var _23444__$1 = this;
return self__.meta23443;
}));

(cljs.core.async.t_cljs$core$async23442.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23442.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async23442.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23442.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async23442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23443","meta23443",-968487286,null)], null);
}));

(cljs.core.async.t_cljs$core$async23442.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23442");

(cljs.core.async.t_cljs$core$async23442.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async23442");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23442.
 */
cljs.core.async.__GT_t_cljs$core$async23442 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23442(flag__$1,meta23443){
return (new cljs.core.async.t_cljs$core$async23442(flag__$1,meta23443));
});

}

return (new cljs.core.async.t_cljs$core$async23442(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23445 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23445 = (function (flag,cb,meta23446){
this.flag = flag;
this.cb = cb;
this.meta23446 = meta23446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23447,meta23446__$1){
var self__ = this;
var _23447__$1 = this;
return (new cljs.core.async.t_cljs$core$async23445(self__.flag,self__.cb,meta23446__$1));
}));

(cljs.core.async.t_cljs$core$async23445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23447){
var self__ = this;
var _23447__$1 = this;
return self__.meta23446;
}));

(cljs.core.async.t_cljs$core$async23445.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23445.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async23445.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23445.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async23445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23446","meta23446",-1188261893,null)], null);
}));

(cljs.core.async.t_cljs$core$async23445.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23445");

(cljs.core.async.t_cljs$core$async23445.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async23445");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23445.
 */
cljs.core.async.__GT_t_cljs$core$async23445 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23445(flag__$1,cb__$1,meta23446){
return (new cljs.core.async.t_cljs$core$async23445(flag__$1,cb__$1,meta23446));
});

}

return (new cljs.core.async.t_cljs$core$async23445(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23448_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23448_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23449_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23449_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23450 = (i + (1));
i = G__23450;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23456 = arguments.length;
var i__4737__auto___23457 = (0);
while(true){
if((i__4737__auto___23457 < len__4736__auto___23456)){
args__4742__auto__.push((arguments[i__4737__auto___23457]));

var G__23458 = (i__4737__auto___23457 + (1));
i__4737__auto___23457 = G__23458;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23453){
var map__23454 = p__23453;
var map__23454__$1 = (((((!((map__23454 == null))))?(((((map__23454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23454):map__23454);
var opts = map__23454__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23451){
var G__23452 = cljs.core.first.call(null,seq23451);
var seq23451__$1 = cljs.core.next.call(null,seq23451);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23452,seq23451__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23460 = arguments.length;
switch (G__23460) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23360__auto___23506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_23484){
var state_val_23485 = (state_23484[(1)]);
if((state_val_23485 === (7))){
var inst_23480 = (state_23484[(2)]);
var state_23484__$1 = state_23484;
var statearr_23486_23507 = state_23484__$1;
(statearr_23486_23507[(2)] = inst_23480);

(statearr_23486_23507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23485 === (1))){
var state_23484__$1 = state_23484;
var statearr_23487_23508 = state_23484__$1;
(statearr_23487_23508[(2)] = null);

(statearr_23487_23508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23485 === (4))){
var inst_23463 = (state_23484[(7)]);
var inst_23463__$1 = (state_23484[(2)]);
var inst_23464 = (inst_23463__$1 == null);
var state_23484__$1 = (function (){var statearr_23488 = state_23484;
(statearr_23488[(7)] = inst_23463__$1);

return statearr_23488;
})();
if(cljs.core.truth_(inst_23464)){
var statearr_23489_23509 = state_23484__$1;
(statearr_23489_23509[(1)] = (5));

} else {
var statearr_23490_23510 = state_23484__$1;
(statearr_23490_23510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23485 === (13))){
var state_23484__$1 = state_23484;
var statearr_23491_23511 = state_23484__$1;
(statearr_23491_23511[(2)] = null);

(statearr_23491_23511[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23485 === (6))){
var inst_23463 = (state_23484[(7)]);
var state_23484__$1 = state_23484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23484__$1,(11),to,inst_23463);
} else {
if((state_val_23485 === (3))){
var inst_23482 = (state_23484[(2)]);
var state_23484__$1 = state_23484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23484__$1,inst_23482);
} else {
if((state_val_23485 === (12))){
var state_23484__$1 = state_23484;
var statearr_23492_23512 = state_23484__$1;
(statearr_23492_23512[(2)] = null);

(statearr_23492_23512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23485 === (2))){
var state_23484__$1 = state_23484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23484__$1,(4),from);
} else {
if((state_val_23485 === (11))){
var inst_23473 = (state_23484[(2)]);
var state_23484__$1 = state_23484;
if(cljs.core.truth_(inst_23473)){
var statearr_23493_23513 = state_23484__$1;
(statearr_23493_23513[(1)] = (12));

} else {
var statearr_23494_23514 = state_23484__$1;
(statearr_23494_23514[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23485 === (9))){
var state_23484__$1 = state_23484;
var statearr_23495_23515 = state_23484__$1;
(statearr_23495_23515[(2)] = null);

(statearr_23495_23515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23485 === (5))){
var state_23484__$1 = state_23484;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23496_23516 = state_23484__$1;
(statearr_23496_23516[(1)] = (8));

} else {
var statearr_23497_23517 = state_23484__$1;
(statearr_23497_23517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23485 === (14))){
var inst_23478 = (state_23484[(2)]);
var state_23484__$1 = state_23484;
var statearr_23498_23518 = state_23484__$1;
(statearr_23498_23518[(2)] = inst_23478);

(statearr_23498_23518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23485 === (10))){
var inst_23470 = (state_23484[(2)]);
var state_23484__$1 = state_23484;
var statearr_23499_23519 = state_23484__$1;
(statearr_23499_23519[(2)] = inst_23470);

(statearr_23499_23519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23485 === (8))){
var inst_23467 = cljs.core.async.close_BANG_.call(null,to);
var state_23484__$1 = state_23484;
var statearr_23500_23520 = state_23484__$1;
(statearr_23500_23520[(2)] = inst_23467);

(statearr_23500_23520[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__23266__auto__ = null;
var cljs$core$async$state_machine__23266__auto____0 = (function (){
var statearr_23501 = [null,null,null,null,null,null,null,null];
(statearr_23501[(0)] = cljs$core$async$state_machine__23266__auto__);

(statearr_23501[(1)] = (1));

return statearr_23501;
});
var cljs$core$async$state_machine__23266__auto____1 = (function (state_23484){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_23484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e23502){if((e23502 instanceof Object)){
var ex__23269__auto__ = e23502;
var statearr_23503_23521 = state_23484;
(statearr_23503_23521[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23522 = state_23484;
state_23484 = G__23522;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
cljs$core$async$state_machine__23266__auto__ = function(state_23484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23266__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23266__auto____1.call(this,state_23484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23266__auto____0;
cljs$core$async$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23266__auto____1;
return cljs$core$async$state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_23504 = f__23361__auto__.call(null);
(statearr_23504[(6)] = c__23360__auto___23506);

return statearr_23504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__23523){
var vec__23524 = p__23523;
var v = cljs.core.nth.call(null,vec__23524,(0),null);
var p = cljs.core.nth.call(null,vec__23524,(1),null);
var job = vec__23524;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23360__auto___23695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_23531){
var state_val_23532 = (state_23531[(1)]);
if((state_val_23532 === (1))){
var state_23531__$1 = state_23531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23531__$1,(2),res,v);
} else {
if((state_val_23532 === (2))){
var inst_23528 = (state_23531[(2)]);
var inst_23529 = cljs.core.async.close_BANG_.call(null,res);
var state_23531__$1 = (function (){var statearr_23533 = state_23531;
(statearr_23533[(7)] = inst_23528);

return statearr_23533;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23531__$1,inst_23529);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____0 = (function (){
var statearr_23534 = [null,null,null,null,null,null,null,null];
(statearr_23534[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__);

(statearr_23534[(1)] = (1));

return statearr_23534;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____1 = (function (state_23531){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_23531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e23535){if((e23535 instanceof Object)){
var ex__23269__auto__ = e23535;
var statearr_23536_23696 = state_23531;
(statearr_23536_23696[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23697 = state_23531;
state_23531 = G__23697;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__ = function(state_23531){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____1.call(this,state_23531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_23537 = f__23361__auto__.call(null);
(statearr_23537[(6)] = c__23360__auto___23695);

return statearr_23537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__23538){
var vec__23539 = p__23538;
var v = cljs.core.nth.call(null,vec__23539,(0),null);
var p = cljs.core.nth.call(null,vec__23539,(1),null);
var job = vec__23539;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___23698 = n;
var __23699 = (0);
while(true){
if((__23699 < n__4613__auto___23698)){
var G__23542_23700 = type;
var G__23542_23701__$1 = (((G__23542_23700 instanceof cljs.core.Keyword))?G__23542_23700.fqn:null);
switch (G__23542_23701__$1) {
case "compute":
var c__23360__auto___23703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23699,c__23360__auto___23703,G__23542_23700,G__23542_23701__$1,n__4613__auto___23698,jobs,results,process,async){
return (function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = ((function (__23699,c__23360__auto___23703,G__23542_23700,G__23542_23701__$1,n__4613__auto___23698,jobs,results,process,async){
return (function (state_23555){
var state_val_23556 = (state_23555[(1)]);
if((state_val_23556 === (1))){
var state_23555__$1 = state_23555;
var statearr_23557_23704 = state_23555__$1;
(statearr_23557_23704[(2)] = null);

(statearr_23557_23704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23556 === (2))){
var state_23555__$1 = state_23555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23555__$1,(4),jobs);
} else {
if((state_val_23556 === (3))){
var inst_23553 = (state_23555[(2)]);
var state_23555__$1 = state_23555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23555__$1,inst_23553);
} else {
if((state_val_23556 === (4))){
var inst_23545 = (state_23555[(2)]);
var inst_23546 = process.call(null,inst_23545);
var state_23555__$1 = state_23555;
if(cljs.core.truth_(inst_23546)){
var statearr_23558_23705 = state_23555__$1;
(statearr_23558_23705[(1)] = (5));

} else {
var statearr_23559_23706 = state_23555__$1;
(statearr_23559_23706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23556 === (5))){
var state_23555__$1 = state_23555;
var statearr_23560_23707 = state_23555__$1;
(statearr_23560_23707[(2)] = null);

(statearr_23560_23707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23556 === (6))){
var state_23555__$1 = state_23555;
var statearr_23561_23708 = state_23555__$1;
(statearr_23561_23708[(2)] = null);

(statearr_23561_23708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23556 === (7))){
var inst_23551 = (state_23555[(2)]);
var state_23555__$1 = state_23555;
var statearr_23562_23709 = state_23555__$1;
(statearr_23562_23709[(2)] = inst_23551);

(statearr_23562_23709[(1)] = (3));


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
});})(__23699,c__23360__auto___23703,G__23542_23700,G__23542_23701__$1,n__4613__auto___23698,jobs,results,process,async))
;
return ((function (__23699,switch__23265__auto__,c__23360__auto___23703,G__23542_23700,G__23542_23701__$1,n__4613__auto___23698,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____0 = (function (){
var statearr_23563 = [null,null,null,null,null,null,null];
(statearr_23563[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__);

(statearr_23563[(1)] = (1));

return statearr_23563;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____1 = (function (state_23555){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_23555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e23564){if((e23564 instanceof Object)){
var ex__23269__auto__ = e23564;
var statearr_23565_23710 = state_23555;
(statearr_23565_23710[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23711 = state_23555;
state_23555 = G__23711;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__ = function(state_23555){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____1.call(this,state_23555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__;
})()
;})(__23699,switch__23265__auto__,c__23360__auto___23703,G__23542_23700,G__23542_23701__$1,n__4613__auto___23698,jobs,results,process,async))
})();
var state__23362__auto__ = (function (){var statearr_23566 = f__23361__auto__.call(null);
(statearr_23566[(6)] = c__23360__auto___23703);

return statearr_23566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
});})(__23699,c__23360__auto___23703,G__23542_23700,G__23542_23701__$1,n__4613__auto___23698,jobs,results,process,async))
);


break;
case "async":
var c__23360__auto___23712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23699,c__23360__auto___23712,G__23542_23700,G__23542_23701__$1,n__4613__auto___23698,jobs,results,process,async){
return (function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = ((function (__23699,c__23360__auto___23712,G__23542_23700,G__23542_23701__$1,n__4613__auto___23698,jobs,results,process,async){
return (function (state_23579){
var state_val_23580 = (state_23579[(1)]);
if((state_val_23580 === (1))){
var state_23579__$1 = state_23579;
var statearr_23581_23713 = state_23579__$1;
(statearr_23581_23713[(2)] = null);

(statearr_23581_23713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (2))){
var state_23579__$1 = state_23579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23579__$1,(4),jobs);
} else {
if((state_val_23580 === (3))){
var inst_23577 = (state_23579[(2)]);
var state_23579__$1 = state_23579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23579__$1,inst_23577);
} else {
if((state_val_23580 === (4))){
var inst_23569 = (state_23579[(2)]);
var inst_23570 = async.call(null,inst_23569);
var state_23579__$1 = state_23579;
if(cljs.core.truth_(inst_23570)){
var statearr_23582_23714 = state_23579__$1;
(statearr_23582_23714[(1)] = (5));

} else {
var statearr_23583_23715 = state_23579__$1;
(statearr_23583_23715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (5))){
var state_23579__$1 = state_23579;
var statearr_23584_23716 = state_23579__$1;
(statearr_23584_23716[(2)] = null);

(statearr_23584_23716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (6))){
var state_23579__$1 = state_23579;
var statearr_23585_23717 = state_23579__$1;
(statearr_23585_23717[(2)] = null);

(statearr_23585_23717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (7))){
var inst_23575 = (state_23579[(2)]);
var state_23579__$1 = state_23579;
var statearr_23586_23718 = state_23579__$1;
(statearr_23586_23718[(2)] = inst_23575);

(statearr_23586_23718[(1)] = (3));


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
});})(__23699,c__23360__auto___23712,G__23542_23700,G__23542_23701__$1,n__4613__auto___23698,jobs,results,process,async))
;
return ((function (__23699,switch__23265__auto__,c__23360__auto___23712,G__23542_23700,G__23542_23701__$1,n__4613__auto___23698,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____0 = (function (){
var statearr_23587 = [null,null,null,null,null,null,null];
(statearr_23587[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__);

(statearr_23587[(1)] = (1));

return statearr_23587;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____1 = (function (state_23579){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_23579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e23588){if((e23588 instanceof Object)){
var ex__23269__auto__ = e23588;
var statearr_23589_23719 = state_23579;
(statearr_23589_23719[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23720 = state_23579;
state_23579 = G__23720;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__ = function(state_23579){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____1.call(this,state_23579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__;
})()
;})(__23699,switch__23265__auto__,c__23360__auto___23712,G__23542_23700,G__23542_23701__$1,n__4613__auto___23698,jobs,results,process,async))
})();
var state__23362__auto__ = (function (){var statearr_23590 = f__23361__auto__.call(null);
(statearr_23590[(6)] = c__23360__auto___23712);

return statearr_23590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
});})(__23699,c__23360__auto___23712,G__23542_23700,G__23542_23701__$1,n__4613__auto___23698,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23542_23701__$1)].join('')));

}

var G__23721 = (__23699 + (1));
__23699 = G__23721;
continue;
} else {
}
break;
}

var c__23360__auto___23722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_23612){
var state_val_23613 = (state_23612[(1)]);
if((state_val_23613 === (7))){
var inst_23608 = (state_23612[(2)]);
var state_23612__$1 = state_23612;
var statearr_23614_23723 = state_23612__$1;
(statearr_23614_23723[(2)] = inst_23608);

(statearr_23614_23723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23613 === (1))){
var state_23612__$1 = state_23612;
var statearr_23615_23724 = state_23612__$1;
(statearr_23615_23724[(2)] = null);

(statearr_23615_23724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23613 === (4))){
var inst_23593 = (state_23612[(7)]);
var inst_23593__$1 = (state_23612[(2)]);
var inst_23594 = (inst_23593__$1 == null);
var state_23612__$1 = (function (){var statearr_23616 = state_23612;
(statearr_23616[(7)] = inst_23593__$1);

return statearr_23616;
})();
if(cljs.core.truth_(inst_23594)){
var statearr_23617_23725 = state_23612__$1;
(statearr_23617_23725[(1)] = (5));

} else {
var statearr_23618_23726 = state_23612__$1;
(statearr_23618_23726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23613 === (6))){
var inst_23598 = (state_23612[(8)]);
var inst_23593 = (state_23612[(7)]);
var inst_23598__$1 = cljs.core.async.chan.call(null,(1));
var inst_23599 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23600 = [inst_23593,inst_23598__$1];
var inst_23601 = (new cljs.core.PersistentVector(null,2,(5),inst_23599,inst_23600,null));
var state_23612__$1 = (function (){var statearr_23619 = state_23612;
(statearr_23619[(8)] = inst_23598__$1);

return statearr_23619;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23612__$1,(8),jobs,inst_23601);
} else {
if((state_val_23613 === (3))){
var inst_23610 = (state_23612[(2)]);
var state_23612__$1 = state_23612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23612__$1,inst_23610);
} else {
if((state_val_23613 === (2))){
var state_23612__$1 = state_23612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23612__$1,(4),from);
} else {
if((state_val_23613 === (9))){
var inst_23605 = (state_23612[(2)]);
var state_23612__$1 = (function (){var statearr_23620 = state_23612;
(statearr_23620[(9)] = inst_23605);

return statearr_23620;
})();
var statearr_23621_23727 = state_23612__$1;
(statearr_23621_23727[(2)] = null);

(statearr_23621_23727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23613 === (5))){
var inst_23596 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23612__$1 = state_23612;
var statearr_23622_23728 = state_23612__$1;
(statearr_23622_23728[(2)] = inst_23596);

(statearr_23622_23728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23613 === (8))){
var inst_23598 = (state_23612[(8)]);
var inst_23603 = (state_23612[(2)]);
var state_23612__$1 = (function (){var statearr_23623 = state_23612;
(statearr_23623[(10)] = inst_23603);

return statearr_23623;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23612__$1,(9),results,inst_23598);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____0 = (function (){
var statearr_23624 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23624[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__);

(statearr_23624[(1)] = (1));

return statearr_23624;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____1 = (function (state_23612){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_23612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e23625){if((e23625 instanceof Object)){
var ex__23269__auto__ = e23625;
var statearr_23626_23729 = state_23612;
(statearr_23626_23729[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23730 = state_23612;
state_23612 = G__23730;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__ = function(state_23612){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____1.call(this,state_23612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_23627 = f__23361__auto__.call(null);
(statearr_23627[(6)] = c__23360__auto___23722);

return statearr_23627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));


var c__23360__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_23665){
var state_val_23666 = (state_23665[(1)]);
if((state_val_23666 === (7))){
var inst_23661 = (state_23665[(2)]);
var state_23665__$1 = state_23665;
var statearr_23667_23731 = state_23665__$1;
(statearr_23667_23731[(2)] = inst_23661);

(statearr_23667_23731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (20))){
var state_23665__$1 = state_23665;
var statearr_23668_23732 = state_23665__$1;
(statearr_23668_23732[(2)] = null);

(statearr_23668_23732[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (1))){
var state_23665__$1 = state_23665;
var statearr_23669_23733 = state_23665__$1;
(statearr_23669_23733[(2)] = null);

(statearr_23669_23733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (4))){
var inst_23630 = (state_23665[(7)]);
var inst_23630__$1 = (state_23665[(2)]);
var inst_23631 = (inst_23630__$1 == null);
var state_23665__$1 = (function (){var statearr_23670 = state_23665;
(statearr_23670[(7)] = inst_23630__$1);

return statearr_23670;
})();
if(cljs.core.truth_(inst_23631)){
var statearr_23671_23734 = state_23665__$1;
(statearr_23671_23734[(1)] = (5));

} else {
var statearr_23672_23735 = state_23665__$1;
(statearr_23672_23735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (15))){
var inst_23643 = (state_23665[(8)]);
var state_23665__$1 = state_23665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23665__$1,(18),to,inst_23643);
} else {
if((state_val_23666 === (21))){
var inst_23656 = (state_23665[(2)]);
var state_23665__$1 = state_23665;
var statearr_23673_23736 = state_23665__$1;
(statearr_23673_23736[(2)] = inst_23656);

(statearr_23673_23736[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (13))){
var inst_23658 = (state_23665[(2)]);
var state_23665__$1 = (function (){var statearr_23674 = state_23665;
(statearr_23674[(9)] = inst_23658);

return statearr_23674;
})();
var statearr_23675_23737 = state_23665__$1;
(statearr_23675_23737[(2)] = null);

(statearr_23675_23737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (6))){
var inst_23630 = (state_23665[(7)]);
var state_23665__$1 = state_23665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23665__$1,(11),inst_23630);
} else {
if((state_val_23666 === (17))){
var inst_23651 = (state_23665[(2)]);
var state_23665__$1 = state_23665;
if(cljs.core.truth_(inst_23651)){
var statearr_23676_23738 = state_23665__$1;
(statearr_23676_23738[(1)] = (19));

} else {
var statearr_23677_23739 = state_23665__$1;
(statearr_23677_23739[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (3))){
var inst_23663 = (state_23665[(2)]);
var state_23665__$1 = state_23665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23665__$1,inst_23663);
} else {
if((state_val_23666 === (12))){
var inst_23640 = (state_23665[(10)]);
var state_23665__$1 = state_23665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23665__$1,(14),inst_23640);
} else {
if((state_val_23666 === (2))){
var state_23665__$1 = state_23665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23665__$1,(4),results);
} else {
if((state_val_23666 === (19))){
var state_23665__$1 = state_23665;
var statearr_23678_23740 = state_23665__$1;
(statearr_23678_23740[(2)] = null);

(statearr_23678_23740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (11))){
var inst_23640 = (state_23665[(2)]);
var state_23665__$1 = (function (){var statearr_23679 = state_23665;
(statearr_23679[(10)] = inst_23640);

return statearr_23679;
})();
var statearr_23680_23741 = state_23665__$1;
(statearr_23680_23741[(2)] = null);

(statearr_23680_23741[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (9))){
var state_23665__$1 = state_23665;
var statearr_23681_23742 = state_23665__$1;
(statearr_23681_23742[(2)] = null);

(statearr_23681_23742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (5))){
var state_23665__$1 = state_23665;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23682_23743 = state_23665__$1;
(statearr_23682_23743[(1)] = (8));

} else {
var statearr_23683_23744 = state_23665__$1;
(statearr_23683_23744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (14))){
var inst_23643 = (state_23665[(8)]);
var inst_23643__$1 = (state_23665[(2)]);
var inst_23644 = (inst_23643__$1 == null);
var inst_23645 = cljs.core.not.call(null,inst_23644);
var state_23665__$1 = (function (){var statearr_23684 = state_23665;
(statearr_23684[(8)] = inst_23643__$1);

return statearr_23684;
})();
if(inst_23645){
var statearr_23685_23745 = state_23665__$1;
(statearr_23685_23745[(1)] = (15));

} else {
var statearr_23686_23746 = state_23665__$1;
(statearr_23686_23746[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (16))){
var state_23665__$1 = state_23665;
var statearr_23687_23747 = state_23665__$1;
(statearr_23687_23747[(2)] = false);

(statearr_23687_23747[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (10))){
var inst_23637 = (state_23665[(2)]);
var state_23665__$1 = state_23665;
var statearr_23688_23748 = state_23665__$1;
(statearr_23688_23748[(2)] = inst_23637);

(statearr_23688_23748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (18))){
var inst_23648 = (state_23665[(2)]);
var state_23665__$1 = state_23665;
var statearr_23689_23749 = state_23665__$1;
(statearr_23689_23749[(2)] = inst_23648);

(statearr_23689_23749[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (8))){
var inst_23634 = cljs.core.async.close_BANG_.call(null,to);
var state_23665__$1 = state_23665;
var statearr_23690_23750 = state_23665__$1;
(statearr_23690_23750[(2)] = inst_23634);

(statearr_23690_23750[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____0 = (function (){
var statearr_23691 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23691[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__);

(statearr_23691[(1)] = (1));

return statearr_23691;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____1 = (function (state_23665){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_23665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e23692){if((e23692 instanceof Object)){
var ex__23269__auto__ = e23692;
var statearr_23693_23751 = state_23665;
(statearr_23693_23751[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23752 = state_23665;
state_23665 = G__23752;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__ = function(state_23665){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____1.call(this,state_23665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23266__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_23694 = f__23361__auto__.call(null);
(statearr_23694[(6)] = c__23360__auto__);

return statearr_23694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));

return c__23360__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__23754 = arguments.length;
switch (G__23754) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__23757 = arguments.length;
switch (G__23757) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__23760 = arguments.length;
switch (G__23760) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23360__auto___23809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_23786){
var state_val_23787 = (state_23786[(1)]);
if((state_val_23787 === (7))){
var inst_23782 = (state_23786[(2)]);
var state_23786__$1 = state_23786;
var statearr_23788_23810 = state_23786__$1;
(statearr_23788_23810[(2)] = inst_23782);

(statearr_23788_23810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (1))){
var state_23786__$1 = state_23786;
var statearr_23789_23811 = state_23786__$1;
(statearr_23789_23811[(2)] = null);

(statearr_23789_23811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (4))){
var inst_23763 = (state_23786[(7)]);
var inst_23763__$1 = (state_23786[(2)]);
var inst_23764 = (inst_23763__$1 == null);
var state_23786__$1 = (function (){var statearr_23790 = state_23786;
(statearr_23790[(7)] = inst_23763__$1);

return statearr_23790;
})();
if(cljs.core.truth_(inst_23764)){
var statearr_23791_23812 = state_23786__$1;
(statearr_23791_23812[(1)] = (5));

} else {
var statearr_23792_23813 = state_23786__$1;
(statearr_23792_23813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (13))){
var state_23786__$1 = state_23786;
var statearr_23793_23814 = state_23786__$1;
(statearr_23793_23814[(2)] = null);

(statearr_23793_23814[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (6))){
var inst_23763 = (state_23786[(7)]);
var inst_23769 = p.call(null,inst_23763);
var state_23786__$1 = state_23786;
if(cljs.core.truth_(inst_23769)){
var statearr_23794_23815 = state_23786__$1;
(statearr_23794_23815[(1)] = (9));

} else {
var statearr_23795_23816 = state_23786__$1;
(statearr_23795_23816[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (3))){
var inst_23784 = (state_23786[(2)]);
var state_23786__$1 = state_23786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23786__$1,inst_23784);
} else {
if((state_val_23787 === (12))){
var state_23786__$1 = state_23786;
var statearr_23796_23817 = state_23786__$1;
(statearr_23796_23817[(2)] = null);

(statearr_23796_23817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (2))){
var state_23786__$1 = state_23786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23786__$1,(4),ch);
} else {
if((state_val_23787 === (11))){
var inst_23763 = (state_23786[(7)]);
var inst_23773 = (state_23786[(2)]);
var state_23786__$1 = state_23786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23786__$1,(8),inst_23773,inst_23763);
} else {
if((state_val_23787 === (9))){
var state_23786__$1 = state_23786;
var statearr_23797_23818 = state_23786__$1;
(statearr_23797_23818[(2)] = tc);

(statearr_23797_23818[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (5))){
var inst_23766 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23767 = cljs.core.async.close_BANG_.call(null,fc);
var state_23786__$1 = (function (){var statearr_23798 = state_23786;
(statearr_23798[(8)] = inst_23766);

return statearr_23798;
})();
var statearr_23799_23819 = state_23786__$1;
(statearr_23799_23819[(2)] = inst_23767);

(statearr_23799_23819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (14))){
var inst_23780 = (state_23786[(2)]);
var state_23786__$1 = state_23786;
var statearr_23800_23820 = state_23786__$1;
(statearr_23800_23820[(2)] = inst_23780);

(statearr_23800_23820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (10))){
var state_23786__$1 = state_23786;
var statearr_23801_23821 = state_23786__$1;
(statearr_23801_23821[(2)] = fc);

(statearr_23801_23821[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23787 === (8))){
var inst_23775 = (state_23786[(2)]);
var state_23786__$1 = state_23786;
if(cljs.core.truth_(inst_23775)){
var statearr_23802_23822 = state_23786__$1;
(statearr_23802_23822[(1)] = (12));

} else {
var statearr_23803_23823 = state_23786__$1;
(statearr_23803_23823[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__23266__auto__ = null;
var cljs$core$async$state_machine__23266__auto____0 = (function (){
var statearr_23804 = [null,null,null,null,null,null,null,null,null];
(statearr_23804[(0)] = cljs$core$async$state_machine__23266__auto__);

(statearr_23804[(1)] = (1));

return statearr_23804;
});
var cljs$core$async$state_machine__23266__auto____1 = (function (state_23786){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_23786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e23805){if((e23805 instanceof Object)){
var ex__23269__auto__ = e23805;
var statearr_23806_23824 = state_23786;
(statearr_23806_23824[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23825 = state_23786;
state_23786 = G__23825;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
cljs$core$async$state_machine__23266__auto__ = function(state_23786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23266__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23266__auto____1.call(this,state_23786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23266__auto____0;
cljs$core$async$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23266__auto____1;
return cljs$core$async$state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_23807 = f__23361__auto__.call(null);
(statearr_23807[(6)] = c__23360__auto___23809);

return statearr_23807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23360__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_23846){
var state_val_23847 = (state_23846[(1)]);
if((state_val_23847 === (7))){
var inst_23842 = (state_23846[(2)]);
var state_23846__$1 = state_23846;
var statearr_23848_23866 = state_23846__$1;
(statearr_23848_23866[(2)] = inst_23842);

(statearr_23848_23866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23847 === (1))){
var inst_23826 = init;
var state_23846__$1 = (function (){var statearr_23849 = state_23846;
(statearr_23849[(7)] = inst_23826);

return statearr_23849;
})();
var statearr_23850_23867 = state_23846__$1;
(statearr_23850_23867[(2)] = null);

(statearr_23850_23867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23847 === (4))){
var inst_23829 = (state_23846[(8)]);
var inst_23829__$1 = (state_23846[(2)]);
var inst_23830 = (inst_23829__$1 == null);
var state_23846__$1 = (function (){var statearr_23851 = state_23846;
(statearr_23851[(8)] = inst_23829__$1);

return statearr_23851;
})();
if(cljs.core.truth_(inst_23830)){
var statearr_23852_23868 = state_23846__$1;
(statearr_23852_23868[(1)] = (5));

} else {
var statearr_23853_23869 = state_23846__$1;
(statearr_23853_23869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23847 === (6))){
var inst_23833 = (state_23846[(9)]);
var inst_23829 = (state_23846[(8)]);
var inst_23826 = (state_23846[(7)]);
var inst_23833__$1 = f.call(null,inst_23826,inst_23829);
var inst_23834 = cljs.core.reduced_QMARK_.call(null,inst_23833__$1);
var state_23846__$1 = (function (){var statearr_23854 = state_23846;
(statearr_23854[(9)] = inst_23833__$1);

return statearr_23854;
})();
if(inst_23834){
var statearr_23855_23870 = state_23846__$1;
(statearr_23855_23870[(1)] = (8));

} else {
var statearr_23856_23871 = state_23846__$1;
(statearr_23856_23871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23847 === (3))){
var inst_23844 = (state_23846[(2)]);
var state_23846__$1 = state_23846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23846__$1,inst_23844);
} else {
if((state_val_23847 === (2))){
var state_23846__$1 = state_23846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23846__$1,(4),ch);
} else {
if((state_val_23847 === (9))){
var inst_23833 = (state_23846[(9)]);
var inst_23826 = inst_23833;
var state_23846__$1 = (function (){var statearr_23857 = state_23846;
(statearr_23857[(7)] = inst_23826);

return statearr_23857;
})();
var statearr_23858_23872 = state_23846__$1;
(statearr_23858_23872[(2)] = null);

(statearr_23858_23872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23847 === (5))){
var inst_23826 = (state_23846[(7)]);
var state_23846__$1 = state_23846;
var statearr_23859_23873 = state_23846__$1;
(statearr_23859_23873[(2)] = inst_23826);

(statearr_23859_23873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23847 === (10))){
var inst_23840 = (state_23846[(2)]);
var state_23846__$1 = state_23846;
var statearr_23860_23874 = state_23846__$1;
(statearr_23860_23874[(2)] = inst_23840);

(statearr_23860_23874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23847 === (8))){
var inst_23833 = (state_23846[(9)]);
var inst_23836 = cljs.core.deref.call(null,inst_23833);
var state_23846__$1 = state_23846;
var statearr_23861_23875 = state_23846__$1;
(statearr_23861_23875[(2)] = inst_23836);

(statearr_23861_23875[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__23266__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23266__auto____0 = (function (){
var statearr_23862 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23862[(0)] = cljs$core$async$reduce_$_state_machine__23266__auto__);

(statearr_23862[(1)] = (1));

return statearr_23862;
});
var cljs$core$async$reduce_$_state_machine__23266__auto____1 = (function (state_23846){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_23846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e23863){if((e23863 instanceof Object)){
var ex__23269__auto__ = e23863;
var statearr_23864_23876 = state_23846;
(statearr_23864_23876[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23877 = state_23846;
state_23846 = G__23877;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23266__auto__ = function(state_23846){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23266__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23266__auto____1.call(this,state_23846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23266__auto____0;
cljs$core$async$reduce_$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23266__auto____1;
return cljs$core$async$reduce_$_state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_23865 = f__23361__auto__.call(null);
(statearr_23865[(6)] = c__23360__auto__);

return statearr_23865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));

return c__23360__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23360__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_23883){
var state_val_23884 = (state_23883[(1)]);
if((state_val_23884 === (1))){
var inst_23878 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23883__$1 = state_23883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23883__$1,(2),inst_23878);
} else {
if((state_val_23884 === (2))){
var inst_23880 = (state_23883[(2)]);
var inst_23881 = f__$1.call(null,inst_23880);
var state_23883__$1 = state_23883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23883__$1,inst_23881);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__23266__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23266__auto____0 = (function (){
var statearr_23885 = [null,null,null,null,null,null,null];
(statearr_23885[(0)] = cljs$core$async$transduce_$_state_machine__23266__auto__);

(statearr_23885[(1)] = (1));

return statearr_23885;
});
var cljs$core$async$transduce_$_state_machine__23266__auto____1 = (function (state_23883){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_23883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e23886){if((e23886 instanceof Object)){
var ex__23269__auto__ = e23886;
var statearr_23887_23889 = state_23883;
(statearr_23887_23889[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23890 = state_23883;
state_23883 = G__23890;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23266__auto__ = function(state_23883){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23266__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23266__auto____1.call(this,state_23883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23266__auto____0;
cljs$core$async$transduce_$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23266__auto____1;
return cljs$core$async$transduce_$_state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_23888 = f__23361__auto__.call(null);
(statearr_23888[(6)] = c__23360__auto__);

return statearr_23888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));

return c__23360__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__23892 = arguments.length;
switch (G__23892) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23360__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_23917){
var state_val_23918 = (state_23917[(1)]);
if((state_val_23918 === (7))){
var inst_23899 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23919_23940 = state_23917__$1;
(statearr_23919_23940[(2)] = inst_23899);

(statearr_23919_23940[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (1))){
var inst_23893 = cljs.core.seq.call(null,coll);
var inst_23894 = inst_23893;
var state_23917__$1 = (function (){var statearr_23920 = state_23917;
(statearr_23920[(7)] = inst_23894);

return statearr_23920;
})();
var statearr_23921_23941 = state_23917__$1;
(statearr_23921_23941[(2)] = null);

(statearr_23921_23941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (4))){
var inst_23894 = (state_23917[(7)]);
var inst_23897 = cljs.core.first.call(null,inst_23894);
var state_23917__$1 = state_23917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23917__$1,(7),ch,inst_23897);
} else {
if((state_val_23918 === (13))){
var inst_23911 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23922_23942 = state_23917__$1;
(statearr_23922_23942[(2)] = inst_23911);

(statearr_23922_23942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (6))){
var inst_23902 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
if(cljs.core.truth_(inst_23902)){
var statearr_23923_23943 = state_23917__$1;
(statearr_23923_23943[(1)] = (8));

} else {
var statearr_23924_23944 = state_23917__$1;
(statearr_23924_23944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (3))){
var inst_23915 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23917__$1,inst_23915);
} else {
if((state_val_23918 === (12))){
var state_23917__$1 = state_23917;
var statearr_23925_23945 = state_23917__$1;
(statearr_23925_23945[(2)] = null);

(statearr_23925_23945[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (2))){
var inst_23894 = (state_23917[(7)]);
var state_23917__$1 = state_23917;
if(cljs.core.truth_(inst_23894)){
var statearr_23926_23946 = state_23917__$1;
(statearr_23926_23946[(1)] = (4));

} else {
var statearr_23927_23947 = state_23917__$1;
(statearr_23927_23947[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (11))){
var inst_23908 = cljs.core.async.close_BANG_.call(null,ch);
var state_23917__$1 = state_23917;
var statearr_23928_23948 = state_23917__$1;
(statearr_23928_23948[(2)] = inst_23908);

(statearr_23928_23948[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (9))){
var state_23917__$1 = state_23917;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23929_23949 = state_23917__$1;
(statearr_23929_23949[(1)] = (11));

} else {
var statearr_23930_23950 = state_23917__$1;
(statearr_23930_23950[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (5))){
var inst_23894 = (state_23917[(7)]);
var state_23917__$1 = state_23917;
var statearr_23931_23951 = state_23917__$1;
(statearr_23931_23951[(2)] = inst_23894);

(statearr_23931_23951[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (10))){
var inst_23913 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23932_23952 = state_23917__$1;
(statearr_23932_23952[(2)] = inst_23913);

(statearr_23932_23952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (8))){
var inst_23894 = (state_23917[(7)]);
var inst_23904 = cljs.core.next.call(null,inst_23894);
var inst_23894__$1 = inst_23904;
var state_23917__$1 = (function (){var statearr_23933 = state_23917;
(statearr_23933[(7)] = inst_23894__$1);

return statearr_23933;
})();
var statearr_23934_23953 = state_23917__$1;
(statearr_23934_23953[(2)] = null);

(statearr_23934_23953[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__23266__auto__ = null;
var cljs$core$async$state_machine__23266__auto____0 = (function (){
var statearr_23935 = [null,null,null,null,null,null,null,null];
(statearr_23935[(0)] = cljs$core$async$state_machine__23266__auto__);

(statearr_23935[(1)] = (1));

return statearr_23935;
});
var cljs$core$async$state_machine__23266__auto____1 = (function (state_23917){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_23917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e23936){if((e23936 instanceof Object)){
var ex__23269__auto__ = e23936;
var statearr_23937_23954 = state_23917;
(statearr_23937_23954[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23955 = state_23917;
state_23917 = G__23955;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
cljs$core$async$state_machine__23266__auto__ = function(state_23917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23266__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23266__auto____1.call(this,state_23917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23266__auto____0;
cljs$core$async$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23266__auto____1;
return cljs$core$async$state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_23938 = f__23361__auto__.call(null);
(statearr_23938[(6)] = c__23360__auto__);

return statearr_23938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));

return c__23360__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_23956 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_23956.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_23957 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_23957.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_23958 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_23958.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_23959 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_23959.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23960 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23960 = (function (ch,cs,meta23961){
this.ch = ch;
this.cs = cs;
this.meta23961 = meta23961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23962,meta23961__$1){
var self__ = this;
var _23962__$1 = this;
return (new cljs.core.async.t_cljs$core$async23960(self__.ch,self__.cs,meta23961__$1));
}));

(cljs.core.async.t_cljs$core$async23960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23962){
var self__ = this;
var _23962__$1 = this;
return self__.meta23961;
}));

(cljs.core.async.t_cljs$core$async23960.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23960.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async23960.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23960.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async23960.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async23960.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async23960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23961","meta23961",-131439397,null)], null);
}));

(cljs.core.async.t_cljs$core$async23960.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23960");

(cljs.core.async.t_cljs$core$async23960.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async23960");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23960.
 */
cljs.core.async.__GT_t_cljs$core$async23960 = (function cljs$core$async$mult_$___GT_t_cljs$core$async23960(ch__$1,cs__$1,meta23961){
return (new cljs.core.async.t_cljs$core$async23960(ch__$1,cs__$1,meta23961));
});

}

return (new cljs.core.async.t_cljs$core$async23960(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__23360__auto___24182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_24097){
var state_val_24098 = (state_24097[(1)]);
if((state_val_24098 === (7))){
var inst_24093 = (state_24097[(2)]);
var state_24097__$1 = state_24097;
var statearr_24099_24183 = state_24097__$1;
(statearr_24099_24183[(2)] = inst_24093);

(statearr_24099_24183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (20))){
var inst_23996 = (state_24097[(7)]);
var inst_24008 = cljs.core.first.call(null,inst_23996);
var inst_24009 = cljs.core.nth.call(null,inst_24008,(0),null);
var inst_24010 = cljs.core.nth.call(null,inst_24008,(1),null);
var state_24097__$1 = (function (){var statearr_24100 = state_24097;
(statearr_24100[(8)] = inst_24009);

return statearr_24100;
})();
if(cljs.core.truth_(inst_24010)){
var statearr_24101_24184 = state_24097__$1;
(statearr_24101_24184[(1)] = (22));

} else {
var statearr_24102_24185 = state_24097__$1;
(statearr_24102_24185[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (27))){
var inst_23965 = (state_24097[(9)]);
var inst_24040 = (state_24097[(10)]);
var inst_24045 = (state_24097[(11)]);
var inst_24038 = (state_24097[(12)]);
var inst_24045__$1 = cljs.core._nth.call(null,inst_24038,inst_24040);
var inst_24046 = cljs.core.async.put_BANG_.call(null,inst_24045__$1,inst_23965,done);
var state_24097__$1 = (function (){var statearr_24103 = state_24097;
(statearr_24103[(11)] = inst_24045__$1);

return statearr_24103;
})();
if(cljs.core.truth_(inst_24046)){
var statearr_24104_24186 = state_24097__$1;
(statearr_24104_24186[(1)] = (30));

} else {
var statearr_24105_24187 = state_24097__$1;
(statearr_24105_24187[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (1))){
var state_24097__$1 = state_24097;
var statearr_24106_24188 = state_24097__$1;
(statearr_24106_24188[(2)] = null);

(statearr_24106_24188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (24))){
var inst_23996 = (state_24097[(7)]);
var inst_24015 = (state_24097[(2)]);
var inst_24016 = cljs.core.next.call(null,inst_23996);
var inst_23974 = inst_24016;
var inst_23975 = null;
var inst_23976 = (0);
var inst_23977 = (0);
var state_24097__$1 = (function (){var statearr_24107 = state_24097;
(statearr_24107[(13)] = inst_23975);

(statearr_24107[(14)] = inst_23974);

(statearr_24107[(15)] = inst_23977);

(statearr_24107[(16)] = inst_23976);

(statearr_24107[(17)] = inst_24015);

return statearr_24107;
})();
var statearr_24108_24189 = state_24097__$1;
(statearr_24108_24189[(2)] = null);

(statearr_24108_24189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (39))){
var state_24097__$1 = state_24097;
var statearr_24112_24190 = state_24097__$1;
(statearr_24112_24190[(2)] = null);

(statearr_24112_24190[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (4))){
var inst_23965 = (state_24097[(9)]);
var inst_23965__$1 = (state_24097[(2)]);
var inst_23966 = (inst_23965__$1 == null);
var state_24097__$1 = (function (){var statearr_24113 = state_24097;
(statearr_24113[(9)] = inst_23965__$1);

return statearr_24113;
})();
if(cljs.core.truth_(inst_23966)){
var statearr_24114_24191 = state_24097__$1;
(statearr_24114_24191[(1)] = (5));

} else {
var statearr_24115_24192 = state_24097__$1;
(statearr_24115_24192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (15))){
var inst_23975 = (state_24097[(13)]);
var inst_23974 = (state_24097[(14)]);
var inst_23977 = (state_24097[(15)]);
var inst_23976 = (state_24097[(16)]);
var inst_23992 = (state_24097[(2)]);
var inst_23993 = (inst_23977 + (1));
var tmp24109 = inst_23975;
var tmp24110 = inst_23974;
var tmp24111 = inst_23976;
var inst_23974__$1 = tmp24110;
var inst_23975__$1 = tmp24109;
var inst_23976__$1 = tmp24111;
var inst_23977__$1 = inst_23993;
var state_24097__$1 = (function (){var statearr_24116 = state_24097;
(statearr_24116[(13)] = inst_23975__$1);

(statearr_24116[(14)] = inst_23974__$1);

(statearr_24116[(15)] = inst_23977__$1);

(statearr_24116[(16)] = inst_23976__$1);

(statearr_24116[(18)] = inst_23992);

return statearr_24116;
})();
var statearr_24117_24193 = state_24097__$1;
(statearr_24117_24193[(2)] = null);

(statearr_24117_24193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (21))){
var inst_24019 = (state_24097[(2)]);
var state_24097__$1 = state_24097;
var statearr_24121_24194 = state_24097__$1;
(statearr_24121_24194[(2)] = inst_24019);

(statearr_24121_24194[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (31))){
var inst_24045 = (state_24097[(11)]);
var inst_24049 = done.call(null,null);
var inst_24050 = cljs.core.async.untap_STAR_.call(null,m,inst_24045);
var state_24097__$1 = (function (){var statearr_24122 = state_24097;
(statearr_24122[(19)] = inst_24049);

return statearr_24122;
})();
var statearr_24123_24195 = state_24097__$1;
(statearr_24123_24195[(2)] = inst_24050);

(statearr_24123_24195[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (32))){
var inst_24040 = (state_24097[(10)]);
var inst_24039 = (state_24097[(20)]);
var inst_24037 = (state_24097[(21)]);
var inst_24038 = (state_24097[(12)]);
var inst_24052 = (state_24097[(2)]);
var inst_24053 = (inst_24040 + (1));
var tmp24118 = inst_24039;
var tmp24119 = inst_24037;
var tmp24120 = inst_24038;
var inst_24037__$1 = tmp24119;
var inst_24038__$1 = tmp24120;
var inst_24039__$1 = tmp24118;
var inst_24040__$1 = inst_24053;
var state_24097__$1 = (function (){var statearr_24124 = state_24097;
(statearr_24124[(22)] = inst_24052);

(statearr_24124[(10)] = inst_24040__$1);

(statearr_24124[(20)] = inst_24039__$1);

(statearr_24124[(21)] = inst_24037__$1);

(statearr_24124[(12)] = inst_24038__$1);

return statearr_24124;
})();
var statearr_24125_24196 = state_24097__$1;
(statearr_24125_24196[(2)] = null);

(statearr_24125_24196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (40))){
var inst_24065 = (state_24097[(23)]);
var inst_24069 = done.call(null,null);
var inst_24070 = cljs.core.async.untap_STAR_.call(null,m,inst_24065);
var state_24097__$1 = (function (){var statearr_24126 = state_24097;
(statearr_24126[(24)] = inst_24069);

return statearr_24126;
})();
var statearr_24127_24197 = state_24097__$1;
(statearr_24127_24197[(2)] = inst_24070);

(statearr_24127_24197[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (33))){
var inst_24056 = (state_24097[(25)]);
var inst_24058 = cljs.core.chunked_seq_QMARK_.call(null,inst_24056);
var state_24097__$1 = state_24097;
if(inst_24058){
var statearr_24128_24198 = state_24097__$1;
(statearr_24128_24198[(1)] = (36));

} else {
var statearr_24129_24199 = state_24097__$1;
(statearr_24129_24199[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (13))){
var inst_23986 = (state_24097[(26)]);
var inst_23989 = cljs.core.async.close_BANG_.call(null,inst_23986);
var state_24097__$1 = state_24097;
var statearr_24130_24200 = state_24097__$1;
(statearr_24130_24200[(2)] = inst_23989);

(statearr_24130_24200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (22))){
var inst_24009 = (state_24097[(8)]);
var inst_24012 = cljs.core.async.close_BANG_.call(null,inst_24009);
var state_24097__$1 = state_24097;
var statearr_24131_24201 = state_24097__$1;
(statearr_24131_24201[(2)] = inst_24012);

(statearr_24131_24201[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (36))){
var inst_24056 = (state_24097[(25)]);
var inst_24060 = cljs.core.chunk_first.call(null,inst_24056);
var inst_24061 = cljs.core.chunk_rest.call(null,inst_24056);
var inst_24062 = cljs.core.count.call(null,inst_24060);
var inst_24037 = inst_24061;
var inst_24038 = inst_24060;
var inst_24039 = inst_24062;
var inst_24040 = (0);
var state_24097__$1 = (function (){var statearr_24132 = state_24097;
(statearr_24132[(10)] = inst_24040);

(statearr_24132[(20)] = inst_24039);

(statearr_24132[(21)] = inst_24037);

(statearr_24132[(12)] = inst_24038);

return statearr_24132;
})();
var statearr_24133_24202 = state_24097__$1;
(statearr_24133_24202[(2)] = null);

(statearr_24133_24202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (41))){
var inst_24056 = (state_24097[(25)]);
var inst_24072 = (state_24097[(2)]);
var inst_24073 = cljs.core.next.call(null,inst_24056);
var inst_24037 = inst_24073;
var inst_24038 = null;
var inst_24039 = (0);
var inst_24040 = (0);
var state_24097__$1 = (function (){var statearr_24134 = state_24097;
(statearr_24134[(27)] = inst_24072);

(statearr_24134[(10)] = inst_24040);

(statearr_24134[(20)] = inst_24039);

(statearr_24134[(21)] = inst_24037);

(statearr_24134[(12)] = inst_24038);

return statearr_24134;
})();
var statearr_24135_24203 = state_24097__$1;
(statearr_24135_24203[(2)] = null);

(statearr_24135_24203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (43))){
var state_24097__$1 = state_24097;
var statearr_24136_24204 = state_24097__$1;
(statearr_24136_24204[(2)] = null);

(statearr_24136_24204[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (29))){
var inst_24081 = (state_24097[(2)]);
var state_24097__$1 = state_24097;
var statearr_24137_24205 = state_24097__$1;
(statearr_24137_24205[(2)] = inst_24081);

(statearr_24137_24205[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (44))){
var inst_24090 = (state_24097[(2)]);
var state_24097__$1 = (function (){var statearr_24138 = state_24097;
(statearr_24138[(28)] = inst_24090);

return statearr_24138;
})();
var statearr_24139_24206 = state_24097__$1;
(statearr_24139_24206[(2)] = null);

(statearr_24139_24206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (6))){
var inst_24029 = (state_24097[(29)]);
var inst_24028 = cljs.core.deref.call(null,cs);
var inst_24029__$1 = cljs.core.keys.call(null,inst_24028);
var inst_24030 = cljs.core.count.call(null,inst_24029__$1);
var inst_24031 = cljs.core.reset_BANG_.call(null,dctr,inst_24030);
var inst_24036 = cljs.core.seq.call(null,inst_24029__$1);
var inst_24037 = inst_24036;
var inst_24038 = null;
var inst_24039 = (0);
var inst_24040 = (0);
var state_24097__$1 = (function (){var statearr_24140 = state_24097;
(statearr_24140[(29)] = inst_24029__$1);

(statearr_24140[(30)] = inst_24031);

(statearr_24140[(10)] = inst_24040);

(statearr_24140[(20)] = inst_24039);

(statearr_24140[(21)] = inst_24037);

(statearr_24140[(12)] = inst_24038);

return statearr_24140;
})();
var statearr_24141_24207 = state_24097__$1;
(statearr_24141_24207[(2)] = null);

(statearr_24141_24207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (28))){
var inst_24056 = (state_24097[(25)]);
var inst_24037 = (state_24097[(21)]);
var inst_24056__$1 = cljs.core.seq.call(null,inst_24037);
var state_24097__$1 = (function (){var statearr_24142 = state_24097;
(statearr_24142[(25)] = inst_24056__$1);

return statearr_24142;
})();
if(inst_24056__$1){
var statearr_24143_24208 = state_24097__$1;
(statearr_24143_24208[(1)] = (33));

} else {
var statearr_24144_24209 = state_24097__$1;
(statearr_24144_24209[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (25))){
var inst_24040 = (state_24097[(10)]);
var inst_24039 = (state_24097[(20)]);
var inst_24042 = (inst_24040 < inst_24039);
var inst_24043 = inst_24042;
var state_24097__$1 = state_24097;
if(cljs.core.truth_(inst_24043)){
var statearr_24145_24210 = state_24097__$1;
(statearr_24145_24210[(1)] = (27));

} else {
var statearr_24146_24211 = state_24097__$1;
(statearr_24146_24211[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (34))){
var state_24097__$1 = state_24097;
var statearr_24147_24212 = state_24097__$1;
(statearr_24147_24212[(2)] = null);

(statearr_24147_24212[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (17))){
var state_24097__$1 = state_24097;
var statearr_24148_24213 = state_24097__$1;
(statearr_24148_24213[(2)] = null);

(statearr_24148_24213[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (3))){
var inst_24095 = (state_24097[(2)]);
var state_24097__$1 = state_24097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24097__$1,inst_24095);
} else {
if((state_val_24098 === (12))){
var inst_24024 = (state_24097[(2)]);
var state_24097__$1 = state_24097;
var statearr_24149_24214 = state_24097__$1;
(statearr_24149_24214[(2)] = inst_24024);

(statearr_24149_24214[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (2))){
var state_24097__$1 = state_24097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24097__$1,(4),ch);
} else {
if((state_val_24098 === (23))){
var state_24097__$1 = state_24097;
var statearr_24150_24215 = state_24097__$1;
(statearr_24150_24215[(2)] = null);

(statearr_24150_24215[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (35))){
var inst_24079 = (state_24097[(2)]);
var state_24097__$1 = state_24097;
var statearr_24151_24216 = state_24097__$1;
(statearr_24151_24216[(2)] = inst_24079);

(statearr_24151_24216[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (19))){
var inst_23996 = (state_24097[(7)]);
var inst_24000 = cljs.core.chunk_first.call(null,inst_23996);
var inst_24001 = cljs.core.chunk_rest.call(null,inst_23996);
var inst_24002 = cljs.core.count.call(null,inst_24000);
var inst_23974 = inst_24001;
var inst_23975 = inst_24000;
var inst_23976 = inst_24002;
var inst_23977 = (0);
var state_24097__$1 = (function (){var statearr_24152 = state_24097;
(statearr_24152[(13)] = inst_23975);

(statearr_24152[(14)] = inst_23974);

(statearr_24152[(15)] = inst_23977);

(statearr_24152[(16)] = inst_23976);

return statearr_24152;
})();
var statearr_24153_24217 = state_24097__$1;
(statearr_24153_24217[(2)] = null);

(statearr_24153_24217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (11))){
var inst_23974 = (state_24097[(14)]);
var inst_23996 = (state_24097[(7)]);
var inst_23996__$1 = cljs.core.seq.call(null,inst_23974);
var state_24097__$1 = (function (){var statearr_24154 = state_24097;
(statearr_24154[(7)] = inst_23996__$1);

return statearr_24154;
})();
if(inst_23996__$1){
var statearr_24155_24218 = state_24097__$1;
(statearr_24155_24218[(1)] = (16));

} else {
var statearr_24156_24219 = state_24097__$1;
(statearr_24156_24219[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (9))){
var inst_24026 = (state_24097[(2)]);
var state_24097__$1 = state_24097;
var statearr_24157_24220 = state_24097__$1;
(statearr_24157_24220[(2)] = inst_24026);

(statearr_24157_24220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (5))){
var inst_23972 = cljs.core.deref.call(null,cs);
var inst_23973 = cljs.core.seq.call(null,inst_23972);
var inst_23974 = inst_23973;
var inst_23975 = null;
var inst_23976 = (0);
var inst_23977 = (0);
var state_24097__$1 = (function (){var statearr_24158 = state_24097;
(statearr_24158[(13)] = inst_23975);

(statearr_24158[(14)] = inst_23974);

(statearr_24158[(15)] = inst_23977);

(statearr_24158[(16)] = inst_23976);

return statearr_24158;
})();
var statearr_24159_24221 = state_24097__$1;
(statearr_24159_24221[(2)] = null);

(statearr_24159_24221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (14))){
var state_24097__$1 = state_24097;
var statearr_24160_24222 = state_24097__$1;
(statearr_24160_24222[(2)] = null);

(statearr_24160_24222[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (45))){
var inst_24087 = (state_24097[(2)]);
var state_24097__$1 = state_24097;
var statearr_24161_24223 = state_24097__$1;
(statearr_24161_24223[(2)] = inst_24087);

(statearr_24161_24223[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (26))){
var inst_24029 = (state_24097[(29)]);
var inst_24083 = (state_24097[(2)]);
var inst_24084 = cljs.core.seq.call(null,inst_24029);
var state_24097__$1 = (function (){var statearr_24162 = state_24097;
(statearr_24162[(31)] = inst_24083);

return statearr_24162;
})();
if(inst_24084){
var statearr_24163_24224 = state_24097__$1;
(statearr_24163_24224[(1)] = (42));

} else {
var statearr_24164_24225 = state_24097__$1;
(statearr_24164_24225[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (16))){
var inst_23996 = (state_24097[(7)]);
var inst_23998 = cljs.core.chunked_seq_QMARK_.call(null,inst_23996);
var state_24097__$1 = state_24097;
if(inst_23998){
var statearr_24165_24226 = state_24097__$1;
(statearr_24165_24226[(1)] = (19));

} else {
var statearr_24166_24227 = state_24097__$1;
(statearr_24166_24227[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (38))){
var inst_24076 = (state_24097[(2)]);
var state_24097__$1 = state_24097;
var statearr_24167_24228 = state_24097__$1;
(statearr_24167_24228[(2)] = inst_24076);

(statearr_24167_24228[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (30))){
var state_24097__$1 = state_24097;
var statearr_24168_24229 = state_24097__$1;
(statearr_24168_24229[(2)] = null);

(statearr_24168_24229[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (10))){
var inst_23975 = (state_24097[(13)]);
var inst_23977 = (state_24097[(15)]);
var inst_23985 = cljs.core._nth.call(null,inst_23975,inst_23977);
var inst_23986 = cljs.core.nth.call(null,inst_23985,(0),null);
var inst_23987 = cljs.core.nth.call(null,inst_23985,(1),null);
var state_24097__$1 = (function (){var statearr_24169 = state_24097;
(statearr_24169[(26)] = inst_23986);

return statearr_24169;
})();
if(cljs.core.truth_(inst_23987)){
var statearr_24170_24230 = state_24097__$1;
(statearr_24170_24230[(1)] = (13));

} else {
var statearr_24171_24231 = state_24097__$1;
(statearr_24171_24231[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (18))){
var inst_24022 = (state_24097[(2)]);
var state_24097__$1 = state_24097;
var statearr_24172_24232 = state_24097__$1;
(statearr_24172_24232[(2)] = inst_24022);

(statearr_24172_24232[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (42))){
var state_24097__$1 = state_24097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24097__$1,(45),dchan);
} else {
if((state_val_24098 === (37))){
var inst_23965 = (state_24097[(9)]);
var inst_24056 = (state_24097[(25)]);
var inst_24065 = (state_24097[(23)]);
var inst_24065__$1 = cljs.core.first.call(null,inst_24056);
var inst_24066 = cljs.core.async.put_BANG_.call(null,inst_24065__$1,inst_23965,done);
var state_24097__$1 = (function (){var statearr_24173 = state_24097;
(statearr_24173[(23)] = inst_24065__$1);

return statearr_24173;
})();
if(cljs.core.truth_(inst_24066)){
var statearr_24174_24233 = state_24097__$1;
(statearr_24174_24233[(1)] = (39));

} else {
var statearr_24175_24234 = state_24097__$1;
(statearr_24175_24234[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (8))){
var inst_23977 = (state_24097[(15)]);
var inst_23976 = (state_24097[(16)]);
var inst_23979 = (inst_23977 < inst_23976);
var inst_23980 = inst_23979;
var state_24097__$1 = state_24097;
if(cljs.core.truth_(inst_23980)){
var statearr_24176_24235 = state_24097__$1;
(statearr_24176_24235[(1)] = (10));

} else {
var statearr_24177_24236 = state_24097__$1;
(statearr_24177_24236[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__23266__auto__ = null;
var cljs$core$async$mult_$_state_machine__23266__auto____0 = (function (){
var statearr_24178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24178[(0)] = cljs$core$async$mult_$_state_machine__23266__auto__);

(statearr_24178[(1)] = (1));

return statearr_24178;
});
var cljs$core$async$mult_$_state_machine__23266__auto____1 = (function (state_24097){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_24097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e24179){if((e24179 instanceof Object)){
var ex__23269__auto__ = e24179;
var statearr_24180_24237 = state_24097;
(statearr_24180_24237[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24238 = state_24097;
state_24097 = G__24238;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23266__auto__ = function(state_24097){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23266__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23266__auto____1.call(this,state_24097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23266__auto____0;
cljs$core$async$mult_$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23266__auto____1;
return cljs$core$async$mult_$_state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_24181 = f__23361__auto__.call(null);
(statearr_24181[(6)] = c__23360__auto___24182);

return statearr_24181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24240 = arguments.length;
switch (G__24240) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_24242 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_24242.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_24243 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_24243.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_24244 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_24244.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_24245 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_24245.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_24246 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_24246.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24257 = arguments.length;
var i__4737__auto___24258 = (0);
while(true){
if((i__4737__auto___24258 < len__4736__auto___24257)){
args__4742__auto__.push((arguments[i__4737__auto___24258]));

var G__24259 = (i__4737__auto___24258 + (1));
i__4737__auto___24258 = G__24259;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24251){
var map__24252 = p__24251;
var map__24252__$1 = (((((!((map__24252 == null))))?(((((map__24252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24252):map__24252);
var opts = map__24252__$1;
var statearr_24254_24260 = state;
(statearr_24254_24260[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_24255_24261 = state;
(statearr_24255_24261[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_24256_24262 = state;
(statearr_24256_24262[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24247){
var G__24248 = cljs.core.first.call(null,seq24247);
var seq24247__$1 = cljs.core.next.call(null,seq24247);
var G__24249 = cljs.core.first.call(null,seq24247__$1);
var seq24247__$2 = cljs.core.next.call(null,seq24247__$1);
var G__24250 = cljs.core.first.call(null,seq24247__$2);
var seq24247__$3 = cljs.core.next.call(null,seq24247__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24248,G__24249,G__24250,seq24247__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24263 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24263 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24264){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24264 = meta24264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24265,meta24264__$1){
var self__ = this;
var _24265__$1 = this;
return (new cljs.core.async.t_cljs$core$async24263(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24264__$1));
}));

(cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24265){
var self__ = this;
var _24265__$1 = this;
return self__.meta24264;
}));

(cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24264","meta24264",1563984170,null)], null);
}));

(cljs.core.async.t_cljs$core$async24263.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24263");

(cljs.core.async.t_cljs$core$async24263.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24263");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24263.
 */
cljs.core.async.__GT_t_cljs$core$async24263 = (function cljs$core$async$mix_$___GT_t_cljs$core$async24263(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24264){
return (new cljs.core.async.t_cljs$core$async24263(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24264));
});

}

return (new cljs.core.async.t_cljs$core$async24263(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23360__auto___24427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_24367){
var state_val_24368 = (state_24367[(1)]);
if((state_val_24368 === (7))){
var inst_24282 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
var statearr_24369_24428 = state_24367__$1;
(statearr_24369_24428[(2)] = inst_24282);

(statearr_24369_24428[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (20))){
var inst_24294 = (state_24367[(7)]);
var state_24367__$1 = state_24367;
var statearr_24370_24429 = state_24367__$1;
(statearr_24370_24429[(2)] = inst_24294);

(statearr_24370_24429[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (27))){
var state_24367__$1 = state_24367;
var statearr_24371_24430 = state_24367__$1;
(statearr_24371_24430[(2)] = null);

(statearr_24371_24430[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (1))){
var inst_24269 = (state_24367[(8)]);
var inst_24269__$1 = calc_state.call(null);
var inst_24271 = (inst_24269__$1 == null);
var inst_24272 = cljs.core.not.call(null,inst_24271);
var state_24367__$1 = (function (){var statearr_24372 = state_24367;
(statearr_24372[(8)] = inst_24269__$1);

return statearr_24372;
})();
if(inst_24272){
var statearr_24373_24431 = state_24367__$1;
(statearr_24373_24431[(1)] = (2));

} else {
var statearr_24374_24432 = state_24367__$1;
(statearr_24374_24432[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (24))){
var inst_24327 = (state_24367[(9)]);
var inst_24318 = (state_24367[(10)]);
var inst_24341 = (state_24367[(11)]);
var inst_24341__$1 = inst_24318.call(null,inst_24327);
var state_24367__$1 = (function (){var statearr_24375 = state_24367;
(statearr_24375[(11)] = inst_24341__$1);

return statearr_24375;
})();
if(cljs.core.truth_(inst_24341__$1)){
var statearr_24376_24433 = state_24367__$1;
(statearr_24376_24433[(1)] = (29));

} else {
var statearr_24377_24434 = state_24367__$1;
(statearr_24377_24434[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (4))){
var inst_24285 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
if(cljs.core.truth_(inst_24285)){
var statearr_24378_24435 = state_24367__$1;
(statearr_24378_24435[(1)] = (8));

} else {
var statearr_24379_24436 = state_24367__$1;
(statearr_24379_24436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (15))){
var inst_24312 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
if(cljs.core.truth_(inst_24312)){
var statearr_24380_24437 = state_24367__$1;
(statearr_24380_24437[(1)] = (19));

} else {
var statearr_24381_24438 = state_24367__$1;
(statearr_24381_24438[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (21))){
var inst_24317 = (state_24367[(12)]);
var inst_24317__$1 = (state_24367[(2)]);
var inst_24318 = cljs.core.get.call(null,inst_24317__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24319 = cljs.core.get.call(null,inst_24317__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24320 = cljs.core.get.call(null,inst_24317__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24367__$1 = (function (){var statearr_24382 = state_24367;
(statearr_24382[(10)] = inst_24318);

(statearr_24382[(13)] = inst_24319);

(statearr_24382[(12)] = inst_24317__$1);

return statearr_24382;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24367__$1,(22),inst_24320);
} else {
if((state_val_24368 === (31))){
var inst_24349 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
if(cljs.core.truth_(inst_24349)){
var statearr_24383_24439 = state_24367__$1;
(statearr_24383_24439[(1)] = (32));

} else {
var statearr_24384_24440 = state_24367__$1;
(statearr_24384_24440[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (32))){
var inst_24326 = (state_24367[(14)]);
var state_24367__$1 = state_24367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24367__$1,(35),out,inst_24326);
} else {
if((state_val_24368 === (33))){
var inst_24317 = (state_24367[(12)]);
var inst_24294 = inst_24317;
var state_24367__$1 = (function (){var statearr_24385 = state_24367;
(statearr_24385[(7)] = inst_24294);

return statearr_24385;
})();
var statearr_24386_24441 = state_24367__$1;
(statearr_24386_24441[(2)] = null);

(statearr_24386_24441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (13))){
var inst_24294 = (state_24367[(7)]);
var inst_24301 = inst_24294.cljs$lang$protocol_mask$partition0$;
var inst_24302 = (inst_24301 & (64));
var inst_24303 = inst_24294.cljs$core$ISeq$;
var inst_24304 = (cljs.core.PROTOCOL_SENTINEL === inst_24303);
var inst_24305 = ((inst_24302) || (inst_24304));
var state_24367__$1 = state_24367;
if(cljs.core.truth_(inst_24305)){
var statearr_24387_24442 = state_24367__$1;
(statearr_24387_24442[(1)] = (16));

} else {
var statearr_24388_24443 = state_24367__$1;
(statearr_24388_24443[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (22))){
var inst_24327 = (state_24367[(9)]);
var inst_24326 = (state_24367[(14)]);
var inst_24325 = (state_24367[(2)]);
var inst_24326__$1 = cljs.core.nth.call(null,inst_24325,(0),null);
var inst_24327__$1 = cljs.core.nth.call(null,inst_24325,(1),null);
var inst_24328 = (inst_24326__$1 == null);
var inst_24329 = cljs.core._EQ_.call(null,inst_24327__$1,change);
var inst_24330 = ((inst_24328) || (inst_24329));
var state_24367__$1 = (function (){var statearr_24389 = state_24367;
(statearr_24389[(9)] = inst_24327__$1);

(statearr_24389[(14)] = inst_24326__$1);

return statearr_24389;
})();
if(cljs.core.truth_(inst_24330)){
var statearr_24390_24444 = state_24367__$1;
(statearr_24390_24444[(1)] = (23));

} else {
var statearr_24391_24445 = state_24367__$1;
(statearr_24391_24445[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (36))){
var inst_24317 = (state_24367[(12)]);
var inst_24294 = inst_24317;
var state_24367__$1 = (function (){var statearr_24392 = state_24367;
(statearr_24392[(7)] = inst_24294);

return statearr_24392;
})();
var statearr_24393_24446 = state_24367__$1;
(statearr_24393_24446[(2)] = null);

(statearr_24393_24446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (29))){
var inst_24341 = (state_24367[(11)]);
var state_24367__$1 = state_24367;
var statearr_24394_24447 = state_24367__$1;
(statearr_24394_24447[(2)] = inst_24341);

(statearr_24394_24447[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (6))){
var state_24367__$1 = state_24367;
var statearr_24395_24448 = state_24367__$1;
(statearr_24395_24448[(2)] = false);

(statearr_24395_24448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (28))){
var inst_24337 = (state_24367[(2)]);
var inst_24338 = calc_state.call(null);
var inst_24294 = inst_24338;
var state_24367__$1 = (function (){var statearr_24396 = state_24367;
(statearr_24396[(15)] = inst_24337);

(statearr_24396[(7)] = inst_24294);

return statearr_24396;
})();
var statearr_24397_24449 = state_24367__$1;
(statearr_24397_24449[(2)] = null);

(statearr_24397_24449[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (25))){
var inst_24363 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
var statearr_24398_24450 = state_24367__$1;
(statearr_24398_24450[(2)] = inst_24363);

(statearr_24398_24450[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (34))){
var inst_24361 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
var statearr_24399_24451 = state_24367__$1;
(statearr_24399_24451[(2)] = inst_24361);

(statearr_24399_24451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (17))){
var state_24367__$1 = state_24367;
var statearr_24400_24452 = state_24367__$1;
(statearr_24400_24452[(2)] = false);

(statearr_24400_24452[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (3))){
var state_24367__$1 = state_24367;
var statearr_24401_24453 = state_24367__$1;
(statearr_24401_24453[(2)] = false);

(statearr_24401_24453[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (12))){
var inst_24365 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24367__$1,inst_24365);
} else {
if((state_val_24368 === (2))){
var inst_24269 = (state_24367[(8)]);
var inst_24274 = inst_24269.cljs$lang$protocol_mask$partition0$;
var inst_24275 = (inst_24274 & (64));
var inst_24276 = inst_24269.cljs$core$ISeq$;
var inst_24277 = (cljs.core.PROTOCOL_SENTINEL === inst_24276);
var inst_24278 = ((inst_24275) || (inst_24277));
var state_24367__$1 = state_24367;
if(cljs.core.truth_(inst_24278)){
var statearr_24402_24454 = state_24367__$1;
(statearr_24402_24454[(1)] = (5));

} else {
var statearr_24403_24455 = state_24367__$1;
(statearr_24403_24455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (23))){
var inst_24326 = (state_24367[(14)]);
var inst_24332 = (inst_24326 == null);
var state_24367__$1 = state_24367;
if(cljs.core.truth_(inst_24332)){
var statearr_24404_24456 = state_24367__$1;
(statearr_24404_24456[(1)] = (26));

} else {
var statearr_24405_24457 = state_24367__$1;
(statearr_24405_24457[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (35))){
var inst_24352 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
if(cljs.core.truth_(inst_24352)){
var statearr_24406_24458 = state_24367__$1;
(statearr_24406_24458[(1)] = (36));

} else {
var statearr_24407_24459 = state_24367__$1;
(statearr_24407_24459[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (19))){
var inst_24294 = (state_24367[(7)]);
var inst_24314 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24294);
var state_24367__$1 = state_24367;
var statearr_24408_24460 = state_24367__$1;
(statearr_24408_24460[(2)] = inst_24314);

(statearr_24408_24460[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (11))){
var inst_24294 = (state_24367[(7)]);
var inst_24298 = (inst_24294 == null);
var inst_24299 = cljs.core.not.call(null,inst_24298);
var state_24367__$1 = state_24367;
if(inst_24299){
var statearr_24409_24461 = state_24367__$1;
(statearr_24409_24461[(1)] = (13));

} else {
var statearr_24410_24462 = state_24367__$1;
(statearr_24410_24462[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (9))){
var inst_24269 = (state_24367[(8)]);
var state_24367__$1 = state_24367;
var statearr_24411_24463 = state_24367__$1;
(statearr_24411_24463[(2)] = inst_24269);

(statearr_24411_24463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (5))){
var state_24367__$1 = state_24367;
var statearr_24412_24464 = state_24367__$1;
(statearr_24412_24464[(2)] = true);

(statearr_24412_24464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (14))){
var state_24367__$1 = state_24367;
var statearr_24413_24465 = state_24367__$1;
(statearr_24413_24465[(2)] = false);

(statearr_24413_24465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (26))){
var inst_24327 = (state_24367[(9)]);
var inst_24334 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24327);
var state_24367__$1 = state_24367;
var statearr_24414_24466 = state_24367__$1;
(statearr_24414_24466[(2)] = inst_24334);

(statearr_24414_24466[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (16))){
var state_24367__$1 = state_24367;
var statearr_24415_24467 = state_24367__$1;
(statearr_24415_24467[(2)] = true);

(statearr_24415_24467[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (38))){
var inst_24357 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
var statearr_24416_24468 = state_24367__$1;
(statearr_24416_24468[(2)] = inst_24357);

(statearr_24416_24468[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (30))){
var inst_24327 = (state_24367[(9)]);
var inst_24318 = (state_24367[(10)]);
var inst_24319 = (state_24367[(13)]);
var inst_24344 = cljs.core.empty_QMARK_.call(null,inst_24318);
var inst_24345 = inst_24319.call(null,inst_24327);
var inst_24346 = cljs.core.not.call(null,inst_24345);
var inst_24347 = ((inst_24344) && (inst_24346));
var state_24367__$1 = state_24367;
var statearr_24417_24469 = state_24367__$1;
(statearr_24417_24469[(2)] = inst_24347);

(statearr_24417_24469[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (10))){
var inst_24269 = (state_24367[(8)]);
var inst_24290 = (state_24367[(2)]);
var inst_24291 = cljs.core.get.call(null,inst_24290,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24292 = cljs.core.get.call(null,inst_24290,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24293 = cljs.core.get.call(null,inst_24290,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24294 = inst_24269;
var state_24367__$1 = (function (){var statearr_24418 = state_24367;
(statearr_24418[(16)] = inst_24293);

(statearr_24418[(7)] = inst_24294);

(statearr_24418[(17)] = inst_24292);

(statearr_24418[(18)] = inst_24291);

return statearr_24418;
})();
var statearr_24419_24470 = state_24367__$1;
(statearr_24419_24470[(2)] = null);

(statearr_24419_24470[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (18))){
var inst_24309 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
var statearr_24420_24471 = state_24367__$1;
(statearr_24420_24471[(2)] = inst_24309);

(statearr_24420_24471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (37))){
var state_24367__$1 = state_24367;
var statearr_24421_24472 = state_24367__$1;
(statearr_24421_24472[(2)] = null);

(statearr_24421_24472[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (8))){
var inst_24269 = (state_24367[(8)]);
var inst_24287 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24269);
var state_24367__$1 = state_24367;
var statearr_24422_24473 = state_24367__$1;
(statearr_24422_24473[(2)] = inst_24287);

(statearr_24422_24473[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__23266__auto__ = null;
var cljs$core$async$mix_$_state_machine__23266__auto____0 = (function (){
var statearr_24423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24423[(0)] = cljs$core$async$mix_$_state_machine__23266__auto__);

(statearr_24423[(1)] = (1));

return statearr_24423;
});
var cljs$core$async$mix_$_state_machine__23266__auto____1 = (function (state_24367){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_24367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e24424){if((e24424 instanceof Object)){
var ex__23269__auto__ = e24424;
var statearr_24425_24474 = state_24367;
(statearr_24425_24474[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24475 = state_24367;
state_24367 = G__24475;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23266__auto__ = function(state_24367){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23266__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23266__auto____1.call(this,state_24367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23266__auto____0;
cljs$core$async$mix_$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23266__auto____1;
return cljs$core$async$mix_$_state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_24426 = f__23361__auto__.call(null);
(statearr_24426[(6)] = c__23360__auto___24427);

return statearr_24426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_24478 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_24478.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_24479 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_24479.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_24480 = (function() {
var G__24481 = null;
var G__24481__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__24481__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__24481 = function(p,v){
switch(arguments.length){
case 1:
return G__24481__1.call(this,p);
case 2:
return G__24481__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24481.cljs$core$IFn$_invoke$arity$1 = G__24481__1;
G__24481.cljs$core$IFn$_invoke$arity$2 = G__24481__2;
return G__24481;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24477 = arguments.length;
switch (G__24477) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_24480.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_24480.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24485 = arguments.length;
switch (G__24485) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__24483_SHARP_){
if(cljs.core.truth_(p1__24483_SHARP_.call(null,topic))){
return p1__24483_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24483_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24486 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24486 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24487){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24487 = meta24487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24488,meta24487__$1){
var self__ = this;
var _24488__$1 = this;
return (new cljs.core.async.t_cljs$core$async24486(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24487__$1));
}));

(cljs.core.async.t_cljs$core$async24486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24488){
var self__ = this;
var _24488__$1 = this;
return self__.meta24487;
}));

(cljs.core.async.t_cljs$core$async24486.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24486.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24486.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24486.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async24486.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async24486.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async24486.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async24486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24487","meta24487",-480921984,null)], null);
}));

(cljs.core.async.t_cljs$core$async24486.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24486");

(cljs.core.async.t_cljs$core$async24486.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24486");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24486.
 */
cljs.core.async.__GT_t_cljs$core$async24486 = (function cljs$core$async$__GT_t_cljs$core$async24486(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24487){
return (new cljs.core.async.t_cljs$core$async24486(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24487));
});

}

return (new cljs.core.async.t_cljs$core$async24486(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23360__auto___24606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_24560){
var state_val_24561 = (state_24560[(1)]);
if((state_val_24561 === (7))){
var inst_24556 = (state_24560[(2)]);
var state_24560__$1 = state_24560;
var statearr_24562_24607 = state_24560__$1;
(statearr_24562_24607[(2)] = inst_24556);

(statearr_24562_24607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (20))){
var state_24560__$1 = state_24560;
var statearr_24563_24608 = state_24560__$1;
(statearr_24563_24608[(2)] = null);

(statearr_24563_24608[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (1))){
var state_24560__$1 = state_24560;
var statearr_24564_24609 = state_24560__$1;
(statearr_24564_24609[(2)] = null);

(statearr_24564_24609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (24))){
var inst_24539 = (state_24560[(7)]);
var inst_24548 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24539);
var state_24560__$1 = state_24560;
var statearr_24565_24610 = state_24560__$1;
(statearr_24565_24610[(2)] = inst_24548);

(statearr_24565_24610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (4))){
var inst_24491 = (state_24560[(8)]);
var inst_24491__$1 = (state_24560[(2)]);
var inst_24492 = (inst_24491__$1 == null);
var state_24560__$1 = (function (){var statearr_24566 = state_24560;
(statearr_24566[(8)] = inst_24491__$1);

return statearr_24566;
})();
if(cljs.core.truth_(inst_24492)){
var statearr_24567_24611 = state_24560__$1;
(statearr_24567_24611[(1)] = (5));

} else {
var statearr_24568_24612 = state_24560__$1;
(statearr_24568_24612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (15))){
var inst_24533 = (state_24560[(2)]);
var state_24560__$1 = state_24560;
var statearr_24569_24613 = state_24560__$1;
(statearr_24569_24613[(2)] = inst_24533);

(statearr_24569_24613[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (21))){
var inst_24553 = (state_24560[(2)]);
var state_24560__$1 = (function (){var statearr_24570 = state_24560;
(statearr_24570[(9)] = inst_24553);

return statearr_24570;
})();
var statearr_24571_24614 = state_24560__$1;
(statearr_24571_24614[(2)] = null);

(statearr_24571_24614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (13))){
var inst_24515 = (state_24560[(10)]);
var inst_24517 = cljs.core.chunked_seq_QMARK_.call(null,inst_24515);
var state_24560__$1 = state_24560;
if(inst_24517){
var statearr_24572_24615 = state_24560__$1;
(statearr_24572_24615[(1)] = (16));

} else {
var statearr_24573_24616 = state_24560__$1;
(statearr_24573_24616[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (22))){
var inst_24545 = (state_24560[(2)]);
var state_24560__$1 = state_24560;
if(cljs.core.truth_(inst_24545)){
var statearr_24574_24617 = state_24560__$1;
(statearr_24574_24617[(1)] = (23));

} else {
var statearr_24575_24618 = state_24560__$1;
(statearr_24575_24618[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (6))){
var inst_24491 = (state_24560[(8)]);
var inst_24541 = (state_24560[(11)]);
var inst_24539 = (state_24560[(7)]);
var inst_24539__$1 = topic_fn.call(null,inst_24491);
var inst_24540 = cljs.core.deref.call(null,mults);
var inst_24541__$1 = cljs.core.get.call(null,inst_24540,inst_24539__$1);
var state_24560__$1 = (function (){var statearr_24576 = state_24560;
(statearr_24576[(11)] = inst_24541__$1);

(statearr_24576[(7)] = inst_24539__$1);

return statearr_24576;
})();
if(cljs.core.truth_(inst_24541__$1)){
var statearr_24577_24619 = state_24560__$1;
(statearr_24577_24619[(1)] = (19));

} else {
var statearr_24578_24620 = state_24560__$1;
(statearr_24578_24620[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (25))){
var inst_24550 = (state_24560[(2)]);
var state_24560__$1 = state_24560;
var statearr_24579_24621 = state_24560__$1;
(statearr_24579_24621[(2)] = inst_24550);

(statearr_24579_24621[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (17))){
var inst_24515 = (state_24560[(10)]);
var inst_24524 = cljs.core.first.call(null,inst_24515);
var inst_24525 = cljs.core.async.muxch_STAR_.call(null,inst_24524);
var inst_24526 = cljs.core.async.close_BANG_.call(null,inst_24525);
var inst_24527 = cljs.core.next.call(null,inst_24515);
var inst_24501 = inst_24527;
var inst_24502 = null;
var inst_24503 = (0);
var inst_24504 = (0);
var state_24560__$1 = (function (){var statearr_24580 = state_24560;
(statearr_24580[(12)] = inst_24503);

(statearr_24580[(13)] = inst_24501);

(statearr_24580[(14)] = inst_24504);

(statearr_24580[(15)] = inst_24502);

(statearr_24580[(16)] = inst_24526);

return statearr_24580;
})();
var statearr_24581_24622 = state_24560__$1;
(statearr_24581_24622[(2)] = null);

(statearr_24581_24622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (3))){
var inst_24558 = (state_24560[(2)]);
var state_24560__$1 = state_24560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24560__$1,inst_24558);
} else {
if((state_val_24561 === (12))){
var inst_24535 = (state_24560[(2)]);
var state_24560__$1 = state_24560;
var statearr_24582_24623 = state_24560__$1;
(statearr_24582_24623[(2)] = inst_24535);

(statearr_24582_24623[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (2))){
var state_24560__$1 = state_24560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24560__$1,(4),ch);
} else {
if((state_val_24561 === (23))){
var state_24560__$1 = state_24560;
var statearr_24583_24624 = state_24560__$1;
(statearr_24583_24624[(2)] = null);

(statearr_24583_24624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (19))){
var inst_24491 = (state_24560[(8)]);
var inst_24541 = (state_24560[(11)]);
var inst_24543 = cljs.core.async.muxch_STAR_.call(null,inst_24541);
var state_24560__$1 = state_24560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24560__$1,(22),inst_24543,inst_24491);
} else {
if((state_val_24561 === (11))){
var inst_24515 = (state_24560[(10)]);
var inst_24501 = (state_24560[(13)]);
var inst_24515__$1 = cljs.core.seq.call(null,inst_24501);
var state_24560__$1 = (function (){var statearr_24584 = state_24560;
(statearr_24584[(10)] = inst_24515__$1);

return statearr_24584;
})();
if(inst_24515__$1){
var statearr_24585_24625 = state_24560__$1;
(statearr_24585_24625[(1)] = (13));

} else {
var statearr_24586_24626 = state_24560__$1;
(statearr_24586_24626[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (9))){
var inst_24537 = (state_24560[(2)]);
var state_24560__$1 = state_24560;
var statearr_24587_24627 = state_24560__$1;
(statearr_24587_24627[(2)] = inst_24537);

(statearr_24587_24627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (5))){
var inst_24498 = cljs.core.deref.call(null,mults);
var inst_24499 = cljs.core.vals.call(null,inst_24498);
var inst_24500 = cljs.core.seq.call(null,inst_24499);
var inst_24501 = inst_24500;
var inst_24502 = null;
var inst_24503 = (0);
var inst_24504 = (0);
var state_24560__$1 = (function (){var statearr_24588 = state_24560;
(statearr_24588[(12)] = inst_24503);

(statearr_24588[(13)] = inst_24501);

(statearr_24588[(14)] = inst_24504);

(statearr_24588[(15)] = inst_24502);

return statearr_24588;
})();
var statearr_24589_24628 = state_24560__$1;
(statearr_24589_24628[(2)] = null);

(statearr_24589_24628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (14))){
var state_24560__$1 = state_24560;
var statearr_24593_24629 = state_24560__$1;
(statearr_24593_24629[(2)] = null);

(statearr_24593_24629[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (16))){
var inst_24515 = (state_24560[(10)]);
var inst_24519 = cljs.core.chunk_first.call(null,inst_24515);
var inst_24520 = cljs.core.chunk_rest.call(null,inst_24515);
var inst_24521 = cljs.core.count.call(null,inst_24519);
var inst_24501 = inst_24520;
var inst_24502 = inst_24519;
var inst_24503 = inst_24521;
var inst_24504 = (0);
var state_24560__$1 = (function (){var statearr_24594 = state_24560;
(statearr_24594[(12)] = inst_24503);

(statearr_24594[(13)] = inst_24501);

(statearr_24594[(14)] = inst_24504);

(statearr_24594[(15)] = inst_24502);

return statearr_24594;
})();
var statearr_24595_24630 = state_24560__$1;
(statearr_24595_24630[(2)] = null);

(statearr_24595_24630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (10))){
var inst_24503 = (state_24560[(12)]);
var inst_24501 = (state_24560[(13)]);
var inst_24504 = (state_24560[(14)]);
var inst_24502 = (state_24560[(15)]);
var inst_24509 = cljs.core._nth.call(null,inst_24502,inst_24504);
var inst_24510 = cljs.core.async.muxch_STAR_.call(null,inst_24509);
var inst_24511 = cljs.core.async.close_BANG_.call(null,inst_24510);
var inst_24512 = (inst_24504 + (1));
var tmp24590 = inst_24503;
var tmp24591 = inst_24501;
var tmp24592 = inst_24502;
var inst_24501__$1 = tmp24591;
var inst_24502__$1 = tmp24592;
var inst_24503__$1 = tmp24590;
var inst_24504__$1 = inst_24512;
var state_24560__$1 = (function (){var statearr_24596 = state_24560;
(statearr_24596[(12)] = inst_24503__$1);

(statearr_24596[(17)] = inst_24511);

(statearr_24596[(13)] = inst_24501__$1);

(statearr_24596[(14)] = inst_24504__$1);

(statearr_24596[(15)] = inst_24502__$1);

return statearr_24596;
})();
var statearr_24597_24631 = state_24560__$1;
(statearr_24597_24631[(2)] = null);

(statearr_24597_24631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (18))){
var inst_24530 = (state_24560[(2)]);
var state_24560__$1 = state_24560;
var statearr_24598_24632 = state_24560__$1;
(statearr_24598_24632[(2)] = inst_24530);

(statearr_24598_24632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (8))){
var inst_24503 = (state_24560[(12)]);
var inst_24504 = (state_24560[(14)]);
var inst_24506 = (inst_24504 < inst_24503);
var inst_24507 = inst_24506;
var state_24560__$1 = state_24560;
if(cljs.core.truth_(inst_24507)){
var statearr_24599_24633 = state_24560__$1;
(statearr_24599_24633[(1)] = (10));

} else {
var statearr_24600_24634 = state_24560__$1;
(statearr_24600_24634[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__23266__auto__ = null;
var cljs$core$async$state_machine__23266__auto____0 = (function (){
var statearr_24601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24601[(0)] = cljs$core$async$state_machine__23266__auto__);

(statearr_24601[(1)] = (1));

return statearr_24601;
});
var cljs$core$async$state_machine__23266__auto____1 = (function (state_24560){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_24560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e24602){if((e24602 instanceof Object)){
var ex__23269__auto__ = e24602;
var statearr_24603_24635 = state_24560;
(statearr_24603_24635[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24636 = state_24560;
state_24560 = G__24636;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
cljs$core$async$state_machine__23266__auto__ = function(state_24560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23266__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23266__auto____1.call(this,state_24560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23266__auto____0;
cljs$core$async$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23266__auto____1;
return cljs$core$async$state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_24604 = f__23361__auto__.call(null);
(statearr_24604[(6)] = c__23360__auto___24606);

return statearr_24604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24638 = arguments.length;
switch (G__24638) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24641 = arguments.length;
switch (G__24641) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24644 = arguments.length;
switch (G__24644) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__23360__auto___24711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_24683){
var state_val_24684 = (state_24683[(1)]);
if((state_val_24684 === (7))){
var state_24683__$1 = state_24683;
var statearr_24685_24712 = state_24683__$1;
(statearr_24685_24712[(2)] = null);

(statearr_24685_24712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (1))){
var state_24683__$1 = state_24683;
var statearr_24686_24713 = state_24683__$1;
(statearr_24686_24713[(2)] = null);

(statearr_24686_24713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (4))){
var inst_24647 = (state_24683[(7)]);
var inst_24649 = (inst_24647 < cnt);
var state_24683__$1 = state_24683;
if(cljs.core.truth_(inst_24649)){
var statearr_24687_24714 = state_24683__$1;
(statearr_24687_24714[(1)] = (6));

} else {
var statearr_24688_24715 = state_24683__$1;
(statearr_24688_24715[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (15))){
var inst_24679 = (state_24683[(2)]);
var state_24683__$1 = state_24683;
var statearr_24689_24716 = state_24683__$1;
(statearr_24689_24716[(2)] = inst_24679);

(statearr_24689_24716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (13))){
var inst_24672 = cljs.core.async.close_BANG_.call(null,out);
var state_24683__$1 = state_24683;
var statearr_24690_24717 = state_24683__$1;
(statearr_24690_24717[(2)] = inst_24672);

(statearr_24690_24717[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (6))){
var state_24683__$1 = state_24683;
var statearr_24691_24718 = state_24683__$1;
(statearr_24691_24718[(2)] = null);

(statearr_24691_24718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (3))){
var inst_24681 = (state_24683[(2)]);
var state_24683__$1 = state_24683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24683__$1,inst_24681);
} else {
if((state_val_24684 === (12))){
var inst_24669 = (state_24683[(8)]);
var inst_24669__$1 = (state_24683[(2)]);
var inst_24670 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24669__$1);
var state_24683__$1 = (function (){var statearr_24692 = state_24683;
(statearr_24692[(8)] = inst_24669__$1);

return statearr_24692;
})();
if(cljs.core.truth_(inst_24670)){
var statearr_24693_24719 = state_24683__$1;
(statearr_24693_24719[(1)] = (13));

} else {
var statearr_24694_24720 = state_24683__$1;
(statearr_24694_24720[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (2))){
var inst_24646 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24647 = (0);
var state_24683__$1 = (function (){var statearr_24695 = state_24683;
(statearr_24695[(7)] = inst_24647);

(statearr_24695[(9)] = inst_24646);

return statearr_24695;
})();
var statearr_24696_24721 = state_24683__$1;
(statearr_24696_24721[(2)] = null);

(statearr_24696_24721[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (11))){
var inst_24647 = (state_24683[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24683,(10),Object,null,(9));
var inst_24656 = chs__$1.call(null,inst_24647);
var inst_24657 = done.call(null,inst_24647);
var inst_24658 = cljs.core.async.take_BANG_.call(null,inst_24656,inst_24657);
var state_24683__$1 = state_24683;
var statearr_24697_24722 = state_24683__$1;
(statearr_24697_24722[(2)] = inst_24658);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24683__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (9))){
var inst_24647 = (state_24683[(7)]);
var inst_24660 = (state_24683[(2)]);
var inst_24661 = (inst_24647 + (1));
var inst_24647__$1 = inst_24661;
var state_24683__$1 = (function (){var statearr_24698 = state_24683;
(statearr_24698[(7)] = inst_24647__$1);

(statearr_24698[(10)] = inst_24660);

return statearr_24698;
})();
var statearr_24699_24723 = state_24683__$1;
(statearr_24699_24723[(2)] = null);

(statearr_24699_24723[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (5))){
var inst_24667 = (state_24683[(2)]);
var state_24683__$1 = (function (){var statearr_24700 = state_24683;
(statearr_24700[(11)] = inst_24667);

return statearr_24700;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24683__$1,(12),dchan);
} else {
if((state_val_24684 === (14))){
var inst_24669 = (state_24683[(8)]);
var inst_24674 = cljs.core.apply.call(null,f,inst_24669);
var state_24683__$1 = state_24683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24683__$1,(16),out,inst_24674);
} else {
if((state_val_24684 === (16))){
var inst_24676 = (state_24683[(2)]);
var state_24683__$1 = (function (){var statearr_24701 = state_24683;
(statearr_24701[(12)] = inst_24676);

return statearr_24701;
})();
var statearr_24702_24724 = state_24683__$1;
(statearr_24702_24724[(2)] = null);

(statearr_24702_24724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (10))){
var inst_24651 = (state_24683[(2)]);
var inst_24652 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24683__$1 = (function (){var statearr_24703 = state_24683;
(statearr_24703[(13)] = inst_24651);

return statearr_24703;
})();
var statearr_24704_24725 = state_24683__$1;
(statearr_24704_24725[(2)] = inst_24652);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24683__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24684 === (8))){
var inst_24665 = (state_24683[(2)]);
var state_24683__$1 = state_24683;
var statearr_24705_24726 = state_24683__$1;
(statearr_24705_24726[(2)] = inst_24665);

(statearr_24705_24726[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__23266__auto__ = null;
var cljs$core$async$state_machine__23266__auto____0 = (function (){
var statearr_24706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24706[(0)] = cljs$core$async$state_machine__23266__auto__);

(statearr_24706[(1)] = (1));

return statearr_24706;
});
var cljs$core$async$state_machine__23266__auto____1 = (function (state_24683){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_24683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e24707){if((e24707 instanceof Object)){
var ex__23269__auto__ = e24707;
var statearr_24708_24727 = state_24683;
(statearr_24708_24727[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24728 = state_24683;
state_24683 = G__24728;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
cljs$core$async$state_machine__23266__auto__ = function(state_24683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23266__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23266__auto____1.call(this,state_24683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23266__auto____0;
cljs$core$async$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23266__auto____1;
return cljs$core$async$state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_24709 = f__23361__auto__.call(null);
(statearr_24709[(6)] = c__23360__auto___24711);

return statearr_24709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24731 = arguments.length;
switch (G__24731) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23360__auto___24785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_24763){
var state_val_24764 = (state_24763[(1)]);
if((state_val_24764 === (7))){
var inst_24742 = (state_24763[(7)]);
var inst_24743 = (state_24763[(8)]);
var inst_24742__$1 = (state_24763[(2)]);
var inst_24743__$1 = cljs.core.nth.call(null,inst_24742__$1,(0),null);
var inst_24744 = cljs.core.nth.call(null,inst_24742__$1,(1),null);
var inst_24745 = (inst_24743__$1 == null);
var state_24763__$1 = (function (){var statearr_24765 = state_24763;
(statearr_24765[(7)] = inst_24742__$1);

(statearr_24765[(8)] = inst_24743__$1);

(statearr_24765[(9)] = inst_24744);

return statearr_24765;
})();
if(cljs.core.truth_(inst_24745)){
var statearr_24766_24786 = state_24763__$1;
(statearr_24766_24786[(1)] = (8));

} else {
var statearr_24767_24787 = state_24763__$1;
(statearr_24767_24787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24764 === (1))){
var inst_24732 = cljs.core.vec.call(null,chs);
var inst_24733 = inst_24732;
var state_24763__$1 = (function (){var statearr_24768 = state_24763;
(statearr_24768[(10)] = inst_24733);

return statearr_24768;
})();
var statearr_24769_24788 = state_24763__$1;
(statearr_24769_24788[(2)] = null);

(statearr_24769_24788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24764 === (4))){
var inst_24733 = (state_24763[(10)]);
var state_24763__$1 = state_24763;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24763__$1,(7),inst_24733);
} else {
if((state_val_24764 === (6))){
var inst_24759 = (state_24763[(2)]);
var state_24763__$1 = state_24763;
var statearr_24770_24789 = state_24763__$1;
(statearr_24770_24789[(2)] = inst_24759);

(statearr_24770_24789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24764 === (3))){
var inst_24761 = (state_24763[(2)]);
var state_24763__$1 = state_24763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24763__$1,inst_24761);
} else {
if((state_val_24764 === (2))){
var inst_24733 = (state_24763[(10)]);
var inst_24735 = cljs.core.count.call(null,inst_24733);
var inst_24736 = (inst_24735 > (0));
var state_24763__$1 = state_24763;
if(cljs.core.truth_(inst_24736)){
var statearr_24772_24790 = state_24763__$1;
(statearr_24772_24790[(1)] = (4));

} else {
var statearr_24773_24791 = state_24763__$1;
(statearr_24773_24791[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24764 === (11))){
var inst_24733 = (state_24763[(10)]);
var inst_24752 = (state_24763[(2)]);
var tmp24771 = inst_24733;
var inst_24733__$1 = tmp24771;
var state_24763__$1 = (function (){var statearr_24774 = state_24763;
(statearr_24774[(10)] = inst_24733__$1);

(statearr_24774[(11)] = inst_24752);

return statearr_24774;
})();
var statearr_24775_24792 = state_24763__$1;
(statearr_24775_24792[(2)] = null);

(statearr_24775_24792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24764 === (9))){
var inst_24743 = (state_24763[(8)]);
var state_24763__$1 = state_24763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24763__$1,(11),out,inst_24743);
} else {
if((state_val_24764 === (5))){
var inst_24757 = cljs.core.async.close_BANG_.call(null,out);
var state_24763__$1 = state_24763;
var statearr_24776_24793 = state_24763__$1;
(statearr_24776_24793[(2)] = inst_24757);

(statearr_24776_24793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24764 === (10))){
var inst_24755 = (state_24763[(2)]);
var state_24763__$1 = state_24763;
var statearr_24777_24794 = state_24763__$1;
(statearr_24777_24794[(2)] = inst_24755);

(statearr_24777_24794[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24764 === (8))){
var inst_24742 = (state_24763[(7)]);
var inst_24743 = (state_24763[(8)]);
var inst_24733 = (state_24763[(10)]);
var inst_24744 = (state_24763[(9)]);
var inst_24747 = (function (){var cs = inst_24733;
var vec__24738 = inst_24742;
var v = inst_24743;
var c = inst_24744;
return (function (p1__24729_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24729_SHARP_);
});
})();
var inst_24748 = cljs.core.filterv.call(null,inst_24747,inst_24733);
var inst_24733__$1 = inst_24748;
var state_24763__$1 = (function (){var statearr_24778 = state_24763;
(statearr_24778[(10)] = inst_24733__$1);

return statearr_24778;
})();
var statearr_24779_24795 = state_24763__$1;
(statearr_24779_24795[(2)] = null);

(statearr_24779_24795[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__23266__auto__ = null;
var cljs$core$async$state_machine__23266__auto____0 = (function (){
var statearr_24780 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24780[(0)] = cljs$core$async$state_machine__23266__auto__);

(statearr_24780[(1)] = (1));

return statearr_24780;
});
var cljs$core$async$state_machine__23266__auto____1 = (function (state_24763){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_24763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e24781){if((e24781 instanceof Object)){
var ex__23269__auto__ = e24781;
var statearr_24782_24796 = state_24763;
(statearr_24782_24796[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24797 = state_24763;
state_24763 = G__24797;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
cljs$core$async$state_machine__23266__auto__ = function(state_24763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23266__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23266__auto____1.call(this,state_24763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23266__auto____0;
cljs$core$async$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23266__auto____1;
return cljs$core$async$state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_24783 = f__23361__auto__.call(null);
(statearr_24783[(6)] = c__23360__auto___24785);

return statearr_24783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__24799 = arguments.length;
switch (G__24799) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23360__auto___24844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_24823){
var state_val_24824 = (state_24823[(1)]);
if((state_val_24824 === (7))){
var inst_24805 = (state_24823[(7)]);
var inst_24805__$1 = (state_24823[(2)]);
var inst_24806 = (inst_24805__$1 == null);
var inst_24807 = cljs.core.not.call(null,inst_24806);
var state_24823__$1 = (function (){var statearr_24825 = state_24823;
(statearr_24825[(7)] = inst_24805__$1);

return statearr_24825;
})();
if(inst_24807){
var statearr_24826_24845 = state_24823__$1;
(statearr_24826_24845[(1)] = (8));

} else {
var statearr_24827_24846 = state_24823__$1;
(statearr_24827_24846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (1))){
var inst_24800 = (0);
var state_24823__$1 = (function (){var statearr_24828 = state_24823;
(statearr_24828[(8)] = inst_24800);

return statearr_24828;
})();
var statearr_24829_24847 = state_24823__$1;
(statearr_24829_24847[(2)] = null);

(statearr_24829_24847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (4))){
var state_24823__$1 = state_24823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24823__$1,(7),ch);
} else {
if((state_val_24824 === (6))){
var inst_24818 = (state_24823[(2)]);
var state_24823__$1 = state_24823;
var statearr_24830_24848 = state_24823__$1;
(statearr_24830_24848[(2)] = inst_24818);

(statearr_24830_24848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (3))){
var inst_24820 = (state_24823[(2)]);
var inst_24821 = cljs.core.async.close_BANG_.call(null,out);
var state_24823__$1 = (function (){var statearr_24831 = state_24823;
(statearr_24831[(9)] = inst_24820);

return statearr_24831;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24823__$1,inst_24821);
} else {
if((state_val_24824 === (2))){
var inst_24800 = (state_24823[(8)]);
var inst_24802 = (inst_24800 < n);
var state_24823__$1 = state_24823;
if(cljs.core.truth_(inst_24802)){
var statearr_24832_24849 = state_24823__$1;
(statearr_24832_24849[(1)] = (4));

} else {
var statearr_24833_24850 = state_24823__$1;
(statearr_24833_24850[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (11))){
var inst_24800 = (state_24823[(8)]);
var inst_24810 = (state_24823[(2)]);
var inst_24811 = (inst_24800 + (1));
var inst_24800__$1 = inst_24811;
var state_24823__$1 = (function (){var statearr_24834 = state_24823;
(statearr_24834[(10)] = inst_24810);

(statearr_24834[(8)] = inst_24800__$1);

return statearr_24834;
})();
var statearr_24835_24851 = state_24823__$1;
(statearr_24835_24851[(2)] = null);

(statearr_24835_24851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (9))){
var state_24823__$1 = state_24823;
var statearr_24836_24852 = state_24823__$1;
(statearr_24836_24852[(2)] = null);

(statearr_24836_24852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (5))){
var state_24823__$1 = state_24823;
var statearr_24837_24853 = state_24823__$1;
(statearr_24837_24853[(2)] = null);

(statearr_24837_24853[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (10))){
var inst_24815 = (state_24823[(2)]);
var state_24823__$1 = state_24823;
var statearr_24838_24854 = state_24823__$1;
(statearr_24838_24854[(2)] = inst_24815);

(statearr_24838_24854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24824 === (8))){
var inst_24805 = (state_24823[(7)]);
var state_24823__$1 = state_24823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24823__$1,(11),out,inst_24805);
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
});
return (function() {
var cljs$core$async$state_machine__23266__auto__ = null;
var cljs$core$async$state_machine__23266__auto____0 = (function (){
var statearr_24839 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24839[(0)] = cljs$core$async$state_machine__23266__auto__);

(statearr_24839[(1)] = (1));

return statearr_24839;
});
var cljs$core$async$state_machine__23266__auto____1 = (function (state_24823){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_24823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e24840){if((e24840 instanceof Object)){
var ex__23269__auto__ = e24840;
var statearr_24841_24855 = state_24823;
(statearr_24841_24855[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24856 = state_24823;
state_24823 = G__24856;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
cljs$core$async$state_machine__23266__auto__ = function(state_24823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23266__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23266__auto____1.call(this,state_24823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23266__auto____0;
cljs$core$async$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23266__auto____1;
return cljs$core$async$state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_24842 = f__23361__auto__.call(null);
(statearr_24842[(6)] = c__23360__auto___24844);

return statearr_24842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24858 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24858 = (function (f,ch,meta24859){
this.f = f;
this.ch = ch;
this.meta24859 = meta24859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24860,meta24859__$1){
var self__ = this;
var _24860__$1 = this;
return (new cljs.core.async.t_cljs$core$async24858(self__.f,self__.ch,meta24859__$1));
}));

(cljs.core.async.t_cljs$core$async24858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24860){
var self__ = this;
var _24860__$1 = this;
return self__.meta24859;
}));

(cljs.core.async.t_cljs$core$async24858.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24858.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24858.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24858.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24858.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24861 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24861 = (function (f,ch,meta24859,_,fn1,meta24862){
this.f = f;
this.ch = ch;
this.meta24859 = meta24859;
this._ = _;
this.fn1 = fn1;
this.meta24862 = meta24862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24863,meta24862__$1){
var self__ = this;
var _24863__$1 = this;
return (new cljs.core.async.t_cljs$core$async24861(self__.f,self__.ch,self__.meta24859,self__._,self__.fn1,meta24862__$1));
}));

(cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24863){
var self__ = this;
var _24863__$1 = this;
return self__.meta24862;
}));

(cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__24857_SHARP_){
return f1.call(null,(((p1__24857_SHARP_ == null))?null:self__.f.call(null,p1__24857_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async24861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24859","meta24859",-966925521,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24858","cljs.core.async/t_cljs$core$async24858",1176000336,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24862","meta24862",-1916451830,null)], null);
}));

(cljs.core.async.t_cljs$core$async24861.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24861");

(cljs.core.async.t_cljs$core$async24861.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24861");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24861.
 */
cljs.core.async.__GT_t_cljs$core$async24861 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24861(f__$1,ch__$1,meta24859__$1,___$2,fn1__$1,meta24862){
return (new cljs.core.async.t_cljs$core$async24861(f__$1,ch__$1,meta24859__$1,___$2,fn1__$1,meta24862));
});

}

return (new cljs.core.async.t_cljs$core$async24861(self__.f,self__.ch,self__.meta24859,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async24858.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24858.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async24858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24859","meta24859",-966925521,null)], null);
}));

(cljs.core.async.t_cljs$core$async24858.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24858");

(cljs.core.async.t_cljs$core$async24858.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24858");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24858.
 */
cljs.core.async.__GT_t_cljs$core$async24858 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24858(f__$1,ch__$1,meta24859){
return (new cljs.core.async.t_cljs$core$async24858(f__$1,ch__$1,meta24859));
});

}

return (new cljs.core.async.t_cljs$core$async24858(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24864 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24864 = (function (f,ch,meta24865){
this.f = f;
this.ch = ch;
this.meta24865 = meta24865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24866,meta24865__$1){
var self__ = this;
var _24866__$1 = this;
return (new cljs.core.async.t_cljs$core$async24864(self__.f,self__.ch,meta24865__$1));
}));

(cljs.core.async.t_cljs$core$async24864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24866){
var self__ = this;
var _24866__$1 = this;
return self__.meta24865;
}));

(cljs.core.async.t_cljs$core$async24864.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24864.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24864.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24864.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async24864.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24864.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async24864.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24865","meta24865",1194735610,null)], null);
}));

(cljs.core.async.t_cljs$core$async24864.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24864.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24864");

(cljs.core.async.t_cljs$core$async24864.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24864");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24864.
 */
cljs.core.async.__GT_t_cljs$core$async24864 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24864(f__$1,ch__$1,meta24865){
return (new cljs.core.async.t_cljs$core$async24864(f__$1,ch__$1,meta24865));
});

}

return (new cljs.core.async.t_cljs$core$async24864(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24867 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24867 = (function (p,ch,meta24868){
this.p = p;
this.ch = ch;
this.meta24868 = meta24868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24869,meta24868__$1){
var self__ = this;
var _24869__$1 = this;
return (new cljs.core.async.t_cljs$core$async24867(self__.p,self__.ch,meta24868__$1));
}));

(cljs.core.async.t_cljs$core$async24867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24869){
var self__ = this;
var _24869__$1 = this;
return self__.meta24868;
}));

(cljs.core.async.t_cljs$core$async24867.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24867.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24867.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24867.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24867.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async24867.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24867.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async24867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24868","meta24868",-275084290,null)], null);
}));

(cljs.core.async.t_cljs$core$async24867.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24867");

(cljs.core.async.t_cljs$core$async24867.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24867");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24867.
 */
cljs.core.async.__GT_t_cljs$core$async24867 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24867(p__$1,ch__$1,meta24868){
return (new cljs.core.async.t_cljs$core$async24867(p__$1,ch__$1,meta24868));
});

}

return (new cljs.core.async.t_cljs$core$async24867(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__24871 = arguments.length;
switch (G__24871) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23360__auto___24911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_24892){
var state_val_24893 = (state_24892[(1)]);
if((state_val_24893 === (7))){
var inst_24888 = (state_24892[(2)]);
var state_24892__$1 = state_24892;
var statearr_24894_24912 = state_24892__$1;
(statearr_24894_24912[(2)] = inst_24888);

(statearr_24894_24912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24893 === (1))){
var state_24892__$1 = state_24892;
var statearr_24895_24913 = state_24892__$1;
(statearr_24895_24913[(2)] = null);

(statearr_24895_24913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24893 === (4))){
var inst_24874 = (state_24892[(7)]);
var inst_24874__$1 = (state_24892[(2)]);
var inst_24875 = (inst_24874__$1 == null);
var state_24892__$1 = (function (){var statearr_24896 = state_24892;
(statearr_24896[(7)] = inst_24874__$1);

return statearr_24896;
})();
if(cljs.core.truth_(inst_24875)){
var statearr_24897_24914 = state_24892__$1;
(statearr_24897_24914[(1)] = (5));

} else {
var statearr_24898_24915 = state_24892__$1;
(statearr_24898_24915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24893 === (6))){
var inst_24874 = (state_24892[(7)]);
var inst_24879 = p.call(null,inst_24874);
var state_24892__$1 = state_24892;
if(cljs.core.truth_(inst_24879)){
var statearr_24899_24916 = state_24892__$1;
(statearr_24899_24916[(1)] = (8));

} else {
var statearr_24900_24917 = state_24892__$1;
(statearr_24900_24917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24893 === (3))){
var inst_24890 = (state_24892[(2)]);
var state_24892__$1 = state_24892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24892__$1,inst_24890);
} else {
if((state_val_24893 === (2))){
var state_24892__$1 = state_24892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24892__$1,(4),ch);
} else {
if((state_val_24893 === (11))){
var inst_24882 = (state_24892[(2)]);
var state_24892__$1 = state_24892;
var statearr_24901_24918 = state_24892__$1;
(statearr_24901_24918[(2)] = inst_24882);

(statearr_24901_24918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24893 === (9))){
var state_24892__$1 = state_24892;
var statearr_24902_24919 = state_24892__$1;
(statearr_24902_24919[(2)] = null);

(statearr_24902_24919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24893 === (5))){
var inst_24877 = cljs.core.async.close_BANG_.call(null,out);
var state_24892__$1 = state_24892;
var statearr_24903_24920 = state_24892__$1;
(statearr_24903_24920[(2)] = inst_24877);

(statearr_24903_24920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24893 === (10))){
var inst_24885 = (state_24892[(2)]);
var state_24892__$1 = (function (){var statearr_24904 = state_24892;
(statearr_24904[(8)] = inst_24885);

return statearr_24904;
})();
var statearr_24905_24921 = state_24892__$1;
(statearr_24905_24921[(2)] = null);

(statearr_24905_24921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24893 === (8))){
var inst_24874 = (state_24892[(7)]);
var state_24892__$1 = state_24892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24892__$1,(11),out,inst_24874);
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
});
return (function() {
var cljs$core$async$state_machine__23266__auto__ = null;
var cljs$core$async$state_machine__23266__auto____0 = (function (){
var statearr_24906 = [null,null,null,null,null,null,null,null,null];
(statearr_24906[(0)] = cljs$core$async$state_machine__23266__auto__);

(statearr_24906[(1)] = (1));

return statearr_24906;
});
var cljs$core$async$state_machine__23266__auto____1 = (function (state_24892){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_24892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e24907){if((e24907 instanceof Object)){
var ex__23269__auto__ = e24907;
var statearr_24908_24922 = state_24892;
(statearr_24908_24922[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24923 = state_24892;
state_24892 = G__24923;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
cljs$core$async$state_machine__23266__auto__ = function(state_24892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23266__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23266__auto____1.call(this,state_24892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23266__auto____0;
cljs$core$async$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23266__auto____1;
return cljs$core$async$state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_24909 = f__23361__auto__.call(null);
(statearr_24909[(6)] = c__23360__auto___24911);

return statearr_24909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24925 = arguments.length;
switch (G__24925) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23360__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_24988){
var state_val_24989 = (state_24988[(1)]);
if((state_val_24989 === (7))){
var inst_24984 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
var statearr_24990_25028 = state_24988__$1;
(statearr_24990_25028[(2)] = inst_24984);

(statearr_24990_25028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (20))){
var inst_24954 = (state_24988[(7)]);
var inst_24965 = (state_24988[(2)]);
var inst_24966 = cljs.core.next.call(null,inst_24954);
var inst_24940 = inst_24966;
var inst_24941 = null;
var inst_24942 = (0);
var inst_24943 = (0);
var state_24988__$1 = (function (){var statearr_24991 = state_24988;
(statearr_24991[(8)] = inst_24943);

(statearr_24991[(9)] = inst_24940);

(statearr_24991[(10)] = inst_24941);

(statearr_24991[(11)] = inst_24965);

(statearr_24991[(12)] = inst_24942);

return statearr_24991;
})();
var statearr_24992_25029 = state_24988__$1;
(statearr_24992_25029[(2)] = null);

(statearr_24992_25029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (1))){
var state_24988__$1 = state_24988;
var statearr_24993_25030 = state_24988__$1;
(statearr_24993_25030[(2)] = null);

(statearr_24993_25030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (4))){
var inst_24929 = (state_24988[(13)]);
var inst_24929__$1 = (state_24988[(2)]);
var inst_24930 = (inst_24929__$1 == null);
var state_24988__$1 = (function (){var statearr_24994 = state_24988;
(statearr_24994[(13)] = inst_24929__$1);

return statearr_24994;
})();
if(cljs.core.truth_(inst_24930)){
var statearr_24995_25031 = state_24988__$1;
(statearr_24995_25031[(1)] = (5));

} else {
var statearr_24996_25032 = state_24988__$1;
(statearr_24996_25032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (15))){
var state_24988__$1 = state_24988;
var statearr_25000_25033 = state_24988__$1;
(statearr_25000_25033[(2)] = null);

(statearr_25000_25033[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (21))){
var state_24988__$1 = state_24988;
var statearr_25001_25034 = state_24988__$1;
(statearr_25001_25034[(2)] = null);

(statearr_25001_25034[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (13))){
var inst_24943 = (state_24988[(8)]);
var inst_24940 = (state_24988[(9)]);
var inst_24941 = (state_24988[(10)]);
var inst_24942 = (state_24988[(12)]);
var inst_24950 = (state_24988[(2)]);
var inst_24951 = (inst_24943 + (1));
var tmp24997 = inst_24940;
var tmp24998 = inst_24941;
var tmp24999 = inst_24942;
var inst_24940__$1 = tmp24997;
var inst_24941__$1 = tmp24998;
var inst_24942__$1 = tmp24999;
var inst_24943__$1 = inst_24951;
var state_24988__$1 = (function (){var statearr_25002 = state_24988;
(statearr_25002[(8)] = inst_24943__$1);

(statearr_25002[(9)] = inst_24940__$1);

(statearr_25002[(10)] = inst_24941__$1);

(statearr_25002[(12)] = inst_24942__$1);

(statearr_25002[(14)] = inst_24950);

return statearr_25002;
})();
var statearr_25003_25035 = state_24988__$1;
(statearr_25003_25035[(2)] = null);

(statearr_25003_25035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (22))){
var state_24988__$1 = state_24988;
var statearr_25004_25036 = state_24988__$1;
(statearr_25004_25036[(2)] = null);

(statearr_25004_25036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (6))){
var inst_24929 = (state_24988[(13)]);
var inst_24938 = f.call(null,inst_24929);
var inst_24939 = cljs.core.seq.call(null,inst_24938);
var inst_24940 = inst_24939;
var inst_24941 = null;
var inst_24942 = (0);
var inst_24943 = (0);
var state_24988__$1 = (function (){var statearr_25005 = state_24988;
(statearr_25005[(8)] = inst_24943);

(statearr_25005[(9)] = inst_24940);

(statearr_25005[(10)] = inst_24941);

(statearr_25005[(12)] = inst_24942);

return statearr_25005;
})();
var statearr_25006_25037 = state_24988__$1;
(statearr_25006_25037[(2)] = null);

(statearr_25006_25037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (17))){
var inst_24954 = (state_24988[(7)]);
var inst_24958 = cljs.core.chunk_first.call(null,inst_24954);
var inst_24959 = cljs.core.chunk_rest.call(null,inst_24954);
var inst_24960 = cljs.core.count.call(null,inst_24958);
var inst_24940 = inst_24959;
var inst_24941 = inst_24958;
var inst_24942 = inst_24960;
var inst_24943 = (0);
var state_24988__$1 = (function (){var statearr_25007 = state_24988;
(statearr_25007[(8)] = inst_24943);

(statearr_25007[(9)] = inst_24940);

(statearr_25007[(10)] = inst_24941);

(statearr_25007[(12)] = inst_24942);

return statearr_25007;
})();
var statearr_25008_25038 = state_24988__$1;
(statearr_25008_25038[(2)] = null);

(statearr_25008_25038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (3))){
var inst_24986 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24988__$1,inst_24986);
} else {
if((state_val_24989 === (12))){
var inst_24974 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
var statearr_25009_25039 = state_24988__$1;
(statearr_25009_25039[(2)] = inst_24974);

(statearr_25009_25039[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (2))){
var state_24988__$1 = state_24988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24988__$1,(4),in$);
} else {
if((state_val_24989 === (23))){
var inst_24982 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
var statearr_25010_25040 = state_24988__$1;
(statearr_25010_25040[(2)] = inst_24982);

(statearr_25010_25040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (19))){
var inst_24969 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
var statearr_25011_25041 = state_24988__$1;
(statearr_25011_25041[(2)] = inst_24969);

(statearr_25011_25041[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (11))){
var inst_24940 = (state_24988[(9)]);
var inst_24954 = (state_24988[(7)]);
var inst_24954__$1 = cljs.core.seq.call(null,inst_24940);
var state_24988__$1 = (function (){var statearr_25012 = state_24988;
(statearr_25012[(7)] = inst_24954__$1);

return statearr_25012;
})();
if(inst_24954__$1){
var statearr_25013_25042 = state_24988__$1;
(statearr_25013_25042[(1)] = (14));

} else {
var statearr_25014_25043 = state_24988__$1;
(statearr_25014_25043[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (9))){
var inst_24976 = (state_24988[(2)]);
var inst_24977 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24988__$1 = (function (){var statearr_25015 = state_24988;
(statearr_25015[(15)] = inst_24976);

return statearr_25015;
})();
if(cljs.core.truth_(inst_24977)){
var statearr_25016_25044 = state_24988__$1;
(statearr_25016_25044[(1)] = (21));

} else {
var statearr_25017_25045 = state_24988__$1;
(statearr_25017_25045[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (5))){
var inst_24932 = cljs.core.async.close_BANG_.call(null,out);
var state_24988__$1 = state_24988;
var statearr_25018_25046 = state_24988__$1;
(statearr_25018_25046[(2)] = inst_24932);

(statearr_25018_25046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (14))){
var inst_24954 = (state_24988[(7)]);
var inst_24956 = cljs.core.chunked_seq_QMARK_.call(null,inst_24954);
var state_24988__$1 = state_24988;
if(inst_24956){
var statearr_25019_25047 = state_24988__$1;
(statearr_25019_25047[(1)] = (17));

} else {
var statearr_25020_25048 = state_24988__$1;
(statearr_25020_25048[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (16))){
var inst_24972 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
var statearr_25021_25049 = state_24988__$1;
(statearr_25021_25049[(2)] = inst_24972);

(statearr_25021_25049[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (10))){
var inst_24943 = (state_24988[(8)]);
var inst_24941 = (state_24988[(10)]);
var inst_24948 = cljs.core._nth.call(null,inst_24941,inst_24943);
var state_24988__$1 = state_24988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24988__$1,(13),out,inst_24948);
} else {
if((state_val_24989 === (18))){
var inst_24954 = (state_24988[(7)]);
var inst_24963 = cljs.core.first.call(null,inst_24954);
var state_24988__$1 = state_24988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24988__$1,(20),out,inst_24963);
} else {
if((state_val_24989 === (8))){
var inst_24943 = (state_24988[(8)]);
var inst_24942 = (state_24988[(12)]);
var inst_24945 = (inst_24943 < inst_24942);
var inst_24946 = inst_24945;
var state_24988__$1 = state_24988;
if(cljs.core.truth_(inst_24946)){
var statearr_25022_25050 = state_24988__$1;
(statearr_25022_25050[(1)] = (10));

} else {
var statearr_25023_25051 = state_24988__$1;
(statearr_25023_25051[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23266__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23266__auto____0 = (function (){
var statearr_25024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25024[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23266__auto__);

(statearr_25024[(1)] = (1));

return statearr_25024;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23266__auto____1 = (function (state_24988){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_24988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e25025){if((e25025 instanceof Object)){
var ex__23269__auto__ = e25025;
var statearr_25026_25052 = state_24988;
(statearr_25026_25052[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25053 = state_24988;
state_24988 = G__25053;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23266__auto__ = function(state_24988){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23266__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23266__auto____1.call(this,state_24988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23266__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23266__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_25027 = f__23361__auto__.call(null);
(statearr_25027[(6)] = c__23360__auto__);

return statearr_25027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));

return c__23360__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25055 = arguments.length;
switch (G__25055) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25058 = arguments.length;
switch (G__25058) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25061 = arguments.length;
switch (G__25061) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23360__auto___25108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_25085){
var state_val_25086 = (state_25085[(1)]);
if((state_val_25086 === (7))){
var inst_25080 = (state_25085[(2)]);
var state_25085__$1 = state_25085;
var statearr_25087_25109 = state_25085__$1;
(statearr_25087_25109[(2)] = inst_25080);

(statearr_25087_25109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (1))){
var inst_25062 = null;
var state_25085__$1 = (function (){var statearr_25088 = state_25085;
(statearr_25088[(7)] = inst_25062);

return statearr_25088;
})();
var statearr_25089_25110 = state_25085__$1;
(statearr_25089_25110[(2)] = null);

(statearr_25089_25110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (4))){
var inst_25065 = (state_25085[(8)]);
var inst_25065__$1 = (state_25085[(2)]);
var inst_25066 = (inst_25065__$1 == null);
var inst_25067 = cljs.core.not.call(null,inst_25066);
var state_25085__$1 = (function (){var statearr_25090 = state_25085;
(statearr_25090[(8)] = inst_25065__$1);

return statearr_25090;
})();
if(inst_25067){
var statearr_25091_25111 = state_25085__$1;
(statearr_25091_25111[(1)] = (5));

} else {
var statearr_25092_25112 = state_25085__$1;
(statearr_25092_25112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (6))){
var state_25085__$1 = state_25085;
var statearr_25093_25113 = state_25085__$1;
(statearr_25093_25113[(2)] = null);

(statearr_25093_25113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (3))){
var inst_25082 = (state_25085[(2)]);
var inst_25083 = cljs.core.async.close_BANG_.call(null,out);
var state_25085__$1 = (function (){var statearr_25094 = state_25085;
(statearr_25094[(9)] = inst_25082);

return statearr_25094;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25085__$1,inst_25083);
} else {
if((state_val_25086 === (2))){
var state_25085__$1 = state_25085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25085__$1,(4),ch);
} else {
if((state_val_25086 === (11))){
var inst_25065 = (state_25085[(8)]);
var inst_25074 = (state_25085[(2)]);
var inst_25062 = inst_25065;
var state_25085__$1 = (function (){var statearr_25095 = state_25085;
(statearr_25095[(10)] = inst_25074);

(statearr_25095[(7)] = inst_25062);

return statearr_25095;
})();
var statearr_25096_25114 = state_25085__$1;
(statearr_25096_25114[(2)] = null);

(statearr_25096_25114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (9))){
var inst_25065 = (state_25085[(8)]);
var state_25085__$1 = state_25085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25085__$1,(11),out,inst_25065);
} else {
if((state_val_25086 === (5))){
var inst_25065 = (state_25085[(8)]);
var inst_25062 = (state_25085[(7)]);
var inst_25069 = cljs.core._EQ_.call(null,inst_25065,inst_25062);
var state_25085__$1 = state_25085;
if(inst_25069){
var statearr_25098_25115 = state_25085__$1;
(statearr_25098_25115[(1)] = (8));

} else {
var statearr_25099_25116 = state_25085__$1;
(statearr_25099_25116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (10))){
var inst_25077 = (state_25085[(2)]);
var state_25085__$1 = state_25085;
var statearr_25100_25117 = state_25085__$1;
(statearr_25100_25117[(2)] = inst_25077);

(statearr_25100_25117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (8))){
var inst_25062 = (state_25085[(7)]);
var tmp25097 = inst_25062;
var inst_25062__$1 = tmp25097;
var state_25085__$1 = (function (){var statearr_25101 = state_25085;
(statearr_25101[(7)] = inst_25062__$1);

return statearr_25101;
})();
var statearr_25102_25118 = state_25085__$1;
(statearr_25102_25118[(2)] = null);

(statearr_25102_25118[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__23266__auto__ = null;
var cljs$core$async$state_machine__23266__auto____0 = (function (){
var statearr_25103 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25103[(0)] = cljs$core$async$state_machine__23266__auto__);

(statearr_25103[(1)] = (1));

return statearr_25103;
});
var cljs$core$async$state_machine__23266__auto____1 = (function (state_25085){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_25085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e25104){if((e25104 instanceof Object)){
var ex__23269__auto__ = e25104;
var statearr_25105_25119 = state_25085;
(statearr_25105_25119[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25120 = state_25085;
state_25085 = G__25120;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
cljs$core$async$state_machine__23266__auto__ = function(state_25085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23266__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23266__auto____1.call(this,state_25085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23266__auto____0;
cljs$core$async$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23266__auto____1;
return cljs$core$async$state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_25106 = f__23361__auto__.call(null);
(statearr_25106[(6)] = c__23360__auto___25108);

return statearr_25106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25122 = arguments.length;
switch (G__25122) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23360__auto___25188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_25160){
var state_val_25161 = (state_25160[(1)]);
if((state_val_25161 === (7))){
var inst_25156 = (state_25160[(2)]);
var state_25160__$1 = state_25160;
var statearr_25162_25189 = state_25160__$1;
(statearr_25162_25189[(2)] = inst_25156);

(statearr_25162_25189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (1))){
var inst_25123 = (new Array(n));
var inst_25124 = inst_25123;
var inst_25125 = (0);
var state_25160__$1 = (function (){var statearr_25163 = state_25160;
(statearr_25163[(7)] = inst_25124);

(statearr_25163[(8)] = inst_25125);

return statearr_25163;
})();
var statearr_25164_25190 = state_25160__$1;
(statearr_25164_25190[(2)] = null);

(statearr_25164_25190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (4))){
var inst_25128 = (state_25160[(9)]);
var inst_25128__$1 = (state_25160[(2)]);
var inst_25129 = (inst_25128__$1 == null);
var inst_25130 = cljs.core.not.call(null,inst_25129);
var state_25160__$1 = (function (){var statearr_25165 = state_25160;
(statearr_25165[(9)] = inst_25128__$1);

return statearr_25165;
})();
if(inst_25130){
var statearr_25166_25191 = state_25160__$1;
(statearr_25166_25191[(1)] = (5));

} else {
var statearr_25167_25192 = state_25160__$1;
(statearr_25167_25192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (15))){
var inst_25150 = (state_25160[(2)]);
var state_25160__$1 = state_25160;
var statearr_25168_25193 = state_25160__$1;
(statearr_25168_25193[(2)] = inst_25150);

(statearr_25168_25193[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (13))){
var state_25160__$1 = state_25160;
var statearr_25169_25194 = state_25160__$1;
(statearr_25169_25194[(2)] = null);

(statearr_25169_25194[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (6))){
var inst_25125 = (state_25160[(8)]);
var inst_25146 = (inst_25125 > (0));
var state_25160__$1 = state_25160;
if(cljs.core.truth_(inst_25146)){
var statearr_25170_25195 = state_25160__$1;
(statearr_25170_25195[(1)] = (12));

} else {
var statearr_25171_25196 = state_25160__$1;
(statearr_25171_25196[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (3))){
var inst_25158 = (state_25160[(2)]);
var state_25160__$1 = state_25160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25160__$1,inst_25158);
} else {
if((state_val_25161 === (12))){
var inst_25124 = (state_25160[(7)]);
var inst_25148 = cljs.core.vec.call(null,inst_25124);
var state_25160__$1 = state_25160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25160__$1,(15),out,inst_25148);
} else {
if((state_val_25161 === (2))){
var state_25160__$1 = state_25160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25160__$1,(4),ch);
} else {
if((state_val_25161 === (11))){
var inst_25140 = (state_25160[(2)]);
var inst_25141 = (new Array(n));
var inst_25124 = inst_25141;
var inst_25125 = (0);
var state_25160__$1 = (function (){var statearr_25172 = state_25160;
(statearr_25172[(7)] = inst_25124);

(statearr_25172[(10)] = inst_25140);

(statearr_25172[(8)] = inst_25125);

return statearr_25172;
})();
var statearr_25173_25197 = state_25160__$1;
(statearr_25173_25197[(2)] = null);

(statearr_25173_25197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (9))){
var inst_25124 = (state_25160[(7)]);
var inst_25138 = cljs.core.vec.call(null,inst_25124);
var state_25160__$1 = state_25160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25160__$1,(11),out,inst_25138);
} else {
if((state_val_25161 === (5))){
var inst_25124 = (state_25160[(7)]);
var inst_25133 = (state_25160[(11)]);
var inst_25128 = (state_25160[(9)]);
var inst_25125 = (state_25160[(8)]);
var inst_25132 = (inst_25124[inst_25125] = inst_25128);
var inst_25133__$1 = (inst_25125 + (1));
var inst_25134 = (inst_25133__$1 < n);
var state_25160__$1 = (function (){var statearr_25174 = state_25160;
(statearr_25174[(11)] = inst_25133__$1);

(statearr_25174[(12)] = inst_25132);

return statearr_25174;
})();
if(cljs.core.truth_(inst_25134)){
var statearr_25175_25198 = state_25160__$1;
(statearr_25175_25198[(1)] = (8));

} else {
var statearr_25176_25199 = state_25160__$1;
(statearr_25176_25199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (14))){
var inst_25153 = (state_25160[(2)]);
var inst_25154 = cljs.core.async.close_BANG_.call(null,out);
var state_25160__$1 = (function (){var statearr_25178 = state_25160;
(statearr_25178[(13)] = inst_25153);

return statearr_25178;
})();
var statearr_25179_25200 = state_25160__$1;
(statearr_25179_25200[(2)] = inst_25154);

(statearr_25179_25200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (10))){
var inst_25144 = (state_25160[(2)]);
var state_25160__$1 = state_25160;
var statearr_25180_25201 = state_25160__$1;
(statearr_25180_25201[(2)] = inst_25144);

(statearr_25180_25201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25161 === (8))){
var inst_25124 = (state_25160[(7)]);
var inst_25133 = (state_25160[(11)]);
var tmp25177 = inst_25124;
var inst_25124__$1 = tmp25177;
var inst_25125 = inst_25133;
var state_25160__$1 = (function (){var statearr_25181 = state_25160;
(statearr_25181[(7)] = inst_25124__$1);

(statearr_25181[(8)] = inst_25125);

return statearr_25181;
})();
var statearr_25182_25202 = state_25160__$1;
(statearr_25182_25202[(2)] = null);

(statearr_25182_25202[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__23266__auto__ = null;
var cljs$core$async$state_machine__23266__auto____0 = (function (){
var statearr_25183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25183[(0)] = cljs$core$async$state_machine__23266__auto__);

(statearr_25183[(1)] = (1));

return statearr_25183;
});
var cljs$core$async$state_machine__23266__auto____1 = (function (state_25160){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_25160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e25184){if((e25184 instanceof Object)){
var ex__23269__auto__ = e25184;
var statearr_25185_25203 = state_25160;
(statearr_25185_25203[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25204 = state_25160;
state_25160 = G__25204;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
cljs$core$async$state_machine__23266__auto__ = function(state_25160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23266__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23266__auto____1.call(this,state_25160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23266__auto____0;
cljs$core$async$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23266__auto____1;
return cljs$core$async$state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_25186 = f__23361__auto__.call(null);
(statearr_25186[(6)] = c__23360__auto___25188);

return statearr_25186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25206 = arguments.length;
switch (G__25206) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23360__auto___25276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23361__auto__ = (function (){var switch__23265__auto__ = (function (state_25248){
var state_val_25249 = (state_25248[(1)]);
if((state_val_25249 === (7))){
var inst_25244 = (state_25248[(2)]);
var state_25248__$1 = state_25248;
var statearr_25250_25277 = state_25248__$1;
(statearr_25250_25277[(2)] = inst_25244);

(statearr_25250_25277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25249 === (1))){
var inst_25207 = [];
var inst_25208 = inst_25207;
var inst_25209 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25248__$1 = (function (){var statearr_25251 = state_25248;
(statearr_25251[(7)] = inst_25209);

(statearr_25251[(8)] = inst_25208);

return statearr_25251;
})();
var statearr_25252_25278 = state_25248__$1;
(statearr_25252_25278[(2)] = null);

(statearr_25252_25278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25249 === (4))){
var inst_25212 = (state_25248[(9)]);
var inst_25212__$1 = (state_25248[(2)]);
var inst_25213 = (inst_25212__$1 == null);
var inst_25214 = cljs.core.not.call(null,inst_25213);
var state_25248__$1 = (function (){var statearr_25253 = state_25248;
(statearr_25253[(9)] = inst_25212__$1);

return statearr_25253;
})();
if(inst_25214){
var statearr_25254_25279 = state_25248__$1;
(statearr_25254_25279[(1)] = (5));

} else {
var statearr_25255_25280 = state_25248__$1;
(statearr_25255_25280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25249 === (15))){
var inst_25238 = (state_25248[(2)]);
var state_25248__$1 = state_25248;
var statearr_25256_25281 = state_25248__$1;
(statearr_25256_25281[(2)] = inst_25238);

(statearr_25256_25281[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25249 === (13))){
var state_25248__$1 = state_25248;
var statearr_25257_25282 = state_25248__$1;
(statearr_25257_25282[(2)] = null);

(statearr_25257_25282[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25249 === (6))){
var inst_25208 = (state_25248[(8)]);
var inst_25233 = inst_25208.length;
var inst_25234 = (inst_25233 > (0));
var state_25248__$1 = state_25248;
if(cljs.core.truth_(inst_25234)){
var statearr_25258_25283 = state_25248__$1;
(statearr_25258_25283[(1)] = (12));

} else {
var statearr_25259_25284 = state_25248__$1;
(statearr_25259_25284[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25249 === (3))){
var inst_25246 = (state_25248[(2)]);
var state_25248__$1 = state_25248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25248__$1,inst_25246);
} else {
if((state_val_25249 === (12))){
var inst_25208 = (state_25248[(8)]);
var inst_25236 = cljs.core.vec.call(null,inst_25208);
var state_25248__$1 = state_25248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25248__$1,(15),out,inst_25236);
} else {
if((state_val_25249 === (2))){
var state_25248__$1 = state_25248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25248__$1,(4),ch);
} else {
if((state_val_25249 === (11))){
var inst_25216 = (state_25248[(10)]);
var inst_25212 = (state_25248[(9)]);
var inst_25226 = (state_25248[(2)]);
var inst_25227 = [];
var inst_25228 = inst_25227.push(inst_25212);
var inst_25208 = inst_25227;
var inst_25209 = inst_25216;
var state_25248__$1 = (function (){var statearr_25260 = state_25248;
(statearr_25260[(11)] = inst_25228);

(statearr_25260[(12)] = inst_25226);

(statearr_25260[(7)] = inst_25209);

(statearr_25260[(8)] = inst_25208);

return statearr_25260;
})();
var statearr_25261_25285 = state_25248__$1;
(statearr_25261_25285[(2)] = null);

(statearr_25261_25285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25249 === (9))){
var inst_25208 = (state_25248[(8)]);
var inst_25224 = cljs.core.vec.call(null,inst_25208);
var state_25248__$1 = state_25248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25248__$1,(11),out,inst_25224);
} else {
if((state_val_25249 === (5))){
var inst_25216 = (state_25248[(10)]);
var inst_25209 = (state_25248[(7)]);
var inst_25212 = (state_25248[(9)]);
var inst_25216__$1 = f.call(null,inst_25212);
var inst_25217 = cljs.core._EQ_.call(null,inst_25216__$1,inst_25209);
var inst_25218 = cljs.core.keyword_identical_QMARK_.call(null,inst_25209,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25219 = ((inst_25217) || (inst_25218));
var state_25248__$1 = (function (){var statearr_25262 = state_25248;
(statearr_25262[(10)] = inst_25216__$1);

return statearr_25262;
})();
if(cljs.core.truth_(inst_25219)){
var statearr_25263_25286 = state_25248__$1;
(statearr_25263_25286[(1)] = (8));

} else {
var statearr_25264_25287 = state_25248__$1;
(statearr_25264_25287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25249 === (14))){
var inst_25241 = (state_25248[(2)]);
var inst_25242 = cljs.core.async.close_BANG_.call(null,out);
var state_25248__$1 = (function (){var statearr_25266 = state_25248;
(statearr_25266[(13)] = inst_25241);

return statearr_25266;
})();
var statearr_25267_25288 = state_25248__$1;
(statearr_25267_25288[(2)] = inst_25242);

(statearr_25267_25288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25249 === (10))){
var inst_25231 = (state_25248[(2)]);
var state_25248__$1 = state_25248;
var statearr_25268_25289 = state_25248__$1;
(statearr_25268_25289[(2)] = inst_25231);

(statearr_25268_25289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25249 === (8))){
var inst_25216 = (state_25248[(10)]);
var inst_25212 = (state_25248[(9)]);
var inst_25208 = (state_25248[(8)]);
var inst_25221 = inst_25208.push(inst_25212);
var tmp25265 = inst_25208;
var inst_25208__$1 = tmp25265;
var inst_25209 = inst_25216;
var state_25248__$1 = (function (){var statearr_25269 = state_25248;
(statearr_25269[(14)] = inst_25221);

(statearr_25269[(7)] = inst_25209);

(statearr_25269[(8)] = inst_25208__$1);

return statearr_25269;
})();
var statearr_25270_25290 = state_25248__$1;
(statearr_25270_25290[(2)] = null);

(statearr_25270_25290[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__23266__auto__ = null;
var cljs$core$async$state_machine__23266__auto____0 = (function (){
var statearr_25271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25271[(0)] = cljs$core$async$state_machine__23266__auto__);

(statearr_25271[(1)] = (1));

return statearr_25271;
});
var cljs$core$async$state_machine__23266__auto____1 = (function (state_25248){
while(true){
var ret_value__23267__auto__ = (function (){try{while(true){
var result__23268__auto__ = switch__23265__auto__.call(null,state_25248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23268__auto__;
}
break;
}
}catch (e25272){if((e25272 instanceof Object)){
var ex__23269__auto__ = e25272;
var statearr_25273_25291 = state_25248;
(statearr_25273_25291[(5)] = ex__23269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25292 = state_25248;
state_25248 = G__25292;
continue;
} else {
return ret_value__23267__auto__;
}
break;
}
});
cljs$core$async$state_machine__23266__auto__ = function(state_25248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23266__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23266__auto____1.call(this,state_25248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23266__auto____0;
cljs$core$async$state_machine__23266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23266__auto____1;
return cljs$core$async$state_machine__23266__auto__;
})()
})();
var state__23362__auto__ = (function (){var statearr_25274 = f__23361__auto__.call(null);
(statearr_25274[(6)] = c__23360__auto___25276);

return statearr_25274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23362__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1731626417072
