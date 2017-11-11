function shout(word){
  return word.toUpperCase();
}

function whisper(word){
  return word.toLowerCase()
}

function logShout(word){
  console.log(word.toUpperCase());
}

function logWhisper(word){
  console.log(word.toLowerCase());
}

function sayHiToGrandma(word){
  var lowercase = word.toLowerCase();
  var uppercase = word.toUpperCase();
  var mixedCase = word;
  if (word === lowercase){
    return "I can't hear you!"
  } else if (word === uppercase) {
    return "YES INDEED!"
  } else {
    return "I love you, too."
  }

}
