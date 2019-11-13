/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // If, after removing whitespaces, there are no length of the string, return 0
    if (s.trim().length < 1) {
        return 0;
    }
    // Split the array into words
    let res = s.split(" ");
    
    //Return the last word that is not whitespaces
    for (let i = res.length-1; i>-1; i--){      
        if (res[i].trim().length > 0){
            return res[i].length;
        }

    }
};
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("        ")); //should return 0