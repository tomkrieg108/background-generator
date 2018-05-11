var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");
//var	inputs = document.querySelectorAll("input");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function init(c1, c2) {
	//console.log(inputs[0]);
	//inputs[0].value = c1;		//this is the same as below
	//inputs[1].value = c2;		//this is the same as below
	btn.addEventListener("click", randomise);
	color1.value = c1;	
	color2.value = c2;
	setGradient();	
}

init("#0000ff", "#ffff00");
//setGradient();	//Display the initial CSS linear gradient on page load.

function randColour() {
	let colorCode = "#";
	for(var i=0; i<3; i++) {
		let col = (Math.random()) * 256;
		col = Math.floor(col);
		col = col.toString(16);
		if(col.length < 2) {
			col = "0" + col;
		}
		colorCode += col;
	}
	console.log(colorCode);
	return colorCode;
}

function randomise() {
	color1.value = randColour();
	color2.value = randColour();
	setGradient();
}