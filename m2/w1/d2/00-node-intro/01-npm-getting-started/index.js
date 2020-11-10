// require() is a node method used to import other packages/files
const chalk = require("chalk");
const greet = require("./greetings");
const sayHelloUpper = require("./say-hello-upper"); // .js extension is not compulsory

sayHelloUpper();

// Printing colored output using `chalk`
console.log(chalk.whiteBright.bgBlue.bold(greet.en));

console.log(chalk.yellow.bgRed.bold(greet.es));

console.log(chalk.bgYellowBright(greet.de));

console.log(
  chalk.whiteBright.bgBlueBright(greet.fr.split(" ")[0]),
  chalk.whiteBright.bgRed(greet.fr.split(" ")[1])
);

console.log(
  chalk.whiteBright.bgRed(greet.it.split(" ")[0]),
  chalk.whiteBright.bgGreen(greet.it.split(" ")[1])
);
