import * as core from "@actions/core";
// const github = require("@actions/github");
import { getConfig } from "./lib/thunderstore-config";

try {
  const command = core.getInput("command");

  console.log(`Hello from action: ${command}`);

  switch (command) {
    case "sync": {
      const config = getConfig();

      const manifest = {};
      manifest["name"] = config.package.name;
      manifest["version_number"] = config.package.versionNumber;
      manifest["website_url"] = config.package.websiteUrl;
      manifest["description"] = config.package.description;
      manifest["dependencies"] = [];

      for (const [id, version] of Object.entries(config.package.dependencies)) {
        manifest["dependencies"].push(`${id}-${version}`);
      }

      console.log("--- manifest would be:", JSON.stringify(manifest, null, 2));

      break;
    }

    default:
      console.log(`Usage: ${command}`);
      break;
  }
} catch (error) {
  core.setFailed(error.message);
}
