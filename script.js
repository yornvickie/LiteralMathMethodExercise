let warmHugs = "Hi, I'm Olaf and I like warm hugs."
console.log(warmHugs.toUpperCase());

// console.log(warmHugs.replace("like", "love"));
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);

let beenImpaled = "Oh, look at that. I've been impaled.";
beenImpaled = beenImpaled.slice(18);
// console.log(beenImpaled.slice(16));
console.log(beenImpaled);

let dotDotDot = "...";
let skullBones = `I don't have a skull${dotDotDot}or bones.`;
console.log(skullBones);

console.log(Math.PI);

let randomNumber = Math.random(); // 0 through 0.999999
randomNumber *= 3; // 0 to 2.9999999
randomNumber = Math.floor(randomNumber); // gets rid of decimal
randomNumber++;
console.log(randomNumber);

// BONUS
console.log(" Let It Go!".toUpperCase().repeat(3).trim());

let reindeers = "Reindeers are better than people.";
console.log(reindeers.replace("Reindeers are better than people.", "Reindeers_are_better_than_people."));
console.log(reindeers.replace(/ /g, '_'));
console.log(reindeers.replaceAll(' ', '_'));

// let squareRoot = Math.sqrt(2);
// console.log(squareRoot);

console.log(Math.sqrt(2));

let newRandomNumber = Math.random();
newRandomNumber *=17;
newRandomNumber = math.floor(newRandomNumber);
newRandomNumber += 7;
console.log(newRandomNumber);


let newRandomNumber = Math.ceil((Math.random()*17)+6);
console.log(newRandomNumber);

let newRandomNumber = (Math.floor((Math.random()*16)+7));