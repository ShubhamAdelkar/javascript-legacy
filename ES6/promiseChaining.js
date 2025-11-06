// A pretend function to simulate fetching a user ID
function fetchUserId() {
  console.log("STEP 1: Starting to find the User ID...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Pretend the network succeeded

      if (success) {
        resolve(42); // Promise Fulfilled! Resolve with the User ID (42)
      } else {
        reject("Network error: Could not connect."); // Promise Rejected!
      }
    }, 1500); // Takes 1.5 seconds to "fetch"
  });
}

// A pretend function to simulate fetching posts based on an ID
function fetchUserPosts(userId) {
  console.log(`STEP 2: Found ID ${userId}. Now fetching their posts...`);
  return new Promise((resolve) => {
    setTimeout(() => {
      // Promise Fulfilled! Resolve with the actual data
      resolve([`Post 1 by User ${userId}`, `Post 2 by User ${userId}`]);
    }, 1000); // Takes 1 second to "fetch" posts
  });
}

fetchUserId() // Runs Step 1
  // FIRST .then(): Runs when fetchUserId() resolves (after 1.5s)
  .then((userId) => {
    console.log("Step 1 Complete: Got User ID:", userId);

    // 🔑 THE CHAINING KEY: Return the NEXT promise (the next ticket!)
    // This makes the whole chain wait for fetchUserPosts to finish.
    return fetchUserPosts(userId); // Runs Step 2
  })

  // SECOND .then(): Runs when fetchUserPosts() resolves (after another 1s)
  .then((posts) => {
    console.log("Step 2 Complete: Final Data:");
    console.log(posts); // Output: The list of posts

    // Total time waited: 1.5s + 1s = 2.5 seconds
  })

  // .catch(): Runs ONLY if ANY promise in the chain R E J E C T S
  .catch((error) => {
    // If fetchUserId() had failed, this would catch the "Network error"
    console.error("A critical error occurred:", error);
  });
