let a = 300 //! global scope

if(true){ //block scope
    let a = 10
    const b = 20
    // var c = 30
    // c = 30 //* also treated like var
    console.log("Inner a: ", a);
    
} //scope of a, b and c is within this scope only and if reaches outside of the scope it will cause issues

console.log(a);
// console.log(b);
// console.log(c); //* var will print thats why we dont use var

// {} => Scope when used with functions

