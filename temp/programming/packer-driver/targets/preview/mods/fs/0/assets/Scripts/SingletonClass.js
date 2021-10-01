System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, sys, _crd, SingletonClass;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e1cdaQXPJD25dujY1pftkr", "SingletonClass", undefined);

      _export("SingletonClass", SingletonClass = /*#__PURE__*/function () {
        function SingletonClass() {
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

        SingletonClass.getInstance = function getInstance() {
          return SingletonClass._instance;
        };

        var _proto = SingletonClass.prototype;

        _proto.setScore = function setScore(value) {
          this._score = value;

          if (value > this._eachlevelHighScore[this._currLevel - 1]) {
            this._eachlevelHighScore[this._currLevel - 1] = value;
            sys.localStorage.setItem('level_highScore', JSON.stringify(this._eachlevelHighScore));
          }
        };

        _proto.getScore = function getScore() {
          return this._score;
        };

        _proto.addPoints = function addPoints(value) {
          this._score += value;
        };

        _proto.setLevel = function setLevel(value) {
          this._currLevel = value;
        };

        _proto.getLevel = function getLevel() {
          return this._currLevel;
        };

        _proto.increaseLevel = function increaseLevel() {
          this._currLevel++;

          if (this._currLevel >= this._levelsPlayed) {
            this._levelsPlayed = this._currLevel;
          }
        };

        _proto.setLevelPlayed = function setLevelPlayed(value) {
          this._levelsPlayed = value;
          sys.localStorage.setItem('level_played', "" + this._levelsPlayed);
        };

        _proto.getLevelPlayed = function getLevelPlayed() {
          var level = Number.parseInt(sys.localStorage.getItem('level_played'));
          return level;
        };

        _proto.getLevelHighScore = function getLevelHighScore() {
          return this._eachlevelHighScore[this._currLevel - 1];
        };

        _proto.setLevelHighScore = function setLevelHighScore(highScore) {
          if (highScore > this._eachlevelHighScore[this._currLevel - 1]) {
            this._eachlevelHighScore[this._currLevel - 1] = highScore;
            sys.localStorage.setItem('level_highScore', JSON.stringify(this._eachlevelHighScore));
          }
        };

        _proto.getLevelStar = function getLevelStar(level) {
          return this._eachlevelStar[level - 1];
        };

        _proto.setLevelStar = function setLevelStar(star) {
          if (star > this._eachlevelStar[this._currLevel - 1]) {
            this._eachlevelStar[this._currLevel - 1] = star;
            sys.localStorage.setItem('level_stars', JSON.stringify(this._eachlevelHighScore));
          }
        };

        _proto.updateLevelHighScoreAndStar = function updateLevelHighScoreAndStar() {
          var getLevelHighScoreFromCache = sys.localStorage.getItem('level_highScore');
          var getLevelStarFromCache = sys.localStorage.getItem('level_stars');

          if (getLevelHighScoreFromCache) {
            var tempArr = [];

            for (var i = 0; i < getLevelHighScoreFromCache.length; i++) {
              var p = parseInt(getLevelHighScoreFromCache[i]);

              if (p >= 0) {
                tempArr.push(p);
              }
            }

            this._eachlevelHighScore = tempArr;
          }

          if (getLevelStarFromCache) {
            var _tempArr = [];

            for (var _i = 0; _i < getLevelStarFromCache.length; _i++) {
              var _p = parseInt(getLevelStarFromCache[_i]);

              if (_p >= 0) {
                _tempArr.push(_p);
              }
            }

            this._eachlevelStar = _tempArr;
          }
        };

        return SingletonClass;
      }());

      _defineProperty(SingletonClass, "_instance", new SingletonClass());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SingletonClass.js.map