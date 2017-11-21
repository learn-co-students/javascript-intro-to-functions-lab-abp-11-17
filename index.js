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
    case string === whisper(string):                    //used === string.toLowerCase() originally. this is better
      return "I can't hear you!";
    case string === shout(string):                      // same as above
      return "YES INDEED!";
    case string === "I love you, Grandma.":
      return "I love you, too.";
    default:
      return "You were ignored. The silent treatment. Or she seriously didn't notice you...";
  }
}
