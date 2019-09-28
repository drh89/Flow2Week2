///////////////////////////////////////////////////////////////
/////////////////////////Assignment 5//////////////////////////
///////////////////////////////////////////////////////////////

//A

var all = ["Lars", "Peter", "Jan", "Bo"];

var comma = all.join(",");
//console.log(comma);
var space = all.join(" ");
//console.log(space);
var tag = all.join("#");
//console.log(tag);


//B


var numbers = [2, 3, 67, 33];

var total = numbers.reduce(function(total,num){
    return total + num;
});

//console.log(total);


//C

var members = [
 {name : "Peter", age: 18},
 {name : "Jan", age: 35},
 {name : "Janne", age: 25},
 {name : "Martin", age: 22}];
 
 function myReduce(arr){
     var ages = arr.map(mem => mem.age );
     
     var average = ages.reduce(function(total,age,index,array){
        total += age;
        if(index === array.length -1){
            return total/array.length;
        }
        return total;
     });
     return average;
 }

console.log(myReduce(members));


//D

var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];

function countVotes(arr){
    
}