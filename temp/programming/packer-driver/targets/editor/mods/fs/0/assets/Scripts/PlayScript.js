System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Sprite, Vec3, SpriteFrame, Prefab, instantiate, JsonAsset, Collider2D, Contact2DType, RigidBody2D, UITransform, Vec2, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, PlayScript;

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
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
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

      _export("PlayScript", PlayScript = (_dec = ccclass('PlayScript'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(Prefab), _dec7 = property(JsonAsset), _dec8 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = class PlayScript extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "sliderSprite", _descriptor, this);

          _initializerDefineProperty(this, "ball", _descriptor2, this);

          _initializerDefineProperty(this, "NormalBricks", _descriptor3, this);

          _initializerDefineProperty(this, "BrokenBricks", _descriptor4, this);

          _initializerDefineProperty(this, "bricksPrefab", _descriptor5, this);

          _initializerDefineProperty(this, "asset", _descriptor6, this);

          _initializerDefineProperty(this, "Rewards", _descriptor7, this);

          _defineProperty(this, "posOfSlider", null);

          _defineProperty(this, "screenWidth", void 0);

          _defineProperty(this, "tileDetails", []);

          _defineProperty(this, "titleIndex", 1);

          _defineProperty(this, "destroyBrick", 0);

          _defineProperty(this, "arrayOfBricksOnScreen", []);

          _defineProperty(this, "ballInitialPosition", void 0);

          _defineProperty(this, "rows", null);

          _defineProperty(this, "columns", null);

          _defineProperty(this, "level", 1);
        }

        start() {
          this.posOfSlider = this.sliderSprite.getPosition();
          this.screenWidth = this.node.width;
          this.tileDetails = this.asset[0].json["tileDetails"];
          console.log('row in the script  ' + this.asset[0].json["rows"]);
          let collider = this.ball.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }

          this.ballInitialPosition = this.ball.getPosition();
          this.fetchScript(1);
          this.addBricks();
          console.log('printing the tile details  : '); // for(let i = 1,k=1;i<=this.asset[0].json['rows'];i++)
          // {
          //     for(let j =1;j<=this.asset[0].json['columns'];j++)
          //     {
          //         console.log(k + " : " + this.tileDetails[`${k++}`]);
          //     }
          // }

          console.log('start ended');
          console.log(this.bricksPrefab.data.width);
        }

        fetchScript(lev) {
          this.tileDetails = this.asset[lev - 1].json["tileDetails"];
          this.rows = this.asset[lev - 1].json["rows"];
          this.columns = this.asset[lev - 1].json["columns"];
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          console.log(otherCollider); //console.log(otherCollider.name);

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
              this.level++;
              this.fetchScript(this.level);
              this.addBricks();
              this.ball.setPosition(this.ballInitialPosition);
              this.ball.getComponent(RigidBody2D).linearVelocity = new Vec2(0, 0);

              if (this.level == 3) {
                this.level = 0;
              }
            }, 500);
          }
        }

        updateBricks(collider) {
          let str = collider.getComponent(Sprite).spriteFrame.name;

          for (let i = 0; i < this.NormalBricks.length; i++) {
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

        addBricks() {
          let startX = -(this.screenWidth / 2);
          let startY = this.node.getComponent(UITransform).height / 2;
          let bricksWidth = this.screenWidth / this.columns;
          let bricksHeight = this.bricksPrefab.data.height * bricksWidth / this.bricksPrefab.data.width;
          startX += bricksWidth / 2;
          startY -= bricksHeight / 2;
          let scaleX = bricksWidth / this.bricksPrefab.data.width;
          let scaleY = bricksHeight / this.bricksPrefab.data.height;
          let noBricks = this.tileDetails["noBricks"][0];
          console.log('test no Bricks');
          console.log(noBricks);

          for (let i = 1, k = 1; i <= this.rows; i++) {
            let initX = startX;
            console.log('loop ran');

            for (let j = 1; j <= this.columns; j++) {
              if (this.tileDetails[`${k}`] != "hide") {
                let x = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
                let ch = instantiate(this.bricksPrefab);
                this.node.addChild(ch);
                ch.getComponent(Sprite).spriteFrame = this.NormalBricks[x];
                ch.setScale(scaleX, scaleY);
                ch.setPosition(new Vec3(initX, startY, 1));
                this.arrayOfBricksOnScreen.push(ch);
              }

              k++;
              initX += bricksWidth;
            }

            startY -= bricksHeight;
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
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Rewards", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PlayScript.js.map