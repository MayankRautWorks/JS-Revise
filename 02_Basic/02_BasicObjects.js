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


// 💡 Mini Practice Challenge
// Challenge Q1============================💡 Mini Practice Challenge=========================================================
// let user = {
//   name: "Mayank",
//   age: 20
// };

// 👉 Convert into:

// name → MAYANK
// age → 21

// let user = {
//     name: "Mayank",
//     age: 20
// };
// user.name = user.name.toUpperCase()
// user.age = user.age + 1
// console.log(user);


// Challenge Q2=============================💡 Mini Practice Challenge============================================================
// let key = "city";

// 👉 Create object dynamically and assign "Pune"


// let key = "city"
// let obj = {}
// obj[key] = "pune"
// console.log(obj);


// Challenge Q3 =====================================💡 Mini Practice ChallengeChallenge Q3=======================================
// let user = {
//   name: "Mayank",
//   age: 20
// };

// 👉 Print all keys dynamically (hint: Object.keys + loop)


// let user1 = {
//     name: "Mayank",
//     age: 20,
//     dob: 1 / 4 / 2005,
//     city: "pune"
// };

// let ans1 = Object.values(user1)

// for (let i = 0; i < ans1.length; i++) {
//     // console.log(ans1[i])
// }



// Object Practice Questions — Beginner to Intermediate


// 1. Dynamic Property Access
// Q1  =======================================================================================================================
// let user = {
//   name: "Mayank",
//   age: 20,
//   city: "Pune"
// };

// let key = "city";

// 👉 Print value using variable key.

// Expected Output:
// Pune



// let user = {
//     name: "Mayank",
//     age: 20,
//     city: "Pune"
// };
// let key = "city";

// console.log(user[key]);


// 2. Add Property Dynamically
// Q2============================================================================================================================
// let user = {
//   name: "Mayank"
// };

// let key = "age";
// let value = 21;

// 👉 Add property dynamically.

// Expected Object:
// {
//   name: "Mayank",
//   age: 21
// }

// let user = {
//     name: "Mayank"
// };

// let key = "age";
// let value = 21;

// user[key] = value

// console.log(user);

// 3. Loop Through Object
// Q3===========================================================================================================================
// let user = {
//   name: "Mayank",
//   age: 20,
//   city: "Pune"
// };

// 👉 Print:

// name : Mayank
// age : 20
// city : Pune

// (using loop)


// let user = {
//     name: "Mayank",
//     age: 20,
//     city: "Pune"
// };


// 4. Count Properties
// Q4
// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// };

// 👉 Find total number of keys.

// Expected Output:
// 4


let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};



// console.log(Object.keys(obj).length);


// 5. Check Key Exists
// Q5=============================================================================================================================
// let user = {
//   name: "Mayank",
//   age: 20
// };

// 👉 Check if "city" exists.

// Expected Output:
// false




// let user = {
//     name: "Mayank",
//     age: 20
// };


// console.log(Object.hasOwn(user, "city"))


// 6. Convert Keys to Uppercase
// Q6================================================Not Complted=========================================================
// let user = {
//   name: "Mayank",
//   city: "Pune"
// };

// 👉 Convert object into:

// {
//   NAME: "Mayank",
//   CITY: "Pune"
// }

// let user = {
//     name: "Mayank",
//     city: "Pune"
// };

// let upCase = Object.hasOwn(user, key)
// console.log(user.upCase)

// console.log()

// 7. Sum All Values
// Q7=======================================================================================================================
// let marks = {
//   math: 80,
//   english: 70,
//   science: 90
// };

// 👉 Find total marks.

// Expected Output:
// 240

// let marks = {
//     math: 80,
//     english: 70,
//     science: 90
// };
// let add = Object.values(marks).reduce((acc, cur) => acc + cur, 0)
// console.log(add);


// 8. Nested Object Access
// Q8 ============================================================================================================================
// let user = {
//   name: "Mayank",
//   address: {
//     city: "Pune",
//     pincode: 422003
//   }
// };

// 👉 Print city.

// Expected Output:
// Pune

// let user = {
//     name: "Mayank",
//     address: {
//         city: "Pune",
//         pincode: 422003
//     }
// };
// console.log(user.address.city)




// 9. Update Nested Value
// Q9===========================================================================================================================
// let user = {
//   name: "Mayank",
//   address: {
//     city: "Pune"
//   }
// };

// 👉 Change city to "Mumbai".

// Expected Object:
// {
//   name: "Mayank",
//   address: {
//     city: "Mumbai"
//   }
// }

// let user = {
//     name: "Mayank",
//     address: {
//         city: "Pune"
//     }
// };

// user.address.city = "mumbai"

// console.log(user);


// 10. Delete Nested Property
// Q10============================================================================================================================
// let user = {
//   name: "Mayank",
//   address: {
//     city: "Pune",
//     pincode: 422003
//   }
// };

// 👉 Delete pincode.


// let user = {
//     name: "Mayank",
//     address: {
//         city: "Pune",
//         pincode: 422003
//     }
// };

// delete user.address.pincode

// console.log(user);


// 11. Object to Array
// Q11============================================================================================================================
// let user = {
//   name: "Mayank",
//   age: 20
// };

// 👉 Convert into:

// [
//   ["name", "Mayank"],
//   ["age", 20]
// ]

// let user = {
//     name: "Mayank",
//     age: 20
// };

// let arr = Object.entries(user)
// console.log(arr);


// 12. Array to Object
// Q12============================================================================================================================
// let arr = [
//   ["name", "Mayank"],
//   ["age", 20]
// ];

// 👉 Convert into object.

// Expected:
// {
//   name: "Mayank",
//   age: 20
// }


// let arr = [
//     ["name", "Mayank"],
//     ["age", 20]
// ];





// console.log(Object.fromEntries(arr));



// 13. Find Highest Value
// Q13============================================================================================================================
// let scores = {
//   math: 95,
//   english: 88,
//   science: 91
// };

// 👉 Find highest score.

// Expected Output:
// 95

let scores = {
    math: 95,
    english: 88,
    science: 91
};

let keys = Object.values(scores)



console.log(keys);
