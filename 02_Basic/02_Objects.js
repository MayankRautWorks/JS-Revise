// Built -in Object Methods

// MethodKaam
// 
//Object.keys(obj)Saare keys ka array
// Object.values(obj)Saare values ka array
// Object.entries(obj)[key, value] pairs ka array
// Object.assign(target, source)Object copy / merge
// Object.freeze(obj)Object ko immutable banao
// Object.hasOwn(obj, key)Property exist karti hai ?









// Intermediate Level
// Q1 — Total Marks  ------------------------------------------------Q1---------------------------------------------------------------------------------------
// let students = [
//   {name:"Mayank", marks:80},
//   {name:"Rahul", marks:65},
//   {name:"Aman", marks:90}
// ];

// Find total marks using reduce().


// let students = [
//     { name: "Mayank", marks: 80 },
//     { name: "Rahul", marks: 65 },
//     { name: "Aman", marks: 90 }
// ];

// let obj = students.reduce((acc, curr) => {
//     return acc + curr.marks
// }, 0)
// console.log(obj);


// Q2 — Passed Students-----------------------------------Q2 passsed Student------------------------------------------------------------------------------------
// let students = [
//   {name:"A", marks:35},
//   {name:"B", marks:80},
//   {name:"C", marks:25},
//   {name:"D", marks:60}
// ];

// Get students whose marks are greater than or equal to 40.




// let students = [
//     { name: "A", marks: 35 },
//     { name: "B", marks: 80 },
//     { name: "C", marks: 25 },
//     { name: "D", marks: 60 }
// ];

// let obj = students.filter((find) => {
//    return student.marks>=40
// })
// console.log(obj);



// Q3 — Product Names Only -------------------------------------------------------// Q3 — Product Names Only--------------------------------------------------------------------------------------------=
// let products = [
//   {id:1, name:"Laptop"},
//   {id:2, name:"Phone"},
//   {id:3, name:"Tablet"}
// ];

// Expected:

// ["Laptop","Phone","Tablet"]


// let products = [
//     { id: 1, name: "Laptop" },
//     { id: 2, name: "Phone" },
//     { id: 3, name: "Tablet" }
// ];

// let ProductsNams = products.map((find) => {
//     return find.name
// })

// console.log(ProductsNams);





//
// Q4 — Add GST --------------------------------------------------------------------Q4 — Add GST  ---------------------------------------------------------------------
// let prices = [
//   {item:"Shoes", price:1000},
//   {item:"Watch", price:2000}
// ];

// Add 18% GST to every product price.


let prices = [
    { item: "Shoes", price: 1000 },
    { item: "Watch", price: 2000 }
];

let AddGst = prices.map((gst) => {

    return (
        { item: gst.item, price: gst.price * 1.18 }
    )


})

// console.log(AddGst);



// Q5 — Find Expensive Products ----------------------------------------------------===================================-----------------------------------------------------------------------------------
// let products = [
//   {name:"A", price:500},
//   {name:"B", price:1500},
//   {name:"C", price:3000}
// ];

// Get products whose price is greater than 1000.


// let products = [
//     { name: "A", price: 500 },
//     { name: "B", price: 1500 },
//     { name: "C", price: 3000 }
// ];

// let FindProducts = products.filter((findd) => {
//     // return findd.price >= 1000
//     return (
//           findd.price > 1000
//     )
// })
// console.log(FindProducts);


// Medium Level -------------------------------------------------------------------------------Medium level ---------------------------------------------------------------------------------------------
// Q6 — Count Occurrences                   ----------------------------------------------- Q6 — Count Occurrences----------------------------------------------------------------------------------   
// let fruits = ["apple","banana","apple","mango","banana","apple"];

// Expected:
//                             ------------------------------------------------NOT COMPLETED --------------------------------------------------------------
// {
//  apple:3,
//  banana:2,
//  mango:1
// }

// let fruits = ["apple", "banana", "apple", "mango", "banana", "apple"];


// let CountFurits = fruits.reduce((acc, curr) => {



// }, {})
// console.log(CountFurits);



// Q7 — Find Highest Salary Employee ----------------------------------------NOT COMPLETED ------------------------------------------------------------------------------------------------
// let employees = [
//   {name:"Aman", salary:25000},
//   {name:"Rahul", salary:40000},
//   {name:"Mayank", salary:35000}
// ];

// Return employee with highest salary.

// let employees = [
//     { name: "Aman", salary: 25000 },
//     { name: "Rahul", salary: 40000 },
//     { name: "Mayank", salary: 35000 }
// ];

// let highsalary = employees.reduce((acc, curr) => {
//     return (acc.salary > curr.salary)
// }, 0)
// console.log(highsalary)



// Q8 — Group Users by Age
// let users = [
//   {name:"A", age:20},
//   {name:"B", age:25},
//   {name:"C", age:20},
//   {name:"D", age:25}
// ];

// Expected:

// {
//  20:[...],
//  25:[...]
// }



