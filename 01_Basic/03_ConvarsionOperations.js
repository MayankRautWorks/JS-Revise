let Numbar = "33sd"
// console.log(Number)
// console.log(typeof Number)

let StrNum = Number(Numbar)

// console.log(typeof StrNum)
// console.log(StrNum)

// let IdNum = -1

// console.log(Boolean(IdNum))

// 1 =>True  / 0 => false / -1 = > true / "" => false


//--------------------------------------------------------------------------Operations------------------------------------------------------------------------------------------------------//


// let value = 3

// let Negvalue = -value

// console.log(Negvalue)

// Number("123")    Output will be  => the Number 



// let a = "123abc"
// console.log(Number("123abc"))  Out put will be => NAN



// console.log(Number(true))   output will be => 1


// console.log(Number(false))  Output will be => 0


// let result = String(100);
// console.log(result);            output will be => 100 string type
// console.log(typeof result);

// let Getvalue = Boolean(1)            Output .=> true , boolean
// console.log(Getvalue);               
// console.log(typeof Getvalue)


// let Findvalue = Boolean(0)        Output => False,boolean
// console.log(Findvalue);
// console.log(typeof Findvalue)

// Boolean("Mayank")  => True , bolean


// let Getnum = Number(null)
// console.log(Getnum);
// console.log(typeof Getnum)      Output => 0 Number


// console.log(5 > 3)   OutPut =>  true

//5 < 3    Output => False

// console.log("5" > 3)   =>  true

// console.log("2" > "12")    Out put will be surprising => true  "javascript dono string value ke pahale letter ko dhekta hai first str me 2 to 2 value rkhega second isme pahali value 1 to vo 1 hi rhegi to bda value hua 2"


// console.log(null > 0)   outPut =>  false "Jab reletional Operatior use karte ho to js use null ko num me convert karne ki koshis karta hai Number conversion null  ban jata hai 0 fir to 0 se bha nhi he iss e liye "False he""

//null == 0  Output => false "Q ki  Equality Operatr ka rule alag hai == dhekte wkt js null ko num me connvert nhi karta jd ka rul kehta he null sirf undefined ke brabar he aur kisi value ke nhi ye equality operstor ,arthmatical operator me change hota hai "


//null >= 0  Output => True hai "null ki value abhi 0  ho gai hai 0/0 ke brabar hai "

// console.log(undefined > 0)  Output => False "jab js undefind ko num me change karne ki koshish karta hai usko koi valid num nhi milta to usko ye NAN me conver karta hai "


// console.log(undefined == 0)   Output => false "Jab equity operator use kare ho to  js undefined ko kisi nu me conver nhi karta yani vo NAN rhega"

// undefined < 0  Output => False "js me nan ke sath  kisi bhi mathamatical comparision  se  kroge to hmesha false hi ayga
// 

// "5" == 5 Output => True "js first string num ko number me convert ki fir 5=5 ki equation bni"

// "5" === 5 Output => False "isme strect equalit cheak hoti hai isme first num string me he isse lieye false hai"

//false == 0  Output =>True  "isme js boolean (false) ko num me conver karne ki koshis karta hai to false ki numaric value 0 hoti  hai 0==0 ye true hai"

//false === 0 Output => False "isme cheak hota hai type fir value false boolean hai  aur second number"

//null == undefined  Output =>  true "loose equality me ye dono same mane gai he q ki dono  no value do  repressent karte he"

//null === undefined Output => FALSE "yha  Dta type cheak kiya jata hai null ek primitive type hai iska type off Object hsi  undefined ka data type undefinedd hota hai "

//--------------------------------------Tricky Interview Questions Baki hai ----------------------------------------------------//

//[] == false   Output =>  True " sabse pahale js false se start start  karta  hain srung ko apne initial value me badlata hai uski initial value 0 ho jati hai uski baad left side me khudko badalta hai vha vo arrey ko to string ke madat se string me badalta hai fir final output ""==0 fir string ko js 0 me badaldeta hai to final output 0==0 ye true hota hain
// 

// console.log("" === 0)  Output => True "isme Srting ki value 0 ho jati hai to v 0===0 hota jata hai is liye true banta ha"

//" \t\n" == 0    OutPut => True "js kisi bhi string ko num me badalte wkt uske age piche ke sare whitespace trim ata hai (spaces,tabs,\t,newline \n)in sab ko ye sab nikalne ke baad  khli "" rah jati hai fir fir khali string number me conver ho kar number me conver ho jati hai fir banta hai 0==0"

//[] == 0 Output => True "js array ko tab tak change karne ki koshish karts hai jab tak value num me nhi badalti to js pahale tostring ke madat se array ko srinh me badalta hain fir fir khali sring ko num num ber me convert karta hain to uski value hoi hai 0 to 0==0 true hoti hain "

//[1] == 1 Output => True "is me bhi vesi hi method chal rhi hai  array string me badal lita hai hai to uski value "1" ho jati hai fir string koo number me convert kiya jata hai au value num me ati hai to hu 1==1   "

//[1,2] == "1,2" Output => True  "js arrey object ko  string me badal deta hai uska outut hota hai "1,2"fir "1,2"=="1,2"ye brabar hue iss liye ture hota hai"