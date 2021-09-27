System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, director, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, SplashScreen;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0f58dHRAKtMy7vxL+J7ZLET", "SplashScreen", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = SplashScreen
       * DateTime = Wed Sep 22 2021 13:42:44 GMT+0530 (India Standard Time)
       * Author = alokraj0024
       * FileBasename = SplashScreen.ts
       * FileBasenameNoExtension = SplashScreen
       * URL = db://assets/Scripts/SplashScreen.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("SplashScreen", SplashScreen = (_dec = ccclass('SplashScreen'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class SplashScreen extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "playButton", _descriptor, this);
        }

        start() {//director.preloadScene('playScreen');
        }

        onLoad() {
          this.playButton.on(Node.EventType.TOUCH_START, this.moveScreen, this);
          console.log('on load called');
        }

        moveScreen() {
          console.log('clicked diff');
          director.loadScene('playScreen');
        }

        changeScreen() {
          console.log('clicked');
          director.loadScene('playScreen');
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SplashScreen.js.map