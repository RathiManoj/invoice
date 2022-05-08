const { spawn } = require("child_process");

const app = spawn("node", ["./backend/app.js"]);

app.stdout.on("data", data => {
  console.log(`backend: ${data}`);
});

app.stderr.on("data", data => {
  console.log(`backend: ${data}`);
});

app.on('error', (error) => {
  console.log(`backend: ${error.message}`);
});

app.on("close", code => {
  console.log(`child process exited with code ${code}`);
});
