module.exports = function reverse (n) {
    num = Math.abs(n);  
    num = num + "";
	return Number(num.split("").reverse().join(""));
}
