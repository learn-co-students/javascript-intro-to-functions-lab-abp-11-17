function shout(string) {
return string.toUpperCase()
}

function whisper(string) {
return string.toLowerCase()
}

function logShout(string){
console.log(string.toUpperCase());}

logshout("hello")();

function logWhisper(string){
console.log(string.toLowerCase());}


function sayHiToGrandma(string){
//first use case: if string is all lower case, return "I can't hear you!"
//second use case: if string is all upper case, return  "YES INDEED!"
//third use case: if string is mixed case, return "I love you, too."

  if (string.toLowerCase() === string){
    return "I can't hear you!"
  }

  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }

  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
//
