const accountId = 44542
// accountId = 56565  this is not allowed 
let getEmail = "mayank@gmail.com"
getEmail="Anuj@gmail"
var Password = "68565"
Password="bhendi56kg"
//Prefer not to use Var because of  issue in block schope and functionctional scope
AccountCity="bhindibajar"
AccountCity="ghatkopar"

// console.log(accountId) For variable call

// console.table([accountId,getEmail,Password,AccountCity])

//------------------practice--------------//

//let a = 10;
// //onsole.log(a); // output 10

//Can we change name later?
const name = "Mayank";
//console.log(name); // No  because this is  constant Variable

var x = 5;
var x = 10;
//console.log(x); //output will be 10


let y = 20;
y = 30;
//console.log(y); //Output wil be 30



//let a;
//console.log(a); //outPut wil be SyntaxError: Identifier 'a' has already been declared


// console.log(a);
//var a = 5;  //out will be undefined  


//let a = 10;
{
 let a = 20;  //Output will be 10 second let variable in block scope
}
//  console.log(a);



//const obj = { name: "A" };
//obj.name = "B";         // Out put will bi B
// console.log(obj.name);


// console.log(typeof x);
var x;   //THe Output will be number


//let a = 5;
{
  //let a = 10;
  //console.log(a);  // Out will be 10 and 5
}
//console.log(a);


// // this is give you syntax eror you cn not access "a" before initialization
//let a = 10;


// function test() {
//    console.log(a);
//   var a = 5;         //Output is undefined
// }
// test();


// const obj = { age: 20 };
// obj = { age: 30 };
// console.log(obj);     // thry give you typeerror because const variable takes constants valuse



// var a = 1;
// function foo() {
//   console.log(a);
//   var a = 2;          
// }                //undefined
// foo();


// let a = 5;
// function test() {
//   let a = 10;
//   console.log(a);  //two times run output is 10 and 5
// }
// test();
// console.log(a);



// let a = 5;
// function foo() {
//   console.log(a);
//   let a = 10;    
// }
// foo();     //they give you refrenceError because you cann not access "a" before initilization



// var a = 10;
// {
//   var a = 20;
// }
// console.log(a);  //var iss dosn,t work in block scope


// let a = 1;
// function outer() {
//   let a = 2;
//   function inner() {
//     console.log(a);
//   }
//   inner();    //there Output will be 2 
// }
// outer();


// console.log(typeof a);
// let a = 10;         //refrenceError con not re declere "a" befor initlization



// const a = 10;
// {
//   const a = 20;
//   console.log(a);  //output will be 10 and 20
// }
// console.log(a);