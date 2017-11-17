function sayHiToGrandma(string) {
  var lowercase = 'hello!'
  if(lowercase.toLowerCase() === lowercase) {
    return "I can\'t hear you!";
  }
}
sayHiToGrandma('HELLO');

function sayHiToGrandma() {
var mixedCase = 'Hi there!'

//mixedCase.toLowerCase() === mixedCase // false
//var uppercase = "HELLO!"
  if (mixedCase.toUpperCase() === mixedCase) {
    return "I can\t hear you";
  }
}
sayHiToGrandma('HELLO');

function shout(string) {
  return string.toUpperCase()
}
shout('hello');

function whisper(string) {
  return string.toLowerCase();
}
whisper('HELLO');

function logShout(string) {
  console.log(string.toLowerCase());
}
logShout('HELLO');
