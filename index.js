function shout(word) {
  return word.toUpperCase();
}

function whisper(word) {
  return word.toLowerCase();
}

function logShout(word) {
  console.log(word.toUpperCase());
}

function logWhisper(string) {
  return console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) return "I can't hear you!";
  else if (string === 'I love you, Grandma.') return 'I love you, too.';
  else if (string === string.toUpperCase()) return 'YES INDEED!';
}
