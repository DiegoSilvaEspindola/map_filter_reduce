const list = [
  { race: "dog", age: 3, name: "Top" },
  { race: "cat", age: 7, name: "missy" },
  { race: "dog", age: 5, name: "brutus" },
  { race: "cat", age: 11, name: "milion" },
  { race: "dog", age: 3, name: "pipoca" },
];
console.table(list);
const humanAge = list.map((item) => item.age * 7);
console.log(humanAge);

console.log("_______________________");

const raceCat = list.filter((item) => item.race === "cat");
console.log(raceCat);

console.log("_______________________");
// console.log(["dw", "frfr", "oi", "by"].includes("vcdv"));

const lancamentos = [
  { country: "Russia", launch: 33 },
  { country: "EUA", launch: 35 },
  { country: "Japan", launch: 47 },
];

let totalLaunch = lancamentos.reduce(
  (ultimo, atual) => ultimo + atual.launch,
  0
);
console.log(totalLaunch);
