System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, sys, SingletonClass, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("SingletonClass", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e1cdaQXPJD25dujY1pftkr", "SingletonClass", undefined);

      _export("SingletonClass", SingletonClass = class SingletonClass {
        constructor() {
          _defineProperty(this, "_score", 0);

          _defineProperty(this, "_currLevel", 1);

          _defineProperty(this, "_levelsPlayed", 1);

          _defineProperty(this, "_eachlevelHighScore", [0, 0, 0, 0, 0, 0]);

          _defineProperty(this, "_eachlevelStar", [1, 1, 1, 1, 1, 1]);

          if (SingletonClass._instance) {
            throw new Error("Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.");
          }

          SingletonClass._instance = this;
        }

        static getInstance() {
          return SingletonClass._instance;
        }

        setScore(value) {
          this._score = value;
        }

        getScore() {
          return this._score;
        }

        addPoints(value) {
          this._score += value;
        }

        setLevel(value) {
          this._currLevel = value;
        }

        getLevel() {
          return this._currLevel;
        }

        increaseLevel() {
          this._currLevel++;

          if (this._currLevel >= this._levelsPlayed) {
            this._levelsPlayed = this._currLevel;
          }
        }

        setLevelPlayed(value) {
          this._levelsPlayed = value;
          sys.localStorage.setItem('level_played', `${this._levelsPlayed}`);
        }

        getLevelPlayed() {
          let level = Number.parseInt(sys.localStorage.getItem('level_played'));
          return level;
        }

        setLevelHighScore(level, highScore) {
          this._eachlevelHighScore[level - 1] = highScore;
        }

        getLevelHighScore(level) {
          return this._eachlevelHighScore[level - 1];
        }

      });

      _defineProperty(SingletonClass, "_instance", new SingletonClass());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SingletonClass.js.map