// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza)); // "Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage("Ultracheese", deliverPizza)); // "Delivering Ultracheese pizza."

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }
// registerGuest("Mango", function greet(name) {
//   console.log(`Welcome ${name}!`);
// });

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {console.log(`Eating pizza ${pizzaName}`);
  
// });

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// };

// numbers.forEach(logMessage);

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) =>
//     totalPrice += item);
//   return totalPrice;
// };

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

// function changeEven(numbers, value) {
//   const newNumbers = [];
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//      newNumbers.push(number + value);
//           } else {
//       newNumbers.push(number);
//     }
//   });
//     return newNumbers;
// }


//   const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map(book => book.title);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap(book => book.genres);

// const getUserEmails = (users) => users.map(user => user.email);

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 === 1);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter(book => book.rating > MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);


// const getUsersWithEyeColor = (users, color) =>
//   users.filter(user => user.eyeColor === color);

// const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age >= minAge && user.age <= maxAge);


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// const getUserWithEmail = (users, email) => users.find((user) => user.email === email);

// const total = [2, 7, 3].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 12

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((previousValue, value, players) => {
//   return previousValue + value;
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;


// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed;
// }, 0);

// const calculateTotalBalance = (users) => users.reduce((total, user) => {
//   return total + user.balance;
// }, 0);

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// const inAlphabetOrder = students.toSorted();
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books.filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).toSorted((a, b) => a.localeCompare(b));
