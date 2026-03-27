// auth.js

/**
 * Retrieve all users from localStorage
 * @returns {Object} users object with { username: password }
 */
function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || {};
}

/**
 * Save users object to localStorage
 * @param {Object} users
 */
function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

/**
 * Signup a new user
 * @param {string} username
 * @param {string} password
 * @returns {string} status message
 */
function signup(username, password) {
    if (!username || !password) return "Please fill all fields!";

    const users = getUsers();

    if (users[username]) return "User already exists!";

    users[username] = password;
    saveUsers(users);

    return "Signup successful!";
}

/**
 * Login a user
 * @param {string} username
 * @param {string} password
 * @returns {string} status message
 */
function login(username, password) {
    const users = getUsers();

    if (!users[username]) return "User not found!";
    if (users[username] !== password) return "Incorrect password!";

    return "Login successful!";
}

// Export functions for Node.js / Jest testing
module.exports = { signup, login, getUsers, saveUsers };