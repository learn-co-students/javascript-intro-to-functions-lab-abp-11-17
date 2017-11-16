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

function sayHiToGrandma(hi){
  if(hi.toLowerCase() == hi){
    return "I can't hear you!"
  }else if(hi.toUpperCase() == hi){
    return "YES INDEED!"
  }else{
    return "I love you, too."
  }
}
