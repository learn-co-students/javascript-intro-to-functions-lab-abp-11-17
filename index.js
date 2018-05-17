function shout(sString){
  return (sString.toUpperCase());
}

function whisper(sString){
  return (sString.toLowerCase());
}

function logShout(sString){
  return (console.log(sString.toUpperCase()));
}

function logWhisper(sString){
  return (console.log(sString.toLowerCase()));
}

function sayHiToGrandma(sString){
  if (sString === sString.toLowerCase()) {
    return("I can't hear you!");
  }else if (sString === "I love you, Grandma.") {
    return ("I love you, too.")
  }else if (sString === sString.toUpperCase()) {
    return ("YES INDEED!");
  } else if (sString === undefined) {
    return("I can\'t hear you!");
  }
}
