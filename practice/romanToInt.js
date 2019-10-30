/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	if(s == null) return -1;
  var num = char_to_int(s.charAt(0));
  var pre, curr;

  for(var i = 1; i < s.length; i++){
    curr = char_to_int(s.charAt(i));
    pre = char_to_int(s.charAt(i-1));
    if(curr <= pre){
    	num += curr;
    } 
    else {
      num = num - pre*2 + curr;
    }
  }

  return num;
}

function char_to_int(c){
  switch (c){
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return -1;
	}

}
