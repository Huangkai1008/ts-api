/**
 *  基础类型
 */

// 布尔值
let isDone: boolean = false;

// 数字 和JavaScript一样，TypeScript里的所有数字都是浮点数
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 字符串
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `My name is ${name}, age is ${age}`;

// 数组
let list: number[] = [1, 2, 3];
// 数组泛型 Array<元素类型>
let list1: Array<number> = [1, 2, 3];

// 元组Tuple
let x: [string, number];

// 枚举
// 默认情况下，从0开始
enum Color {
    Red = 1, Green, Blue
}

let c: Color = Color.Blue;

let number: string = Color[2]; // 取值


// Any

let notSure: any = 4;
let array1: any[] = [1, true, 'false'];

let number1 = array1[0];


// void无任何类型
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
function f(): void {
    console.log('warning message!');
}

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}


// 类型断言
let someValue: any = 'I know this is string';
let strLength: number = (<string>someValue).length;




export {};
