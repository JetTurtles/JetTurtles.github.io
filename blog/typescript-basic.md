# TypeScript 基础

## 基础类型

- boolean:表示逻辑值true或false

```typescript
let bool: boolean = true
```

- number:表示所有数字，包括整数和浮点数

```typescript
let num: number = 123
```

- string:表示字符串，使用双引号或者单引号

```typescript
let str: string = 'hello world'
```

- array:表示数组，使用方括号表示

```typescript
let arr: number[] = [1, 2, 3]
```

- tuple:表示元组，表示一个已知元素数量和类型的数组，各元素的类型不必相同

```typescript
let tuple: [number, string] = [1, 'hello']
```

- enum:表示枚举类型，表示一个数值的集合

```typescript
enum Color {Red, Green, Blue,}

let color: Color = Color.Red
```

- any:表示任意类型，表示一个空值或者未知类型

```typescript
let any: any = 123
```

- void:用于没有返回值的函数。声明变量时，类型 void 意味着只能赋值 null 或 undefined。

```typescript
function doSomething(): void {
    console.log("hello world")
}
```

- null,undefined:表示空值和未定义值

```typescript
let variable: null = null
let variable2: undefined = undefined
```

## 变量声明

变量使用前必须先声明。var、let用于声明变量，const用于声明常量。

```typescript
var a = 1
let b = 2
const c = 3
```

## 运算符

运算符用于执行程序代码运算，会针对一个以上操作数项目来进行运算。

### 赋值运算符

- =:表示赋值运算

```typescript
let a = 1   //创建一个变量a，值为1
```

- +=:表示加法赋值运算

```typescript
let a = 1
a += 2  //a的值变为3
```

- -=:表示减法赋值运算

```typescript
let a = 1
a -= 2  //a的值变为-1
```

- *=:表示乘法赋值运算

```typescript
let a = 1
a *= 2  //a的值变为2
```

- /=:表示除法赋值运算

```typescript
let a = 1
a /= 2  //a的值变为0.5
```

### 算术运算符

- +:表示加法运算

```typescript
let a = 1 + 2
```

- -:表示减法运算

```typescript
let a = 1 - 2
```

- *:表示乘法运算

```typescript
let a = 1 * 2
```

- /:表示除法运算

```typescript
let a = 1 / 2
```

- %:表示取余运算

```typescript
let a = 1 % 2
```

- ++:表示自增运算

```typescript
let a = 1
a++
```

- --:表示自减运算

```typescript
let a = 1
a--
```

### 关系运算符

- ==:表示等于运算

```typescript
let a = 1 == 2
```

- !=:表示不等于运算

```typescript
let a = 1 != 2
```

- ===:表示全等于运算

```typescript
let a = 1 === 2
```

- !==:表示不全等于运算

```typescript
let a = 1 !== 2
```

- '>':表示大于运算

```typescript
let a = 1 > 2
```

- '>=':表示大于等于运算

```typescript
let a = 1 >= 2
```

- <:表示小于运算

```typescript
let a = 1 < 2
```

- <=:表示小于等于运算

```typescript
let a = 1 <= 2
```

### 逻辑运算符

- &&:表示逻辑**与**运算

```typescript
let a = true && false
```

- ||:表示逻辑或运算

```typescript
let a = true || false
```

- !:表示逻辑非运算

```typescript
let a = !true
```

## 条件语句

条件语句用于基于不同的条件来执行不同的动作。 TypeScript 条件语句是通过一条或多条语句的执行结果（True 或 False）来决定执行的代码块。

- if:当指定条件为true时，执行if语句块中的代码。

```typescript
let a = 1
if (a === 1) {
}
```

- if...else:当指定条件为true时，执行if语句块中的代码，否则执行else语句块中的代码。

```typescript
let a = 1
if (a === 1) {
} else {
}
```

- if ... else if ... else:当指定条件为true时，执行if语句块中的代码，否则当指定条件为true时，执行else
  if语句块中的代码，否则执行else语句块中的代码。

```typescript
let a = 1
if (a > 1) {
} else if (a == 1) {
} else {
}
```

- switch:当指定条件与case值匹配时，执行case语句块中的代码，否则执行default语句块中的代码。

```typescript
let a = 3
switch (a) {
    case 1:
        break;
    case 2:
        break;
    default:
        break;
}
```

## 循环语句

循环语句用于重复执行代码块或遍历集合等。

- for:用于重复执行代码块。

```typescript
for (let i = 0; i < 10; i++) {
    console.log(i)
}
```

- while:用于重复执行代码块，当条件为true时，执行代码块。

```typescript
let i = 0
while (i < 10) {
    console.log(i)
}
```

- do...while:用于重复执行代码块，当条件为true时，执行代码块，否则执行代码块。

```typescript
let i = 0
do {
    console.log(i)
}
while (i < 10)
```

do ... while 循环和 while 循环的区别是，do ... while 循环至少会执行一次循环体，而 while 循环则不一定会执行循环体。

- break:用于跳出循环。

```typescript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break   //当i等于5时，跳出循环，循环结束
    }
}
```

- continue:用于跳过当前循环。

```typescript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue   //当i等于5时，跳过当前循环，不执行当前循环后续代码，继续下一次循环
    }
    console.log(i)
}
```

## 函数

函数是一组一起执行一个任务的语句。

### 函数声明

函数就是包裹在花括号中的代码块，前面使用了关键词 function。

语法：

```typescript
function functionName(parameter1: parameterType, parameter2: parameterType, ...): returnType {
//函数内容
}
```

实例：

```typescript
function print(content: any): void {
    console.log(content)
}
```

### 函数调用

函数只有通过调用才可以执行函数内的代码。

实例：

```typescript
//调用声明的函数，参数为字符串、数字、布尔值等类型
print("hello world")
print(123)
print(true)
```

## 类

类描述了所创建的对象共同的属性和方法。类的声明使用class关键字修饰。类包含字段，构造函数，方法等模块。

- 字段：是类里面声明的变量。字段表示对象的有关数据。
- 构造函数：是类里面声明的函数。构造函数表示对象的初始化方法。
- 方法：是类里面声明的函数。方法表示对象的行为。

格式如下：

```typescript
class className {
    parameterName: parameterType

    constructor(parameterName: parameterType) {
        this.parameter = parameterName
    }

    methodName(parameterName: parameterType): returnType {

    }
}
```

实例：

```typescript
class Person {
    name: string

    constructor(name: string) {
        this.name = name
    }

    sayHello(): void {
        console.log('hello')
    }
}
```

### 类的实例化

类的实例化是指创建类的对象，使用new关键字修饰，实例如下：

```typescript
let obj: Person = new Person('张三')
```

### 类的继承

类的继承是指子类继承父类的属性和方法，使用extends关键字修饰，子类继承父类的属性和方法，子类可以重写父类的方法，实例如下：

```typescript
class Person {
    name: string

    constructor(name: string) {
        this.name = name
    }

    sayHello(): void {
        console.log('hello')
    }
}

class Student extends Person {
    id: number

    constructor(name: string, id: number) {
        super(name)
        this.id = id
    }

    sayHello(): void {
        console.log('hello')
    }
}
```

### instanceof 运算符

instanceof 运算符用于判断对象是否是指定的类型。
实例：

```typescript
let student: Person = new Student('张三', 1)
console.log(student instanceof Person)  //true
console.log(student instanceof Student) //true
```

## 接口

接口是一系列抽象方法的声明，是一些方法特征的集合。接口使用interface关键字修饰，格式如下：

```typescript
interface interfaceName {
    //属性
    propertyName: propertyType

    //方法  
    methodName(parameterName: parameterType): returnType
}
```

实例：

```typescript
interface Action {
    move(): void;
}

class Person implements Action {
    move() {
        console.log('person move');
    }
}
```

### 接口继承

接口可以继承其他接口，使用extends关键字修饰，接口支持多继承，格式如下：

```typescript
interface interfaceName extends interfaceName1, interfaceName2 {
}
```

实例：

```typescript
interface Move {
    move(): void;
}

interface Talk {
    talk(): void;
}

interface Action extends Move, Talk {
    action(): void;
}
```

## Object 对象

对象是包含一组键值对的实例。 值可以是标量、函数、数组、对象等。实例：

```typescript
let obj: object = {
    key1: 'val1',
    key2: function () {
    },
    key3: ['val2', 'val3'],
    key4: {}

}
```

## 泛型

泛型是指在定义函数、接口或类的时候用占位符来表示类型，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

- 函数

```typescript
function genericFunction<T>(arg: T): T {
    return arg;
}

let number: number = genericFunction(1);
let str: string = genericFunction('1');
```

- 接口，类

```typescript
interface List<T> {
    get(): T

    add(item: T): boolean
}
```

## 命名空间

命名空间一个最明确的目的就是解决重名问题。命名空间使用namespace关键字修饰，格式如下：

```typescript
namespace namespaceName {
}
```

实例：

```typescript
namespace MyNamespace {
  export class MyClass {
    constructor() {
      console.log('Hello World!');
    }
  }
}

class MyClass {
  constructor() {
    console.log('Hello World!');
  }
}

let myClass: MyClass = new MyClass();
let myClass2: MyNamespace.MyClass = new MyNamespace.MyClass();
```