import { users, watchList } from "./data.js";
const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});

function getRating(watchList) {
  // Only change code below this line
  const moviesDirectedByChristopherNolan = watchList.filter(
    (movie) => movie.Director === "Christopher Nolan"
  ).length;
  var averageRating =
    watchList.reduce(
      (sum, movie) =>
        movie.Director === "Christopher Nolan"
          ? sum + Number(movie.imdbRating)
          : sum,
      0
    ) / moviesDirectedByChristopherNolan;
  // Only change code above this line
  return averageRating;
}

const squareList = (arr) => {
  const validIntegers = arr.filter((val) => val % 1 === 0 && val >= 0);
  return validIntegers.map((val) => Math.pow(val, 2));
};

function sentensify(str) {
  const splittedString = str.split(/\W/gi);
  return splittedString.join(" ");
}

function urlSlug(title) {
  const url = title
    .split(/\W/gi)
    .filter((word) => word.length)
    .map((word) => word.toLowerCase())
    .reduce(
      (text, word, index, arr) =>
        text + `${word}${index !== arr.length - 1 ? "-" : ""}`,
      ""
    );
  return url;
}

function add(x) {
  return (y) => (z) => x + y + z;
}

//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13

Object.prototype[Symbol.iterator] = function* () {
  const keys = Object.keys(this);
  for (const key of keys) {
    yield this[key];
  }
};

function whatIsInAName(collection, source) {
  const FILTERED_OBJECTS = collection.filter((obj) => {
    const objKeys = Object.keys(obj),
      sourceKeys = Object.keys(source);
    if (objKeys.length === sourceKeys.length) {
      return objKeys.every((key) => obj[key] === source[key]);
    } else {
      return (
        objKeys.some((key) => obj[key] === source[key]) &&
        objKeys.length >= sourceKeys.length
      );
    }
  });
  return FILTERED_OBJECTS;
}
