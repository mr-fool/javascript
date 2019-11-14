/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num > 9) {

        var sum = 0;
        
        num.toString().split("").forEach( (val) => {
            sum += parseInt(val); 
         });
            
        
        
        //repeat
        return addDigits(sum);
    } 
    
    return num;
};
console.log( addDigits(20) );
console.log( addDigits(38) );