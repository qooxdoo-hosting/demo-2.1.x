qx.$$packageData['4096']={"locales":{},"resources":{"qx/icon/Oxygen/32/status/dialog-information.png":[32,32,"png","qx"],"qx/icon/Tango/32/status/dialog-information.png":[32,32,"png","qx"]},"translations":{"en":{}}};
qx.Part.$$notifyLoad("4096", function() {
(function(){var f="widgetbrowser.pages.Basic",e="Label",d="middle",c="Image",b="Atom",a="icon/32/status/dialog-information.png";qx.Class.define(f,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);var g=this.__Pw=new qx.ui.container.Composite(new qx.ui.layout.HBox(10));this.add(g,{top:0});this.initWidgets();},members:{__Pw:null,initWidgets:function(){var h=this._widgets;var k=new qx.ui.basic.Label(e).set({alignY:d});h.push(k);this.__Pw.add(k);var i=new qx.ui.basic.Atom(c,a);h.push(i);this.__Pw.add(i);var j=new qx.ui.basic.Atom(b,a);h.push(j);this.__Pw.add(j);}}});})();
});