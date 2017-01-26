/**
 * Ex-01 : arrayToString()
 *
 * Write a function called `arrayToString` that takes
 *  an array of values and combines them into one large string.
 *
 * You must use a for-loop to solve this problem.
 **/


function arrayToString (arry){
  var newArry = ''
  for(i = 0; i < arry.length; i++){
    newArry = newArry + arry[i]
  }
  return newArry
}








//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var output1 = arrayToString(["Hello", "how", "are", "you"])

var coolArr = ['cool', 'great', 'nice', 'awesome', 'sweet']
var output2 = arrayToString(coolArr)

console.assert( output1 === "Hellohowareyou" )
console.assert( output2 === 'coolgreatniceawesomesweet' )