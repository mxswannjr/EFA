// API: Application Programing Interface
/* an interface between two applications that all interactions between them without the use of less abstract language

Two types of APIs:
    1. Browser API -- built into the browser and is able to expose data from the browser and environment, example: DOM API (allows us to style a page, make popup windows appear, etc.)

    2. Third party APIs -- require retrieval of their code from the web, such as GoogleMaps API.
        - object based - have containers for the data API uses.  
 */

//HTTP Requests 
/* defined set of request methods which indicate an action to be performed.

    REST - representational state transfer
    architectural style for stateless standard of communication
        - GET: retrieves resources by an id
        - POST: creates a new resource
        - PUT: updates a resource using an id 
        - DELETE: removes specific resource using an id
All of these reach an Endpoint.
    - Endpoint: url that a client app users to communicate with the server
*/

let cardImg = document.querySelector("body > div > div > div.card-img > img");

let name = document.querySelector(".name");

let ability = document.querySelector(".ability");
let weight = document.querySelector("body > div > div div.card-body > div.paragraph > p > em > strong");
let generateBtn = document.querySelector(".submit-btn");

generateBtn.addEventListener("click", (e) => {
    e.preventDefault()
    
    let id = document.querySelector(".search-input").value;

//  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//        .then(res => res.json())
//       .then(data => {
//        console.log(data);
            
//            name.innerText = data.name
//            cardImg.src = data.sprites.front_shiny
//            ability.innerText = data.abilities[0].ability.name
//           weight.innerText = data.weight
//       });
//});

async function getPokemon() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    name.innerText = data.name
    cardImg.src = data.sprites.front_shiny
    ability.innerText = data.abilities[0].ability.name
    weight.innerText = data.weight
}

getPokemon();