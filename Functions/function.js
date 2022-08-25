// functions in js
// 1. what is function declaration? [ans- when we declared the function like ...and it returns it is called as function declaration or function definition or function statement.]

function square(num){
    return num*num; //normal function declaration
}
square();

//2. what is function expressio ? ans- when we store the function inside variable is called function expression
// anonymous function means the function which has no name

const square1= function(num1){
    return num1*num1;
}
console.log(square1(5));

//3. what are first class function? ans- where a function can be treated like a variable there functions are called first class function

function square(num){
    return num*num;
}
function displaysquare(fn){
    console.log("square is: "+ fn(5));
}
displaysquare();

