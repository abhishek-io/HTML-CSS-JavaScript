var one = parseInt(prompt("enter a value"));
var two = parseInt(prompt("enter a value"));

if (one==two) {
    console.log("equal")
    }
    else{
        console.log("unequal");
    }


var subjects = ["English", "Hindi", "Maths", "Science"];
var marks=new Array();

for (var i = 0; i < subjects.length; i++) {

    var num = parseInt(prompt("pls enter marks for" +subjects[i]));
    marks[i]=num
}
