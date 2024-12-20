let normal = function (words) {
    return words
        .map(str => 
            str.replace(/[^\w]/g, "") // Remove all non-word characters (punctuation and spaces)
               .toLowerCase()          // Convert to lowercase
        )
        .filter(str => str !== ""); // Filter out any empty strings
}

const palindromes = function (word) {
    let wordarr = word.split("");
    const arr = normal(wordarr);
    let revarr = arr.slice().reverse();
    return revarr.every((value, index) => value === arr[index]);
};
palindromes('racecar!') 
//npm test palindromes.spec.

// Do not edit below this line
module.exports = palindromes;