import * as core from "@actions/core";
// const github = require("@actions/github");
import * as toml from "toml";
import * as fs from "node:fs";

try {
  const command = core.getInput("command");
  const tomlPath = core.getInput("toml-path");

  console.log(`Hello from action: ${command}`);

  if (tomlPath) {
    const output = toml.parse(fs.readFileSync(tomlPath, "utf-8"));

    console.log("--- what we got", output)
  }
} catch (error) {
  core.setFailed(error.message);
}
