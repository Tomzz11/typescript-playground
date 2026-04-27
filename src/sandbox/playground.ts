// const message: string = "Hello, Typescript!";
// console.log(message);


// (Basic Types) //
// string
let name: string = "Tommy_Tommy";

// Number (ทั้ง int และ float)
let age: number = 30;
let price: number = 99.99;

// Boolean 
let isActive: boolean = true;

// Array 
let fruits: string[] = ["apple", "banana"];
let numbers: number[] = [1, 2, 3];

// Tuple (array หลายประเภท)
let person: [string, number] = ["ferray", 999];

// Enum
enum Color {
    Red,
    Green,
    Blue
}
let myColor: Color = Color.Green;


// Any (หลีกเลี่ยงการใช้งานถ้าเป็นไปได้)
let something: any = "hello";
something = 10; // เปลี่ยนได้

// void (สำหรับฟังก์ชันที่ไม่คืนค่า)
function logMessage(message: string): void {
    console.log(message);
}

// Null และ Undefined
let u: undefined = undefined;
let n: null = null;


// Function ใน TypeScript  // 

// ระบุ parameter types และ return type
function add(x: number, y: number): number {
    return x + y;
}

// Optional parameter (ใช้ ?)
function greet(name: string, title?: string): string {
    if (title) {
        return `Hello ${title} ${name}`
    }
    return `Hello ${name}`
}


// Default parameter
function multiply(a: number, b: number): number {
    return a * b;
}

// Arrow function
const divide = (a: number, b: number): number => a / b;



// Interface (TypeScript) //
interface User {
    id: number;
    name: string;
    email: string;
    age?: number;  // optional property
}

const user1: User = {
    id: 1,
    name: "Tommy",
    email: "tommy@email.com"
};

// Interface สำหรับ function
interface MathFunc {
    (x: number, y: number): number;
}

const addFunc: MathFunc = (a, b) => a + b;


// Type Aliases // 
type ID = string | number;  // Union type
type Status = "success" | "error" | "loading";

let userId: ID = "user123";
userId = 456;  // // ก็ได้

let currentStatus: status = "success";



//  Classes // 
class Animal {
    // Access modifier: public, private, protected
    private name: string;
    protected age: number;
    public type: string;

    constructor(name: string, age: number, type: string) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    public speak(): void {
        console.log(`${this.name} make a sound`);
    }
}

// Inheritance
class Dog Extends Animal {
    constructor(name: string, age: number) {
        super(name, age, "dog")
    }

    speak(): void {
        console.log("Woof");
    }
}



