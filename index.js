function shout(string) {
  string = string.toUpperCase()
  return string
}

function whisper(string) {
  string = string.toLowerCase()
  return string
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function sayHiToGrandma(string) {
  switch (true) {
    case string === "I love you, Grandma.":
      return "I love you, too."
      break;
    case string === string.toLowerCase():
      return "I can't hear you!"
      break;
    case string === string.toUpperCase():
    return "YES INDEED!"

  }
}
