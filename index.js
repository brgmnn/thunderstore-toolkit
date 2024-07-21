const core = require("@actions/core");
const github = require("@actions/github");

try {
  const command = core.getInput("command");

  console.log(`Hello from action: ${command}`);
} catch (error) {
  core.setFailed(error.message);
}
