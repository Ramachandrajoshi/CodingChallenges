// this answer is taken from this stackoverflow question. fixed output issue after 100.
//https://stackoverflow.com/questions/15998005/ordinals-in-words-javascript


var nth = function (i) {
  var n = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  var s = [
    "zeroth",
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
    "eleventh",
    "twelfth",
    "thirteenth",
    "fourteenth",
    "fifteenth",
    "sixteenth",
    "seventeenth",
    "eighteenth",
    "nineteenth",
  ];
  var p = [
    "twent",
    "thirt",
    "fourt",
    "fift",
    "sixt",
    "sevent",
    "eight",
    "ninet",
  ];
  var c = [
    "hundred",
    "thousand",
    "million",
    "billion",
    "trillion",
    "quadrillion",
    "quintillion",
  ];
  var b = Math.floor(Math.log10(i));
  if (i < 20) return s[i]; // Special case for sub-20
  if (b == 1) {
    // Between 21 and 99
    if (i % 10 === 0) return p[Math.floor(i / 10) - 2] + "ieth"; // On the tens, return p+"ieth"
    return p[Math.floor(i / 10) - 2] + "y-" + s[i % 10]; // Otherwise, return hyphenated
  }
  if (b == 2) {
    // Between 100 and 999
    var e = Math.floor(i / Math.pow(10, b)); // The first number
    var j = i - e * Math.pow(10, b);
    return n[e - 1] + "-" + c[0] + (j > 0 ? " " + nth(j) : "th")
  }
  // Greater than 1000 we break into groups of 10^3 followed by a multiplier
  var m = (b % 3) + 1; // Take the first m digits off
  var cm = Math.floor(b / 3);
  var x = Math.floor(i / Math.pow(10, b - m + 1));
  var numberToString = function (y) {
    // Converts a number less than 1000 to its string representation as a multiplier
    if (y < 20) return n[y - 1];
    if (y < 100) return p[Math.floor(y / 10) - 2] + "y-" + n[(y % 10) - 1];
    return (
      n[Math.floor(y / 100) - 1] +
      " " +
      c[0] +
      " " +
      numberToString(y - Math.floor(y / 100) * 100)
    );
  };
  var j = i - x * Math.pow(10, b - m + 1);
  return numberToString(x) + " " + c[cm] + (j > 0 ? " " + nth(j) : "th");
};

for (var i = 0; i < 1000; i += 1) console.log(nth(i));
