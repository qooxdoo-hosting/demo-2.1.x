qx.$$packageData['5']={"resources":{}};
qx.Part.$$notifyLoad("5", function() {
(function(){var a="qx.ui.window.IWindowManager";qx.Interface.define(a,{members:{setDesktop:function(b){this.assertInterface(b,qx.ui.window.IDesktop);},changeActiveWindow:function(c,d){},updateStack:function(){},bringToFront:function(e){this.assertInstance(e,qx.ui.window.Window);},sendToBack:function(f){this.assertInstance(f,qx.ui.window.Window);}}});})();(function(){var b="qx.ui.window.Manager",a="__qv";qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__qv:null,setDesktop:function(c){this.__qv=c;this.updateStack();},getDesktop:function(){return this.__qv;},changeActiveWindow:function(d,e){if(d){this.bringToFront(d);d.setActive(true);};if(e){e.resetActive();};},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);},syncWidget:function(){this.__qv.forceUnblockContent();var f=this.__qv.getWindows();var h=this._minZIndex;var m=h+f.length*2;var j=h+f.length*4;var k=null;for(var i=0,l=f.length;i<l;i++){var g=f[i];if(!g.isVisible()){continue;};k=k||g;if(g.isModal()){g.setZIndex(j);this.__qv.blockContent(j-1);j+=2;k=g;}else if(g.isAlwaysOnTop()){g.setZIndex(m);m+=2;}else {g.setZIndex(h);h+=2;};if(!k.isModal()&&g.isActive()||g.getZIndex()>k.getZIndex()){k=g;};};this.__qv.setActiveWindow(k);},bringToFront:function(n){var o=this.__qv.getWindows();var p=qx.lang.Array.remove(o,n);if(p){o.push(n);this.updateStack();};},sendToBack:function(q){var r=this.__qv.getWindows();var s=qx.lang.Array.remove(r,q);if(s){r.unshift(q);this.updateStack();};}},destruct:function(){this._disposeObjects(a);}});})();(function(){var l="mouseup",k="mousedown",j="losecapture",i="qx.ui.core.MMovable",h="__qx",g="__qw",f="mousemove",d="maximized",c="move-frame",b="Boolean",a="move";qx.Mixin.define(i,{properties:{movable:{check:b,init:true},useMoveFrame:{check:b,init:false}},members:{__qw:null,__qx:null,__qy:null,__qz:null,__qA:null,__qB:null,__qC:null,__qD:false,__qE:null,__qF:0,_activateMoveHandle:function(m){if(this.__qw){throw new Error("The move handle could not be redefined!");};this.__qw=m;m.addListener(k,this._onMoveMouseDown,this);m.addListener(l,this._onMoveMouseUp,this);m.addListener(f,this._onMoveMouseMove,this);m.addListener(j,this.__qJ,this);},__qG:function(){var n=this.__qx;if(!n){n=this.__qx=new qx.ui.core.Widget();n.setAppearance(c);n.exclude();qx.core.Init.getApplication().getRoot().add(n);};return n;},__qH:function(){var location=this.getContainerLocation();var p=this.getBounds();var o=this.__qG();o.setUserBounds(location.left,location.top,p.width,p.height);o.show();o.setZIndex(this.getZIndex()+1);},__qI:function(e){var r=this.__qy;var u=Math.max(r.left,Math.min(r.right,e.getDocumentLeft()));var t=Math.max(r.top,Math.min(r.bottom,e.getDocumentTop()));var q=this.__qz+u;var s=this.__qA+t;return {viewportLeft:q,viewportTop:s,parentLeft:q-this.__qB,parentTop:s-this.__qC};},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(d)){return;};var parent=this.getLayoutParent();var w=parent.getContentLocation();var x=parent.getBounds();if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__qE=parent.getBlockerColor();this.__qF=parent.getBlockerOpacity();parent.setBlockerColor(null);parent.setBlockerOpacity(1);parent.blockContent(this.getZIndex()-1);this.__qD=true;};};this.__qy={left:w.left,top:w.top,right:w.left+x.width,bottom:w.top+x.height};var v=this.getContainerLocation();this.__qB=w.left;this.__qC=w.top;this.__qz=v.left-e.getDocumentLeft();this.__qA=v.top-e.getDocumentTop();this.addState(a);this.__qw.capture();if(this.getUseMoveFrame()){this.__qH();};e.stop();},_onMoveMouseMove:function(e){if(!this.hasState(a)){return;};var y=this.__qI(e);if(this.getUseMoveFrame()){this.__qG().setDomPosition(y.viewportLeft,y.viewportTop);}else {this.setDomPosition(y.parentLeft,y.parentTop);};e.stopPropagation();},_onMoveMouseUp:function(e){if(!this.hasState(a)){return;};this.removeState(a);var parent=this.getLayoutParent();if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__qD){parent.unblockContent();parent.setBlockerColor(this.__qE);parent.setBlockerOpacity(this.__qF);this.__qE=null;this.__qF=0;this.__qD=false;};};this.__qw.releaseCapture();var z=this.__qI(e);this.setLayoutProperties({left:z.parentLeft,top:z.parentTop});if(this.getUseMoveFrame()){this.__qG().exclude();};e.stopPropagation();},__qJ:function(e){if(!this.hasState(a)){return;};this.removeState(a);if(this.getUseMoveFrame()){this.__qG().exclude();};}},destruct:function(){this._disposeObjects(h,g);this.__qy=null;}});})();(function(){var k="mousedown",j="w-resize",i="sw-resize",h="n-resize",g="resizableRight",f="ne-resize",d="se-resize",c="Integer",b="e-resize",a="resizableLeft",z="mousemove",y="move",x="shorthand",w="maximized",v="nw-resize",u="mouseout",t="qx.ui.core.MResizable",s="mouseup",r="losecapture",q="resize-frame",o="resizableBottom",p="s-resize",m="resizableTop",n="Boolean",l="resize";qx.Mixin.define(t,{construct:function(){var A=this.getContainerElement();A.addListener(k,this.__qX,this,true);A.addListener(s,this.__qY,this);A.addListener(z,this.__rb,this);A.addListener(u,this.__rc,this);A.addListener(r,this.__ra,this);var B=this.getContainerElement().getDomElement();if(B==null){B=window;};this.__qK=qx.event.Registration.getManager(B).getHandler(qx.event.handler.DragDrop);},properties:{resizableTop:{check:n,init:true},resizableRight:{check:n,init:true},resizableBottom:{check:n,init:true},resizableLeft:{check:n,init:true},resizable:{group:[m,g,o,a],mode:x},resizeSensitivity:{check:c,init:5},useResizeFrame:{check:n,init:true}},members:{__qK:null,__qL:null,__qM:null,__qN:null,__qO:null,__qP:null,__qQ:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,_getResizeFrame:function(){var C=this.__qL;if(!C){C=this.__qL=new qx.ui.core.Widget();C.setAppearance(q);C.exclude();qx.core.Init.getApplication().getRoot().add(C);};return C;},__qR:function(){var location=this.__qU();var D=this._getResizeFrame();D.setUserBounds(location.left,location.top,location.right-location.left,location.bottom-location.top);D.show();D.setZIndex(this.getZIndex()+1);},__qS:function(e){var F=this.__qM;var G=this.getSizeHint();var K=this.__qQ;var J=this.__qP;var E=J.width;var I=J.height;var H=J.containerWidth;var M=J.containerHeight;var N=J.left;var top=J.top;var L;if((F&this.RESIZE_TOP)||(F&this.RESIZE_BOTTOM)){L=Math.max(K.top,Math.min(K.bottom,e.getDocumentTop()))-this.__qO;if(F&this.RESIZE_TOP){I-=L;M-=L;}else {I+=L;M+=L;};if(M<G.minHeight){I+=(G.minHeight-M);M=G.minHeight;}else if(M>G.maxHeight){I-=(M-G.maxHeight);M=G.maxHeight;};if(F&this.RESIZE_TOP){top+=J.containerHeight-M;};};if((F&this.RESIZE_LEFT)||(F&this.RESIZE_RIGHT)){L=Math.max(K.left,Math.min(K.right,e.getDocumentLeft()))-this.__qN;if(F&this.RESIZE_LEFT){E-=L;H-=L;}else {E+=L;H+=L;};if(H<G.minWidth){E+=(G.minWidth-H);H=G.minWidth;}else if(E>G.maxWidth){E-=(H-G.maxWidth);H=G.maxWidth;};if(F&this.RESIZE_LEFT){N+=J.containerWidth-H;};};return {viewportLeft:N,viewportTop:top,parentLeft:J.bounds.left+N-J.left,parentTop:J.bounds.top+top-J.top,containerWidth:H,containerHeight:M,width:E,height:I};},__qT:{'1':h,'2':p,'4':j,'8':b,'5':v,'6':i,'9':f,'10':d},__qU:function(){var O=this.getDecoratorElement();if(O&&O.getDomElement()){return qx.bom.element.Location.get(O.getDomElement());}else {return this.getContentLocation();};},__qV:function(e){var location=this.__qU();var P=this.getResizeSensitivity();var S=e.getDocumentLeft();var R=e.getDocumentTop();var Q=this.__qW(location,S,R,P);if(Q>0){Q=Q|this.__qW(location,S,R,P*2);};this.__qM=Q;},__qW:function(location,T,U,V){var W=0;if(this.getResizableTop()&&Math.abs(location.top-U)<V&&T>location.left-V&&T<location.right+V){W+=this.RESIZE_TOP;}else if(this.getResizableBottom()&&Math.abs(location.bottom-U)<V&&T>location.left-V&&T<location.right+V){W+=this.RESIZE_BOTTOM;};if(this.getResizableLeft()&&Math.abs(location.left-T)<V&&U>location.top-V&&U<location.bottom+V){W+=this.RESIZE_LEFT;}else if(this.getResizableRight()&&Math.abs(location.right-T)<V&&U>location.top-V&&U<location.bottom+V){W+=this.RESIZE_RIGHT;};return W;},__qX:function(e){if(!this.__qM||!this.getEnabled()){return;};this.addState(l);this.__qN=e.getDocumentLeft();this.__qO=e.getDocumentTop();var bb=this.getContainerLocation();var X=this.__qU();var ba=this.getBounds();this.__qP={top:X.top,left:X.left,containerWidth:bb.right-bb.left,containerHeight:bb.bottom-bb.top,width:X.right-X.left,height:X.bottom-X.top,bounds:qx.lang.Object.clone(ba)};var parent=this.getLayoutParent();var bc=parent.getContentLocation();var Y=parent.getBounds();this.__qQ={left:bc.left,top:bc.top,right:bc.left+Y.width,bottom:bc.top+Y.height};if(this.getUseResizeFrame()){this.__qR();};this.capture();e.stop();},__qY:function(e){if(!this.hasState(l)||!this.getEnabled()){return;};if(this.getUseResizeFrame()){this._getResizeFrame().exclude();};var bd=this.__qS(e);this.setWidth(bd.containerWidth);this.setHeight(bd.containerHeight);if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:bd.parentLeft,top:bd.parentTop});};this.__qM=0;this.removeState(l);this.resetCursor();this.getApplicationRoot().resetGlobalCursor();this.releaseCapture();e.stopPropagation();},__ra:function(e){if(!this.__qM){return;};this.resetCursor();this.getApplicationRoot().resetGlobalCursor();this.removeState(y);if(this.getUseResizeFrame()){this._getResizeFrame().exclude();};},__rb:function(e){if(!this.getEnabled()){return;};if(this.hasState(l)){var bh=this.__qS(e);if(this.getUseResizeFrame()){var bf=this._getResizeFrame();bf.setUserBounds(bh.viewportLeft,bh.viewportTop,bh.width,bh.height);}else {this.setWidth(bh.containerWidth);this.setHeight(bh.containerHeight);if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:bh.parentLeft,top:bh.parentTop});};};e.stopPropagation();}else if(!this.hasState(w)&&!this.__qK.isSessionActive()){this.__qV(e);var bi=this.__qM;var bg=this.getApplicationRoot();if(bi){var be=this.__qT[bi];this.setCursor(be);bg.setGlobalCursor(be);}else if(this.getCursor()){this.resetCursor();bg.resetGlobalCursor();};};},__rc:function(e){if(this.getCursor()&&!this.hasState(l)){this.resetCursor();this.getApplicationRoot().resetGlobalCursor();};}},destruct:function(){if(this.__qL!=null&&!qx.core.ObjectRegistry.inShutDown){this.__qL.destroy();this.__qL=null;};this.__qK=null;}});})();(function(){var k="beforeClose",j="beforeMinimize",i="mousedown",h="window-resize-frame",g="changeStatus",f="changeIcon",d="excluded",c="_applyModal",b="dblclick",a="_applyActive",U="beforeRestore",T="minimize",S="changeModal",R="changeAlwaysOnTop",Q="_applyShowStatusbar",P="_applyStatus",O="qx.ui.window.Window",N="changeCaption",M="focusout",L="beforeMaximize",r="maximize",s="restore",p="window",q="close",n="changeActive",o="minimized",l="String",m="modal",t="normal",u="active",B="statusbar",z="statusbar-text",F="execute",D="title",H="icon",G="showStatusbar",w="pane",K="restore-button",J="minimize-button",I="close-button",v="maximized",x="maximize-button",y="qx.event.type.Event",A="captionbar",C="_applyCaptionBarChange",E="Boolean";qx.Class.define(O,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(V,W){qx.ui.core.Widget.call(this);this._setLayout(new qx.ui.layout.VBox());this._createChildControl(A);this._createChildControl(w);if(W!=null){this.setIcon(W);};if(V!=null){this.setCaption(V);};this._updateCaptionBar();this.addListener(i,this._onWindowMouseDown,this,true);this.addListener(M,this._onWindowFocusOut,this);qx.core.Init.getApplication().getRoot().add(this);this.initVisibility();qx.ui.core.FocusHandler.getInstance().addRoot(this);this._getResizeFrame().setAppearance(h);},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":y,"close":y,"beforeMinimize":y,"minimize":y,"beforeMaximize":y,"maximize":y,"beforeRestore":y,"restore":y},properties:{appearance:{refine:true,init:p},visibility:{refine:true,init:d},focusable:{refine:true,init:true},active:{check:E,init:false,apply:a,event:n},alwaysOnTop:{check:E,init:false,event:R},modal:{check:E,init:false,event:S,apply:c},caption:{apply:C,event:N,nullable:true},icon:{check:l,nullable:true,apply:C,event:f,themeable:true},status:{check:l,nullable:true,apply:P,event:g},showClose:{check:E,init:true,apply:C,themeable:true},showMaximize:{check:E,init:true,apply:C,themeable:true},showMinimize:{check:E,init:true,apply:C,themeable:true},allowClose:{check:E,init:true,apply:C},allowMaximize:{check:E,init:true,apply:C},allowMinimize:{check:E,init:true,apply:C},showStatusbar:{check:E,init:false,apply:Q}},members:{__rd:null,__re:null,getChildrenContainer:function(){return this.getChildControl(w);},_forwardStates:{active:true,maximized:true,showStatusbar:true,modal:true},setLayoutParent:function(parent){{};qx.ui.core.Widget.prototype.setLayoutParent.call(this,parent);},_createChildControlImpl:function(X,Y){var ba;switch(X){case B:ba=new qx.ui.container.Composite(new qx.ui.layout.HBox());this._add(ba);ba.add(this.getChildControl(z));break;case z:ba=new qx.ui.basic.Label();ba.setValue(this.getStatus());break;case w:ba=new qx.ui.container.Composite();this._add(ba,{flex:1});break;case A:var bc=new qx.ui.layout.Grid();bc.setRowFlex(0,1);bc.setColumnFlex(1,1);ba=new qx.ui.container.Composite(bc);this._add(ba);ba.addListener(b,this._onCaptionMouseDblClick,this);this._activateMoveHandle(ba);break;case H:ba=new qx.ui.basic.Image(this.getIcon());this.getChildControl(A).add(ba,{row:0,column:0});break;case D:ba=new qx.ui.basic.Label(this.getCaption());ba.setWidth(0);ba.setAllowGrowX(true);var bb=this.getChildControl(A);bb.add(ba,{row:0,column:1});break;case J:ba=new qx.ui.form.Button();ba.setFocusable(false);ba.addListener(F,this._onMinimizeButtonClick,this);this.getChildControl(A).add(ba,{row:0,column:2});break;case K:ba=new qx.ui.form.Button();ba.setFocusable(false);ba.addListener(F,this._onRestoreButtonClick,this);this.getChildControl(A).add(ba,{row:0,column:3});break;case x:ba=new qx.ui.form.Button();ba.setFocusable(false);ba.addListener(F,this._onMaximizeButtonClick,this);this.getChildControl(A).add(ba,{row:0,column:4});break;case I:ba=new qx.ui.form.Button();ba.setFocusable(false);ba.addListener(F,this._onCloseButtonClick,this);this.getChildControl(A).add(ba,{row:0,column:6});break;};return ba||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,X);},_updateCaptionBar:function(){var be;var bf=this.getIcon();if(bf){this.getChildControl(H).setSource(bf);this._showChildControl(H);}else {this._excludeChildControl(H);};var bd=this.getCaption();if(bd){this.getChildControl(D).setValue(bd);this._showChildControl(D);}else {this._excludeChildControl(D);};if(this.getShowMinimize()){this._showChildControl(J);be=this.getChildControl(J);this.getAllowMinimize()?be.resetEnabled():be.setEnabled(false);}else {this._excludeChildControl(J);};if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(K);this._excludeChildControl(x);}else {this._showChildControl(x);this._excludeChildControl(K);};be=this.getChildControl(x);this.getAllowMaximize()?be.resetEnabled():be.setEnabled(false);}else {this._excludeChildControl(x);this._excludeChildControl(K);};if(this.getShowClose()){this._showChildControl(I);be=this.getChildControl(I);this.getAllowClose()?be.resetEnabled():be.setEnabled(false);}else {this._excludeChildControl(I);};},close:function(){if(!this.isVisible()){return;};if(this.fireNonBubblingEvent(k,qx.event.type.Event,[false,true])){this.hide();this.fireEvent(q);};},open:function(){this.show();this.setActive(true);this.focus();},center:function(){var parent=this.getLayoutParent();if(parent){var bh=parent.getBounds();if(bh){var bi=this.getSizeHint();var bg=Math.round((bh.width-bi.width)/2);var top=Math.round((bh.height-bi.height)/2);if(top<0){top=0;};this.moveTo(bg,top);return;};};{};},maximize:function(){if(this.isMaximized()){return;};var parent=this.getLayoutParent();if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(L,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();};var bj=this.getLayoutProperties();this.__re=bj.left===undefined?0:bj.left;this.__rd=bj.top===undefined?0:bj.top;this.setLayoutProperties({left:null,top:null,edge:0});this.addState(v);this._updateCaptionBar();this.fireEvent(r);};};},minimize:function(){if(!this.isVisible()){return;};if(this.fireNonBubblingEvent(j,qx.event.type.Event,[false,true])){var bk=this.getLayoutProperties();this.__re=bk.left===undefined?0:bk.left;this.__rd=bk.top===undefined?0:bk.top;this.removeState(v);this.hide();this.fireEvent(T);};},restore:function(){if(this.getMode()===t){return;};if(this.fireNonBubblingEvent(U,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();};var bl=this.__re;var top=this.__rd;this.setLayoutProperties({edge:null,left:bl,top:top});this.removeState(v);this._updateCaptionBar();this.fireEvent(s);};},moveTo:function(bm,top){if(this.isMaximized()){return;};this.setLayoutProperties({left:bm,top:top});},isMaximized:function(){return this.hasState(v);},getMode:function(){if(!this.isVisible()){return o;}else {if(this.isMaximized()){return v;}else {return t;};};},_applyActive:function(bn,bo){if(bo){this.removeState(u);}else {this.addState(u);};},_applyModal:function(bp,bq){if(bq){this.removeState(m);}else {this.addState(m);};},_getContentPaddingTarget:function(){return this.getChildControl(w);},_applyShowStatusbar:function(br,bs){var bt=this._getResizeFrame();if(br){this.addState(G);bt.addState(G);}else {this.removeState(G);bt.removeState(G);};if(br){this._showChildControl(B);}else {this._excludeChildControl(B);};},_applyCaptionBarChange:function(bu,bv){this._updateCaptionBar();},_applyStatus:function(bw,bx){var by=this.getChildControl(z,true);if(by){by.setValue(bw);};},_onWindowEventStop:function(e){e.stopPropagation();},_onWindowMouseDown:function(e){this.setActive(true);},_onWindowFocusOut:function(e){if(this.getModal()){return;};var bz=e.getRelatedTarget();if(bz!=null&&!qx.ui.core.Widget.contains(this,bz)){this.setActive(false);};},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();};},_onMinimizeButtonClick:function(e){this.minimize();this.getChildControl(J).reset();},_onRestoreButtonClick:function(e){this.restore();this.getChildControl(K).reset();},_onMaximizeButtonClick:function(e){this.maximize();this.getChildControl(x).reset();},_onCloseButtonClick:function(e){this.close();this.getChildControl(I).reset();}}});})();(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;},resetValue:function(){},getValue:function(){}}});})();(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;},resetValue:function(){},getValue:function(){}}});})();(function(){var b="qx.ui.form.IDateForm",a="qx.event.type.Data";qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;},resetValue:function(){},getValue:function(){}}});})();(function(){var b="qx.ui.form.IColorForm",a="qx.event.type.Data";qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;},resetValue:function(){},getValue:function(){}}});})();(function(){var a="qx.ui.form.Resetter";qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__nK=[];},members:{__nK:null,add:function(b){if(this._supportsValue(b)){var c=b.getValue();}else if(this.__vF(b)){var c=b.getSelection();}else if(this.__vG(b)){var c=b.getSelection().concat();}else {throw new Error("Item "+b+" not supported for reseting.");};this.__nK.push({item:b,init:c});},reset:function(){for(var i=0;i<this.__nK.length;i++){var d=this.__nK[i];this.__vD(d.item,d.init);};},resetItem:function(e){var f;for(var i=0;i<this.__nK.length;i++){var g=this.__nK[i];if(g.item===e){f=g.init;break;};};if(f===undefined){throw new Error("The given item has not been added.");};this.__vD(e,f);},__vD:function(h,j){if(this._supportsValue(h)){h.setValue(j);}else if(this.__vF(h)||this.__vG(h)){h.setSelection(j);};},redefine:function(){for(var i=0;i<this.__nK.length;i++){var k=this.__nK[i].item;this.__nK[i].init=this.__vE(k);};},redefineItem:function(l){var m;for(var i=0;i<this.__nK.length;i++){if(this.__nK[i].item===l){m=this.__nK[i];break;};};if(m===undefined){throw new Error("The given item has not been added.");};m.init=this.__vE(m.item);},__vE:function(n){if(this._supportsValue(n)){return n.getValue();}else if(this.__vF(n)||this.__vG(n)){return n.getSelection();};},__vF:function(o){var p=o.constructor;return qx.Class.hasInterface(p,qx.ui.core.ISingleSelection);},__vG:function(q){var r=q.constructor;return qx.Class.hasInterface(r,qx.data.controller.ISelection);},_supportsValue:function(s){var t=s.constructor;return (qx.Class.hasInterface(t,qx.ui.form.IBooleanForm)||qx.Class.hasInterface(t,qx.ui.form.IColorForm)||qx.Class.hasInterface(t,qx.ui.form.IDateForm)||qx.Class.hasInterface(t,qx.ui.form.INumberForm)||qx.Class.hasInterface(t,qx.ui.form.IStringForm));}},destruct:function(){this.__nK=null;}});})();(function(){var a="qx.ui.window.IDesktop";qx.Interface.define(a,{members:{setWindowManager:function(b){this.assertInterface(b,qx.ui.window.IWindowManager);},getWindows:function(){},supportsMaximize:function(){},blockContent:function(c){this.assertInteger(c);},unblockContent:function(){},isContentBlocked:function(){}}});})();
});