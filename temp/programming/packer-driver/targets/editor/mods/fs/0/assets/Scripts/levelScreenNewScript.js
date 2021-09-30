System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Prefab, instantiate, Label, director, Sprite, UIOpacity, SpriteFrame, SingletonClass, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, LevelManager, LevelScreenNewScript;

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
      Sprite = _cc.Sprite;
      UIOpacity = _cc.UIOpacity;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      SingletonClass = _unresolved_2.SingletonClass;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fa84bjuocRP4Lrv+T4Q57mF", "levelScreenNewScript", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      LevelManager = (_crd && SingletonClass === void 0 ? (_reportPossibleCrUseOfSingletonClass({
        error: Error()
      }), SingletonClass) : SingletonClass).getInstance(); //console.log('Level : ', LevelManager.getLevel());

      LevelManager.setLevelPlayed(1);

      _export("LevelScreenNewScript", LevelScreenNewScript = (_dec = ccclass('LevelScreenNewScript'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = class LevelScreenNewScript extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "levelPrefab", _descriptor, this);

          _initializerDefineProperty(this, "content", _descriptor2, this);

          _initializerDefineProperty(this, "yellowStar", _descriptor3, this);

          _defineProperty(this, "tempNode", null);

          _defineProperty(this, "levelPlayed", null);
        }

        start() {
          this.levelPlayed = LevelManager.getLevelPlayed();
          this.addLevel();
          console.log('start called');
        }

        addLevel() {
          for (let i = 1; i <= 8; i++) {
            this.tempNode = instantiate(this.levelPrefab);
            this.tempNode.getChildByName('Label').getComponent(Label).string = `${i}`;
            this.tempNode.star1 = this.tempNode.getChildByName('star1').getComponent(Sprite);
            this.tempNode.buttonNumber = i;
            this.tempNode.getChildByName('star1').getComponent(Sprite).spriteFrame = this.yellowStar;
            this.tempNode.getChildByName('star2').getComponent(Sprite).spriteFrame = this.yellowStar;
            this.tempNode.on(Node.EventType.TOUCH_START, this.loadGame, this);
            console.log(this.levelPlayed);

            if (i <= this.levelPlayed) {
              this.tempNode.getChildByName('status').getComponent(Sprite).spriteFrame = null;
              this.tempNode.unlocked = true;
            } else {
              this.tempNode.unlocked = false;
              console.log(this.tempNode.addComponent(UIOpacity).opacity = 190);
            }

            this.content.addChild(this.tempNode);
            console.log(this.tempNode);
          }
        }

        loadGame(event) {
          console.log(event);

          if (event.currentTarget.unlocked) {
            LevelManager.setLevel(event.currentTarget.buttonNumber);
            director.loadScene('playScreen');
          } else {
            console.log('Level ' + event.currentTarget.buttonNumber + ' is still locked');
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "levelPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "yellowStar", [_dec4], {
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
//# sourceMappingURL=levelScreenNewScript.js.map