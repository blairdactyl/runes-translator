// the script that handles the text conversion

// set the latin script equivalents of the runes
const latin = ["th", "sh", "ch", "f", "u", "v", "w", "a", "r", "k", "h", "n", "i", "y", "p", "s", "t", "b", "e", "m", "l", "d", "c", "g", "j", "q", "x", "z"];
// set the runes
const runes = ["ᚦ", "ᛉ", "ᛏᛉ", "ᚠ", "ᚹ", "ᚹ", "ᚹ", "ᚨ", "ᚱ", "ᚲ", "ᚺ", "ᚾ", "ᛁ", "ᛁ", "ᛈ", "ᛊ", "ᛏ", "ᛒ", "ᛖ", "ᛗ", "ᛚ", "ᛞ"];

function translateText() {
    // text variable set to user input
    let text = document.getElementById("userInput").value;
    // convert user input to lowercase because that's what the script uses
    text = text.toLowerCase();

    // start at the first character
    charValue = 0;

    // for each character in the latin array, run the replaceCycle script
    latin.forEach(replaceCycle)

    // replace all latin characters with their corrosponding runes
    function replaceCycle() {
        // replace the current character
        text = text.replaceAll(latin[charValue], runes[charValue]);
        // go to the next character
        charValue += 1;
    }

    // c, g, j, q, x, and z have no corrosponding runes so they'll output "undefined" which i then delete... there's probably a better way to do this
    text = text.replaceAll("undefined", "");

    // set the output to the converted text
    document.getElementById("output").innerHTML = text;
}