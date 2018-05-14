var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


function calculate(){
	var b      = parseFloat(document.getElementById("base").value);
	var h      = parseFloat(document.getElementById("height").value);
	var result = (b*h)/2;
	document.getElementById("none").style.display = "initial";
	document.getElementById("result").innerHTML = result;

}