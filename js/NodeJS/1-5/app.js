console.log('app.js :)');

// for (let i = 1; i < 11; console.log(i), i++) { }

// setInterval(() => {
//   let date = new Date();
//   console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// }, 1000);

let counter = 1;

setInterval(() => {
  console.log(`${counter++}`);
}, 1000);