
var counter = 10;

var printString = "";

while(counter > 0) {
    
    var rng = Math.floor(Math.random() * 100);
            
        if(rng <= 25) {
                    
            printString = printString + "#";
                    
        } else if(rng > 25 && 50 >= rng) {
                    
            printString = printString + "@";
                    
        } else if(rng > 50 && 75 >= rng) {
                    
            printString = printString + "$";
                    
        } else if(rng > 75) {
                    
            printString = printString + "+";
                    
        }
        
    counter--;
    
}

console.log(printString);

// setInterval(function(){
    
//     while(counter > 0) {
//         console.log("success");
//         counter--;
//     }
    
// }, 3000);

// var user = "Brendan";
// var password = "letmeout";
// var i = 0;
// var lastnum = false;

// for(i = 0; i < 1000; i++){
//     var newnum = Math.floor(Math.random()*10);
    
//     while(lastnum == newnum) {
//         console.log("duplicate detected");
//         newnum = Math.floor(Math.random()*10);
//     }
//     console.log(newnum);
//     lastnum = newnum;
//     i++;
// }

/*

for (var i=0; i<10; i++) {
    console.log(i)
}



if (user == "Brendan" && password == "letmein") {
    console.log("You made it...");
} else if (user == "Brendan") {
        console.log("wrong password");
} else if (user != "Brendan" && password != "letmein") {
        console.log("wrong user and password");
} else {
    console.log("wrong user")
}

*/

