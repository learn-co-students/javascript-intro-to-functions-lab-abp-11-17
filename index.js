function shout(word){
  return word.toUpperCase()
}

function whisper(word){
  return word.toLowerCase()
}

function logShout(word){
  console.log(word.toUpperCase())
}

function logWhisper(word){
  console.log(word.toLowerCase())
}

function sayHiToGrandma(phrase){
  if (phrase.toUpperCase() === phrase){
    return "YES INDEED!"
  } else if ("I love you, Grandma." === phrase){
    return "I love you, too."
  } else {
    return "I can't hear you!"
  }
}
