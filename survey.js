const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :) \n`, (name) => {
  console.log(`Hi ${name}, nice meeting you.`);
  rl.question("What's an activity you like doing? \n", (activity) => {
    console.log(`That is fun, here is the ${activity} club page for you.`);
    rl.question(`What do you listen to while doing that \n`, (music) => {
      console.log(`Great taste in music! Here are music that are similar to ${music}`);
      rl.question(`Which meal is your favourite? (eg:dinner, brunch, etc) \n`, (meal) => {
        console.log(`${meal} sounds yummy!`);
        rl.question(`Which sport is your absolute favourite? \n`, (sports) => {
          console.log(`Indeed, more than 50 percent of the people in Canada likes ${sports} as well`);
          rl.question(`What is your superpower? In a few words, tell us what you are amazing at! \n`, (power) => {
            console.log(`${power} is a cool power!`);
            rl.close();
          });
        });
      });
    });
  });
});