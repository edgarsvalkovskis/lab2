let username = prompt("What is your name?");
alert("Hello, " + username);
// while the answer isn't yes or no
// ask again

//Game

alert("Quiz Time!");

//answer
let answer = prompt("Do I like Coding?");
while (answer.toUpperCase() !== "YES" && answer.toUpperCase() !== "NO") {
  answer = prompt("Do I like coding?");
}

if (answer.toUpperCase() === "YES") {
  alert("Hell Yes!!");
} else if (answer.toUpperCase() === "NO") {
  alert("We are Not Friends!");
}

//answer 2
let answer2 = prompt("Do I drink milk?");
while (answer2.toUpperCase() !== "NO" && answer2.toUpperCase() !== "YES") {
  answer = prompt("Do I drink milk?");
}

if (answer2.toUpperCase() === "NO") {
  alert("Hell No!!");
} else if (answer2.toUpperCase() === "NO") {
  alert("We are not friends!");
}

//answer 3
let answer3 = prompt("Do I play horror games?");
while (answer3.toUpperCase() !== "YES" && answer3.toUpperCase() !== "NO") {
  answer3 = prompt("Do I play horror games?");
}

if (answer3.toUpperCase() === "YES") {
  alert("Hell Yes!!");
} else if (answer3.toUpperCase() === "NO") {
  alert("We are not friends!");
}

//asnwer 4
let answer4 = prompt("Am I an Musician?");
while (answer4.toUpperCase() !== "YES" && answer4.toUpperCase() !== "NO") {
  answer4 = prompt("Do I play Horror Games?");
}
if (answer4 === "Yes") {
  alert("Hell Yes!!");
} else if (answer4.toUpperCase() === "NO") {
  alert("We are not friends!");
}

//answer 5
let answer5 = prompt("Do I dance?");
while (answer5.toUpperCase() !== "NO" && answer5.toUpperCase() !== "YES")
  if (answer5 === "No") {
    alert("Hell No!!");
  } else if (answer5.toUpperCase() === "YES") {
    alert("You don't know me at all!");
  }
