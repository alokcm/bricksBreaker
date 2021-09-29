System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Prefab, instantiate, Label, director, SingletonClass, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, LevelManager, LevelScreen;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      director = _cc.director;
    }, function (_unresolved_2) {
      SingletonClass = _unresolved_2.SingletonClass;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "69f21TwRBRCS6zLpPtut9d5", "LevelScreen", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      LevelManager = (_crd && SingletonClass === void 0 ? (_reportPossibleCrUseOfSingletonClass({
        error: Error()
      }), SingletonClass) : SingletonClass).getInstance();
      console.log('Level : ', LevelManager.getLevel());
      /**
       * Predefined variables
       * Name = LevelScreen
       * DateTime = Tue Sep 28 2021 17:51:19 GMT+0530 (India Standard Time)
       * Author = alokraj0024
       * FileBasename = LevelScreen.ts
       * FileBasenameNoExtension = LevelScreen
       * URL = db://assets/Scripts/LevelScreen.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       */

      _export("LevelScreen", LevelScreen = (_dec = ccclass('LevelScreen'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = class LevelScreen extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "scrollView", _descriptor, this);

          _initializerDefineProperty(this, "levelButton", _descriptor2, this);

          _initializerDefineProperty(this, "playButton", _descriptor3, this);

          _defineProperty(this, "levelNumber", null);

          _defineProperty(this, "ch", null);
        }

        addLevel() {
          this.ch = instantiate(this.levelButton);
          let content = this.scrollView.getChildByName('view').getChildByName('content');

          for (let i = 1; i <= 3; i++) {
            this.ch = instantiate(this.levelButton);
            console.log(this.ch);
            console.log('printing component');
            this.ch.getChildByName('Label').getComponent(Label).string = `${i}`;
            this.ch.on(Node.EventType.TOUCH_START, this.levelSelected, this);
            this.ch.buttonNumber = i;
            content.addChild(this.ch);
          }
        }

        start() {
          this.addLevel();
        }

        onLoad() {
          this.playButton.on(Node.EventType.TOUCH_START, this.loadGame, this);
        }

        loadGame() {
          console.log('play button clicked');
          director.loadScene('playScreen');
        }

        levelSelected(event) {
          console.log(event);
          console.log(event.currentTarget.buttonNumber);
          this.levelNumber = event.currentTarget.buttonNumber;
          console.log('level clicked');
          LevelManager.setLevel(event.currentTarget.buttonNumber);
          console.log(LevelManager.getLevel());
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "levelButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playButton", [_dec4], {
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
//# sourceMappingURL=LevelScreen.js.map