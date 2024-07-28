import * as core from "@actions/core";
// const github = require("@actions/github");
import generateManifest from "./cmd/generate-manifest";

try {
  const [command, subcommand] = core.getInput("command").split(" ");

  console.log(`Hello from action: ${command}`);

  switch (command) {
    /** Install dependencies */
    case "install":
      break;

    /** Generate and write the manifest.json */
    case "gen-manifest":
      generateManifest();
      break;

    default:
      console.log(`Usage: ${command}`);
      break;
  }
} catch (error) {
  core.setFailed(error.message);
}
