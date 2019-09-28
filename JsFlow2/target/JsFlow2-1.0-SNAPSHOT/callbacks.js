

var names = ["Dennis", "Christian", "Lars", "Hans", "Gitte", "Henning", "Jonas"];


/////////////////////////////////////////////////////////////////
//////////////////////////////Assignment 1///////////////////////
/////////////////////////////////////////////////////////////////


function filterArray(arr) {

    var newArr = arr.filter(name => name.indexOf('a') > -1);
    return newArr;
}


//console.log(filterArray(names));

function reverseArray(arr) {
    var newArr = arr.map(function (name) {

        //Split() to create new array of chars
        var letters = name.split("");

        //Reverse() to reverse the new char array
        var reverseLetters = letters.reverse();

        //Join() to turn the reversed char array back to a String
        var reverseName = reverseLetters.join("");
        return reverseName;
    });

    return newArr;


}

//console.log(reverseArray(names));

////////////////////////////////////////////////////////////////
//////////////////////////////Assignment 2///////////////////////
/////////////////////////////////////////////////////////////////

function myFilterArray(arr) {
    var newArr = [];

    for (var i = 0; i <= arr.length - 1; i++) {
        var temp = arr[i].search("a");
        if (temp > 0) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

function myReverseArray(arr) {
    var newArr = [];

    for (var i = 0; i <= arr.length - 1; i++) {

        var reversedString = arr[i].split("").reverse().join("");


        newArr.push(reversedString);



    }
    return newArr;
}

//console.log(myFilterArray(names));
//console.log(myReverseArray(names));



function myCallback(arr, callback) {
    return callback(arr);
//   var newArr = callback(arr);
//   return newArr;

}


//console.log(myCallback(names,myFilterArray));
//console.log(myCallback(names,myReverseArray));


// Can also be written like 


var filter = myCallback(names, function (arr) {
    var newArr = [];

    for (var i = 0; i <= arr.length - 1; i++) {
        var temp = arr[i].search("a");
        if (temp > 0) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
});

//console.log(filter);

var reversed = myCallback(names, function (arr) {
    var newArr = [];

    for (var i = 0; i <= arr.length - 1; i++) {

        var reversedString = arr[i].split("").reverse().join("");


        newArr.push(reversedString);

    }
    return newArr;
});

//  console.log(reversed);


///////////////////////////////////////////////////////////////
/////////////////////////Assignment 3//////////////////////////
///////////////////////////////////////////////////////////////


Array.prototype.myFilter = function (letter) {

    var newArr = [];

    for (var i = 0; i <= this.length - 1; i++) {
        var temp = this[i].search(letter);
        if (temp > 0) {
            newArr.push(this[i]);
        }
    }

    return newArr;

};

Array.prototype.myReverse = function () {
    var newArr = [];

    for (var i = 0; i <= this.length - 1; i++) {

        var reversedString = this[i].split("").reverse().join("");


        newArr.push(reversedString);



    }
    return newArr;

}



//var result = names.myReverse();
//var other = names.myFilter("e");
//console.log(result);
//console.log(other);


///////////////////////////////////////////////////////////////
/////////////////////////Assignment 4//////////////////////////
///////////////////////////////////////////////////////////////



//A

var numbers = [1, 3, 5, 10, 11];

function numberFunc(num, arr) {
    if (num === arr[arr.length - 1]) {
        return num;
    }
    num += arr[arr.indexOf(num) + 1];
    return num;
}

var result = numbers.map(function (n) {
    return numberFunc(n, numbers);
});


//console.log(result);


//B

function getAString(arr) {
    var newArr = arr.map(function (name) {
        return "<a href=\"\">" + name + "</a><br><br>";
    })
    return "<nav>" + newArr.join("\n") + "</nav><br>" + "\n" +
            "<button id = \"btn\">Filter</button>";

}

//console.log(getAString(names));


//C

function getTableString(arr) {
    var newArr = arr.map(function (person) {
        return "<tr><td>" + person.name + "</td><td>" + person.phone + "</td></tr>";
    });
    return "<table><tr><th>Name</th><th>Phone</th></tr>\n" + newArr.join("\n") + "</table>";
}




var persons = [{name: "Lars", phone: "1234567"}, {name: "Peter", phone: "675843"}, {name: "Jan", phone: "98547"}, {name: "Bo", phone: "79345"}];

console.log(getTableString(persons)); 

//D

var div = document.getElementById("div");
div.innerHTML = getAString(names);
//div.innerHTML = getTableString(persons);



//E


div.addEventListener("click", function (e) {
    var target = e.target;

    if (target.id === "btn") {
        var filterNames = names.myFilter("a");
        div.innerHTML = getAString(filterNames);
    }
});


