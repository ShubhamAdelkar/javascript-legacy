async function getGithubUserData() {
  // 1. Must use 'async' to use 'await'

  try {
    // 'try/catch' replaces the .catch() for error handling!

    console.log("Starting the request...");

    // 2. AWAIT: PAUSE until the 'fetch' Promise resolves (server responds).
    const response = await fetch("https://api.github.com/users/octocat");
    console.log("...Server responded. Continuing...");

    // 3. AWAIT: PAUSE until the 'response.json()' Promise resolves (data is parsed).
    const data = await response.json();
    console.log("...Data parsed. Continuing...");

    // 4. Use the final data as if it was fetched instantly.
    console.log("Octocat's name is:", data.name);
    console.log("Octocat's location is:", data.location);
  } catch (error) {
    // 5. If ANY 'await' fails (rejects), the code jumps straight here.
    console.error("Oops, a critical error:", error);
  }
}

getGithubUserData(); // Call the async function
