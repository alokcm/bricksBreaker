System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Prefab, instantiate, Label, director, Sprite, UIOpacity, SingletonClass, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, LevelManager, LevelScreenNewScript;

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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      director = _cc.director;
      Sprite = _cc.Sprite;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      SingletonClass = _unresolved_2.SingletonClass;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fa84bjuocRP4Lrv+T4Q57mF", "levelScreenNewScript", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      LevelManager = (_crd && SingletonClass === void 0 ? (_reportPossibleCrUseOfSingletonClass({
        error: Error()
      }), SingletonClass) : SingletonClass).getInstance();
      console.log('Level : ', LevelManager.getLevel());
      LevelManager.setLevelPlayed(1);

      _export("LevelScreenNewScript", LevelScreenNewScript = (_dec = ccclass('LevelScreenNewScript'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LevelScreenNewScript, _Component);

        function LevelScreenNewScript() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "levelPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "content", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "tempNode", null);

          _defineProperty(_assertThisInitialized(_this), "levelPlayed", null);

          return _this;
        }

        var _proto = LevelScreenNewScript.prototype;

        _proto.start = function start() {
          this.levelPlayed = LevelManager.getLevelPlayed();
          console.log('start loaded');
          console.log(this.levelPlayed);
          console.log(typeof this.levelPlayed);
          this.addLevel();
        };

        _proto.addLevel = function addLevel() {
          for (var i = 1; i <= 8; i++) {
            this.tempNode = instantiate(this.levelPrefab);
            this.tempNode.getChildByName('Label').getComponent(Label).string = "" + i;
            this.tempNode.buttonNumber = i;
            this.tempNode.on(Node.EventType.TOUCH_START, this.loadGame, this);
            console.log(this.levelPlayed);

            if (i <= this.levelPlayed) {
              //console.log('in if');
              this.tempNode.getChildByName('status').getComponent(Sprite).spriteFrame = null;
              this.tempNode.unlocked = true;
              console.log('in if');
            } else {
              this.tempNode.unlocked = false;
              console.log('in else');
              console.log(this.tempNode.addComponent(UIOpacity).opacity = 190);
            }

            this.content.addChild(this.tempNode);
            console.log('added');
            console.log(this.tempNode);
          }
        };

        _proto.loadGame = function loadGame(event) {
          LevelManager.setLevel(event.currentTarget.buttonNumber);

          if (event.currentTarget.unlocked) {
            director.loadScene('playScreen');
          } else {
            console.log('level not unlocked');
          }
        };

        return LevelScreenNewScript;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "levelPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
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
//# sourceMappingURL=levelScreenNewScript.js.map