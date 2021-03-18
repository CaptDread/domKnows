"use strict";

var demoOrder = new Order();
var paramBTN = document.querySelectorAll('.drop_btn');
var paramVal = document.querySelectorAll('.param-val');
var paramMenu = document.querySelectorAll('.drop__menu');
var sizeA = document.querySelectorAll('.size-menu a');
var amountA = document.querySelectorAll('.amount-menu a');
var halfA = document.querySelectorAll('.half-menu a');
var sauceA = document.querySelectorAll('.sauce-menu a');

var _loop = function _loop(sa) {
  sizeA[sa].addEventListener('click', function () {
    console.log(sizeA[sa].innerHTML, sa);
    paramVal[0].innerHTML = sizeA[sa].innerHTML;
    paramVal[0].attributes[1].value = sa;
  });
};

for (var sa = 0; sa < sizeA.length; sa++) {
  _loop(sa);
}

var _loop2 = function _loop2(aa) {
  amountA[aa].addEventListener('click', function () {
    console.log(amountA[aa].innerHTML, aa);
    paramVal[1].innerHTML = amountA[aa].innerHTML;
    paramVal[1].attributes[1].value = aa;
  });
};

for (var aa = 0; aa < amountA.length; aa++) {
  _loop2(aa);
}

var _loop3 = function _loop3(ha) {
  halfA[ha].addEventListener('click', function () {
    console.log(halfA[ha].innerHTML, ha);
    paramVal[2].innerHTML = halfA[ha].innerHTML;
    paramVal[2].attributes[1].value = ha;
  });
};

for (var ha = 0; ha < halfA.length; ha++) {
  _loop3(ha);
}

var _loop4 = function _loop4(sz) {
  sauceA[sz].addEventListener('click', function () {
    console.log(sauceA[sz].innerHTML, sz);
    paramVal[3].innerHTML = sauceA[sz].innerHTML;
    paramVal[3].attributes[1].value = sz;
  });
};

for (var sz = 0; sz < sauceA.length; sz++) {
  _loop4(sz);
} // let inpSize = document.querySelectorAll('#inp__size');
// let inpAmt = document.querySelectorAll('#inp__amount');
// let inpHalf = document.querySelectorAll('#inp__half');
// let inpSauce = document.querySelectorAll('#inp__sauce');


var DEFAULT_INDEX = 0;
var pieBTN = document.querySelectorAll('.new__pie-btn');

var _loop5 = function _loop5(pieIndex) {
  // let sizeVal = DEFAULT_INDEX
  // let amountVal = DEFAULT_INDEX
  // let halfVal = DEFAULT_INDEX
  // let
  pieBTN[pieIndex].addEventListener('click', function () {
    var sizeVal = paramVal[0].attributes[1].value;
    var amountVal = paramVal[1].attributes[1].value;
    var halfVal = paramVal[2].attributes[1].value;
    var sauceVal = paramVal[3].attributes[1].value;
    console.log("potential order: ", pieIndex, sizeVal, amountVal, halfVal, sauceVal);
    demoOrder = new Order(pieIndex, sizeVal, amountVal, halfVal, sauceVal);
  });
};

for (var pieIndex = 0; pieIndex < pieBTN.length; pieIndex++) {
  _loop5(pieIndex);
}
//# sourceMappingURL=main.js.map
