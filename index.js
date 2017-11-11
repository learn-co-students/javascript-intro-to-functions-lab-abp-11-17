function shout(string) {
return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log (string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
  let hello;
  if (string.toLowerCase===string) {
    hello="I cant hear you!";
       }
  else { if (string.toUpperCase===string){
          hello= "YES INDEED!"
        }}
  else { if (string==="I love you, Grandma."){
             hello="I love you, too.";
  }}
    return hello
}
