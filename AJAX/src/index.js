import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");


//Finding individual jokes
let jokeBtn = document.getElementById("getJoke");

jokeBtn.addEventListener("click", function () {
    let jokeInput = document.getElementById("jokeId");
    let html = jokes.getJokeById(jokeInput.value - 1);

    document.getElementById("idJoke").innerHTML = html;
});

//Adding new jokes

let addJokeBtn = document.getElementById("addNewJoke");

addJokeBtn.addEventListener("click", function () {
    let newJokeInput = document.getElementById("newJoke");


    jokes.addJoke(newJokeInput.value);

    newJokeInput.value = "";
    document.getElementById("jokes").innerHTML = jokes.getJokes().map(joke => "<li>" + joke + "</li>").join("");


});

//Small application to display a quote of the hour

let quoteBtn = document.getElementById("quoteBtn");
quoteBtn.addEventListener("click", getQuote);


function getQuote() {
    let conf = { method: "GET" };
    let url = "https://studypoints.info/jokes/api/jokes/period/hour";
    let promise = fetch(url, conf);

    promise.then(res => res.json())
        .then(function (data) {
            let html = "<p>" + data.joke + "</p>"
            document.getElementById("div").innerHTML = html;
        });

}

setInterval(getQuote, 1000 * 60 * 60);


//SVG

let svg = document.getElementById("svg2");
let directionP = document.getElementById("direction");

let north = document.getElementById("north");
let south = document.getElementById("south");
let west = document.getElementById("west");
let east = document.getElementById("east");

east.addEventListener("click", function () {
    directionP.innerHTML = "East"
})
west.onclick = function () {
    directionP.innerHTML = "West";
}
north.onclick = function () {
    directionP.innerHTML = "North";
}
south.onclick = function(){
    directionP.innerHTML = "South";
}

// svg.addEventListener("click", function (e) {

//      let target = e.target;

//      if (target.id === "north") {
//          directionP.innerHTML = "North";
//      }
//      if(target.id === "south"){
//          directionP.innerHTML = "South";
//      }
//      if(target.id === "east"){
//          directionP.innerHTML = "East";
//      }
//      if(target.id === "west"){
//          directionP.innerHTML = "West";
//      }
// })
