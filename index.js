function shout(string1){
  return string1.toUpperCase();
}
function whisper(string1){
  return string1.toLowerCase();
}
function logShout(string1){
  console.log(string1.toUpperCase());
}
function logWhisper(string1){
  console.log(string1.toLowerCase());
}
function sayHiToGrandma(string){
  if(string.toLowerCase() == string){
    return "I can't hear you!";
  } else if(string.toUpperCase()== string){
    return "YES INDEED!";
  } else if(string=="I love you, Grandma."){
    var result='I love you, too.';
    return result;
  }
}
