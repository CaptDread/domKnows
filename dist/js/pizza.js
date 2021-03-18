"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Pizza construction
var Pizza = /*#__PURE__*/function () {
  function Pizza(type, size, amount, half, sauce, cost) {
    _classCallCheck(this, Pizza);

    _defineProperty(this, "type", null);

    _defineProperty(this, "size", null);

    _defineProperty(this, "amount", null);

    _defineProperty(this, "half", null);

    _defineProperty(this, "sauce", null);

    _defineProperty(this, "cost", null);

    this.type = type;
    this.size = size;
    this.amount = amount;
    this.half = half;
    this.sauce = sauce;
    this.cost = cost;
    this.serve();
  }

  _createClass(Pizza, [{
    key: "serve",
    value: function serve() {
      console.log('type', this.type);
      console.log('size', this.size);
      console.log('amount', this.amount);
      console.log('half', this.half);
      console.log('sauce', this.sauce);
      console.log('cost', this.cost);
    }
  }]);

  return Pizza;
}();
//# sourceMappingURL=pizza.js.map
