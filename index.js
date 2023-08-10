const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

//Traer los elementos del HTML
const form = document.getElementById('form')
const inputNumber = document.getElementById('input-number')
const container = document.getElementById('container')
const error = document.getElementById('error')




const searchPizza = (e) =>{
  e.preventDefault(); //previene el dafault

  //por si no se ingresa un numero
  if(inputNumber.value == "") {
    container.innerHTML = ""
    error.textContent = "Por favor ingrese un numero"
    return;
  }

  //Buscador de pizza con el ID
  const pizza = pizzas.find((pizza) => pizza.id == inputNumber.value)
  // si la pizza buscada no existe
  if(!pizza){
    container.innerHTML = `<div class="error-div">
    <small id="error" class="error-card"></small>
    </div>`
    error.textContent = "No existe pizza con ese ID"
    return;
  }
  renderPizza(pizza) // se agarra de la funcion de pizza de arriba para luego mostrarla
  savedLastPizza(pizza);
}

  const renderPizza=(pizza)=>{
    error.textContent = ""
    container.innerHTML = `<div class="card-container">
    <h2 class="titulo">${pizza.nombre}</h2>
    <img src="${pizza.imagen}" class="img"/>
    <p class="ingredientes">Ingredientes: ${pizza.ingredientes}</p>
    <p class="precio">Precio: ${pizza.precio}</p>
    </div>`
  }
const savedLastPizza = (pizza)=>{
  localStorage.setItem("lastPizza", JSON.stringify(pizza));
};
const getLastPizza = ()=> {
  const lastPizza = JSON.parse(localStorage.getItem("lastPizza"));
  if(lastPizza){
    renderPizza(lastPizza);
  }
}


const init = () => {
  form.addEventListener ("submit", searchPizza)
  getLastPizza()
}

init()






