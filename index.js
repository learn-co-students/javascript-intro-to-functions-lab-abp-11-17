function shout(string) {
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log('HELLO')
}
function logWhisper(string){
  console.log('hello')
}
function sayHiToGrandma(string){
  var lowercase = "hello!"
  lowercase.toLowerCase() === lowercase
  return 'I can\'t hear you!'
}
function sayHiToGrandma(string){
  var uppercase = "HELLO!"
  uppercase.toUpperCase() === uppercase
  return 'YES INDEED!'
}

function sayHiToGrandma(string) {
  var mixedCase = 'I love you, Grandma.'
  mixedCase.toLowerCase() === mixedCase // false
  mixedCase.toUpperCase() === mixedCase // false
  return 'I love you, too.'
}
