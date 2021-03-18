"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Toss = /*#__PURE__*/function () {
  function Toss(type, amount, half, sauce, cost) {
    _classCallCheck(this, Toss);

    _defineProperty(this, "DEFAULT_TYPE", 'cheese');

    _defineProperty(this, "DEFAULT_AMOUNT", 'regular');

    _defineProperty(this, "DEFAULT_HALF", 'full');

    _defineProperty(this, "DEFAULT_SAUCE", 'butter');

    _defineProperty(this, "type", null);

    _defineProperty(this, "amount", null);

    _defineProperty(this, "half", null);

    _defineProperty(this, "sauce", null);

    _defineProperty(this, "cost", null);

    _defineProperty(this, "TYPES", [['cheese', 2], ['carnivore', 4], ['herbivore', 4], ['omnivore', 6]]);

    _defineProperty(this, "AMOUNT", ['regular', 'light', 'extra']);

    _defineProperty(this, "HALF", ['full', 'halfCheese', 'halfCarni', 'halfHerb', 'halfOmni']);

    _defineProperty(this, "SAUCES", ['butter', 'ranch', 'hot']);

    this.type = type ? type : this.DEFAULT_TYPE;
    this.amount = amount ? amount : this.DEFAULT_AMOUNT;
    this.half = half ? half : this.DEFAULT_HALF;
    this.sauce = sauce ? sauce : this.DEFAULT_SAUCE;
    this.cost = cost;
    this.bake();
  }

  _createClass(Toss, [{
    key: "bake",
    value: function bake() {
      this.pi = [];
      this.pi.push(new Pizza(this.type, this.amount, this.half, this.sauce, this.cost));
    }
  }]);

  return Toss;
}();
//# sourceMappingURL=menu.js.map
