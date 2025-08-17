// U => Untracked

// ------------------------------------------------------------
// Task 1 — countVowels(str)
// Return how many vowels are inside str (a, e, i, o, u).
// Make it case-insensitive (e.g., "A" counts). Use a loop, no regex.
// ------------------------------------------------------------
function countVowels(str) {
    // Hint: str = str.toLowerCase(); then loop chars and check with 'includes'
    str = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < str.length; i++) 
    {
        if ("aeiou".includes(str[i])) 
            count++;
    }
    return count;
}


// ------------------------------------------------------------
// Task 2 — invertCase(str)
// Build and return a new string where each letter changes case:
// 'Hello' -> 'hELLO'. Use a loop and string methods, not regex.
// ------------------------------------------------------------
function invertCase(str) {
    // Hint: for each character: if it's equal to its toUpperCase() but NOT equal
    // to its toLowerCase(), it's likely uppercase (A-Z). Handle others as-is.
    let result = "";
    for (let i = 0; i < str.length; i++) 
    {
        if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase())
            result += str[i].toLowerCase();
        else 
            result += str[i].toUpperCase();
    }
    return result;
}

console.log("\n--- Task 1 ---");
console.log(countVowels("Ammar Massoud")); // expect > 0

console.log("\n--- Task 2 ---");
console.log(invertCase("HeLLo 123!")); // "hEllO 123!"