module.exports = function reverse (n) {
    var digit, result = 0
    while( n ){
        digit = n % 10  
        result = (result * 10) + digit  
        n = Math.floor(n/10|0)  
    }  

return Math.abs(result) 
}