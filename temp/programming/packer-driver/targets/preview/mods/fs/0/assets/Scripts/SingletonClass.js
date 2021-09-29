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

          _defineProperty(this, "_level", 1);

          _defineProperty(this, "_levelsPlayed", 1);

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
        };

        _proto.getScore = function getScore() {
          return this._score;
        };

        _proto.addPoints = function addPoints(value) {
          this._score += value;
        };

        _proto.removePoints = function removePoints(value) {
          this._score -= value;
        };

        _proto.setLevel = function setLevel(value) {
          this._level = value;
        };

        _proto.getLevel = function getLevel() {
          return this._level;
        };

        _proto.setLevelPlayed = function setLevelPlayed(value) {
          this._levelsPlayed = value;
          sys.localStorage.setItem('level_played', "" + this._levelsPlayed);
        };

        _proto.getLevelPlayed = function getLevelPlayed() {
          var level = Number.parseInt(sys.localStorage.getItem('level_played'));
          return level;
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