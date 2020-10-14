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
  // Only change code below this line
  const validIntegers = arr.filter((val) => val % 1 === 0 && val >= 0);
  return validIntegers.map((val) => Math.pow(val, 2));
  // Only change code above this line
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);
