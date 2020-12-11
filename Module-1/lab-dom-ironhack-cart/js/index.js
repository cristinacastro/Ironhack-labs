// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = parseInt(product.querySelector('.price span').innerHTML);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  console.log(price,quantity);
      let subtotal = price * quantity;
      product.querySelector('.subtotal span').innerHTML = subtotal;
      return subtotal;
}





function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  

const calculatePrices = [...document.querySelectorAll('.product')]; //fem l'array per tots els productes per si després fem reduce o map
calculatePrices.forEach(singleProduct => updateSubtotal(singleProduct));

console.log(calculatePrices);



  // ITERATION 3

  let total = 0
  calculatePrices.forEach(function(singleProduct){
  let subtotal = updateSubtotal(singleProduct)
  total += subtotal
  })
  const value = document.querySelector('#total-value span')
  value.innerHTML = total 
}

  



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode; //busquem l'arrel del botó al que has fet click
  console.log('The target in remove is:', target);
 //console.log(target.parentNode.parentNode.parentNode);


}
// ITERATION 5

function createProduct() {
//eventListeners és un event que queda escoltant fins que hi ha un click i es cridi a un event per realitzar seguidament una funció


el.eventListener('click, e =>') // aqui li diem que s'apliqui el eventListener a cada element. Previament li haurem aplicat el eventListener a tots mitjançnt un forEach

}
