const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (name) => {
  rl.question('What\'s your favorite sport? ', (sport) => {
    rl.question('What\'s your favorite food? ', (food) => {
      rl.question('What country do you live in? ', (country) => {
        rl.question('What\'s your favorite tv show? ', (tv) => {
          rl.question('What\'s your favorite music genre? ', (music) => {
            rl.question('What\'s your current profession? ', (profession) => {
              console.log(`${name} is a(n) ${profession} that lives in ${country} who enjoys playing ${sport} and watching ${tv} while eating ${food} and listening to ${music} music.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

