function shout(quiet) {
  return quiet.toUpperCase();
}

function whisper(loud) {
  return loud.toLowerCase();
}

function logShout(quiet) {
  console.log(shout(quiet));
}

function logWhisper(loud) {
  console.log(whisper(loud));
}

function sayHiToGrandma(greeting) {
  if (greeting === "I love you, Grandma.") {
    return "I love you, too.";
  }
  if (greeting === whisper(greeting)) {
    return "I can't hear you!";
  }
  else if (greeting === shout(greeting)) {
    return "YES INDEED!";
  }
}
