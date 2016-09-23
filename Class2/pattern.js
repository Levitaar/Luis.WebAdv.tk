var printString;
var stringLength;
var addChar;
var newChar;
var lineNum;

setInterval(function() {
    
    if(lineNum > 0) {
    
    printString = "";
    stringLength = 100;
    
        for(i = lineNum; i > 0; i--) {
            
            while(printString.length < stringLength) {
        
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
            
            }
            
            console.log(printString);
            
            printString = "";
        
        }
        
        
    
    }
    
}, 0.5 * 1000);
