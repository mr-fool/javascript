var reverse = function(x) {
    x = x + "";
	var rearrange =  x.split("").reverse().join("");
    if (rearrange.includes("-")) {
        rearrange = rearrange.substring(0, x.length - 1);
        rearrange = "-" + rearrange
    }
    if(rearrange < Math.pow(-2,31) || rearrange > (Math.pow(2,31) -1 ) ) {
        return 0;
    }
    return rearrange;
}; 
