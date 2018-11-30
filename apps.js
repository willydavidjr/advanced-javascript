

var foo = "foo";

/*
    This will enclose all properties inside IIFE
    //This will make everything private
    This will prevent clutters on the Global Scope
*/

(function (bar){
    var foo = bar;
    console.log(foo);
})(foo);

console.log(foo);

/*
let keyword
    -> It will be available on the current block scope vs
       var keyword is available to lexical scope until to the global scope
    -> It will add additional mental task to know the block of the let variable   
*/


/*
    -> undefined is a variable that has been declared but no value 
    exists and is a type of itself 'undefined'. 
    -> null is a value of a 
    variable and is a type of object
    -> undeclared variables is a variable that has 
    been declared without 'var' keyword
*/

panda();

var panda = 3;

function panda(){
    console.log("xiongmao");
}

function panda(){
    console.log("mao");
}

/* 
    -> Hoisting
        - Functions first before variables 
        - Hoisting is just an idea on how Javascript works
        - Function declarations aren't called first, code below will throw an error
    dog();
    var dog = function(){
    console.log('This is a dog.');
}
*/

//The new keyword cannot access the this outside the global scope
function bazz(){
    //this.boo = "Hi";
    //console.log(this.bar + " " + boo);
    //this.bar = "Hi";
    console.log(this.bar);
}

var bar = "Hello Baz!";
var boo = new bazz(); //This will call the function bazz();


/*
    Closure:
        -> Closure is when a function "remember" its lexical scope
        even when the function is executed outside that lexical scope
        -> Example below:
*/


function spongebob(){
    var bob = "Hello Bob!";

    function patrick(){
        console.log(bob);
    }

    mrCrabs(patrick);
}

function mrCrabs(arg1){
    arg1();
}

spongebob();

//Additional example of closures:

function spongebob1(){
    var bob = "Hello again Bob!";

    return function(){
        console.log(bob);
    }
}

function mrCrabs1(){
    spongebob1()();
}

mrCrabs1();


//Original code
for (var i= 1; i <= 5; i++){
       setTimeout(function() {
        console.log("i: " + i);
    }, i * 1);     
}

/* Using IIFE to solve the code above
(We can also use (for (let i = 1)) for this to works)
for (var i= 1; i <= 5; i++){
    (function(i){
       setTimeout(function() {
        console.log("i: " + i);
    }, i * 1000);     
    })(i);
}
*/


//Closure Classic Module Pattern

var spongebob2 = (function(){
    var o = {
        bob : "Good morning Spongebob!"
    }

    return {
        bar : function(){
            console.log(o.bob);
        } 
    }
})();    

spongebob2.bar();

//Modified Module Pattern:

var spongebob3 = (function(){
    var publicAPI = {
        bob: "Ni hao ma Spongebob!",

        krusty : function(){
            console.log(publicAPI.bob);
        }, 

        bar: function(){
            publicAPI.krusty();
        }
    }

    return publicAPI;
})();

spongebob3.bar();