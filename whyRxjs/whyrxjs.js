// SEE CONSOLE TAB FOR OUTPUT!

console.clear();

// It allows you to specify the dynamic behavior of a value
// completely at the time of declaration.
// The opposite:
var a = 3;
var b = 10 * a;
// => 30
console.log(b);

// Output is still 30 since the value of a is statically 
// declared
a = 4;
console.log(b);
// So we need to set the formula up again 
// and we see the updated result
// (notice the typo)
// The point is that our declation of b 
// does not reflect the dynamic behavior of b
b = 11 * a;
console.log(b);

// Notice how at declaration, the dynamic behavior
// of a is declared.
console.log('Streams:');
var streamA = Rx.Observable.of(3, 4);
var streamB = streamA.map(a => 10 * a);

streamB.subscribe(b => console.log(b));