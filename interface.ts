// 实现接口
interface LabelledValue {
	label: String;
}

function printLabel(labeledObj: LabelledValue) {
	console.log(labeledObj.label);
}

let myObj = {
	size: 10,
	label: 'size 10 Object'
}
printLabel(myObj);

// 可选属性 加?可选属性
interface SquareConfig {
	color ? : string;
	width ? : number;
}

function createSquare(config: SquareConfig): {
	color: string;area: number
} {
	let newSquare = {
		color: "white",
		area: 100
	};
	if (config.color) {
		newSquare.color = config.color;
	}

	if (config.width) {
		newSquare.area = config.width * config.width;
	}

	return newSquare;
}

let mySquare = createSquare({
	color: "black"
});

console.log(mySquare);

