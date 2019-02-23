//Declarar objeto de la data
const data = window.POKEMON.pokemon;
let resultTotal;

// Declara botones
const startPokedex = document.getElementById('start-pokemon');
const next = document.getElementById('next-page');
const back = document.getElementById('back');
const sort = document.getElementById('order');
const sortDesk = document.getElementById('order-desktop');

// Declara Sections
const start = document.getElementById('start');
const rootContainer = document.getElementById('root-container');
const options = document.getElementById('options');
const Charmander = document.getElementById('charizard');
const gif = document.getElementById('charizard-background');
const finalResult = document.getElementById('root');

// Declara boton de tipos de pokemones en un array, por medio de su clase.
const buttonFilter = Array.from(document.getElementsByClassName("boton-type-chart"));

/*
Cambiar de página en Mobile
*/

startPokedex.addEventListener("click", () => {
  start.style.display = "none";
  rootContainer.style.display = "none";
  options.style.display = "block";
});

next.addEventListener("click", () => {
  start.style.display = "none";
  rootContainer.style.display = "block";
  options.style.display = "none";
});

back.addEventListener("click", () => {
  start.style.display = "none";
  rootContainer.style.display = "none";
  options.style.display = "block";
});


// Obtiene los datos solicitados del objeto Data. Lo compara con el array de botones y filta por tipo.

const gettingType = (arrayofButtons) => {
  arrayofButtons.map((buttonSelected) => {
    buttonSelected.addEventListener("click", (event) => {
      Charmander.style.display = "none";
      gif.style.display = 'none';
      const buttonType = event.target.id;
      const dataFiltered = window.allPokemon.dataFiltered(data, buttonType);
      printResult(dataFiltered)
    })
  });
};

// Imprime resultados por tipo. 
const printResult = (getType) => {
  resultTotal = getType
  finalResult.innerHTML = "";
  getType.map(data => {
    finalResult.innerHTML += `<button class="pokedex"  style='width:100%; height:100%'>
    <img src="${data.img}">
    <br>Nùmero: ${data.id} 
    <br> Nombre: ${data.name} 
    <br> Tipo: ${data.type}
    <br> Mejor horario para encontrarlo: ${data.spawn_time}</button>`;
  });
  return getType;
};

//imprime de la a - z
const printOrder = (arrayOfTypes) => {
  finalResult.innerHTML = "";
 arrayOfTypes.map(data => {
   finalResult.innerHTML += `<button class="pokedex"  style='width:100%; height:100% background-color: blue;'>
   <img src="${data.img}">
   <br>Nùmero: ${data.id} 
   <br> Nombre: ${data.name} 
   <br> Tipo: ${data.type}
   <br> Mejor horario para encontrarlo: ${data.spawn_time}</button>`;
 });
 return arrayOfTypes;
};

gettingType(buttonFilter);

//ordena de la a - z 
sort.addEventListener('click', () => {
  let orderAtoZ = window.allPokemon.orderData(resultTotal);
  printOrder(orderAtoZ);
})
sortDesk.addEventListener('click', () => {
  let orderAtoZ = window.allPokemon.orderData(resultTotal);
  printOrder(orderAtoZ);
})


//
let candy = [];
data.forEach((element) => {
  if (element.candy_count > 0 ) {
    candy.push(element.candy_count)
  }
});

