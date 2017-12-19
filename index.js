function shout (shoutIt){
  return shoutIt.toUpperCase()
}
function whisper(whisperIt){
  return whisperIt.toLowerCase()
}
function logShout (shoutIt) {
  console.log(shoutIt.toUpperCase());
}
function logWhisper (whisperIt) {
  console.log(whisperIt.toLowerCase());
}
function sayHiToGrandma(talk){
var said = talk ;
var answer = {
  toWhisper:  "I can't hear you!" ,
  toShout:    "YES INDEED!",
  toLove:     "I love you, too."
  }
if (said === talk.toUpperCase()){
  return answer.toShout
  }
else if (talk === "I love you, Grandma.") {
  return answer.toLove
  }

else {
  return answer.toWhisper
  }
}
