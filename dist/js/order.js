"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

pizzaMenuBuiltBoolean = false;

var Order = /*#__PURE__*/function () {
  function Order(TiNDEX, SZiNDEX, AiNDEX, HiNDEX, SiNDEX) {
    _classCallCheck(this, Order);

    _defineProperty(this, "TYPES", [['cheese', 2, "Your run of the mill cheese pizza, for those with a traditonal taste in mind"], ['carnivore extreme', 4, "Name 4 meats. doesn't matter from what, that's on your pizza"], ['vegious maximus', 4, "Greens, but also reds! Peppers that is, with onions and mushrooms."], ['house special', 6, "For those that think all the vegi's will help make the meat's healthier..."], ['angry fiji', 6, "BBQ sauce based, with chicken, red onions, bacon, jalapenos and pineapples"], ['baked tato pie', 6, "Olive oil based, with mozz and cheader mix, tater-tot rounds, and bacon. Garnished with sour cream, a spiral of spicy ranch, and a gentel spread of fresh chives."], ['maze-ing street pi', 6, "sour cream base, with fontina cheese, corn and bacon. Garnished with a spiral of basil aioli, and a gentle spread of otija cheese and parsley."], ['buffalo supreme', 6, "Olive oil base, with mozz and cheader, and buffalo fried chicken. Garnished with diced celery and a spiral of spicy ranch."]]);

    _defineProperty(this, "SIZE", [["12'", 0], ["14'", 2], ["16'", 4]]);

    _defineProperty(this, "AMOUNT", [['regular', 2], ['light', 1], ['extra', 3]]);

    _defineProperty(this, "HALF", [['full', 0], ['cheese', 1], ['carni', 2], ['vegi', 2], ['house', 3], ['fiji', 3], ['baked', 3], ['maze', 3], ['buffalo', 3]]);

    _defineProperty(this, "SAUCES", [['garlic butter', 0], ['ranch', 0], ['hot sauce', 0], ['BBQ', 0], ['basil aioli', 0]]);

    _defineProperty(this, "DEFAULT_INDEX", 0);

    _defineProperty(this, "iType", null);

    _defineProperty(this, "iSize", null);

    _defineProperty(this, "iAmount", null);

    _defineProperty(this, "iHalf", null);

    _defineProperty(this, "iSauce", null);

    _defineProperty(this, "orderType", null);

    _defineProperty(this, "orderSize", null);

    _defineProperty(this, "orderAmount", null);

    _defineProperty(this, "orderHalf", null);

    _defineProperty(this, "orderSauce", null);

    _defineProperty(this, "orderCost", null);

    this.iType = TiNDEX ? TiNDEX : this.DEFAULT_INDEX;
    this.iSize = SZiNDEX ? SZiNDEX : this.DEFAULT_INDEX;
    this.iAmount = AiNDEX ? AiNDEX : this.DEFAULT_INDEX;
    this.iHalf = HiNDEX ? HiNDEX : this.DEFAULT_INDEX;
    this.iSauce = SiNDEX ? SiNDEX : this.DEFAULT_INDEX;
    this.halfIndex = HiNDEX ? HiNDEX : this.DEFAULT_INDEX;
    this.orderType = this.TYPES[this.iType];
    this.orderSize = this.SIZE[this.iSize];
    this.orderAmount = this.AMOUNT[this.iAmount];
    this.orderHalf = this.HALF[this.iHalf];
    this.orderSauce = this.SAUCES[this.iSauce];
    this.halfDesIndex = this.halfIndex - 1;
    this.orderCost = this.orderType[1] + this.orderSize[1], this.orderAmount[1] + this.orderHalf[1] + this.orderSauce[1];
    this.placeOrder();
    this.buildMenu();
  }

  _createClass(Order, [{
    key: "buildMenu",
    value: function buildMenu() {
      var pizzaMenu = document.querySelector('.pizza__menu-container');

      if (pizzaMenuBuiltBoolean === false) {
        for (var pt = 0; pt < this.TYPES.length; pt++) {
          var newPizzaBtn = document.createElement('button');
          newPizzaBtn.classList.add('new__pie-btn');
          pizzaMenu.appendChild(newPizzaBtn);
          newPizzaBtn.innerHTML = this.TYPES[pt][0];
          console.log('New pizza object created');
          pizzaMenuBuiltBoolean = true;
        }
      } else if (pizzaMenuBuiltBoolean === true) {
        console.log("Pizza Menu already built");
      }

      var pizzaHead = document.querySelector('.pizza__tray-info-head');
      var pizzaDes = document.querySelector('.pizza__tray-info-description');
      var piSize = document.querySelector('.pizza-size');
      var halfHead = document.querySelector('.half-head');
      var halfDes = document.querySelector('.half-des');
      var topAmt = document.querySelector('.top-amount');
      var sideSauce = document.querySelector('.side-sauce');
      var piPrice = document.querySelector('.pizza__tray-info-price');
      pizzaHead.innerHTML = this.orderType[0];
      pizzaDes.innerHTML = this.orderType[2];
      piSize.innerHTML = this.orderSize[0];

      if (this.halfDesIndex > 0) {
        halfDes.innerHTML = this.TYPES[this.halfDesIndex][2];
        halfHead.innerHTML = "half  " + this.orderHalf[0];
      } else {
        halfHead.innerHTML = this.orderHalf[0];
        halfDes.innerHTML = "";
      }

      topAmt.innerHTML = this.orderAmount[0];
      sideSauce.innerHTML = this.orderSauce[0];
      piPrice.innerHTML = '$' + this.orderCost;
    }
  }, {
    key: "placeOrder",
    value: function placeOrder() {
      this.order = [];
      this.order.push(new Pizza(this.orderType[0], this.orderSize[0], this.orderAmount[0], this.orderHalf[0], this.orderSauce[0], this.orderCost));
    }
  }]);

  return Order;
}();
//# sourceMappingURL=order.js.map
