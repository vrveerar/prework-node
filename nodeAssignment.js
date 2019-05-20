function loopyThing(params) {
  if (typeof params != "number") {
    console.log("Hey! That's not a number!");
  } else {
    if (params <= 10) {
      console.log("Hey! That's a small number!");
    } else {
      console.log("Hey! That's a large number!");
    }
  }
}

loopyThing(12);
console.log("===========================");
loopyThing(5);
console.log("===========================");
loopyThing("Testing this");
console.log("===========================");
loopyThing(-5);
