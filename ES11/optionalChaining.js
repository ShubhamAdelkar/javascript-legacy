const userProfile = {
  id: 1,
  data: {
    settings: {
      theme: "dark",
    },
    // 'address' property is missing here!
  },
};

// --- WITHOUT Optional Chaining (The old, dangerous way) ---
// const city = userProfile.data.address.city; // This would CRASH the program!

// --- WITH Optional Chaining (The safe, modern way) ---

// 1. Checks if 'data' exists, if so, checks 'address', if so, checks 'city'.
//    Since 'address' is missing, it returns 'undefined'. No crash!
const safeCity = userProfile.data.address?.city;
console.log("Safe City:", safeCity); // Output: undefined

// 2. You can use it for calling methods too (e.g., if a method might be missing)
const userFunction = userProfile.data.someFunction?.();
console.log("Safe Function Call:", userFunction); // Output: undefined (No crash)
