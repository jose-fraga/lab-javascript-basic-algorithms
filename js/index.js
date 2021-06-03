// Iteration 1: Names and Input

let hacker1 = 'Niko';
console.log("The driver's name is " + hacker1);
let hacker2 = 'Jose';
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
  } else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " +  hacker2.length + " characters.")
  } else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
  }

// Iteration 3: Loops

// 1st Loop
for (let i = 0; i < 1; i++) {
  let hacker = hacker1.toUpperCase();
  console.log( hacker.split('').join(' ') );
}

// 2nd Loop
let newString = ''; 

for (let i = hacker2.length; i > 0; i--) {
  newString += hacker2[i - 1]; 
}

console.log(newString);

// 3rd loop
for (let i = 0; i < 1; i++) {
  let names = [hacker1, hacker2];
  let orderedNames = names.sort();

  if (hacker2 === hacker1) {
    console.log("What?! You both have the same name?")
  } else if (orderedNames[0] === hacker1) {
    console.log("The driver's name goes first.");
  } else {
    console.log("Yo, the navigator goes first definitely.");
  } 
}

// Bonus 1

let p1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum risus ac mi sodales sagittis. Fusce interdum nisl sit amet imperdiet consectetur. Pellentesque bibendum urna ac posuere vestibulum. Morbi quis tortor faucibus, ultricies lectus quis, tempus neque. Integer commodo posuere leo vitae cursus. Nullam lacinia sit amet purus rutrum interdum. Nulla imperdiet ornare consequat. Fusce id nisl fermentum, tincidunt ante eu, ullamcorper mi. Sed a libero vestibulum, mattis dui blandit, gravida sapien. Integer sed bibendum leo. Duis gravida scelerisque volutpat. Vestibulum a lacus pharetra, iaculis nibh eget, et vehicula elit. Maecenas accumsan, ligula quis ornare iaculis, turpis lacus sodales tortor, at consectetur eros orci vel purus. Donec euismod augue vitae justo semper, et vulputate lacus dictum. Mauris eu diam ac sem tristique molestie.";

let p2 = "Morbi posuere imperdiet enim, sit amet ultrices nisl euismod ac. Donec consequat, nulla accumsan pulvinar sodales, erat ex ornare leo, non gravida libero orci sagittis magna. Maecenas diam quam, bibendum nec blandit ut, dictum eu ligula. Morbi a ultricies erat, quis facilisis magna. Praesent at dapibus tortor. Integer rhoncus lectus id neque laoreet eleifend. Maecenas elementum velit nulla, vitae posuere dui posuere sit amet.";

let p3 = "Nulla id nulla mi. Praesent maximus ligula velit, maximus condimentum lorem rhoncus sit amet. Morbi nec aliquam turpis. Phasellus a lacus dui. Nulla rutrum suscipit pretium. Vivamus id enim turpis. Nullam et purus consequat, imperdiet diam eget, mattis orci. Ut imperdiet quam id purus placerat efficitur. Aliquam congue ultricies turpis, volutpat aliquet mi hendrerit non. Vivamus non diam diam. Aliquam fermentum justo sit amet tellus placerat cursus. Suspendisse ipsum justo, vestibulum et scelerisque sed, tincidunt at ligula. Fusce ac magna et libero volutpat vestibulum blandit eget massa.";

function wordCount(paragraph) {
  let wordCounter = 1;
  let etCounter = 0;
  for (let i = 0; i < paragraph.length; i++) {
    if (paragraph.charAt(i) === " ") {
      wordCounter++;
      if (paragraph.charAt(i + 1) === "e" && paragraph.charAt(i + 2) === "t" && paragraph.charAt(i + 3) === " ") {
          etCounter++;
        }
      }
    }
  console.log(wordCounter);
  console.log(etCounter);
}
wordCount(p1);

// Bonus 2

let phraseToCheck = "Amor, Roma";
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let stringTest = '';
let stringTestBackwards = '';

function checkPhrase(phrase) {
  phrase = phrase.toLowerCase();
  for (let i = 0; i < phrase.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {

      if (phrase[i] === alphabet[j]) {
        stringTest += phrase[i];
      }
    }
  }
  for (let i = stringTest.length; i > 0; i-- ) {
    stringTestBackwards += stringTest[i - 1];
  };

  if (stringTest === stringTestBackwards) {
    console.log('The phrase is Palindrome');
    return;
  }
  console.log('The phrase is not Palindrome');
  return;
}

checkPhrase(phraseToCheck);