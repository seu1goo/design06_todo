const quotes = [
  {
    quote:
      "When you go through hardships and decide not to surrender, that is strength.",
    author: "Arnold Schwarzenegger",
  },
  {
    quote: "It is kind of fun to do the impossible",
    author: "Walt Disney",
  },
  {
    quote: "There are better starters than me but I’m a strong finisher.",
    author: "Usain Bolt",
  },
  {
    quote: "Tough times never last, but tough people do.",
    author: "Robert H. Schuller",
  },
  {
    quote:
      "I’ve failed over and over and over again in my life and that is why I succeed.",
    author: "Michael Jordan",
  },
  {
    quote:
      "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
    author: "Angelina Jolie",
  },
  {
    quote:
      "But I know, somehow, that only when it is dark enough can you see the stars.",
    author: "Martin Luther King, Jr",
  },
  {
    quote: "Grind Hard, Shine Hard.",
    author: "Dwayne Johnson",
  },
  {
    quote:
      "I didn’t get there by wishing for it or hoping for it, but by working for it.",
    author: "Estée Lauder",
  },
  {
    quote: "You cannot change what you are, only what you do.",
    author: "Philip Pullman",
  },
  {
    quote: "Lay a firm foundation with the bricks that others throw at you.",
    author: "David Brinkley",
  },
  {
    quote:
      "Who contrils the past controls the future. Who controls the present controls the past.",
    author: "George Orwell",
  },
  {
    quote:
      "One man who has a mind and knows it acn always beat ten men who haven't and don't.",
    author: "George Bernard Shaw",
  },
  {
    quote: "A friend in power is a friend lost.",
    author: "Henry Adams",
  },
  {
    quote:
      "Time is a great teacher, but unfortunately it kills all its pupils.",
    author: "Hector Berlioz",
  },
  {
    quote:
      "Although the world is full of suffering, it is full also of the overcoming of it.",
    author: "Helen Keller",
  },
  {
    quote:
      "Liberty without learning is always in peril and learning without liberty is always in vain.",
    author: "John F. Kennedy",
  },
  {
    quote: "Nothing is more despicable than respect based on fear.",
    author: "Albert Camus",
  },
  {
    quote:
      "A great obstacle to happiness is to anticipate too great a happiness.",
    author: "Fontenelle",
  },
  {
    quote: "He makes no friend who never made a foe.",
    author: "Alfred, Lord Tennyson",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
