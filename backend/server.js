import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("My first Fullstack");
});

app.get("/api/jokes", (req, res) => {
  const joke = [
    {
      id: 1,
      title: "The Punny Programmer",
      joke: "Why did the programmer quit his job? Because he didn't get along with the conditions.  \n (groan)",
    },
    {
      id: 2,
      title: "The Lightbulb Joke",
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 3,
      title: "The Philosophical Pickle",
      joke: "A pickle walks into a bar and orders a drink. The bartender says, 'Sorry, we don't serve food here.'  \n The pickle replies, 'I wasn't aware I was food. I thought I was a customer!'",
    },
    {
      id: 4,
      title: "The Cyclist's Conundrum",

      joke: "What do you call a fish with no eyes? Fsh!",
    },
    {
      id: 5,
      title: "The Philosophical Dog",
      joke: "Why did the dog chase its tail? It wanted to see what was chasing it!",
    },
  ];
  res.send(joke);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
