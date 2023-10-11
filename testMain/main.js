import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { baseArray } from "./scr/config";
import { buscarPokemon } from "./scr/config";

const app = document.getElementById("app");
const form = app.querySelector("#busqueda");
const keyboard_1 = app.querySelector("#keyboard_1");
const keyboard_2 = app.querySelector("#keyboard_2");
const keyboard_3 = app.querySelector("#keyboard_3");
const keyboard_4 = app.querySelector("#keyboard_4");
const keyboard_5 = app.querySelector("#keyboard_5");
const keyboard_6 = app.querySelector("#keyboard_6");
const keyboard_7 = app.querySelector("#keyboard_7");
const keyboard_8 = app.querySelector("#keyboard_8");
const keyboard_9 = app.querySelector("#keyboard_9");
const keyboard_0 = app.querySelector("#keyboard_0");
const keyboard_q = app.querySelector("#keyboard_q");
const keyboard_w = app.querySelector("#keyboard_w");
const keyboard_e = app.querySelector("#keyboard_e");
const keyboard_r = app.querySelector("#keyboard_r");
const keyboard_t = app.querySelector("#keyboard_t");
const keyboard_y = app.querySelector("#keyboard_y");
const keyboard_u = app.querySelector("#keyboard_u");
const keyboard_i = app.querySelector("#keyboard_i");
const keyboard_o = app.querySelector("#keyboard_o");
const keyboard_p = app.querySelector("#keyboard_p");
const keyboard_a = app.querySelector("#keyboard_a");
const keyboard_s = app.querySelector("#keyboard_s");
const keyboard_d = app.querySelector("#keyboard_d");
const keyboard_f = app.querySelector("#keyboard_f");
const keyboard_g = app.querySelector("#keyboard_g");
const keyboard_h = app.querySelector("#keyboard_h");
const keyboard_j = app.querySelector("#keyboard_j");
const keyboard_k = app.querySelector("#keyboard_k");
const keyboard_l = app.querySelector("#keyboard_l");
const keyboard_ñ = app.querySelector("#keyboard_ñ");
const keyboard_z = app.querySelector("#keyboard_z");
const keyboard_x = app.querySelector("#keyboard_x");
const keyboard_c = app.querySelector("#keyboard_c");
const keyboard_v = app.querySelector("#keyboard_v");
const keyboard_b = app.querySelector("#keyboard_b");
const keyboard_n = app.querySelector("#keyboard_n");
const keyboard_m = app.querySelector("#keyboard_m");
const input_pokemon = app.querySelector("#input_pokemon");
const container = app.querySelector("#container");

window.addEventListener("DOMContentLoaded", () => {
  
  const urlPokemones = baseArray ({path: "/pokemon", limit: 150 }); 
  console.log(urlPokemones);
  
  
  fetch(urlPokemones)
  .then(response => response.json())
  .then(({ results }) => {
    let pokemon_requests = results.map(pokemon => fetch(pokemon.url).then(response => response.json()))
    return Promise.all(pokemon_requests)
    
  })
  .then(pokemons => {
    console.log("pokemons= ",pokemons)
    console.log(pokemons.length);
      const pokemonList = pokemons;
      console.log("pokemonList= ",pokemonList);

        const pokemonesDom = app.querySelector("#pokemonesDom");
         
      function displayPokemones(pokemonListArray) { 

        pokemonesDom.innerHTML = "";
        pokemonListArray.forEach(poke => {
            console.log(poke.sprites.other["official-artwork"].front_default);
            console.log(poke.name);
            console.log("Id= ",poke.id);
            console.log("Tipo= ",poke.types[0].type.name);
            const col = document.createElement("div");
            col.classList.add("col-md-3", "mb-3");
        
            const card = document.createElement("div");
            card.classList.add("card", "card-pokedex");

            const img = document.createElement("img");
            img.src = poke.sprites.other["official-artwork"].front_default;
            img.classList.add("card-img-top");

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const title = document.createElement("h5");
            title.classList.add("card-title");
            title.textContent = poke.name;

            const category = document.createElement("p");
            category.classList.add("card-text");
            category.textContent = `Tipo: ${poke.types[0].type.name}`;
            
            const button = document.createElement("button");
            button.classList.add("btn", "btn-success");
            button.setAttribute("id", "btnLike");
            button.setAttribute("href", "#");
            button.textContent = "Like";

            cardBody.appendChild(title);
            cardBody.appendChild(category);
            cardBody.appendChild(button);

            card.appendChild(img);
            card.appendChild(cardBody);

            col.appendChild(card);

            pokemonesDom.appendChild(col);

          });
          
          const btnLike = document.querySelector("#btnLike");
                btnLike.addEventListener("click", () => {
                  console.log("click");
                });
      }  

          const display_pokemon = (name,type,image_url) => {
              return `
                  <div class="card card-search" style="width: 80%;">
                    <img class="card-img-top" src="${image_url}" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">${name}</h5>
                      <p class="card-text">
                        <span><label>Tipo:&nbsp</label>${type}</span>
                      </p>
                    </div>
                  </div>
                  `
              } 
              
              form.addEventListener("submit", (e) => {
                e.preventDefault()
                console.log(input_pokemon.value.toLowerCase())
                const fetchData = async () => {
                  let nidPokemon = await buscarPokemon(e.target.nombre.value.toLowerCase())
                  console.log(nidPokemon)
      
                  container.innerHTML = display_pokemon(nidPokemon.name, 
                    nidPokemon.types[0].type.name,
                    nidPokemon.sprites.other["official-artwork"].front_default) 
                }

                fetchData()

  })
  
  keyboard_q.addEventListener("click",(e) => {
    input_pokemon.value += "q"
  })

  keyboard_w.addEventListener("click", (e) => {
    input_pokemon.value += "w"
  }) 
  
  keyboard_e.addEventListener("click", (e) => {
    input_pokemon.value += "e"
  })
  
  keyboard_r.addEventListener("click", (e) => {
    input_pokemon.value += "r"
  })
  
  keyboard_t.addEventListener("click", (e) => {
    input_pokemon.value += "t"
  })
  
  keyboard_y.addEventListener("click", (e) => {
    input_pokemon.value += "y"
  })
  
  keyboard_u.addEventListener("click", (e) => {
    input_pokemon.value += "u"
  })
  
  keyboard_i.addEventListener("click", (e) => {
    input_pokemon.value += "i"
  })
  
  keyboard_o.addEventListener("click", (e) => {
    input_pokemon.value += "o"
  })
  
  keyboard_p.addEventListener("click", (e) => {
    input_pokemon.value += "p"
  })
  
  keyboard_a.addEventListener("click", (e) => {
    input_pokemon.value += "a"
  })
  
  keyboard_s.addEventListener("click", (e) => {
    input_pokemon.value += "s"
  })
  
  keyboard_d.addEventListener("click", (e) => {
    input_pokemon.value += "d"
  })
  
  keyboard_f.addEventListener("click", (e) => {
    input_pokemon.value += "f"
  })
  
  keyboard_g.addEventListener("click", (e) => {
    input_pokemon.value += "g"
  })
  
  keyboard_h.addEventListener("click", (e) => {
    input_pokemon.value += "h"
  })
  
  keyboard_j.addEventListener("click", (e) => {
    input_pokemon.value += "j"
  })
  
  keyboard_k.addEventListener("click", (e) => {
    input_pokemon.value += "k"
  })
  
  keyboard_l.addEventListener("click", (e) => {
    input_pokemon.value += "l"
  })
  
  keyboard_ñ.addEventListener("click", (e) => {
    input_pokemon.value += "ñ"
  })
  
  keyboard_z.addEventListener("click", (e) => {
    input_pokemon.value += "z"
  })
  
  keyboard_x.addEventListener("click", (e) => {
    input_pokemon.value += "x"
  })
  
  keyboard_c.addEventListener("click", (e) => {
    input_pokemon.value += "c"
  })
  
  keyboard_v.addEventListener("click", (e) => {
    input_pokemon.value += "v"
  })
  
  keyboard_b.addEventListener("click", (e) => {
    input_pokemon.value += "b"
  })
  
  keyboard_n.addEventListener("click", (e) => {
    input_pokemon.value += "n"
  })
  
  keyboard_m.addEventListener("click", (e) => {
    input_pokemon.value += "m"
  })
  
  keyboard_1.addEventListener("click", (e) => {
    input_pokemon.value += "1"
  })
  
  keyboard_2.addEventListener("click", (e) => {
    input_pokemon.value += "2"
  })
  
  keyboard_3.addEventListener("click", (e) => {
    input_pokemon.value += "3"
  })
  
  keyboard_4.addEventListener("click", (e) => {
    input_pokemon.value += "4"
  })
  
  keyboard_5.addEventListener("click", (e) => {
    input_pokemon.value += "5"
  })
  
  keyboard_6.addEventListener("click", (e) => {
    input_pokemon.value += "6"
  })
  
  keyboard_7.addEventListener("click", (e) => {
    input_pokemon.value += "7"
  })
  
  keyboard_8.addEventListener("click", (e) => {
    input_pokemon.value += "8"
  })
  
  keyboard_9.addEventListener("click", (e) => {
    input_pokemon.value += "9"
  })
  
  keyboard_0.addEventListener("click", (e) => {
    input_pokemon.value += "0"
  })

  console.log(pokemonList);
  
 const typeFilter = app.querySelector("#typeFilter");
           
  typeFilter.addEventListener("change", () => {
    const selectedType = typeFilter.value;
    if (selectedType === "todos") {
        displayPokemones(pokemonList);
    } else {
        const filterPokemones = pokemonList.filter(poke => poke.types[0].type.name === selectedType);
        console.log(filterPokemones);
        displayPokemones(filterPokemones);
    }
});

displayPokemones(pokemonList); 
        
});


})