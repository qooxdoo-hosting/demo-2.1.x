qx.$$packageData['32770']={"locales":{},"resources":{},"translations":{"C":{},"en":{}}};
qx.Part.$$notifyLoad("32770", function() {
(function(){var o="qx.ui.form.RadioGroup",n="Boolean",m="menu-radiobutton",l="label",k="_applyValue",j="qx.ui.menu.RadioButton",i="value",h="changeValue",g="toolTipText",f="enabled",b="_applyGroup",d="menu",c="execute",a="checked";qx.Class.define(j,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(p,q){qx.ui.menu.AbstractButton.call(this);if(p!=null){this.setLabel(p);};if(q!=null){this.setMenu(q);};this.addListener(c,this._onExecute,this);},properties:{appearance:{refine:true,init:m},value:{check:n,nullable:true,event:h,apply:k,init:false},group:{check:o,nullable:true,apply:b}},members:{_bindableProperties:[f,l,g,i,d],_applyValue:function(r,s){r?this.addState(a):this.removeState(a);},_applyGroup:function(t,u){if(u){u.remove(this);};if(t){t.add(this);};},_onExecute:function(e){var v=this.getGroup();if(v&&v.getAllowEmptySelection()){this.toggleValue();}else {this.setValue(true);};},_onClick:function(e){if(e.isLeftPressed()){this.execute();}else {if(this.getContextMenu()){return;};};qx.ui.menu.Manager.getInstance().hideAll();},_onKeyPress:function(e){this.execute();}}});})();(function(){var k="splitbutton",j="changeShow",i="mouseout",h="keydown",g="execute",f="_applyMenu",d="icon",c="mouseover",b="keyup",a="qx.ui.menu.Menu",A="_applyIcon",z="label",y="_applyShow",x="changeMenu",w="_applyLabel",v="qx.ui.form.SplitButton",u="Enter",t="Space",s="abandoned",r="both",p="String",q="changeVisibility",n="pressed",o="arrow",l="hovered",m="button";qx.Class.define(v,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(B,C,D,E){qx.ui.core.Widget.call(this);this._setLayout(new qx.ui.layout.HBox);this._createChildControl(o);this.addListener(c,this._onMouseOver,this,true);this.addListener(i,this._onMouseOut,this,true);this.addListener(h,this._onKeyDown);this.addListener(b,this._onKeyUp);if(B!=null){this.setLabel(B);};if(C!=null){this.setIcon(C);};if(D!=null){this.setMenu(D);};if(E!=null){this.setCommand(E);};},properties:{appearance:{refine:true,init:k},focusable:{refine:true,init:true},label:{apply:w,nullable:true,check:p},icon:{check:p,apply:A,nullable:true,themeable:true},show:{init:r,check:[r,z,d],themeable:true,inheritable:true,apply:y,event:j},menu:{check:a,nullable:true,apply:f,event:x}},members:{__wm:null,_createChildControlImpl:function(F,G){var H;switch(F){case m:H=new qx.ui.form.Button;H.addListener(g,this._onButtonExecute,this);H.setFocusable(false);this._addAt(H,0,{flex:1});break;case o:H=new qx.ui.form.MenuButton;H.setFocusable(false);this._addAt(H,1);break;};return H||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,F);},_forwardStates:{hovered:1,focused:1},_applyLabel:function(I,J){var K=this.getChildControl(m);I==null?K.resetLabel():K.setLabel(I);},_applyIcon:function(L,M){var N=this.getChildControl(m);L==null?N.resetIcon():N.setIcon(L);},_applyMenu:function(O,P){var Q=this.getChildControl(o);if(O){Q.resetEnabled();Q.setMenu(O);O.setOpener(this);O.addListener(q,this._onChangeMenuVisibility,this);}else {Q.setEnabled(false);Q.resetMenu();};if(P){P.removeListener(q,this._onChangeMenuVisibility,this);P.resetOpener();};},_applyShow:function(R,S){},_onMouseOver:function(e){e.stopPropagation();this.addState(l);delete this.__wm;},_onMouseOut:function(e){e.stopPropagation();if(!this.hasState(l)){return;};var U=e.getRelatedTarget();if(qx.ui.core.Widget.contains(this,U)){return;};var T=this.getMenu();if(T&&T.isVisible()){this.__wm=true;return;};this.removeState(l);},_onKeyDown:function(e){var V=this.getChildControl(m);switch(e.getKeyIdentifier()){case u:case t:V.removeState(s);V.addState(n);};},_onKeyUp:function(e){var W=this.getChildControl(m);switch(e.getKeyIdentifier()){case u:case t:if(W.hasState(n)){W.removeState(s);W.removeState(n);W.execute();};};},_onButtonExecute:function(e){this.execute();},_onChangeMenuVisibility:function(e){if(!this.getMenu().isVisible()&&this.__wm){this.removeState(l);};}}});})();
});