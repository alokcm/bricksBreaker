System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Sprite, Vec3, SpriteFrame, Prefab, instantiate, JsonAsset, Collider2D, Contact2DType, RigidBody2D, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, PlayScript;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      Vec3 = _cc.Vec3;
      SpriteFrame = _cc.SpriteFrame;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      JsonAsset = _cc.JsonAsset;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      RigidBody2D = _cc.RigidBody2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0ab7yebKJC6Jlc7tKnCXA+", "PlayScript", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = PlayScript
       * DateTime = Wed Sep 22 2021 13:48:26 GMT+0530 (India Standard Time)
       * Author = alokraj0024
       * FileBasename = PlayScript.ts
       * FileBasenameNoExtension = PlayScript
       * URL = db://assets/Scripts/PlayScript.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       * Math.floor(Math.random() * (max - min + 1)) + min;
       */

      _export("PlayScript", PlayScript = (_dec = ccclass('PlayScript'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(Prefab), _dec7 = property(JsonAsset), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PlayScript, _Component);

        function PlayScript() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "sliderSprite", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "ball", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "NormalBricks", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "BrokenBricks", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "bricksPrefab", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "asset", _descriptor6, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "posOfSlider", null);

          _defineProperty(_assertThisInitialized(_this), "screenWidth", void 0);

          _defineProperty(_assertThisInitialized(_this), "titleList", []);

          _defineProperty(_assertThisInitialized(_this), "titleIndex", 1);

          _defineProperty(_assertThisInitialized(_this), "destroyBrick", 0);

          _defineProperty(_assertThisInitialized(_this), "arrayOfBricksOnScreen", []);

          _defineProperty(_assertThisInitialized(_this), "ballInitialPosition", void 0);

          return _this;
        }

        var _proto = PlayScript.prototype;

        _proto.start = function start() {
          this.posOfSlider = this.sliderSprite.getPosition();
          this.screenWidth = this.node.width;
          this.addBricks();
          this.titleList = this.asset.json["tileDetails"];
          console.log('row ' + this.titleList["row"]);
          console.log('json'); //console.log(this.asset.json["Level"][0]);
          //console.log(this.asset.json["Level"][2]);

          var collider = this.ball.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }

          this.ballInitialPosition = this.ball.getPosition();
          this.addBricks();
        };

        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider, contact) {
          var _this2 = this;

          console.log(selfCollider);
          console.log(otherCollider);
          console.log(otherCollider.name);

          if (otherCollider.name == 'brick<BoxCollider2D>') {
            this.updateBricks(otherCollider);
            this.destroyBrick++;

            if (this.destroyBrick == 2) {
              this.arrayOfBricksOnScreen.pop();
              this.destroyBrick = 0;
            }
          }

          if (this.arrayOfBricksOnScreen.length == 0) {
            this.arrayOfBricksOnScreen = [];
            setTimeout(function () {
              _this2.addBricks();

              _this2.ball.setPosition(_this2.ballInitialPosition);

              _this2.ball.getComponent(RigidBody2D).gravityScale = 0.4;
            }, 500);
          }
        };

        _proto.updateBricks = function updateBricks(collider) {
          var str = collider.getComponent(Sprite).spriteFrame.name;
          console.log(str);

          for (var i = 0; i < this.NormalBricks.length; i++) {
            //console.log()
            if (str == this.NormalBricks[i].name) {
              collider.getComponent(Sprite).spriteFrame = this.BrokenBricks[i];
              break;
            }

            if (str == this.BrokenBricks[i].name) {
              collider.getComponent(Sprite).spriteFrame = this.BrokenBricks[i];
              collider.getComponent(Sprite).destroy();
              collider.destroy();
              break;
            }
          }
        };

        _proto.moveSliderOnTouch = function moveSliderOnTouch(touch, event) {
          var current = touch.getUILocation();

          if (current.x + 128 > this.screenWidth) {
            current.x = this.screenWidth - 128;
          } else if (current.x - 128 < 0) {
            current.x = 128;
          }

          this.sliderSprite.setPosition(new Vec3(current.x - this.screenWidth / 2, this.posOfSlider.y, 1));
        };

        _proto.onLoad = function onLoad() {
          this.sliderSprite.on(Node.EventType.TOUCH_MOVE, this.moveSliderOnTouch, this);
        };

        _proto.onClick = function onClick() {
          var str = this.titleList[this.titleIndex];
          console.log(str);
          this.titleIndex++;
          if (this.titleIndex > 13) this.titleIndex = 1;
        };

        _proto.addBricks = function addBricks() {
          var row = 4;
          var column = 4;
          var startPosOfBricks = Math.floor(column / 2) * -128;

          for (var i = 1; i <= row; i++) {
            var xy = startPosOfBricks;

            for (var j = 1; j <= column; j++) {
              var x = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
              var ch = instantiate(this.bricksPrefab);
              ch.getComponent(Sprite).spriteFrame = this.NormalBricks[x];
              this.node.addChild(ch);
              ch.setPosition(new Vec3(xy, i * 43, 1));
              this.arrayOfBricksOnScreen.push(ch);
              xy += 128;
            }
          }
        };

        _proto.update = function update() {//console.log(this.ball.getPosition())
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return PlayScript;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sliderSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ball", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "NormalBricks", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "BrokenBricks", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bricksPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "asset", [_dec7], {
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
//# sourceMappingURL=PlayScript.js.map