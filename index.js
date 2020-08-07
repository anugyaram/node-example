var rect = require('./rectangle');

function solveRect(l,b){
    console.log("SOlving for rectangle l = "+ l + " and breadth b = "+ b)

    rect(l,b,(err,rectangle) => {
        if (err) {
	        console.log("ERROR: ", err.message);
	    }
        else {
            console.log("The area of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
}

solveRect(2,4);
solveRect(-4,6);
solveRect(0,5);