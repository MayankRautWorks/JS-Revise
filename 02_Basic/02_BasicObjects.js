// 1. Read value using dot .
// Q1
// let user = {
//   name: "Mayank",
//   age: 20
// };

// 👉 Print name using dot notation.

// Expected Output:
// Mayank


// let user = {
//     name: "Mayank",
//     age: 20
// };

// console.log(user.name);


// 2. Read value using bracket []
// Q2   -------------------------------------------------------------------------------------------------------------
// let user = {
//   name: "Mayank",
//   age: 20
// };

// 👉 Print age using bracket notation.

// Expected Output:
// 20

// let user = {
//     name: "Mayank",
//     age: 20
// };

// console.log(user["name"]);


// 3. Difference between dot and bracket
// Q3 -------------------------------------------------------------------------------------------------------
// let user = {
//   "full name": "Mayank Raut",
//   age: 20
// };

// 👉 Print "full name" value.

// Expected Output:
// Mayank Raut

// 👉 (Important: dot will NOT work here)

// let user = {
//     "full name": "Mayank Raut",
//     age: 20
// };

// console.log(user["full name"]);


// 4. Add new property (dot)
// Q4--------------------------------------------------------------------------------------------------------------------------
// let user = {
//   name: "Mayank"
// };

// 👉 Add age = 21

// Expected Object:
// {
//   name: "Mayank",
//   age: 21
// }

// let user = {
//     name: "Mayank"
// };

// user.age = 21

// console.log(user);


// 5. Add new property (bracket)
// Q5--------------------------------------------------------------------------------------------------------------------------
// let user = {
//   name: "Mayank"
// };

// 👉 Add "city" = "Pune" using bracket method

// Expected Object:
// {
//   name: "Mayank",
//   city: "Pune"
// }

// let user = {
//     name: "Mayank"
// };
// user["city"] = "pune"
// console.log(user);

// 6. Update value
// Q6-------------------------------------------------------------------------------------------------------------------------
// let user = {
//   name: "Mayank",
//   age: 20
// };

// 👉 Change age to 25

// Expected Object:
// {
//   name: "Mayank",
//   age: 25
// }

// let user = {
//     name: "Mayank",
//     age: 20
// };

// user.age = 25
// console.log(user);

// 7. Delete property
// Q7-------------------------------------------------------------------------------------------------------------------------------
// let user = {
//   name: "Mayank",
//   age: 20,
//   city: "Pune"
// };

// 👉 Delete city

// Expected Object:
// {
//   name: "Mayank",
//   age: 20
// }

// let user = {
//     name: "Mayank",
//     age: 20,
//     city: "Pune"
// };
// delete user.city
// console.log(user);

// 8. Access using variable (VERY IMPORTANT)
// Q8------------------------------------------------------------------------------------------------------------------------
// let user = {
//   name: "Mayank",
//   age: 20
// };

// let key = "name";

// 👉 Access value using key

// Expected Output:
// Mayank



// let user = {
//     name: "Mayank",
//     age: 20
// };

// let key = "name"

// console.log(user[key]);


// 9. Dynamic key creation
// Q9----------------------------------------------------------------------------------------------------------------------------
// let key = "city";
// let value = "Pune";

// 👉 Create object using key variable

// Expected Object:
// {
//   city: "Pune"
// }

// let key = "city";
// let value = "Pune";

// let obj = {}

// obj[key] = value

// console.log(obj);


// 10. Multiple dynamic properties
// Q10-----------------------------------------------------------------------------------------------------------
// let key1 = "name";
// let key2 = "age";
// let user = {};

// 👉 Assign:

// name = "Mayank"
// age = 20
// Expected Object:
// {
//   name: "Mayank",
//   age: 20
// }

// let key1 = "name";
// let key2 = "age";
// let user = {};
// user[key1] = "mayank"
// user[key2] = "32"
// console.log(user);

// 11. Check property exists
// Q11----------------------------------------------------------------------------------------------------------------------
// let user = {
//   name: "Mayank",
//   age: 20
// };

// 👉 Check "age" exists or not

// Expected Output:
// true
// ==============================================Not completed=====================================================================
// let user = {
//     name: "Mayank",
//     age: 20
// };

// console.log(user);

// 12. Missing property
// Q12---------------------------------------------------------------------------------------------------------------------------
// let user = {
//   name: "Mayank"
// };

// 👉 Access age

// Expected Output:
// undefined

// let user = {
//     name: "Mayank"
// };

// console.log(user.age);



// 13. Object update using variable key
// Q13-----------------------------------------------------------------------------------------------------------------------
// let user = {
//   name: "Mayank",
//   age: 20
// };

// let key = "age";

// 👉 Increase value of age by 5

// Expected Object:
// {
//   name: "Mayank",
//   age: 25
// }


// let user = {
//     name: "Mayank",
//     age: 20
// };

// let key = "age";

// user[key] = 25

// console.log(user);


// 14. Replace value using bracket
// Q14---------------------------------------------------------------------------------------------------------------------------
// let user = {
//   name: "Mayank",
//   city: "Pune"
// };

// 👉 Change city → "Mumbai"

// Expected Object:
// {
//   name: "Mayank",
//   city: "Mumbai"
// }

// let user = {
//     name: "Mayank",
//     city: "Pune"
// };
// user["city"] = "Mumbai"
// console.log(user);


// 15. Combine dot + bracket
// Q15----------------------------------------------------------------------------------------------------------------------------
// let user = {
//   name: "Mayank",
//   age: 20
// };

// let field = "age";

// 👉 Print value using correct method

// Expected Output:
// 20

// let user = {
//     name: "Mayank",
//     age: 20
// };

// let field = "age";


// console.log(user[field]);

