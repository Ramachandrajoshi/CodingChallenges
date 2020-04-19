// /**
//  * problem:
//  * father in law invited son in law for his home.
//  * but son in law put a condition saying when ever he comes to house. father in law should give him
//  * a gold coin valued that date.
//  * so father in law went to goldsmith and asked to make 1 to 31 coins.
//  * but brilliant goldsmith give only 5 coins that can make any date in the month.
//  * find what are the values of that gold coins.
//  */

var coinValues = [];
var currentValue = 1;
var maxValue = 31
var canGetThisNumber = (num) => {
    var p = Math.pow(2, coinValues.length);
    var twoPower,
      str = 0;
    for (i = 0; i < p; i++) {
      twoPower = p;
      for (j = 0; j < coinValues.length; j++) {
        twoPower = twoPower / 2;
        str += i & twoPower ? coinValues[j] : 0;
      }
      if(str == num) return true
      str = 0;
    }
    return false;
  }
  
while (currentValue <= maxValue) {
  var canGet = canGetThisNumber(currentValue);
  if (!canGet) {
    coinValues.push(currentValue);
  }
  currentValue += 1;
}
console.log(coinValues);



