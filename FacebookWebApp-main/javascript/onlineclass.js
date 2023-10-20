// console.log("Basics of JS");

// // Primitive and Non - primitive

// // Primitives - Number, Strings, Boolean ,
//  undefined and null

// var myFirstVariable = 20.1234214;

// var newString = 'My first string'

// var isActive = false

// console.log(myFirstVariable);

// console.log(newString);

// console.log(isActive)

// declaration
// var anotherVariable ;

// // initialization
// anotherVariable = 20;

// console.log(anotherVariable)

// diff b/w undefined and not defined

// Type conversions

// var num1 = 30.1111;
// console.log(typeof num1);
// var numToString = String(num1)
// console.log(numToString)

// var str = "30.1111";
// console.log(typeof str)
// var strToNum = Number(str)
// console.log(strToNum)

// var num = "20.11"
// console.log(Number(num))

// Truthy - -ve or +ve, "one or more char", true, arrays, obj
// Falsy - 0, "", false, undefined and null

// var varToBoolean = null;
// console.log(Boolean(varToBoolean))

//  let and const

// let num = 30;

// let num = 40;

// const num = 30;
// console.log(num);

// var - You can re-declare/update, local scoped and support hoisting
// let - You can update the value but cannot re-declare, block scoped
// const - You can not redeclare nor update the value
// need to initialize on declaration and they are also block scoped

// let num = 30;
// {
//   let num = 40;
//   num = 70;
//   console.log("Block executed");
//   console.log(num)
// }

// num = 100
// console.log(num)

// Math Operations in JS

// console.log( 30 + 20 )
// console.log( 30 - 20 )
// console.log( 30 * 20 )
// console.log( 30 / 20 )
// console.log( 30 % 20 )

// console.log( 2 ** 3)

// const str1 = "Hey! "
// const str2 = "how are you?"

// console.log(1 + "1");
// console.log(1 - "1");
// console.log("1" - 1);

// console.log(1 + +"1");

// console.log(Math.pow(2, 3));

// const randomNum = Math.random() * 100;

// console.log(randomNum);
// console.log(Math.round(randomNum));

// const num = 30.3

// console.log(Math.floor(num))
// console.log(Math.ceil(num))

// console.log(Math.max(100,80))
// console.log(Math.min(100,80))

// Comparisons -> Boolean
// > , < . >= , <= , == / === and !=

// console.log(20 < 10);
// console.log(20 > 10);

// console.log(10 > 10);
// console.log(10 >= 10);
// console.log(10 < 10);
// console.log(10 <= 10);

// console.log(10 != 20);
// console.log(10 == 10);

// console.log(10 == '10');
// console.log(10 === '10');

// console.log( 0 == false )
// console.log( 0 === false )

// Logical Operators
// AND(&&) and OR(||)

// const num = 10;
// const num2 = 20;

// console.log(num === 10 || num === 30) //true
// console.log(num === 10 && num === 30) // false

// console.log(true || false || true) // true
// console.log(false && true)

// console.log( 1 || 0)
// console.log( 1 && 0 && 2)

// console.log( 0 || "" || 20) //20
// console.log( 1 && "" && 20) // ""

// console.log( true && 1 && 0) // 0
// console.log( true || 1 || 0) // true

// const num = 10;
// const num2 = 20;
// const num3 = 30;

// console.log((num === 15 && num2 === 20) || num3 === 30);

// console.log((num === 15 && num2 === 20) || num3 === 30);

//  ?? (Nullish Coalescing)

//Truthy - -ve or +ve, "one or more char", true, arrays, obj
// Falsy - 0, "", false, undefined and null

// undefined - undefined and null
// defined - 0 or any num, "", false, true, arrays, obj

// console.log(0 || 50); // 50
// console.log(0 ?? 50); // 0

// console.log( "" || "not available"  )
// console.log( "" ?? "not available"  )

// Conditionals in JS
// if else statements

// const val = 60;

// if (val < 50) {
//   const val2 = 1000;
//   const sum = 0;
//   console.log("Value is less than 50");
// } else if (val >= 50 && val <= 70) {
//   console.log("Value is greater than 50 but less than 70");
// } else if (val > 70 && val < 150) {
//   console.log("Value is greater than 70 but less than 150");
// } else {
//   console.log("Value is greater  than 70");
// }

// if (val > 50) {
//   if (val > 70) {
//     console.log(">70");
//   } else {
//     console.log("<=70");
//   }
// } else {
//   console.log("<50");
// }

// Ternary operator

// const ternaryVal = 200;

// const res =
//   ternaryVal < 50 //if
//     ? "<50"
//     : ternaryVal >= 50 && ternaryVal <= 70 //elseif
//     ? ">=50 && <=70"
//     : ternaryVal > 70 && ternaryVal <= 150 //elseif
//     ? ">70 and <=150"
//     : "greater than 150"; //else

// // console.log(res);

// const nestedTernaryVal = 90;
// const nestedRes = nestedTernaryVal > 50  // if
//   ? nestedTernaryVal > 70 //nested if
//     ? ">70"
//     : "<=70"  //nested else
//   : "<50" //else

// console.log(nestedRes);

// Switch Case

// const switchVar = 10;
// if(someVar === someVal){}

// switch (switchVar) {
//   case 10:
//     console.log("10");
//     break;
//   case 20:
//     console.log("20");
//     break;
//   case 30:
//     console.log("30");
//     break;
//   default:
//     console.log("No case matched");
// }

// switch (true) {
//   case switchVar <= 20 :
//     console.log("<=20");
//     break;
//   case switchVar > 20:
//     console.log(">20");
//   default:
//     console.log('default')

// }

// Loops in JS

// while, do while and for loops

// const num = 10;
// var i = 0;

// while (i <= num) {
//   console.log(i);
//   i++;
// }

// for(var j = 0 ; j <= num ; j+=3) {
//   console.log(j)
// }

// Functions in JS

// Function Declaration
// function printMessage() {
//   console.log("Hey");
// }
// // printMessage()

// // Function Expression
// const expressionFunc = function () {
//   return 10;
// };

// console.log(expressionFunc());

// // Arrow Functions
// // const arrowFunc = () => {
// //   return  10;
// // };

// const arrowFunc = () => 10;

// const res = arrowFunc(); //"Arrow func called"
// console.log(res);

// function func1() {
//   console.log('Function 1 called')
// }

// var func2 = function() {
//     console.log(arguments)
// };

// // console.log(func2(5, 10));
// // console.log(func2(15, 10));

// func2(1, 2, 3, 4, 5, 6, 7, 8, 9);
// func2("3", 4, 5);
// func2(11, 24, 59, 45);

// Strings in JS

// const str = "This is a sample string. "
// console.log(str.length)

// const str2 = "This is another string"

// console.log(str + str2 + " this is third one")
// console.log(str.concat(str2, " this is third one", ""))

// const name = "Sam"
// const age = 35

// const res = name + ' is ' + age + ' years old.'
//  + 'He is studying CS. '
//  + 'another line'

// const res = `${name} is ${age} years old.
// He is studying CS.
// another line
// `
// console.log(res)

// const str = "This is is a sample string"
// // console.log(str.charAt(5));
// // substring

// console.log( str.substring(2,9) )

// // slice
// console.log(str.slice( -8, -1))
// console.log(str.slice( -8, str.length))

// console.log(str.toUpperCase())
// console.log(str.toLowerCase())

// const num = 100000
// console.log(num.toLocaleString())
// console.log(num.toLocaleString("en-in"))

// const sampleUrl = "   www.xyz.com    "
// console.log(sampleUrl.trimStart())
// console.log(sampleUrl.trimEnd())
// console.log(sampleUrl.trim())

// console.log(str.replace(" is", " are"))
// console.log(str.replaceAll(" is", " are"))

// console.log(str.includes('This', 10))

// console.log(str.indexOf("sample"))
// console.log(str.lastIndexOf("a"))

// Arrays in JS

// const arr = [1, 2, 3, 4, 5, 6];

// console.log(arr[0]);
// console.log(arr[3]);
// arr[0] = 11;
// arr[3] = 14;

// push, pop , shift , unshift

// arr.push(7, 8, 9)
// arr.pop()
// arr.unshift(11, 12)
// arr.shift()

//splice
// console.log(arr);

// arr.splice(4, 0, 7, 8, 9, 10, 11, 12);
// console.log(arr);

//  slice
// const subArr = arr.slice(2, arr.length - 1)
// console.log(subArr)
// console.log(arr)

// for(var i = 0; i< arr.length; i++){
//   console.log(arr[i])
// }

// for(var j of arr){
//   console.log(j)
// }

// for(var k in arr){
//   console.log(arr[k])
// }

// callback -> When we pass a function as parameter to
// another function

// const arr = [11, 12, 13, 14, 15, 16];
// forEach

// function printElem(num) {
//   console.log(num)
// }

// arr.forEach((num, idx) => {
//   if(idx % 2 === 0) {
//     console.log(num)
//   }
//   // console.log(num);
// });

// console.log(arr)

// Map - Returns you a new Array

// const arr = [11, 12, 13, 14, 15, 16];

// let increasedArr = [];
// const mappedArr = arr
//   .map((elem) => {
//     return elem * 3;
//   })
//   .filter((elem) => elem % 2 === 0);

// // console.log(arr)
// // console.log(increasedArr)
// console.log(mappedArr);

// Filter - Returns you a new Array

// const arr = [11, 12, 13, 14, 15, 16];

// const filteredArr = arr.filter((elem) => elem === 13); //[13, 14, 15 ,16]
// console.log(filteredArr[0]);

// // Find - Return you One value
// const foundElem = arr.find((elem, idx) => {
//   return elem === 13
// });
// console.log(foundElem);

// // FindIndex - Returns index of elem

// const index = arr.findIndex( elem => elem > 11)
// console.log(index)

// Some and every - Boolean

// const someRes = arr.some(elem => elem > 13)
// console.log(someRes)

// const everyRes = arr.every(elem => elem > 13)
// console.log(everyRes)

// console.log(arr.findIndex( elem => elem > 13))
// console.log(arr.indexOf(13))

// console.log(Array.from({ length: 6 }, (elem) => elem));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (var x of f) {
//   console.log(x);
// }

// console.log([1, 2, [3, 4], 5, [6, 7, 8]].flat());

// const arr = [11, 12, 13, 14, 15, 16];

// console.log(arr.join("/"))

// Objects in JS

// console.log(obj)
// obj.addNums(1,2)

// const obj2 = {
//   username: "user 2"
// };

// const obj = {
//   username: "user 1"
// };

// // console.log(obj)
// // obj2.username = "user 2"

// const obj3 = Object.assign( obj, obj2)

// console.log(obj3)

// keys

// const keyVals = Object.keys(obj).map((elem) => {
//   return [elem, obj[elem]];
// });

// console.log(keyVals);

// const entries = Object.entries(obj);
// console.log(entries);

// const product = {
//   name: "Iphone 14",
//   price: "1,00,000",
//   colour: "Black"
// };

// freeze - It will not allow to add key/val or update
// Object.freeze(product);
// seal - It will not allow to add key/val but can update existing
// Object.seal(product)

// product.price = "2,00,000";
// product.quantity = 200

// console.log(product);

// rest operator and spread operator ( ... )

// const sum = function (num1, num2 , num3,  ...nums) {
//   console.log(num1, num2);
//   console.log(nums)
// };

// sum(1, 2, 3, 4, 5, 6, 7, 8);

// const arr = [12, 11, 13, 14, 15, 16];

// // const elem1 = arr[0]
// // const elem2 = arr[1]
// // const elem3 = arr[2]
// // console.log(elem1, elem2)

// // Destructuring

// const [elem1, elem2 , elem3,  ...elems] = arr .
// console.log(elem1, elem2);
// console.log(elems)

// Destructuring in Objects, spread operator and promises/async await

// const product = {
//   productName: "Iphone 14",
//   price: "1,00,000",
//   stock: {
//     colour: "Black",
//     quantity: 200,
//     type: {
//       newPhone: 20,
//       refurbished: 30
//     }
//   }
// };

// const {
//   productName,
//   price,
//   stock,
//   stock: {
//     quantity,
//     type,
//     type: { newPhone  }
//   }
// } = product;

// console.log(type)
// type.newPhone = 50
// console.log(product)

// console.log(productName);
// console.log(price);
// console.log(quantity);
// console.log(stock);
// console.log(newPhone);

// const arr = [1, 2, 3];
// const arr2 = [11, 12, 13];

// const newArr = [...arr, ...arr2, 4, 5, 6];

// // console.log(newArr);

// const product = {
//   productName: "Iphone 14",
//   price: "1,00,000"
// };

// const newObj = {
//   ...product,
//   productName: "Iphone 15",
//   colour: "Black",
//   quantity: 200,
//   stock: {
//     type: {
//       newPhone: 200
//     }
//   }
// };

// Promises

// const x = 20;

// const myPromise = new Promise((resolve, reject) => {
//   if (x == 20) {
//     setTimeout(() => {
//       resolve("Promise Fulfilled");
//     }, 3000);
//   } else {
//     setTimeout(() => {
//       reject("Promise Rejected");
//     }, 5000);
//   }
// });

// let data;
// myPromise
//   .then((res) => {
//     console.log(res);
//     data = res;
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally called");
//   });

const promiseResult = async() => {
    try {
        const result = await myPromise;
        console.log("This line executes");
        console.log(result);
        const promise2 = await Promise.resolve(3);
        console.log(promise2);
    } catch (err) {
        console.log(err);
    } finally {
        console.log("finally called ");
    }
};
promiseResult();