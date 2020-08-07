var rect = require('./rectangle');

function solveRect(l,b){
    console.log("SOlving for rectangle l = "+ l + " and breadth b = "+ b)

    if(l <= 0 || b<= 0){
        console.log("Dimension should be greater than zero")
    }

    else{
        console.log("Area is:" + rect.area(l,b));
        console.log("Perimeter is:" + rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(-4,6);
solveRect(0,5);