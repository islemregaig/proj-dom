//bouton+
var btnPlus = document.getElementsByClassName('btn-plus')
var btnMinus = document.getElementsByClassName('btn-minus')
 for (let i = 0; i < btnPlus.length; i++) {
    const plusButton = btnPlus[i];
    plusButton.addEventListener('click',function (e) {
      var qty = e.target.previousElementSibling
      qty.value = +qty.value + 1
      calculsomme()
    })
}
//bouton-
 for (let i = 0; i < btnPlus.length; i++) {
    const minusButton = btnMinus[i];
    minusButton.addEventListener('click',function (e) {
      var qty = e.target.previousElementSibling.previousElementSibling
      if (qty.value>0)
      {
      qty.value = +qty.value - 1 
      }
      calculsomme()
    })
 }
// heart red
 function myfonction(x){
    
      x.classList.toggle("color");
 }
//  remove article
 function remote(y){
    
     y.parentElement.remove();
 }
//  calcul somme
 function calculsomme (){
    var price = document.getElementsByClassName('price')
    var qty =  document.getElementsByClassName('number')
    let total = 0
     for (let i = 0; i < qty.length; i++) {
        const qtyPerProduct = qty[i].value
        const pricePerProduct = price[i].innerText.replace('$','')
        total += +qtyPerProduct*parseInt(pricePerProduct)
        console.log(parseInt(pricePerProduct),qtyPerProduct);
     }
     document.getElementById('total').innerText=total ;
 }   



