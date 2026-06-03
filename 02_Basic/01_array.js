// push, pop, shift, unshift, lenth,  trim, map, filter,reduce, forEach, includes



// let arrey = [1, 3, 4, 5, 6, 7]

// arrey.push(2)
//console.log( arrey.unshift(9))
// arrey.push(10)
// arrey.pop()
// arrey.pop()
//arrey.unshift(9)
// arrey.shift()


// console.log(arrey.length)
// console.log(arrey.includes(10))
// console.log(arrey.includes(8))
// console.log(arrey)



// let numArray = ["mayank","anuj"]
// console.log(numArray.length(0)t)
// console.log(numArray)




// let Name = "  m ay ank  "
// console.log(Name.trim())


// let arr = [1, 2, 3, 4, 5,]


// let result = arr.map((num) => {
//     return (                         //Har element par operation krega aur ek new array return karta hai.

//         num * 2
//     )
// })

// console.log(result)

// let arr = [1,2,3,4,,5,6,7,8,9,10]

// let result = arr.filter((num)=>{
//     return(
//         num%2===0                     // condition True to value rakhta hain Jo condition true hoti hai sirf wahi values rakhta hai.
//     )
// })
//  console.log(result)



// let arr =  [1,2,3,4,5,6,7,8,9,10]

// let result = arr.reduce((acc,curr)=>{
// return acc+curr
// },0)                                        //Pure array ko use kark single value banata hai.
// console.log(result)


// let arr = [10, 20, 30];

// arr.forEach((value) => {                  //loop ki tarah kaam karta hain
//   console.log(value);
// });




//Q1 1. Transformations (map)
// Q1
// [1,2,3,4,5]

// Convert into:

// ["odd","even","odd","even","odd"]//


// let Arr = [1, 2, 3, 4, 5]

// let AddEvenOdd = Arr.map((num) => {
//     if (num % 2 === 0) {
//         return "even"
//     } else {                                    //Even or Odd
//         return "odd"
//     }

// })

// console.log(AddEvenOdd)



// Q2 ---------------------------------------------------------------------------------++++++++++++++++++++++++++++++++++++++++++++++++-------------------------------------------------------------------
// ["apple", "banana", "mango"]

// Convert into:

// ["APPLE", "BANANA", "MANGO"]

// without using loop.


// let array = ["apple", "banana", "mango"]


// let result = array.map((num) => {
//     return (
//         num.toUpperCase()
//     )
// })                                               // To upperCase


// console.log(result)



// Q3--------------------------------------------------------------------------+++++++++++++++++++++++++++++++++++++++++++++++++++--------------------------------------------------------
// [" hello ", " world ", " javascript "]

// Remove spaces and capitalize first letter.

// Expected:

// ["HellO", "WorlD", "JavascripT"]



//let str = [" hello ", " world ", " javascript "]


// let result = str.map((obj) => {
//     let ans = obj.trim()
//     let ans2 = ans.split('')
//     let ans3 = ans2.pop().toUpperCase()
//     ans2.push(ans3)
//     return ans2.join('')

// })
// console.log(result)

// let result = str.map((obj) => {
//     let ans = obj.trim()
//     let ans2 = ans.split('')
//     let ans3 = ans2.map((ele, index) => {
//         if (index == 2) {
//             return ele.toUpperCase()
//         } else {
//             return ele
//         }

//     })

//     console.log(ans3)

//     return ans3.join('')

// })
// console.log(result)


// Q5  ---------------------------------------------------------++++++++++++++++++++++++++-----------------------------------------------------------------------
// [10,15,20,25,30,35]

// Get numbers divisible by both:

// 5
// 3

// let num = [10, 15, 20, 25, 30, 35]

// let findvalue = num.filter((val) => {
//     return (
//         val % 5 === 0 && val%3===0
//     )
// })
// console.log(findvalue)


// Q6
// ["apple", "", "banana", " ", "mango"]

// Remove empty strings and space-only strings.------------------------------------++++++++++++++++++++++++------------------------------------------------

// Expected:

// ["apple", "banana", "mango"]


// let str = ["apple", "", "banana", " ", "mango"]

// let removeEmptyStr = str.filter((newstr) => {
//     return newstr.trim().length > 0
// })

// console.log(removeEmptyStr)



// Q7
// ["cat", "elephant", "dog", "tiger"]

// Get words whose length is greater than 3. --------------------------------+++++++++++++++++++++---------------------------------------


// let animal = ["cat", "elephant", "dog", "tiger"]

// let WordsLength = animal.filter((neew) => {
//     return neew.length > 3
// })
// console.log(WordsLength)


// Q8
// [0, 1, false, 2, "", 3, null, undefined] ----------------------------+-------------------------------------------------------------

// Remove all falsy values.

// let removefalse = [0, 1, false, 2, "", 3, null, undefined]

// let findvalue = removefalse.filter((index) => {
//      if (index) {
//           return true
//      } else {
//           return false
//      }
// })
// console.log(findvalue)


// 3. reduce() Logic Building
// Q9

// Find total:
//---------------------------------++++++++++++++++++++++++++++++---------------------------------------
// [5,10,15,20]

// without loop.


// let Totalval = [5, 10, 15, 20]

// let Findval = Totalval.reduce((acc, curr) => {
//      return (
//           acc + curr
//      )
// })
// console.log(Findval)


// Q10  ----------------------------------------------------+++++++++++++++++++++++++++++++++---------------------------------------------------

// Find maximum number:

// [12, 99, 3, 45, 100, 23]

// let num = [12, 99, 3, 35, 100, 23]
// let findval = num[0]

// for (let i = 0; i < num.length; i++) {
//      if (num[i]>findval) {
//           findval = num[i]
//      }
// }
// console.log(findval)



// Q11  ----------------------------------------------------++++++++++++++++++++++++++++++++++++------------------------------------------------

// Find minimum number:

// [12, 99, 3, 45, 100, 23]

// let num = [12, 99, 3, 35, 100, 23]
// let Val = num[0]
// for (let i = 0; i < num.length; i++) {
//      if (num[i] < Val) {
//           Val = num[i]
//      }
// }
// console.log(Val)


// Q12  ------------------------------------------++++++++++++++++++++++++++++++++++----------------------------------------------

// Count total characters:

// ["hi", "hello", "javascript"]

// Expected:

// 18


// let str = ["hi", "hello", "javascript"]



// let Strlength = str.reduce((acc, curr) => acc + curr, 0)

// console.log(Strlength.length);

// Q13  ----------------------------------------++++++++++++++++++++++++++++-----------------------------------

// Flatten this array using only reduce(): ------------------------NHI HUA-----------------------------------------

// [[1,2], [3,4], [5,6]]

// Expected:

// [1,2,3,4,5,6]

// let  arr = [ [1,2],[3,4],[5,6]]

// let MergeArr = arr.reduce((acc,curr)=>{
//     return acc+curr[""]

// })      
// console.log(MergeArr)



// 4. Chaining Questions
// Q14----------------------------------------=======================================8++++++++++++-----------------------------------------
// [1,2,3,4,5,6,7,8]
// keep even numbers
// square them

// Expected:

// [4,16,36,64]

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let result = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         result.push(arr[i] * arr[i])
//     }
// }
// console.log(result)


// Q15---------------------------------------------------+++++++++++++++++++++++++++-----------------------------------------------------------------------------
// [" apple ", "banana ", " mango"]
// trim all strings
// convert uppercase
// keep only words with length > 5

// Expected:

// ["BANANA"]

