const GITHUB_API_URL = "https://api.github.com/users/google";

console.log("--- Starting Fetch using .then() ---");

fetch(GITHUB_API_URL)
  // 1. The first .then() handles the server response object (the HTTP status)
  //    We must call .json() to parse the body, which returns a new Promise.
  .then((response) => {
    // Check for network errors (though fetch usually only rejects on true network failure)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })

  // 2. The second .then() receives the actual parsed JSON data
  .then((data) => {
    console.log("Success (Promise Chain):");
    console.log(`Username: ${data.login}, Followers: ${data.followers}`);
  })

  // 3. The .catch() handles any errors from fetch, response.json(), or the manual throw
  .catch((error) => {
    console.error("Fetch Error (Promise Chain):", error.message);
  });
