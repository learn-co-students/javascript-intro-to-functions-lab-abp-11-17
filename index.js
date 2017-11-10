function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(shout(string));
  return string;
}

function logWhisper(string){
  console.log(whisper(string));
  return string;
}

function sayHiToGrandma(string){
  switch(true){
    case string === string.toLowerCase():
      return "I can't hear you!";
    case string === string.toUpperCase():
      return "YES INDEED!";
    case string === "I love you, Grandma.":
      return "I love you, too.";
    default:
      return console.log("You were ignored. The silent treatment. Or she seriously didn't notice you...");
  }
}
