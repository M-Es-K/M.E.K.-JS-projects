'use strict';
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
*/
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
/*
//Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
console.log(entries);

//[key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/
/*
//////////////////////////////////////////////////////
// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

//FOR OF loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
//for of olayinda ilk olusturdugumuz menu array'indeki elemanlari tek tek yazdirmak
//icin FOR OF olayini kullaniyoruz. 'item' kelimesi yerine herhangi bir kelime yazabiliriz.

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// Usttekiyle ayni kod daha guzel hali
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);
/*
const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: ' La Piazza',
  owner: ' Giovanni Rossi',
};
*/
/*
// OR assignment operator
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;
//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

//nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//rest1.owner = rest1.owner && '<ANONYMOUS>';
//rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

/*
////////////////////////////
// The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish : null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

/*
////////////////////////////
// short circuiting(&& and ||)

console.log('---- OR -----');
//Use ANY data type, return ANY data type,short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND -----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');
/*
///////////////////////////////
// REst pattern and parameters
//1) Destructuring

//SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REst, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

//Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions

/*const add = function (...numbers) {
  console.log(numbers);
};
add(2, 3);
add(5, 3, 7, 2);
*/
/*
//unpacking rest element
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);

//packing rest element
const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'spinach', 'olives');
restaurant.orderPizza('mushrooms');
/*
//The Spread operator(...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy arrays
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterable(tekrarlanabilir) :arrays ,strings, maps, sets.NOT objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);

//Alttaki iki satir ayni seyi anlatiyor ama ,ikinci satirdaki hata veriyor, o yuzden
//kullanamayiz.
console.log(...str);
//console.log(`${...str} Schmedtmann`);

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//DEfaoult values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const abj = { a: 23, b: 7, c: 14 };
({ a, b } = abj);
console.log(a, b);

//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
/*
//destructuring arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//ilk secenek
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

/*
//Switching variables
//Diyelim ki restoran sahibi listedekilerin yerini degistirmek istedi.
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
*/
/*
//Bu da usttekinin kisayolu;
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested destructuring
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//ust satirda cevap>> 2, [5,6]
const [i, , [j, k]] = nested;
console.log(i, j, k);
//Ustteki satirda icerideki parantezi kirmis olduk. cevap>> 2 5 6

//Default values
const [p, q, r] = [8, 9];
console.log(p, q, r);
*/
/*
//Real world examples
const ingredients = [
  //prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  //prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

//Challenge
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/
/*
// 1)
const [players1, players2] = game.players;
console.log(players1, players2);

// 2)

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3)

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4)

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5)
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6)
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
//printGoals(...game.scored);

// 7)
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');
*/
/*
////////////////////////////////////////
// Coding Challenge #2
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Challenge 2
// 1 )
//MY ANSWER
const gamesco = game.scored;
gamesco.forEach((item, index) => {
  console.log(`"Goal ${index + 1}: ${item}"`);
});

//Johannas in cevabi
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

//2)
//MY answer
const res = Object.values(game.odds);
console.log(res);

/*function average(a, b, c) {
  return (a + b + c) / 3;
}
console.log(average(keys[0], keys[1], keys[2]));
*/
/*
for (const i in res) {
  console.log((res[0] + res[1] + res[2]) / 3);
}

//Jonas Answer
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3)
//MY answer

console.log(`Odd of victory ${game.team1}:${res[0]}`);
console.log(`Odd of draw:${res[1]}`);
console.log(`Odd of victory ${game.team2}:${res[2]}`);

//JonasAnswer

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

//4)

//Benim Cevap
const scorers = {};

gamesco.forEach(item => {
  if (scorers[item]) {
    scorers[item] += 1;
  } else {
    scorers[item] = 1;
  }
});
console.log(scorers);

/*
//Jonas Answer
//So the solution is to loop over the array, and add the array elements as object properties,
// and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
*/
/*
//ALttaki iki .entries farkli seyler

//object.entries de, object'in icindeki elemanlari array olarak gosterir.
console.log(Object.entries(game.odds));

//game.scored.entries'de sunu demek istiyoruz >> game.scored.forEach((item, index) =>
console.log(game.scored.entries());

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = `victory ${game[team]}`;
  console.log(` ${teamStr}`);
}
*/
// Video 117 SETS and MAPS
/*
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
//REsult {'Pasta', 'Pizza', ' Risotto'}

console.log(new Set('Jonasa'));
//REsult {'j','a','n','a','s'}

console.log(ordersSet.size); //REsult 3
console.log(ordersSet.has('Pizza')); //True- False

console.log(ordersSet.has('Bread')); //True- False

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
//ordersSet.clear(); // Tum elamanlari siler.
console.log(ordersSet);

//Sets are iterable so we can use LOOP;

for (const order of ordersSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
//const staffUnique = new Set(staff); // Kumedeki elemanlar
const staffUnique = [...new Set(staff)]; //Array olusturma(kumedeki farkli eleman sayisi icin)

console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); //REsult 3

console.log(new Set('merveesmakenar').size); //REsult 8 >> 8 farkli harf var demek
*/

//Maps
//object ten daha kapsayici

/*
//Eski yontemel map olusturma
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

//Chain lemek, zincirlemek

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//Pek tercih edilmeyen Delete yontemi;
console.log(rest.has('categories'));
rest.delete(2);
//rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test'); // arr yerine [1,2] yazarsak 'test' elemaniyla ayni turden olmadigi icin sonucu undefined cikariyor

rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));
*/
/*
//Yeni model MAp olusturma

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScipt'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question);

//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
//getting Boolean value
console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log(question.keys()); // console.log([...question.keys()]);
console.log(question.values()); // console.log([...question.values()]);
*/
/*
//Challenge 3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1)

const events = [...new Set(gameEvents.values())];
console.log(events);

// 2)

gameEvents.delete(64);

// 3)

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//4 )
//Benim cevap
for (const [key, value] of gameEvents) {
  if (key <= 45) console.log(`[First Half]${key}:${value}`);
  else console.log(`[Second Half]${key}:${value}`);
}

//Jonas in cevap

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/
/*
//String le ilgili bilgiler


const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]); // dogrudan kelimeyi yzarak da yapabiliriz.

console.log(airline.length);
console.log('B737'.length); //kelimeyi yazarak da yapabiliriz.(const olusturmadan)

console.log(airline.indexOf('r')); //Ilk karsilastigi r harfini soyler
console.log(airline.lastIndexOf('r')); //SON r harfini soyler
console.log(airline.indexOf('Portugal')); //P harfinin konumunu veriyor
console.log(airline.indexOf('portugal')); // sonuc >> -1 :Kucuk p ile baslayan portugal olmadigi icin

console.log(airline.slice(4)); //ILk 4 u keser>> Air Portugal
console.log(airline.slice(4, 7)); //Burada cikan cevabin uzunlugunu ogrenmek istersek>>7-4=3;
//Ustteki durumda ilk 4 ve 7 arasindakileri sonuc olarak verir>> Air

console.log(airline.slice(0, airline.indexOf(' '))); //sifirdan ilk bosluga kadar sonuc verir>> TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //sonuncu bosluga kadar siler.
//Boslugu silmek istedigimiz icin +1 dedik. >>Portugal

console.log(airline.slice(-2)); //Sondan 2 ye kadar keser.>>al
console.log(airline.slice(1, -1)); // Ilk harf ve son harf silindi >>AP Air Portuga

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas')); //>>String{'jonas'}
console.log(typeof new String('jonas')); // Ustteki string'in aynisi fakat object olarak kaydedildi.
//>>object

console.log(typeof new String('jonas').slice(1)); //>>string
*/
/*
//Stringle ilgili ikinci kisim

const airline = 'TAP Air Portugal'; 
console.log(airline.toLowerCase()); //>>tap air portugal
console.log(airline.toUpperCase());//>>TAP AIR PORTUGAL

console.log('esma'.toUpperCase()); //>>ESMA

// Fix capitalization in name
const passenger = 'eSmA'; //Esma seklinde yazdirmak istiyoruz.
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing Email
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

//yanlisliklari duzeltme yontemi 1>>
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

//Yanlisliklari duzeltme yontemi 2>>
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

//ilkinde sadece ilk kelimeyi degistirir.
console.log(announcement.replace('door', 'gate'));

//Alttaki metotlarda tum gereken kelimeleri degistirir.
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate')); //kirmizi g= general

//Booleans

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air')); //>>TRUE //Air kelimesi baska bir kelimeyle birlesik olabilir.

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

//Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase(); //toLowerCase olayini yapmasaydik, sistem harf uyumsuzlugundan Knife i goremeyecekti.
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board ');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/
/*
//String part 3

//split ozelliginde split() icine yazdigin kisim ,cumleyi parcalayip, array olusturuyor.

console.log('a+very+nice+string'.split('+')); //Burda + lar belirleyici
console.log('Jonas Schmedtmann'.split(' ')); //Burda bosluk belirleyici

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
//join() sayesinde her kelimenin(arraydeki elemanlarin) arasina istedigimiz bir simge/sayi/harf ekleyebiliyoruz.

console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1)); //namesUpper.push()= push parantezindekileri namesUpper a yazdir.
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); //Ust satirdakiyle ayni cevabi veriyor.
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding

const message = 'Go to gate 23!';
console.log(message.padStart(30, '+').padEnd(34, '+')); //>>++++++++++++++++Go to gate 23!++++
console.log('esma'.padStart(30, '+'));
// padStart(sayi,'sembol')=>> sayi(satirimizin uzunlugu), sembol(satir uzunluguna ulasmak icin elimizdeki cumlenin basina eklenecek eleman)

//padding exampe: kredi kartinin,kimlik bilgilerinin hepsi ekranda gozukmez.
//o zman kullanabiliriz.

const maskCreditCard = function (number) {
  const str = number + ''; //converting a number to a string: burada ki numara kimlik numarasi falan yani islem yapmayacagiz.
  //string yapmak icin string() de kullanabiliriz ama ustteki daha profesyonel.
  const last = str.slice(-4); //numaranin son 4 hanesini gorecegiz
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(3986561661616516));
console.log(maskCreditCard('5454545454564545115'));

//Repeat
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'Plane'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
*/

//Challenge 4
/*



document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//Ustteki bilgide + isaretleri ayirici olarak kullanilmis.
// ; isareti de her satirin icindeki kucuk bilgileri ayirmak icin.

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '.' : ''}${type
    .replaceAll('_', ' ')
    .trim()} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(42); //padstart icin bosluk kullanacagimiz icin belirtmemize gerek yok.
  console.log(output);
}
