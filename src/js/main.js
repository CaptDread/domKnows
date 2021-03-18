


var demoOrder = new Order



let paramBTN = document.querySelectorAll('.drop_btn');
let paramVal = document.querySelectorAll('.param-val');
let paramMenu = document.querySelectorAll('.drop__menu')

let sizeA = document.querySelectorAll('.size-menu a')
let amountA = document.querySelectorAll('.amount-menu a')
let halfA = document.querySelectorAll('.half-menu a')
let sauceA = document.querySelectorAll('.sauce-menu a')

for (let sa = 0; sa < sizeA.length; sa++){
    sizeA[sa].addEventListener('click', function(){
        console.log(sizeA[sa].innerHTML, sa)
        paramVal[0].innerHTML = sizeA[sa].innerHTML
        paramVal[0].attributes[1].value = sa
    })
}
for (let aa = 0; aa < amountA.length; aa++){
    amountA[aa].addEventListener('click', function(){
        console.log(amountA[aa].innerHTML, aa)
        paramVal[1].innerHTML = amountA[aa].innerHTML
        paramVal[1].attributes[1].value = aa
    })
}
for (let ha = 0; ha < halfA.length; ha++){
    halfA[ha].addEventListener('click', function(){
        console.log(halfA[ha].innerHTML, ha)
        paramVal[2].innerHTML = halfA[ha].innerHTML
        paramVal[2].attributes[1].value = ha
    })
}
for (let sz = 0; sz < sauceA.length; sz++){
    sauceA[sz].addEventListener('click', function(){
        console.log(sauceA[sz].innerHTML, sz)
        paramVal[3].innerHTML = sauceA[sz].innerHTML
        paramVal[3].attributes[1].value = sz
    })
}


// let inpSize = document.querySelectorAll('#inp__size');
// let inpAmt = document.querySelectorAll('#inp__amount');
// let inpHalf = document.querySelectorAll('#inp__half');
// let inpSauce = document.querySelectorAll('#inp__sauce');

let DEFAULT_INDEX = 0

let pieBTN = document.querySelectorAll('.new__pie-btn')
for (let pieIndex = 0; pieIndex < pieBTN.length; pieIndex++){
    // let sizeVal = DEFAULT_INDEX
    // let amountVal = DEFAULT_INDEX
    // let halfVal = DEFAULT_INDEX
    // let
    pieBTN[pieIndex].addEventListener('click', function(){
        let sizeVal = paramVal[0].attributes[1].value 
        let amountVal = paramVal[1].attributes[1].value
        let halfVal = paramVal[2].attributes[1].value
        let sauceVal = paramVal[3].attributes[1].value
        console.log("potential order: ", pieIndex, sizeVal, amountVal, halfVal, sauceVal)
        demoOrder = new Order(pieIndex, sizeVal, amountVal, halfVal, sauceVal)
    })
}



