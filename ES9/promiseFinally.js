// A function that simulates a network call that can succeed or fail
function checkData(shouldFail) {
  return new Promise((resolve, reject) => {
    // Simulate showing a loading spinner
    console.log("START: Showing loading spinner...");

    setTimeout(() => {
      if (!shouldFail) {
        resolve("Data successfully loaded!");
      } else {
        reject("ERROR: Connection timed out.");
      }
    }, 1000);
  });
}

// Case 1: Success
checkData(false)
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => {
    // Runs after THEN or CATCH
    console.log("FINALLY: Hiding loading spinner and cleaning up.");
  });

// Case 2: Failure (if checkData(true) was called)
// .catch() would run, and then .finally() would run right after it.
