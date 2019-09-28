import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

let table = document.getElementById("table");


let btnAdd = document.getElementById("btnAdd");
let btnDelete = document.getElementById("btnDelete");
let btnUpdate = document.getElementById("btnUpdate");
let btnAll = document.getElementById("btnAll");
let URI = "https://cphbusines.dk/SOPandCORSback/api/cors"

onload = getAllNames();


function request(URL, method, body) {
    function makeOptions(method, body) {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json"
            }
        };
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }
    return fetch(URL, makeOptions(method, body));
}

function getAllNames() {
    let conf = { method: "GET" };
    let url = URI + "/all"
    let promise = fetch(url, conf);

    promise.then(res => res.json())
        .then(function(data){
            let html = generateTable(data);
            table.innerHTML = html;
        })
}
btnAll.onclick = getAllNames;
function addName(){
    let name = document.getElementById("nameInput").value;

    var person = {name: name};
    request(URI , "POST", person);
    
}
btnAdd.onclick = addName;
function updateName(){
    let name = document.getElementById("nameInput").value;

    var person = {name: name};
    request(URI + "/" + document.getElementById("idInput").value , "PUT", person);
    

}
btnUpdate.onclick = updateName;

function deleteName(){
    request(URI + "/" + document.getElementById("idInput").value, "DELETE" );
    

}
btnDelete.onclick = deleteName;


function generateTable(data) {
    let newData = data.map(function (p) {
        
        
        return "<tr><td>" + p.name + "</td></tr>"
        
    });
    return "<th>Name</th>" + newData.join("");
}



