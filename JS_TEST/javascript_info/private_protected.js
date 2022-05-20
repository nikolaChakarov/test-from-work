class CoffeMachine {
	_waterAmount = 0;

	constructor(power) {
		this._power = power;
		console.log(`Created a coffe-mchine, power: ${power}`);
	}

	set waterAmount(value) {
		if (value < 0) value = 0;

		this._waterAmount = value;
	}

	get waterAmount() {
		return this._waterAmount;
	}

	get power() {
		return this._power;
	}
}

// create the coffe machine
let coffeMachine = new CoffeMachine(100);

// add water
coffeMachine.waterAmount = -200;

console.log(coffeMachine.waterAmount);
console.log(`Power is ${coffeMachine.power}W`);

class Coffe2 {
	#waterAmoun = 0;
	#power;

	constructor(power) {
		this.power = power;
		console.log(`Created a coffe-mchine, power: ${this.#power}`);
	}

	set waterAmount(value) {
		if (value < 0) value = 0;
		this.#waterAmoun = value;
	}

	get waterAmount() {
		return this.#waterAmoun;
	}

	set power(value) {
		if (value > 220) value = 220;
		this.#power = value;
	}

	get power() {
		return this.#power;
	}
}

let machine2 = new Coffe2(300);
machine2.waterAmount = 200;
console.log(machine2.waterAmount);

console.log(machine2.power);
machine2.power = 300;
console.log(machine2.power);
