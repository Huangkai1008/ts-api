// 泛型类型
function identity<T>(args: T): T {
    return args;
}

let output = identity<string>("myString");


