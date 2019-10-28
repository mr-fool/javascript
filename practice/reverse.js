var reverse = function(x) {
    x = x + "";
	var rearrange =  x.split("").reverse().join("");
    if (rearrange.includes("-")) {
        rearrange = rearrange.substring(0, x.length - 1);
        rearrange = "-" + rearrange
    }
    if(rearrange < Math.pow(-2,31) || Math.pow(2,31) - 1 < rearrange) {
        return 0;
    }
    return rearrange;
}; 
