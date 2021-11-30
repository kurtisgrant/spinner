const spinStates = ['|', '/', '-', '\\'];

const spinner = function(seconds) {
  const interval = 200;
  let i = 0;
  let done = false;

  while (!done) {
    let toWrite = `\r${spinStates[i % spinStates.length]}   `;

    if (i * interval > seconds * 1000) {
      toWrite = '\rdone.\n';
      done = true;
    }
    setTimeout(() => {
      process.stdout.write(toWrite);
    }, interval * i++);
  }
};

spinner(3);