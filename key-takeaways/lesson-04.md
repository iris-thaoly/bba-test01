# Javascript (cont.)
### 1. Scope in JavaScript

Scope defines **where a variable can be accessed** in your code.  
In JavaScript, there are three types of scope:
- **Global Scope**  
  Variables declared in the global scope can be accessed from anywhere in the program.
  ```typescript
    // Global scope
    var globalVar = "I am global";
    let globalLet = "I am also global";

    function testFunction() {
        console.log(globalVar); // accessible
        console.log(globalLet); // accessible
    } 
  ```
- **Function Scope**  
  Variables declared inside a function can only be accessed within that function.
  ```typescript
    function myFunction() {
        var functionScoped = "Chỉ có thể truy cập trong hàm này";
        let alsoFunctionScoped = "Tương tự";
        console.log(functionScoped); // OK
    }

    console.log(functionScoped); // Error: functionScoped is not defined
  ```
- **Block Scope**  
  Variables declared inside a block (e.g., within `{ }` using `let` or `const`) are only accessible inside that block.
  ```typescript
    if (true) {
        var varVariable = "var không có block scope";
        let letVariable = "let có block scope";
        const constVariable = "const cũng có block scope";
    }

    console.log(varVariable); // OK - var không bị giới hạn bởi block
    console.log(letVariable); // Error: letVariable is not defined
    console.log(constVariable); // Error: constVariable is not defined
  ```
**Hoisting**: JavaScript moves variable declarations to the top of their scope before executing code.
```typescript
console.log(x); // undefined (không phải error)
var x = 5;

// Tương đương với:
var x;
console.log(x); // undefined
x = 5;

// Với let và const:
console.log(y); // Error: Cannot access 'y' before initialization
let y = 5;
```
### 2. break and continue
- `break` is used to exit the loop immediately.
```typescript
// Thoát khi tìm thấy giá trị
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Thoát vòng lặp khi i = 5
    }
    console.log(i);
}
// Output: 0, 1, 2, 3, 4
```
```typescript
// Ví dụ thực tế: Tìm phần tử đầu tiên
const numbers = [1, 3, 8, 7, 9, 11];
let firstEven = null;

for (let num of numbers) {
    if (num % 2 === 0) {
        firstEven = num;
        break; // Dừng ngay khi tìm thấy
    }
}
```
- `continue` is used to skip the rest of the current loop and move on to the next iteration.
```typescript
// Bỏ qua số chẵn
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Bỏ qua số chẵn
    }
    console.log(i);
}
// Output: 1, 3, 5, 7, 9
```
```typescript
// Ví dụ thực tế: Lọc dữ liệu
const scores = [85, 92, 78, 95, 60, 88];
console.log("Điểm >= 80:");

for (let score of scores) {
    if (score < 80) {
        continue; // Bỏ qua điểm < 80
    }
    console.log(score);
}
// Output: 85, 92, 95, 88
```
### 3. Condition
`if...else`: Execute different code for true and false cases
```typescript
let score = 75;

if (score >= 60) {
    console.log("Bạn đã qua môn");
    } else {
    console.log("Bạn cần học lại");
}
```
`if...else...if`: Check multiple conditions in order
```typescript
let score = 85;

if (score >= 90) {
    console.log("Xuất sắc");
} else if (score >= 80) {
    console.log("Giỏi");
} else if (score >= 70) {
    console.log("Khá");
} else if (score >= 60) {
    console.log("Trung bình");
} else {
    console.log("Yếu");
}
```
*Ternary operator (toán tử điều kiện)*: Shorthand for if...else simple
```typescript
let age = 20;
let status = (age >= 18) ? "Người lớn" : "Trẻ em";

console.log(status); // "Người lớn"

// Có thể lồng nhau (nên cẩn thận với độ phức tạp)
let score = 75;
let grade = score >= 90 ? "A" :
score >= 80 ? "B" :
score >= 70 ? "C" :
score >= 60 ? "D" : "F";
```
### 4. Loop
`for...in`
Used to iterate over the enumerable properties of
an object, including inherited properties.
```typescript
// Với Object
const person = {
    name: "John",
    age: 30,
    city: "Hanoi"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 30
// city: Hanoi
```
```typescript
// Với Array (không khuyến khích)
const colors = ["red", "green", "blue"];
colors.customProperty = "rainbow";

for (let index in colors) {
    console.log(index + ": " + colors[index]);
}
// Output:
// 0: red
// 1: green
// 2: blue
// customProperty: rainbow
```
`forEach()` Array method to execute a function for each element. Cannot use break or continue.
```typescript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(value) {
    console.log(value);
});
```
### 5. Utils function
Utils functions are built-in functions of JavaScript, which help coding become faster.

**String Utils**
Functions used for **string manipulation**:
- `toUpperCase()` Converts a string to uppercase.  
- `toLowerCase()` Converts a string to lowercase.  
- `trim()` Removes whitespace from both ends of a string.  
- `split()` Splits a string into an array.  
- `includes()` Checks if a string contains a specific substring.  

eg.
```typescript
let text = "  Hello World  ";

console.log(text.toUpperCase()); // "  HELLO WORLD  "
console.log(text.toLowerCase()); // "  hello world  "
console.log(text.trim());        // "Hello World"
console.log(text.split(" "));    // ["", "", "Hello", "World", "", ""]
console.log(text.includes("World")); // true
```
**Array Utils**
Functions used for array manipulation:
- `push()` Adds an element to the end of an array.
- `pop()` Removes the last element from an array.
- `shift()` Removes the first element from an array.
- `unshift()` Adds an element to the beginning of an array.
- `map()` Creates a new array by applying a function to each element.
- `filter()` Creates a new array with elements that pass a condition.
- `forEach()` Executes a function for each array element.
- `find()` Finds and returns the first element in the array that satisfies the condition. Returns undefined if not found.
- `reduce()` Iterate through the array and accumulate elements into a single value (number, string, object...) based on the callback function.
- `some()` Checks if at least one element in the array satisfies the condition. Returns true/false.
- `every()` Checks if all elements in an array satisfy a condition. Returns true/false.
- `sort()` Sorts the elements in the array in order (default is
alphabet/ascending). Modifies the original array.
eg.

`map()`
```typescript
const students = ['An', 'Bình', 'Cường'];
const studentList = students.map((name, index) => ({
    id: index + 1,
    name: name,
    code: `SV00${index + 1}`
}));

console.log(studentList);
// [
// { id: 1, name: 'An', code: 'SV001' },
// { id: 2, name: 'Bình', code: 'SV002' },
// { id: 3, name: 'Cường', code: 'SV003' }
// ]
```
`filter()`
```typescript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] - mảng gốc không đổi
```
```typescript
const products = [
    { name: 'iPhone 15', price: 28000000, category: 'phone', inStock: true },
    { name: 'Samsung S24', price: 22000000, category: 'phone', inStock: false },
    { name: 'iPad Pro', price: 35000000, category: 'tablet', inStock: true },
    { name: 'MacBook Air', price: 32000000, category: 'laptop', inStock: true },
    { name: 'AirPods', price: 4000000, category: 'accessory', inStock: true }
];

// Lọc sản phẩm còn hàng
const availableProducts = products.filter(product => product.inStock);
console.log(availableProducts); // 4 sản phẩm còn hàng

// Lọc sản phẩm giá dưới 30 triệu
const affordableProducts = products.filter(product => product.price < 30000000);

// Lọc nhiều điều kiện: điện thoại còn hàng
const availablePhones = products.filter(product => product.category === 'phone' && product.inStock);
console.log(availablePhones); // [iPhone 15]
```
`find()`
```typescript
const numbers = [1, 5, 3, 8, 2, 10, 7];

// Tìm số chẵn đầu tiên
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 8 (không phải 2 hay 10)

// Tìm số lớn hơn 6
const greaterThanSix = numbers.find(num => num > 6);
console.log(greaterThanSix); // 8 (dừng ngay khi tìm thấy)

// Không tìm thấy
const negative = numbers.find(num => num < 0);
console.log(negative); // undefined
```
```typescript
const users = [
    { id: 101, name: 'An', role: 'admin', active: true },
    { id: 102, name: 'Bình', role: 'user', active: false },
    { id: 103, name: 'Cường', role: 'user', active: true },
    { id: 104, name: 'Dũng', role: 'admin', active: true }
];

// Tìm user theo ID
const userId = 103;
const user = users.find(user => user.id === userId);
console.log(user); // { id: 103, name: 'Cường', role: 'user', active: true }

// Tìm admin đầu tiên
const firstAdmin = users.find(u => u.role === 'admin');
console.log(firstAdmin); // { id: 101, name: 'An', ... }

// Tìm user không active
const inactiveUser = users.find(u => !u.active);
console.log(inactiveUser); // { id: 102, name: 'Bình', ... }
```
`reduce()`
```typescript
const numbers = [1, 2, 3, 4, 5];

// Cách hoạt động từng bước
const sum = numbers.reduce((accumulator, current) => {
    console.log(`accumulator: ${accumulator}, current: ${current}`);
    return accumulator + current;
}, 0);

// accumulator: 0, current: 1 -> return 1
// accumulator: 1, current: 2 -> return 3
// accumulator: 3, current: 3 -> return 6
// accumulator: 6, current: 4 -> return 10
// accumulator: 10, current: 5 -> return 15

console.log(sum); // 15
```
```typescript
const cart = [
    { product: 'Laptop', price: 20000000, quantity: 1 },
    { product: 'Mouse', price: 300000, quantity: 2 },
    { product: 'Keyboard', price: 800000, quantity: 1 },
    { product: 'Monitor', price: 5000000, quantity: 2 }
];

// Tính tổng tiền giỏ hàng
const totalAmount = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);

console.log(`Tổng tiền: ${totalAmount.toLocaleStrin ('vi-VN')}đ`);

// Tổng tiền: 31.400.000đ
// Tính tổng số lượng sản phẩm
const totalItems = cart.reduce((count, item) => count + item.quantity, 0);

console.log(`Tổng số sản phẩm: ${totalItems}`); // 6
```
`some()`
```typescript
const numbers = [1, 3, 5, 7, 8, 9];

// Kiểm tra có số chẵn không?
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true (vì có số 8)

// Kiểm tra có số > 10 không?
const hasGreaterThan10 = numbers.some(num => num > 10);
console.log(hasGreaterThan10); // false

// Dừng ngay khi tìm thấy
const hasEvenWithLog = numbers.some(num => {
    console.log(`Checking: ${num}`);
    return num % 2 === 0;
});

// Checking: 1
// Checking: 3
// Checking: 5
// Checking: 7
// Checking: 8
// => Dừng, không kiểm tra 9
```
```typescript
const user = {
    name: 'Nguyễn Văn A',
    roles: ['user', 'editor']
};

const adminRoles = ['admin', 'superadmin'];
const editorRoles = ['editor', 'admin'];

// Kiểm tra user có quyền editor không?
const canEdit = user.roles.some(role => editorRoles.includes(role));
console.log(canEdit); // true (có role 'editor')

// Kiểm tra user có phải admin không?
const isAdmin = user.roles.some(role => adminRoles.includes(role));
console.log(isAdmin); // false

// Hàm kiểm tra quyền tổng quát
function hasPermission(userRoles, requiredRoles) {
    return userRoles.some(role => requiredRoles.includes(role));
}

console.log(hasPermission(user.roles, ['viewer', 'editor'])); // true
```
`every()`
```typescript
const numbers = [2, 4, 6, 8, 10];

// Kiểm tra tất cả là số chẵn?
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true

// Kiểm tra tất cả > 0?
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

// Kiểm tra tất cả > 5?
const allGreaterThan5 = numbers.every(num => num > 5);
console.log(allGreaterThan5); // false (2 và 4 không > 5)

// Dừng ngay khi gặp false
const checkWithLog = numbers.every(num => {
    console.log(`Checking: ${num}`);
    return num < 5;
});

// Checking: 2
// Checking: 4
// Checking: 6
// => Dừng tại 6, không kiểm tra 8, 10

console.log(checkWithLog); // false
```
```typescript
const orderItems = [
    { product: 'iPhone 15', quantity: 1, inStock: 5, price: 25000000 },
    { product: 'AirPods', quantity: 2, inStock: 10, price: 4000000 },
    { product: 'Case', quantity: 1, inStock: 20, price: 500000 }
];

// Tất cả sản phẩm còn đủ hàng?
const allAvailable = orderItems.every(item => item.inStock >= item.quantity);
console.log(allAvailable); // true

// Tất cả sản phẩm có giá hợp lệ?
const allValidPrices = orderItems.every(item => item.price > 0);
console.log(allValidPrices); // true

// Kiểm tra giới hạn số lượng (max 10 mỗi sản phẩm)
const withinQuantityLimit = orderItems.every(item => item.quantity <= 10);
console.log(withinQuantityLimit); // true

// Tổng hợp validation
function canPlaceOrder(items) {
    return items.every(item =>
    item.inStock >= item.quantity &&
    item.price > 0 &&
    item.quantity > 0 &&
    item.quantity <= 10
    );
}
```
`sort()`
```typescript
// Sort chuỗi
const fruits = ['banana', 'apple', 'orange', 'grape'];
fruits.sort();

console.log(fruits); // ['apple', 'banana', 'grape', 'orange']
```
```typescript
// Giảm dần
const numbers3 = [10, 5, 40, 25, 1000, 1];
numbers3.sort((a, b) => b - a);

console.log(numbers3); // [1000, 40, 25, 10, 5, 1]
```
```typescript
// Compare function trả về:
// - Số âm: a đứng trước b
// - Số 0: giữ nguyên thứ tự
// - Số dương: b đứng trước a

const arr = [3, 1, 2];
arr.sort((a, b) => {
    console.log(`Compare ${a} với ${b}`);
    if (a < b) return -1; // a trước b
    if (a > b) return 1; // b trước a
    return 0; // bằng nhau
});

// Compare 3 với 1
// Compare 3 với 2
// Compare 1 với 2
console.log(arr); // [1, 2, 3]

// Viết gọn với phép trừ (cho số)
arr.sort((a, b) => a - b); // tương đương code trên
```
`push()`
```typescript
const fruits = ['apple', 'banana'];
const newLength = fruits.push('orange');

console.log(fruits); // ['apple', 'banana', 'orange']
console.log(newLength); // 3 (độ dài mới)

// Push nhiều phần tử cùng lúc
fruits.push('grape', 'mango');
console.log(fruits); // ['apple', 'banana', 'orange', 'grape', 'mango']
```
`pop()`
```typescript
const fruits = ['apple', 'banana', 'orange', 'grape'];
const lastFruit = fruits.pop();

console.log(lastFruit); // 'grape' - phần tử bị xóa
console.log(fruits); // ['apple', 'banana', 'orange'] - mảng đã thay đổi

// Pop từ mảng rỗng
const empty = [];
const result = empty.pop();
console.log(result); // undefined
console.log(empty); // []
```
`shift()`
```typescript
const fruits = ['apple', 'banana', 'orange', 'grape'];
const firstFruit = fruits.shift();

console.log(firstFruit); // 'apple' - phần tử bị xóa
console.log(fruits); // ['banana', 'orange', 'grape'] - mảng đã thay đổi

// Shift từ mảng rỗng
const empty = [];
const result = empty.shift();
console.log(result); // undefined
console.log(empty); // []
```
`unshift()`
```typescript
const fruits = ['banana', 'orange'];
const newLength = fruits.unshift('apple');

console.log(fruits); // ['apple', 'banana', 'orange']
console.log(newLength); // 3 (độ dài mới)

// Unshift nhiều phần tử cùng lúc
fruits.unshift('grape', 'mango');
console.log(fruits); // ['grape', 'mango', 'apple', 'banana', 'orange']
```