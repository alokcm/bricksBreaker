System.register("chunks:///_virtual/SplashScreen.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,r,o,c,i,a,l,s;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){c=e.cclegacy,i=e._decorator,a=e.Node,l=e.director,s=e.Component}],execute:function(){var p,u,h,y,f;c._RF.push({},"0f58dHRAKtMy7vxL+J7ZLET","SplashScreen",void 0);var S=i.ccclass,d=i.property;e("SplashScreen",(p=S("SplashScreen"),u=d(a),p((f=t((y=function(e){function t(){for(var t,n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return t=e.call.apply(e,[this].concat(c))||this,r(o(t),"playButton",f,o(t)),t}n(t,e);var c=t.prototype;return c.start=function(){},c.onLoad=function(){this.playButton.on(a.EventType.MOUSE_DOWN,this.changeScreen,this)},c.changeScreen=function(e){l.loadScene("playScreen")},t}(s)).prototype,"playButton",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=y))||h));c._RF.pop()}}}));

System.register("chunks:///_virtual/PlayScript.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var i,r,t,n,o,s,a,c,l,p,u,d,h,f;return{setters:[function(e){i=e.applyDecoratedDescriptor,r=e.inheritsLoose,t=e.initializerDefineProperty,n=e.assertThisInitialized,o=e.defineProperty},function(e){s=e.cclegacy,a=e._decorator,c=e.Node,l=e.SpriteFrame,p=e.Prefab,u=e.Vec3,d=e.instantiate,h=e.Sprite,f=e.Component}],execute:function(){var b,y,S,m,v,P,k,g,B,w,O;s._RF.push({},"c0ab7yebKJC6Jlc7tKnCXA+","PlayScript",void 0);var x=a.ccclass,z=a.property;e("PlayScript",(b=x("PlayScript"),y=z(c),S=z(l),m=z(l),v=z(p),b((g=i((k=function(e){function i(){for(var i,r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return i=e.call.apply(e,[this].concat(s))||this,t(n(i),"sliderSprite",g,n(i)),t(n(i),"NormalBricks",B,n(i)),t(n(i),"BrokenBricks",w,n(i)),t(n(i),"bricksPrefab",O,n(i)),o(n(i),"posOfSlider",null),o(n(i),"screenWidth",void 0),i}r(i,e);var s=i.prototype;return s.start=function(){this.posOfSlider=this.sliderSprite.getPosition(),this.screenWidth=this.node.width,this.addBricks()},s.moveSliderOnTouch=function(e,i){var r=e.getUILocation();r.x+128>this.screenWidth?r.x=this.screenWidth-128:r.x-128<0&&(r.x=128),this.sliderSprite.setPosition(new u(r.x-this.screenWidth/2,this.posOfSlider.y,1))},s.onLoad=function(){this.sliderSprite.on(c.EventType.TOUCH_MOVE,this.moveSliderOnTouch,this)},s.addBricks=function(){for(var e=1;e<=5;e++){var i=Math.floor(8*Math.random())+0,r=d(this.bricksPrefab);console.log(r),r.getComponent(h).spriteFrame=this.NormalBricks[i],this.node.addChild(r),r.setPosition(new u(0,86*e,1))}},i}(f)).prototype,"sliderSprite",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=i(k.prototype,"NormalBricks",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),w=i(k.prototype,"BrokenBricks",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),O=i(k.prototype,"bricksPrefab",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=k))||P));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./SplashScreen.ts","./PlayScript.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});