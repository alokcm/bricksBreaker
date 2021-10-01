System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, director, sys, SingletonClass, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, LevelManager, levelPlayed, SplashScreen;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSingletonClass(extras) {
    _reporterNs.report("SingletonClass", "./SingletonClass", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      director = _cc.director;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      SingletonClass = _unresolved_2.SingletonClass;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0f58dHRAKtMy7vxL+J7ZLET", "SplashScreen", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      LevelManager = (_crd && SingletonClass === void 0 ? (_reportPossibleCrUseOfSingletonClass({
        error: Error()
      }), SingletonClass) : SingletonClass).getInstance();
      levelPlayed = sys.localStorage.getItem('level_played');

      if (!levelPlayed) {
        console.log('not played yet ');
        LevelManager.setLevelPlayed(1);
      } else {
        console.log('already played till level : ' + levelPlayed);
      }

      LevelManager.updateLevelHighScoreAndStar();
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

      _export("SplashScreen", SplashScreen = (_dec = ccclass('SplashScreen'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SplashScreen, _Component);

        function SplashScreen() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "playButton", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = SplashScreen.prototype;

        _proto.start = function start() {
          director.preloadScene('levelScreenNew');
        };

        _proto.onLoad = function onLoad() {
          this.playButton.on(Node.EventType.TOUCH_START, this.changeScreen, this);
        };

        _proto.changeScreen = function changeScreen() {
          console.log('clicked');
          director.loadScene('levelScreenNew');
        };

        return SplashScreen;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SplashScreen.js.map