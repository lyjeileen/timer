const args = process.argv.slice(2);
const newArgs = args.filter((arg) => !isNaN(parseInt(arg)));
newArgs.forEach((input, index) => {
  let parsed = parseInt(input);
  if (parsed > 0) {
    setTimeout(() => {
      process.stdout.write(".");
      if (index === newArgs.length - 1) {
        process.stdout.write("\n");
      }
    }, input * 1000);
  }
});
