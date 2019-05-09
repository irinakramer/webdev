
// Setup Express - server framwork
// Setup path - libray for getting correct file locations

const express = require("express");
const path = require("path");

// Arrays for storing text data
const complements = [
    "You like nice today",
    "That dress looks nice on you",
    "Have you been working out?",
    "You can do hard things",
    "You've gotten far in this course. You're really smart",
    "You're programming! How cool is that?",
    "I'm really proud of you",
    "You made this",
    "You've learned a lot of things, and that's pretty hard to do"
];

const insults = [
    "Hey, you’re on time!",
    "Your new hairstyle makes you look so much younger!",
    "I don't believe in plastic surgery, but in your case, go ahead",
    "You look great for your age!",
    "Zombies eat brains. You're safe.",
    "Hey! You scobberlotcher! Thy vile canker-blossom'd countenance curdles milk and sours beer!",
    "You look so pretty with makeup on!",
    "You’re a really good driver… for a woman!",
    "You’re so pretty, how are you still single?",
    "Wow, you’ve lost so much weight, you’re not fat anymore!"
  ];

// Return ramdon item from the array
function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
}
function getRandomInsult() {
    const randomIndex = Math.floor(Math.random() * insults.length);
    return insults[randomIndex];
  }

const app = express();

// send user to index.html
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// respond to request with JSON object with one key - the complement returned by that function
app.get("/complement", function(req, res) {
  res
    .json({
      complement: getRandomComplement()
    })
    .end();
});

app.get("/insult", function(req, res) {
    res
      .json({
        insult: getRandomInsult()
      })
      .end();
  });

// serves everything in the public directory publicly
app.use("/public", express.static("./public"));

// base home url
app.listen(3000);
console.log("listening on http://localhost:3000");