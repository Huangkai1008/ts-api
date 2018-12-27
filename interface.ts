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
};
printLabel(myObj);

// 可选属性 加?可选属性
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {
    color: string; area: number
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

// 只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = {x: 10, y: 20};
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。
// 作为变量使用的话用 const，若作为属性则使用readonly
a = ro as number[]; // 类型断言把只读数组赋值给另一个普通数组

// 函数类型
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, substring: string) {
    let result = source.search(substring);
    return result > -1;
};

// 类类型
interface ClockInterface {
    currentTime: Date;
}


// 接口描述了类的公共部分，而不是公共和私有两部分
// 它不会帮你检查类是否具有某些私有成员
class Clock implements ClockInterface {
    currentTime: Date;

    constructor(h: number, m: number) {
    }
}

// 继承接口
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";

// 混合类型
interface Counter{
	(start: number): string;
	interval: number;
	reset(): void;
}

function getCounter(): Counter {
	let counter = <Counter>function (start: number){};
	counter.interval = 123;
	counter.reset = function(){};
	return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

// 接口继承类
class Control{
	private state: any;
}

interface SelectableControl extends Control{
	select(): void;
}

class Button extends Control implements SelectableControl{
	select(){}
}

class TextBox extends Control{
	
}

let button = new Button();











