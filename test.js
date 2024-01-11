const x = 2; 
let y = 4; 
function update(arg) { 
    return Math.random() + y * arg; 
} 
y = 2; 
 const result = update(x);
 console.log(result);