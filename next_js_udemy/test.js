let intervalID;
let counter = 0;

function incrementCounter() {
	counter++;
	renderState();
}

function renderState() {
	console.log(counter);
}

intervalID = setInterval(() => {
	incrementCounter();
}, 1000);

setTimeout(() => {
	console.log("Game Over");
	clearInterval(intervalID);
}, 6000);
