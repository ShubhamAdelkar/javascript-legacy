const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer = true;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

console.log(makeServerRequest);

function setTimeoutPromisified(delayInMilliseconds) {
  // 1. Create a new Promise (our Ticket)
  return new Promise((resolve) => {
    // 2. Put the ACTUAL WAITING TIME inside the ticket
    setTimeout(() => {
      // 3. ONLY after the 'delayInMilliseconds' time is over,
      //    call 'resolve()' to fulfill the promise (give the cookie!)
      resolve(`Waited ${delayInMilliseconds}ms!`);
    }, delayInMilliseconds);
  });
}
// 4. Consume the Promise (Cash in the Ticket)
console.log("Start waiting for 2 seconds...");

setTimeoutPromisified(2000) // We ask for the ticket and start the 2-second wait
  .then((result) => {
    // This runs AFTER the 2 seconds are up and the promise resolves
    console.log("Ticket Fulfilled!");
    console.log(result); // Output: "Waited 2000ms!"
  });

console.log("The program continues instantly, but the .then() is delayed.");
