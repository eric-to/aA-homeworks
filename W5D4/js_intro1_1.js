function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';  
    console.log(x);
  }
  console.log(x);
}

// console.log(mysteryScoping1());

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';  
    console.log(x);
  }
  console.log(x);
}

// console.log(mysteryScoping2());

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block';  
    console.log(x);
  }
  console.log(x);
}

// console.log(mysteryScoping3());

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';  
    console.log(x);
  }
  console.log(x);
}

// console.log(mysteryScoping4());

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';  
    console.log(x);
  }
  let x = 'out of block again';
  console.log(x);
}

// console.log(mysteryScoping5());


// madLib
// > madLib('make', 'best', 'guac');
//  "We shall MAKE the BEST GUAC."
function madLib(verb, adj, noun) {
  return "We shall " + verb.toUpperCase() + " the " + adj.toUpperCase() + " " + noun.toUpperCase() + ".";
}

// console.log(madLib("make", "best", "guac"))



// isSubString
function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}

// console.log(isSubstring("time to program", "time"));
// console.log(isSubstring("Jump for joy", "joys"));