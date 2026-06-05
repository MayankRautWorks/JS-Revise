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

// let fruits = ["apple", "banana", "apple", "mango", "banana", "apple", 'Sam'];

// let ans = {name:"Samay"}

// for (let i = 0;i < fruits.length;i++){
//     if(ans[fruits[i]]){
//         ans[fruits[i]] = ans[fruits[i]]+1
//     } else{
//         ans[fruits[i]]=1
//     }
// }

// // ans.name = "ansh"
// console.log(ans);


// Q7 — Find Highest Salary Employee ------------------------------------------------------------------
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

// let highSalary = 0;
// let a = {}

// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].salary > highSalary) {
//         highSalary = employees[i].salary
//         a = employees[i]
//     }
// }

// console.log(highSalary)



// Q8 — Group Users by Age  ------------------------------------------------------------group Age--------------------------------------------------------------------------------
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



// let users = [
//     { name: "A", age: 20 },
//     { name: "B", age: 25 },
//     { name: "C", age: 20 },
//     { name: "D", age: 25 }
// ];


// let usersAge = users.reduce((acc, cur) => {
//     let age = cur.age
//     acc[age] = (acc[age] || []).concat(cur);
//     return acc
// }, {})

// console.log(usersAge);



// Q9 — Remove Duplicate Objects ------------------------ Remove Duplicate Objects--------------------------------------
// let users = [             ++++++++++++++++++++++++++NOT COMPLETED+++++++++++++++++++++++++++++++++++++++++++++++++++
//   {id:1, name:"A"},
//   {id:2, name:"B"},
//   {id:1, name:"A"}
// ];

// Remove duplicate objects based on id.


// let users = [
//     { id: 1, name: "A" },
//     { id: 2, name: "B" },
//     { id: 1, name: "A" }
// ];

// for (let i = 0; i < users.length; i++) {

//     console.log(users)
// }


// Q10 — Average Marks -------------------------------Average marks ---------------------------------------0
// let students = [
//   {name:"A", marks:70},
//   {name:"B", marks:80},
//   {name:"C", marks:90}
// ];

// Find average marks.

// let students = [
//     { name: "A", marks: 70 },
//     { name: "B", marks: 80 },
//     { name: "C", marks: 90 }
// ];
// let findAverage = students.reduce((sum, student) => sum + student.marks, 0)
// let avg = findAverage / students.length

// console.log(avg);


// Q11 — Flatten Products ----------------------------Flatten Products --------------------------------
// let data = [
//   {
//     category:"Electronics",
//     items:["Laptop","Phone"]
//   },
//   {
//     category:"Clothes",
//     items:["Shirt","Jeans"]
//   }
// ];

// Expected:

// ["Laptop","Phone","Shirt","Jeans"]

let data = [
    {
        category: "Electronics",
        items: ["Laptop", "Phone"]
    },
    {
        category: "Clothes",
        items: ["Shirt", "Jeans"]
    }
];
// let result = []

// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data[i].items.length; j++) {
//         result.push(data[i].items[j])
//     }
// }
// console.log(result);




// Q12 — Total Cart Price--------------------------------12Total Cart Price -------------------------------------------------------
// let cart = [
//   {name:"Shoes", price:2000, qty:2},
//   {name:"Watch", price:3000, qty:1},
//   {name:"Cap", price:500, qty:3}   

// ];

// Find total cart value.

// Expected:

// 8500

// let cart = [
//     { name: "Shoes", price: 2000, qty: 2 },
//     { name: "Watch", price: 3000, qty: 1 },
//     { name: "Cap", price: 500, qty: 3 }

// ];

// let Count = cart.reduce((Acc, num) => {
//     return Acc + (num.price * num.qty)

// }, 0)
// console.log(Count);



// Q13 — Find Duplicate Values------------------------- Q13 — Find Duplicate Values-----------------------------------
// [1,2,3,2,4,5,1,6]

// Expected:

// [1,2]

// let numObj = [1, 2, 3, 2, 4, 5, 1, 6]

// let Count = {}
// let duplicate = []

// let DuplicateNum = numObj.map((num) => {
//     Count[num] = (Count[num] || 0) + 1
//     if (Count[num] === 2) {
//         duplicate.push(num)
//     }
// })
// console.log(duplicate);



// Q14 — Sort by Marks Descending----------------------- Q14 — Sort by Marks Descending--------------------------------------
// let students = [
//   {name:"A", marks:60},
//   {name:"B", marks:90},
//   {name:"C", marks:75}
// ];

// Sort highest to lowest.

let students = [
    { name: "A", marks: 60 },
    { name: "B", marks: 90 },
    { name: "C", marks: 75 }
];

// let findHignest = students.reduce((acc, cur) => {
//     let find = acc.findIndex(s => cur.marks > s.marks)
//     if (acc == -1) {
//         return cur.marks

//     }
// }, 0)
// console.log(findHignest);







//     Question 6
// const employees = [
//   { name: "Mayank", salary: 50000 },
//   { name: "Rahul", salary: 25000 },
//   { name: "Aman", salary: 70000 }
// ]

// Question:
// Sirf un employees ke names chahiye jinki salary 40000 se jyada hai.

// Expected output:

// ["Mayank", "Aman"]

// Ab bina pura code likhe:
// const employees = [
//     { name: "Mayank", salary: 50000 },
//     { name: "Rahul", salary: 25000 },
//     { name: "Aman", salary: 70000 }
// ]

// const filtered = employees.filter((emp) => emp.salary > 40000)
// const names = filtered.map((emp) => emp.name)


// console.log(names);



// Q15 — Convert Array to Object
// [
//  ["name","Mayank"],
//  ["age",20],
//  ["city","Pune"]
// ]

// Expected:

// {
//  name:"Mayank",
//  age:20,
//  city:"Pune"
// }


// let data2 = [
//     ["name", "Mayank"],
//     ["age", 20],
//     ["city", "Pune"]
// ]
// let ans = {}
// for (let i = 0; i < data2.length; i++) {
//     ans[data2[i][0]] = data2[i][1]
// }
// console.log(ans);



let datad = {}
datad["name"] = "mayank",
    datad.surname = "raut",
    datad["age"] = 20
datad.city = "nagpur"




console.log(datad);
