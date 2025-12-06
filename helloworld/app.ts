let message: string = 'Hello, World!';
console.log(message);

// use the typescript compiler to compile this file to js
// > tsc app.ts

// then you can run the js file using: node app.js

// or
// if you installed tsx module, you can run ts directly in node
// > tsx app.ts

let heading = document.createElement('h1');
heading.textContent = message;

document.body.appendChild(heading);

// IMPORTANT
// never directly modify the compiled file (app.js)