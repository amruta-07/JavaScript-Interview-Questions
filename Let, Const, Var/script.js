// https://youtu.be/npcNFM9SQTg
// 1. hoisting is the behavior in which a function or a vriable can be used before the declaration.

// function a(){
//     console.log(b);  //undefined
//     var b=5;
// }
// a(); 


// 2. find union and intersection from array.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

//first we need to find intersection o/p : 3,4,5 common array elements.

const intersectionArr = arr1.filter((curElm) => {
    return arr2.includes(curElm);
});
console.log(intersectionArr); // o/p:[3,4,5]


// union means combining arr1 and arr2 without duplication.

const unionArr = [...new Set([...arr1, ...arr2])]; //we use spread operator for combining both array
// here we use ...new set data structure for avoiding duplicates
console.log(unionArr); //o/p:[1,2,3,4,5,6,7]

// 3. replace string 
// replace() replaceAll()

let str="amruta tatya misal amruta student"; 
console.log(str.replaceAll("amruta", "yogi")); 
// replace method only replaces the first string element and by using replaceAll method it replaces globaly

//4. how to detect array in javascript

console.log(typeof{});//object
console.log(typeof[]);//object
console.log(Array.isArray([]));//true
console.log([] instanceof Array);//True

// 5. pass BY VALUE IS PRESENT IN primitives data types AND pass BY REFERENCE is present in object that is non primitives data type.

let myName="Amruta Misal";
let sirName=myName;

myName="Yogita";
console.log(sirName); //Amruta Misal

// in pass by reference two objects in js are never equal

const obj1={
    id:'1',
    name:"Amruta",
    
};
const obj2=obj1;
obj2.name="yogita";
console.log(obj1);

// let arr=[1,2,3];
// let arr4=arr;
// arr4.push(5);
// console.log(arr);
// console.log(arr4);

// 6. == and === difference

let i=5;//number
let j="5";//first string converts in number and then it checks value
console.log(i==j); // checks value but ignors data types True
console.log(i===j);// checks value as well as data types False

// 7. map method is used to creating the new array from existing one

const val=[1,2,3,4,5];
const multiplyThree=val.map((num)=>{
    return num*10;
});
console.log(multiplyThree);

// 8. filter method it takes each elements in an array and apply the conditional statements against it 
const no=[1,2,3,4];
const moreThanTwo=no.filter((num)=>{
    return num>2;

});
console.log(moreThanTwo);


// 9. reduce method reduces value of an array just down to one value


const nums=[1,2,3,4,5];
const sum=nums.reduce((acc, cur)=>{ //callback function and initial value
    return acc+cur;
}, 0);
console.log(sum)







