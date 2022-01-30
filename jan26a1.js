var num1 = prompt("Enter the First Number:");
var num2 = prompt("Enter the Second Number:");
var num3 = prompt("Enter the Third Number:");
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
if(num1<num2 && num1<num3){
alert(num1+" is a smallest number");
}
else if(num2<num1 && num2<num3){
alert(num2+" is a smallest number");
}
else{
alert(num3+" is a smallest number");
}

