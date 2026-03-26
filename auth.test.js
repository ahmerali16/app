// auth.test.js
import { signup, login, getUsers } from './auth.js';

beforeEach(() => {
    // Clear users before each test
    localStorage.clear();
});

test("Signup success", () => {
    expect(signup("alice", "1234")).toBe("Signup successful!");
});

test("Signup duplicate user", () => {
    signup("bob", "pass");
    expect(signup("bob", "pass")).toBe("User already exists!");
});

test("Login success", () => {
    signup("charlie", "abcd");
    expect(login("charlie", "abcd")).toBe("Login successful!");
});

test("Wrong password", () => {
    signup("dave", "xyz");
    expect(login("dave", "wrong")).toBe("Incorrect password!");
});
