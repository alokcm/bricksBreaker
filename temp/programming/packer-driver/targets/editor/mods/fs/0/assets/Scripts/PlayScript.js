System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Sprite, Vec3, SpriteFrame, Prefab, instantiate, JsonAsset, Collider2D, Contact2DType, RigidBody2D, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, PlayScript;

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

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("PlayScript", PlayScript = (_dec = ccclass('PlayScript'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(Prefab), _dec7 = property(JsonAsset), _dec(_class = (_class2 = (_temp = class PlayScript extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "sliderSprite", _descriptor, this);

          _initializerDefineProperty(this, "ball", _descriptor2, this);

          _initializerDefineProperty(this, "NormalBricks", _descriptor3, this);

          _initializerDefineProperty(this, "BrokenBricks", _descriptor4, this);

          _initializerDefineProperty(this, "bricksPrefab", _descriptor5, this);

          _initializerDefineProperty(this, "asset", _descriptor6, this);

          _defineProperty(this, "posOfSlider", null);

          _defineProperty(this, "screenWidth", void 0);

          _defineProperty(this, "titleList", []);

          _defineProperty(this, "titleIndex", 1);

          _defineProperty(this, "destroyBrick", 0);

          _defineProperty(this, "arrayOfBricksOnScreen", []);

          _defineProperty(this, "ballInitialPosition", void 0);
        }

        start() {
          this.posOfSlider = this.sliderSprite.getPosition();
          this.screenWidth = this.node.width;
          this.addBricks();
          this.titleList = this.asset.json["tileDetails"];
          console.log('row ' + this.titleList["row"]);
          console.log('json'); //console.log(this.asset.json["Level"][0]);
          //console.log(this.asset.json["Level"][2]);

          let collider = this.ball.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }

          this.ballInitialPosition = this.ball.getPosition();
          this.addBricks();
        }

        onBeginContact(selfCollider, otherCollider, contact) {
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
            setTimeout(() => {
              this.addBricks();
              this.ball.setPosition(this.ballInitialPosition);
              this.ball.getComponent(RigidBody2D).gravityScale = 0.4;
            }, 500);
          }
        }

        updateBricks(collider) {
          let str = collider.getComponent(Sprite).spriteFrame.name;
          console.log(str);

          for (let i = 0; i < this.NormalBricks.length; i++) {
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
        }

        moveSliderOnTouch(touch, event) {
          let current = touch.getUILocation();

          if (current.x + 128 > this.screenWidth) {
            current.x = this.screenWidth - 128;
          } else if (current.x - 128 < 0) {
            current.x = 128;
          }

          this.sliderSprite.setPosition(new Vec3(current.x - this.screenWidth / 2, this.posOfSlider.y, 1));
        }

        onLoad() {
          this.sliderSprite.on(Node.EventType.TOUCH_MOVE, this.moveSliderOnTouch, this);
        }

        onClick() {
          let str = this.titleList[this.titleIndex];
          console.log(str);
          this.titleIndex++;
          if (this.titleIndex > 13) this.titleIndex = 1;
        }

        addBricks() {
          let row = 4;
          let column = 4;
          let startPosOfBricks = Math.floor(column / 2) * -128;

          for (let i = 1; i <= row; i++) {
            let xy = startPosOfBricks;

            for (let j = 1; j <= column; j++) {
              let x = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
              let ch = instantiate(this.bricksPrefab);
              ch.getComponent(Sprite).spriteFrame = this.NormalBricks[x];
              this.node.addChild(ch);
              ch.setPosition(new Vec3(xy, i * 43, 1));
              this.arrayOfBricksOnScreen.push(ch);
              xy += 128;
            }
          }
        }

        update() {//console.log(this.ball.getPosition())
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sliderSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ball", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "NormalBricks", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "BrokenBricks", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bricksPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "asset", [_dec7], {
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
//# sourceMappingURL=PlayScript.js.map