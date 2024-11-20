// To `label` JavaScript statements/code-block, we should prefix the statements/code-block with a `label name` and a `colon(:)`
// list: { /* statements */ }, here `list` is the label name and the colon(:) added with the label name

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";

list: {
  text += cars[0] + "\n"; 
  text += cars[1] + "\n"; 
  break list; // break/jump out from this(list) code block
  text += cars[2] + "/n"; 
  text += cars[3] + "/n"; 
}

console.log( text ); // "BMW", "Volvo"
