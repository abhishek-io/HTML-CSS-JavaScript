var num1=parseInt(prompt("enter first number"));
var num2=parseInt(prompt("enter second number"));
var final=parseInt(prompt("enter your choice\n 1. Add\n 2. Sub\n 3. Mul\n 4. Div\n 5. Inc\n 6. Dec"));
var add = num1+num2;
var sub = num1-num2;
var mul = num1*num2;
var div = num1/num2;

function inc()
{
   var arr=[ num1,num2];
   arr[0]++
   arr[1]++
   console.log("Incremented value is "+ arr[0] + " and "+ arr[1])
}
function dec()
{
   var arr=[ num1,num2];
   arr[0]--
   arr[1]--
   console.log("Decremented value is "+ arr[0] + " and "+ arr[1])
}

switch (final) {
    case 1:
        console.log("Added value is "+add)
        break;
    case 2:
        console.log("Substracted value is "+ sub)
        break;
    case 3:
        console.log("Multiplied value is "+ mul)
        break;
    case 4:
        console.log("Divided value is "+ div)
        break;
    case 5:
        inc()
        break;
    case 6:
        dec()
        break;

    default:
        console.log("Pls enter correct choice");
        break;
}