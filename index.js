function shout (string) {
  return string.toLocaleUpperCase();
}

function whisper (string) {
  return string.toLocaleLowerCase();
}

function logShout (string) {
  return console.log(shout(string));
}

function logWhisper (string) {
  return console.log( whisper(string) );
}

function sayHiToGrandma (string) {
  const whisperString = whisper(string);
  const shoutString = shout(string);

  switch (true) {
    case whisperString === string:
      return "I can't hear you!";
    case shoutString === string:
      return "YES INDEED!";
    case string === "I love you, Grandma.":
      return "I love you, too.";
  }
}
