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

const myCustomObject = {
  one: 1,
  two: 2,
  greeting: "Hello world",
  add: (x, y) => {
    console.log(`Answer is: ${x + y}`);
    return x + y;
  },
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

function spinalCase(str) {
  const regExps = [
    {
      regexp: /([A-Z])/g,
      replacer: (v) => ` ${v}`,
    },
    {
      regexp: /(_)/g,
      replacer: "",
    },
    {
      regexp: /\W/g,
      replacer: " ",
    },
  ];
  let string = str;
  for (const item of regExps) {
    string = string.replace(item.regexp, item.replacer);
  }
  const url = string
    .split(" ")
    .filter((word) => word.length)
    .map((word) => word.toLowerCase())
    .join("-");
  return url;
}

function translatePigLatin(str) {
  const vowelsRegexp = /^[aeiou]/;
  if (vowelsRegexp.test(str)) {
    return `${str}way`;
  } else {
    const string = str.split("");
    const firsVowelIndex = string.indexOf(
      string.find((l) => vowelsRegexp.test(l))
    );
    const end = string.filter((_, i) => i >= 0 && i < firsVowelIndex).join("");
    return string.join("").replace(end, "") + end + "ay";
  }
}

function myReplace(str, before, after) {
  const startsWithUppercase = /^[A-Z]/.test(before);
  const wordAfter = after.split("");
  // Preserve the case of before
  if (startsWithUppercase) {
    wordAfter[0] = after[0].toUpperCase();
  } else {
    wordAfter[0] = after[0].toLowerCase();
  }
  return str.replace(before, wordAfter.join(""));
}

function pairElement(str) {
  const AT = ["A", "T"];
  const CG = ["C", "G"];
  const basePairs = str.split("").map((letter) => {
    const pair = [letter];
    if (AT.some((l) => l === letter)) {
      pair.push(AT.find((l) => l !== letter));
    } else {
      pair.push(CG.find((l) => l !== letter));
    }
    return pair;
  });
  return basePairs;
}

function fearNotLetter(str) {
  const abecedary = "abcdefghijklmnopqrstuvwxyz".split("");
  const firstLetterIndex = abecedary.indexOf(str[0]),
    lastLetterIndex = abecedary.indexOf(str[str.length - 1]);
  const range = abecedary.filter(
    (_, i) => i >= firstLetterIndex && i <= lastLetterIndex
  );
  const missingLetter = range.find((l) => !str.includes(l));
  return missingLetter;
}

function uniteUnique(...arr) {
  const allArraysConcated = arr.reduce((all, arr) => all.concat(arr), []);
  return [...new Set(allArraysConcated)];
}

function convertHTML(str) {
  const entities = [
    {
      val: "<",
      entityName: "&lt;",
      entitiNumber: "&#60;",
    },
    {
      val: ">",
      entityName: "&gt;",
      entityNumber: "&#62;",
    },
    {
      val: "&",
      entityName: "&amp;",
      entityNumber: "&#38;",
    },
    {
      val: `"`,
      entityName: "&quot;",
      entityNumber: "&#34;",
    },
    {
      val: `'`,
      entityName: "&apos;",
      entityNumber: "&#39;",
    },
  ];
  const splittedString = str.split(" ");
  const parsedString = splittedString
    .map((word) => {
      return word
        .split("")
        .map((letter) => {
          const entity = entities.find((entity) => entity.val === letter);
          if (entity) {
            return entity.entityName;
          } else {
            return letter;
          }
        })
        .join("");
    })
    .join(" ");
  return parsedString;
}

function sumFibs(num) {
  const fibonacciNumbers = [1];
  for (let count = 0; count < num; count++) {
    const lastTwoNumbersSum =
      fibonacciNumbers[fibonacciNumbers.length - 1] +
        fibonacciNumbers[fibonacciNumbers.length - 2] || 1;
    fibonacciNumbers.push(lastTwoNumbersSum);
  }
  const oddNumbers = fibonacciNumbers.filter((n) => n % 2 !== 0 && n <= num);
  return oddNumbers.reduce((sum, val) => sum + val, 0);
}

function sumPrimes(num) {
  const primeNumbers = [];
  for (let count = 1; count <= num; count++) {
    let divsCount = 0;
    for (let n = 1; n <= count; n++) {
      if (count % n === 0) divsCount += 1;
    }
    if (divsCount === 2) primeNumbers.push(count);
  }
  return primeNumbers.reduce((sum, val) => sum + val, 0);
}

function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const range = [];
  for (let count = min; count <= max; count++) {
    range.push(count);
  }
  let smallestCommonMultiple = 1;
  do {
    smallestCommonMultiple += 1;
  } while (!range.every((number) => smallestCommonMultiple % number === 0));
  return smallestCommonMultiple;
}

function dropElements(arr, test) {
  const droppedElements = [];
  for (let count = 0; count < arr.length; count++) {
    const currentEl = arr[count];
    if (test(currentEl)) {
      break;
    } else {
      droppedElements.push(currentEl);
    }
  }
  const remainingElements = arr.filter(
    (_, indx) => indx >= droppedElements.length
  );
  return remainingElements;
}

function steamrollArray(arr) {
  if (arr.some((el) => Array.prototype.isPrototypeOf(el))) {
    return steamrollArray(arr.reduce((a, b) => a.concat(b), []));
  } else {
    return arr;
  }
}
function binaryAgent(str) {
  const splittedString = str.split(" ");
  const codes = splittedString.map((binary) => parseInt(binary, 2));
  return String.fromCodePoint(...codes);
}

function truthCheck(collection, pre) {
  return collection.every((obj) => obj.hasOwnProperty(pre) && !!obj[pre]);
}

function addTogether(a, b) {
  if (Number.isNaN(Number(a)) && Number.isNaN(Number(b))) {
    return void null;
  } else {
    if (typeof a === "number" && !b) {
      return (c) => (typeof c === "number" ? a + c : undefined);
    } else if (typeof b === "number") {
      return a + b;
    }
  }
}

const Person = function (firstAndLast) {
  const [firstName, lastName] = firstAndLast.split(" ");
  Object.defineProperties(this, {
    _firstName: {
      enumerable: false,
      writable: true,
      value: firstName,
    },
    _lastName: {
      enumerable: false,
      writable: true,
      value: lastName,
    },
    _fullName: {
      enumerable: false,
      writable: true,
      value: firstAndLast,
    },
  });
  this.getFullName = () => `${this._firstName} ${this._lastName}`;
  this.getFirstName = () => this._firstName;
  this.getLastName = () => this._lastName;
  this.setFirstName = (first) => (this._firstName = first);
  this.setLastName = (last) => (this._lastName = last);
  this.setFullName = (firstAndLast) => {
    const [firstName, lastName] = firstAndLast.split(" ");
    this._firstName = firstName;
    this._lastName = lastName;
  };
  return this;
};

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(function (el) {
    return {
      name: el.name,
      orbitalPeriod: Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(earthRadius + el.avgAlt, 3) / GM)
      ),
    };
  });
}

function palindrome(str) {
  const parsedWord = str
    .toLowerCase()
    .split("")
    .filter((letter) => /\w/.test(letter) && !/_/.test(letter));
  let inverseIndex = parsedWord.length;
  const isPalindrome = parsedWord.every((letter) => {
    inverseIndex -= 1;
    return letter === parsedWord[inverseIndex];
  });
  return isPalindrome;
}


