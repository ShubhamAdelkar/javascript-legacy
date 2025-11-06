const failure = new Promise((_, rej) =>
  setTimeout(() => rej("404 Error"), 500)
);
const success = new Promise((res) =>
  setTimeout(() => res("Result from Server 2"), 200)
);

Promise.any([failure, success])
  .then((result) => console.log("Fastest Success:", result))
  .catch((errors) => console.log("All Failed:", errors));

// Output after 200ms: Fastest Success: Result from Server 2
// (It ignores the failure that happened at 500ms because a success already occurred.)
