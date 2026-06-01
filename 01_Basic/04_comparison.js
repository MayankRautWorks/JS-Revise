
//1. Same Type vs. Mixed Type Comparison
//When you compare the same types, it is straightforward. When you mix them, JavaScript forces a conversion behind the scenes.//
// Same types: Predictable
console.log(2 > 1);       // true


// 2. The null Comparison Confusion
// As explained in the video, comparison operators (>, <, >=) convert null to 0, while the equality operator (==) does not.
// Mixed types: JavaScript implicitly converts the string "02" to the number 2
console.log("02" > 1);    // true


// 3. Loose vs. Strict Equality
//Loose equality allows type conversion, whereas strict equality checks both the value and the datatype.

console.log(null > 0);    // false (null becomes 0; 0 is not greater than 0)
console.log(null == 0);   // false (equality check doesn't convert null to 0)
console.log(null >= 0);   // true  (null becomes 0; 0 is equal to 0)


// Q1. Iska output kya aayega?
console.log("5" - 2);    //Output =>3 "- jo hai ye concatination ka nhi karta + ki taraha me ye mathmatical output dega"

// Q2. Iska output kya aayega?
console.log("5" + 2);   //Output => 52 "q ki yah + he aur samne string me value di gai hai to ye concatinaion ka kaam karta  hai"

// Q3. Kya yeh true hoga ya false?
console.log("10" == 10);   //Output => true  "q ki js string ko num me convert karne ka kaam krega to value hogi 10==10 isliye ye true hoga"

// Q4. Aur agar strict equality use karein toh?
console.log("10" === 10);  // Output => False "q ki yha strict equallity cheak ho rhi hai  left side me string me value hai aur right side  num type hai he iss liye false he"



// Q5. Relational operator check
console.log(null < 1);   // Output=> True "yha js null ko num me convert karta hai uski value 0 rhti hai to ye 0<1 hota hai 1 0 se bda hain to output ture hota hai"  

// Q6. Strict equality check
console.log(null === 0);   // Output => False "q ki yha strict equality cheak ho rhi hain  null ka type hai Object aur 0 ka type of number hi isliye false 
// "

// Q7. Undefined ka behaviour
console.log(undefined == 0); // output => false " undefined sirf null aur khudke brabar ho sakta hai kisi dusre value/numbe se nhi"