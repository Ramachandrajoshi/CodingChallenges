 /**
  * problem:
  * find the sum of which X numbers from array results XX.
  * ex: find the sum of which 3 numbers is equal to 90
  */


var inp = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58];

var whichCombinationNumbers = (ip,combination,num) => {
  var p = Math.pow(2, ip.length);
  var twoPower,
    str = "";
  for (i = 0; i < p; i++) {
    twoPower = p;
    for (j = 0; j < ip.length; j++) {
      twoPower = twoPower / 2;
      str += i & twoPower ? ip[j] + "," : "";
    }

    var values = str.split(",");
    values.pop();
    if (values.length == combination) {
      var sum = values.reduce((prev, cur) => prev + Number.parseInt(cur), 0);
      if (sum == num) return values.join(",")+" numbers sum will yeld "+num;
    }
    str = ""
  }
  return "no "+combination+" numbers sum will yeld "+num;
};



console.log(whichCombinationNumbers(inp,3,90));
