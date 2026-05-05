

/**
 * 
 * @param {string} fullName 
 * @returns {string}
 */
function formatUsername(fullName) {
    return fullName.toLowerCase().replace(/\s+/g, "");
}

/**
 * 
 * @param {string[]} names 
 * @returns {string[]}
 */

function generateUsernames(names) {
    const usernames = [];

    for (const name of names) {
        const username = formatUsername(name);
        usernames.push(username)
    }

    return usernames;
}

//example usage
const names = ["Jhonny Frank", "will Smith", "Alex Rosse"];
const result = generateUsernames(names);

console.log(`Result: ${result}`);

