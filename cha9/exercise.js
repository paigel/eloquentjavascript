// Fill in the regular expressions

verify(/cat|car/,
    ["my car", "bad cats"],
    ["camper", "high art"]);

verify(/pr?op/,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);

verify(/ferr(et|y|ari)/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);


// /abc/	A sequence of characters
// /[abc]/	Any character from a set of characters
// /[^abc]/	Any character not in a set of characters
// /[0-9]/	Any character in a range of characters
// /x+/	One or more occurrences of the pattern x
// /x+?/	One or more occurrences, nongreedy
// /x*/	Zero or more occurrences
// /x?/	Zero or one occurrence
// /x{2,4}/	Two to four occurrences
// /(abc)/	A group
// /a|b|c/	Any one of several patterns
// /\d/	Any digit character
// /\w/	An alphanumeric character (“word character”)
// /\s/	Any whitespace character
// /./	Any character except newlines
// /\b/	A word boundary
// /^/	Start of input
// /$/	End of input
//Any word ending in ious
verify(/ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify(/\s[.;:,]/,
    ["bad punctuation ."],
    ["escape the period"]);

verify(/\w{7}/,
    ["hottentottententen"],
    ["no", "hotten totten tenten"]);
    
//A word without the letter e (or E)
verify(/\b[^\We]+\b/i,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
// Ignore unfinished exercises
if (regexp.source == "...") return;
for (let str of yes) if (!regexp.test(str)) {
 console.log(`Failure to match '${str}'`);
}
for (let str of no) if (regexp.test(str)) {
 console.log(`Unexpected match for '${str}'`);
}
}