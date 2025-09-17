// create object: friends and snacks
const friendsList = [
  { name: "გიო", age: 22, hasTicket: true },
  { name: "უჩა", age: 17, hasTicket: true },
  { name: "რეზი", age: 25, hasTicket: false },
  { name: "ნიკა", age: 30, hasTicket: true }
];

const snacksOne = ["cake", "fanta"];
const snacksTwo = ["chips", "candy"];

// Filter: only friends 18+ with a ticket
const allowedFriends = friendsList.filter(friend => friend.age >= 18 && friend.hasTicket);
console.log("Filtered friends (18+ & ticket):", allowedFriends);


// extract names of allowed friends
const allowedNames = allowedFriends.map(friend => friend.name);
console.log("Names of allowed friends:", allowedNames);

// count allowed friends
const allowedCount = allowedNames.reduce((count, _) => count + 1, 0);
console.log("Number of allowed friends:", allowedCount);

// combine snack arrays
const allSnacks = snacksOne.concat(snacksTwo);
console.log("Combined snacks:", allSnacks);

// output (Boolean logic)
if (allowedCount === 0) {
  console.log("Movie night is canceled");
} else {
  console.log(`We have ${allowedCount} friends coming: [${allowedNames.join(", ")}]`);
  console.log(`Snacks: [${allSnacks.join(", ")}]`);
}