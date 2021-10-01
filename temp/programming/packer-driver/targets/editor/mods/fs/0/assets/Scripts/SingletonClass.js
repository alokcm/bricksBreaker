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

          _defineProperty(this, "_eachlevelStar", [1, 0, 0, 0, 0, 0]);

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

          if (value > this._eachlevelHighScore[this._currLevel - 1]) {
            this._eachlevelHighScore[this._currLevel - 1] = value;
            sys.localStorage.setItem('level_highScore', JSON.stringify(this._eachlevelHighScore));
          }
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

        getLevelHighScore() {
          return this._eachlevelHighScore[this._currLevel - 1];
        }

        setLevelHighScore(highScore) {
          if (highScore > this._eachlevelHighScore[this._currLevel - 1]) {
            this._eachlevelHighScore[this._currLevel - 1] = highScore;
            sys.localStorage.setItem('level_highScore', JSON.stringify(this._eachlevelHighScore));
          }
        }

        getLevelStar(level) {
          return this._eachlevelStar[level - 1];
        }

        setLevelStar(star) {
          if (star > this._eachlevelStar[this._currLevel - 1]) {
            this._eachlevelStar[this._currLevel - 1] = star;
            sys.localStorage.setItem('level_stars', JSON.stringify(this._eachlevelHighScore));
          }
        }

        updateLevelHighScoreAndStar() {
          let getLevelHighScoreFromCache = sys.localStorage.getItem('level_highScore');
          let getLevelStarFromCache = sys.localStorage.getItem('level_stars');

          if (getLevelHighScoreFromCache) {
            let tempArr = [];

            for (let i = 0; i < getLevelHighScoreFromCache.length; i++) {
              let p = parseInt(getLevelHighScoreFromCache[i]);

              if (p >= 0) {
                tempArr.push(p);
              }
            }

            this._eachlevelHighScore = tempArr;
          }

          if (getLevelStarFromCache) {
            let tempArr = [];

            for (let i = 0; i < getLevelStarFromCache.length; i++) {
              let p = parseInt(getLevelStarFromCache[i]);

              if (p >= 0) {
                tempArr.push(p);
              }
            }

            this._eachlevelStar = tempArr;
          }
        }

      });

      _defineProperty(SingletonClass, "_instance", new SingletonClass());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SingletonClass.js.map