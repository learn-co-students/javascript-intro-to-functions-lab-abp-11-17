function shout(word) {
  return word.toUpperCase();
}

shout('hello');

function whisper(word) {
  return word.toLowerCase();
}

whisper('hello');

function logShout(word){
  console.log(word.toUpperCase());
}

function logWhisper(word){
  console.log(word.toLowerCase());
}

function sayHiToGrandma(string){
  if (string === string.toLowerCase()){
    return 'I can\'t hear you!';
  } else if (string === string.toUpperCase()){
    return 'YES INDEED!'
  } else if (string === 'I love you, Grandma.'){
    return 'I love you, too.'
  }
}
