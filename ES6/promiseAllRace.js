const p1 = new Promise((res) => setTimeout(() => res("A-Done"), 1000));
const p2 = new Promise((res) => setTimeout(() => res("B-Done"), 500));
const p3 = new Promise((_, rej) => setTimeout(() => rej("C-Error"), 200));

// --- Promise.all() Example ---
Promise.all([p1, p2]) // P3 is excluded here for a clean result
  .then((results) => console.log("All Results:", results));
// Output after 1000ms: All Results: [ 'A-Done', 'B-Done' ]

// --- Promise.race() Example ---
Promise.race([p1, p2, p3])
  .then((fastest) => console.log("Race Winner:", fastest))
  .catch((error) => console.log("Race Loser:", error));
// Output after 200ms: Race Loser: C-Error (P3 rejected first)

// Imagine you ordered two cookies (Task A and Task B) and one glass of milk (Task C).

// Promise.all() (Wait for Everything)
// Rule: Wait for ALL tickets (Promises) to be fulfilled. If one ticket is rejected (the cookie is burnt), the whole process stops and rejects immediately.

// Analogy: You won't start eating until ALL items (Cookies A, B, and Milk C) have arrived successfully.

// Promise.race() (Wait for the Fastest)
// Rule: Resolves or rejects as soon as the FASTEST ticket resolves or rejects.

// Analogy: You placed a ticket for Milk C and a ticket for Cookie B. You only care about the first one that arrives, regardless of what it is.
