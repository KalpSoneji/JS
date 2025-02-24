function demo(){
    console.log("demo function called..."); 
}

function test(x){
    // console.log(x);

    // x()
}


// test(10)
// test("rahul")
// test(12.445)
// test(true)

test(demo())

//OR

function demo(){
    console.log("demo function called..."); 
}

function test(x){
    // console.log(x);

    x()
}


// test(10)
// test("rahul")
// test(12.445)
// test(true)

test(demo)