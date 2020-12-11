// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}


// Iteration 1: set the visibility of `<section class="mushroom">`

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if(state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}


// Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {

    // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll('.green-pepper').forEach(oneGreenPeeppers => {
      if (state.greenPeppers) {
        oneGreenPeeppers.style.visibility = 'visible';
      } else {
        oneGreenPeeppers.style.visibility = 'hidden';
      }
    });
  }
  

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.sauce');
    if(state.whiteSauce){
      sauce.classList.add("sauce-white");
    } else {
      sauce.classList.remove("sauce-white");
    }
 
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let gluten = document.querySelector('.crust')
    if (state.glutenFreeCrust) {
      gluten.classList.add("crust-gluten-free");
    } else {
      gluten.classList.remove("crust-gluten-free");
    }
}



function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

   if (state.pepperoni){
    document.querySelector(".btn.btn-pepperoni").setAttribute("class","btn btn-pepperoni active")
  } else {
    document.querySelector(".btn.btn-pepperoni").setAttribute("class","btn btn-pepperoni")
  }

  if (state.mushrooms){
    document.querySelector(".btn.btn-mushrooms").setAttribute("class","btn btn-mushrooms active")
  } else {
    document.querySelector(".btn.btn-mushrooms").setAttribute("class","btn btn-mushrooms")
  }

  if (state.greenPeppers){
    document.querySelector(".btn.btn-green-peppers").setAttribute("class","btn btn-green-peppers active")
  } else {
    document.querySelector(".btn.btn-green-peppers").setAttribute("class","btn btn-green-peppers")
  }

  if (state.sauce){
    document.querySelector(".btn.btn-sauce").setAttribute("class","btn btn-sauce active")
  } else {
    document.querySelector(".btn.btn-sauce").setAttribute("class","btn btn-sauce")
  }

  if (state.crust){
    document.querySelector(".btn.btn-crust").setAttribute("class","btn btn-crust active")
  } else {
    document.querySelector(".btn.btn-crust").setAttribute("class","btn btn-crust")
  }

}


function renderPrice() {

  let list=[...document.querySelectorAll('.panel.price ul')];
  let listLi=[...document.querySelectorAll('.panel.price ul>li')];

  console.log(listLi);

  const currentState = Object.values(state);
  console.log(currentState);
  for(i=0;i<trueStates.length;i++){
  if(currentState[i]==='false'){
  //listLi[i].setAttribute('display', 'none')};
 // listLi[i].setAttribute('hidden', 'true')
  listLi[i].style.display = 'none';
  
  }  
}



renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});


// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
