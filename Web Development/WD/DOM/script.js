// DOM odcument Object Model
/*
A representaion of a window.dowcument object taht comprises everything that we see in the browser (and things we don't -- head tag)
    - DOM Node interface has subclasses of:
        - Document
        - Element
        -DocumentFragment
*/

//creates an HTML element
// let h1 = document.createElement('h1');
// .innerText is a property that injects text
// h1.innerText = "Welcome to Document Object Model"
// .style references style sheet and its color property to assign it a value
// h1.style.color = "whitesmoke"
// h1.style.fontFamily = "sans-serif"
// appends the Node
// document.body.appendChild(h1)

// document.QuerySelector()

let idMethod = document.getElementById('id-method');
idMethod.innerText = ".getElementById";
idMethod.style.color = "whitesmoke";

let p = document.getElementById("get-id");
p.innerText ="Method used to grab the first element with a specified id.";

let myList = document.getElementsByClassName("our-list");
myList[1].style.color = "red";

let qSelect = document.querySelector("#q-select");
qSelect.innerText = "Query Selector grabs the first matching selector";

//.addEventListener("event", callback_function)

let myBtn = document.querySelector(".submit-btn");
myBtn.addEventListener("click", ()=>{console.log("My button has been hit")});
