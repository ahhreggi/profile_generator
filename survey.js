const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (song) => {
      rl.question("Which meal is your favourite (e.g., dinner, brunch, etc.)? ", (meal) => {
        rl.question("What is your favourite thing to eat for that meal? ", (food) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? ", (superpower) => {
              console.log(`${name} loves listening to ${song} while ${activity}, devouring ${food} for ${meal},`,
                `prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});