//variable shadowing hi, hello
// illegal shadowing in this we can not declare the variable as var inside the block scope. it will show us the error 

function abc(){
    let a="hello";
    if(true){
        let a="hi"; //if we declare the var it will give us error this is known as illegal shadowing
        console.log(a)
    }
    console.log(a);
}
abc();

//declaration

var a;
var a;
// we can re-declare var as many times as we want

let c;
let b;
//we cannot redeclare let. it can declare only once.

// const b=18; //we must have to assign the value to const variable
// const b;

//we cannot redeclare const as its constant it will show us error missing initializer

//we cannot redeclare let and const in same scope but var can redeclare in same scope

function name(){
    console.log(g);
    
    var g=8;
    
}
name();

//map
let nums=[1,2,3,4,5];
const multiplyThree=nums.map((num, i, nums)=>{
    return num*3+i;
});
console.log(multiplyThree);

//filter
let num=[1,2,3,4,5];
const moreThanOne=num.filter((curr)=>{
    return curr>1;

});
console.log(moreThanOne);

//reduce
let number=[1,2,3,4,5];
const sum=number.reduce((acc, curr, i, arr)=>{
    return acc+curr;


},0);
console.log(sum);

//foreach 
let arr=[1,2,3,4,5,6];
const foreachResult=arr.forEach((ar,i)=>{
    arr[i]=ar;
})
console.log(foreachResult, arr);     //[ 1, 2, 3, 4, 5, 6 ]
