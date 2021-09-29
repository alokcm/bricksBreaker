System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Sprite, Vec3, SpriteFrame, Prefab, instantiate, JsonAsset, Collider2D, Contact2DType, RigidBody2D, UITransform, Vec2, Intersection2D, Label, director, SingletonClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp, _crd, ccclass, property, LevelManager, BRICKS, PlayScript;

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
      Intersection2D = _cc.Intersection2D;
      Label = _cc.Label;
      director = _cc.director;
    }, function (_unresolved_2) {
      SingletonClass = _unresolved_2.SingletonClass;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0ab7yebKJC6Jlc7tKnCXA+", "PlayScript", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      LevelManager = (_crd && SingletonClass === void 0 ? (_reportPossibleCrUseOfSingletonClass({
        error: Error()
      }), SingletonClass) : SingletonClass).getInstance();
      /**
       * Predefined variables
       * Name = PlayScript
       * DateTime = Wed Sep 22 2021 13:48:26 GMT+0530 (India Standard Time)
       * Author = alokraj0024
       * FileBasename = PlayScript.ts
       * FileBasenameNoExtension = PlayScript
       * URL = db://assets/Scripts/PlayScript.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       * 
       * Math.floor(Math.random() * (max - min + 1)) + min;
       * this.bg!.getComponent(UITransform)?.convertToNodeSpaceAR(pos);
       * let level=sys.localStorage.getItem('current_level');
       * sys.localStorage.setItem('current_level' , `${this.current_level}`);
       */

      (function (BRICKS) {
        BRICKS[BRICKS["IN_TWO_COLLISION"] = 1] = "IN_TWO_COLLISION";
        BRICKS[BRICKS["IN_FOUR_COLLISION"] = 2] = "IN_FOUR_COLLISION";
        BRICKS[BRICKS["HAS_REWARDS"] = 3] = "HAS_REWARDS";
      })(BRICKS || (BRICKS = {}));

      _export("PlayScript", PlayScript = (_dec = ccclass('PlayScript'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(JsonAsset), _dec7 = property(SpriteFrame), _dec8 = property(Prefab), _dec9 = property(Prefab), _dec10 = property(Prefab), _dec11 = property(Prefab), _dec(_class = (_class2 = (_temp = class PlayScript extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "sliderSprite", _descriptor, this);

          _initializerDefineProperty(this, "ball", _descriptor2, this);

          _initializerDefineProperty(this, "NormalBricks", _descriptor3, this);

          _initializerDefineProperty(this, "BrokenBricks", _descriptor4, this);

          _initializerDefineProperty(this, "asset", _descriptor5, this);

          _initializerDefineProperty(this, "Rewards", _descriptor6, this);

          _initializerDefineProperty(this, "bricksPrefab", _descriptor7, this);

          _initializerDefineProperty(this, "rewardsPrefab", _descriptor8, this);

          _initializerDefineProperty(this, "ballPrefab", _descriptor9, this);

          _initializerDefineProperty(this, "ballForChances", _descriptor10, this);

          _defineProperty(this, "posOfSlider", null);

          _defineProperty(this, "screenWidth", void 0);

          _defineProperty(this, "tileDetails", []);

          _defineProperty(this, "arrayOfBricksOnScreen", []);

          _defineProperty(this, "ballInitialPosition", void 0);

          _defineProperty(this, "rows", null);

          _defineProperty(this, "columns", null);

          _defineProperty(this, "level", LevelManager.getLevel());

          _defineProperty(this, "ch", void 0);

          _defineProperty(this, "startXPos", null);

          _defineProperty(this, "startYPos", null);

          _defineProperty(this, "bricksWidthTemp", null);

          _defineProperty(this, "bricksHeightTemp", null);

          _defineProperty(this, "scaleFactor", null);

          _defineProperty(this, "arrayOfRewards", []);

          _defineProperty(this, "maxNumberOfBall", null);

          _defineProperty(this, "ballNode", null);

          _defineProperty(this, "collider", null);

          _defineProperty(this, "addLevel", false);

          _defineProperty(this, "scoreLabel", null);

          _defineProperty(this, "score", 0);

          _defineProperty(this, "arrayOfChances", []);
        }

        onLoad() {
          this.sliderSprite.on(Node.EventType.TOUCH_MOVE, this.moveSliderOnTouch, this);
        }

        start() {
          this.posOfSlider = this.sliderSprite.getPosition();
          this.screenWidth = this.node.width;
          this.tileDetails = this.asset[this.level - 1].json["tileDetails"];
          let wallLeft = this.node.getChildByName('wallLeft');
          let wallRight = this.node.getChildByName('wallRight');
          let wallTop = this.node.getChildByName('wallTop');
          wallLeft.setScale(1, this.node.getComponent(UITransform).height / 1920);
          wallRight.setScale(1, this.node.getComponent(UITransform).height / 1920);
          wallTop.setScale(this.screenWidth / 1080, 1);
          this.fetchScript(this.level);
          this.addBricks();
          this.scoreLabel = this.node.getChildByName('score');
          this.ballInitialPosition = this.ball.getPosition();
        }

        onBeginContactTry(selfCollider, otherCollider, contact) {
          console.log(otherCollider);
        }

        fetchScript(lev) {
          this.tileDetails = this.asset[lev - 1].json["tileDetails"];
          this.rows = this.asset[lev - 1].json["rows"];
          this.columns = this.asset[lev - 1].json["columns"];
          this.maxNumberOfBall = this.asset[lev - 1].json["maxBall"];
          this.startXPos = -(this.screenWidth / 2);
          this.startYPos = this.node.getComponent(UITransform).height / 2;
          this.bricksWidthTemp = this.screenWidth / this.columns;
          this.bricksHeightTemp = this.bricksPrefab.data.height * this.bricksWidthTemp / this.bricksPrefab.data.width;
          this.startXPos += this.bricksWidthTemp / 2;
          this.startYPos -= this.bricksHeightTemp / 2;
          this.scaleFactor = this.bricksWidthTemp / this.bricksPrefab.data.width;
          this.bricksPrefab.data.setScale(this.scaleFactor, this.scaleFactor);
          console.log(this.ballInitialPosition);
          let balltemp = instantiate(this.ballPrefab);
          this.node.addChild(balltemp);
          this.ballNode = balltemp;
          console.log(this.ballNode);
          this.collider = this.ballNode.getComponent(Collider2D);
          this.addChances();

          if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); //this.collider.on(Contact2DType.END_CONTACT,this.onEndContact,this);
          }
        }

        addChances() {
          console.log('addchances called');
          let x = -(this.screenWidth / 2);
          let y = -(this.node.getComponent(UITransform).height / 2);
          x += 38;
          y += 38;

          for (let i = 1; i < this.maxNumberOfBall; i++) {
            console.log('loop called');
            let b = instantiate(this.ballForChances);
            this.node.addChild(b);
            b.setPosition(new Vec3(x, y, 1));
            this.arrayOfChances.push(b);
            x += 76;
          }
        }

        onEndContact(selfCollider, otherCollider, contact) {
          if (this.arrayOfBricksOnScreen.length == 0) {
            //this.ballNode.getComponent(Sprite).destroy();
            this.ballNode.removeFromParent();
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          console.log(this.ball.getPosition());

          if (otherCollider.name == 'brick<BoxCollider2D>') {
            this.updateBricks(otherCollider);
          }

          if (this.arrayOfBricksOnScreen.length == 0) {
            this.addLevel = true;
          }
        }

        updateBricks(collider) {
          collider.node.brickTime--;

          if (collider.node.brickTime == 1) {
            collider.getComponent(Sprite).spriteFrame = this.BrokenBricks[collider.node.colorNumber];
          }

          if (collider.node.brickTime == 0) {
            collider.getComponent(Sprite).destroy();

            if (collider.node.reward == true) {
              let randomRewards = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
              let currBricksPos = collider.node.getPosition();
              console.log(currBricksPos);
              let rew = instantiate(this.rewardsPrefab);
              this.node.addChild(rew);
              rew.setPosition(new Vec3(currBricksPos));
              rew.getComponent(Sprite).spriteFrame = this.Rewards[randomRewards];
              this.arrayOfRewards.push(rew);
            }

            this.arrayOfBricksOnScreen.pop();
            collider.destroy();
            this.score += 2;
            this.scoreLabel.getComponent(Label).string = `score : ${this.score}`;
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

        update() {
          this.arrayOfRewards.forEach(element => {
            var _element$getComponent, _this$sliderSprite$ge;

            element.setPosition(element.getPosition().x, element.getPosition().y - 10, 1);

            if (Intersection2D.rectRect((_element$getComponent = element.getComponent(UITransform)) === null || _element$getComponent === void 0 ? void 0 : _element$getComponent.getBoundingBoxToWorld(), (_this$sliderSprite$ge = this.sliderSprite.getComponent(UITransform)) === null || _this$sliderSprite$ge === void 0 ? void 0 : _this$sliderSprite$ge.getBoundingBoxToWorld())) {
              console.log('collided rewards and slider');
              let removeReward = this.arrayOfRewards.shift();
              removeReward.getComponent(Sprite).destroy();
              removeReward.destroy();
              console.log(this.arrayOfRewards);
              this.score += 10;
              this.scoreLabel.getComponent(Label).string = `score : ${this.score}`;
            }
          });

          if (this.ballNode.getPosition().y < -this.node.getComponent(UITransform).height) {
            console.log('ball is out of the screen');
            this.maxNumberOfBall--;

            if (this.maxNumberOfBall >= 1) {
              this.ballNode.setPosition(this.ballInitialPosition);
              this.ballNode.getComponent(RigidBody2D).linearVelocity = new Vec2(0, 0); // let newBall = instantiate(this.ballPrefab);
              // this.node.addChild(newBall);
              // this.ball = newBall;

              let tempball = this.arrayOfChances.pop();
              tempball.removeFromParent();
            } else {
              this.ballNode.removeFromParent();
            }
          }

          if (this.arrayOfBricksOnScreen.length == 0 && this.addLevel == true) {
            this.addLevel = false;
            this.ballNode.removeFromParent();
            this.level++;

            if (this.level == 3) {
              this.level = 1;
            }

            LevelManager.setLevel(this.level);
            LevelManager.setLevelPlayed(this.level);
            /*this.fetchScript(this.level);
            this.addBricks();*/

            for (let i = 1; i < this.arrayOfChances.length; i++) {
              let temp = this.arrayOfChances[i];
              temp.removeFromParent();
            }

            this.arrayOfChances = [];
            director.loadScene('levelScreenNew');
          }
        }

        addBricks() {
          for (let i = 0; i < this.tileDetails.length; i++) {
            let type = this.tileDetails[i]["type"];
            console.log(type);
            let posX = this.startXPos + Math.floor(this.tileDetails[i]["index"] % this.columns) * this.bricksWidthTemp;
            let posY = this.startYPos - Math.floor(this.tileDetails[i]["index"] / this.columns) * this.bricksHeightTemp;
            console.log(posX, posY);
            this.ch = instantiate(this.bricksPrefab);
            this.node.addChild(this.ch);
            this.ch.setPosition(new Vec3(posX, posY, 1));
            this.ch.getComponent(Sprite).spriteFrame = this.NormalBricks[this.tileDetails[i]["color"] - 1];
            this.ch.colorNumber = this.tileDetails[i]["color"] - 1;
            this.arrayOfBricksOnScreen.push(this.ch);

            switch (type) {
              case BRICKS.IN_TWO_COLLISION:
                this.ch.brickTime = 2;
                this.ch.reward = false;
                break;

              case BRICKS.IN_FOUR_COLLISION:
                this.ch.brickTime = 4;
                this.ch.reward = false;
                break;

              case BRICKS.HAS_REWARDS:
                this.ch.brickTime = 2;
                this.ch.reward = true;
                break;

              default:
                console.log('No details for this bricks.');
            }
          }
        }

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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "asset", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Rewards", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bricksPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "rewardsPrefab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "ballPrefab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "ballForChances", [_dec11], {
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