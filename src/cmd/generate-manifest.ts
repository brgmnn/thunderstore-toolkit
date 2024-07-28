import * as fs from "node:fs";
import { getConfig } from "../lib/thunderstore-config";
import * as path from "node:path";
import * as core from "@actions/core";

export default () => {
  const config = getConfig();
  const tomlPath = core.getInput("toml-path");

  const manifest = {};
  manifest["name"] = config.package.name;
  manifest["version_number"] = config.package.versionNumber;
  manifest["website_url"] = config.package.websiteUrl;
  manifest["description"] = config.package.description;
  manifest["dependencies"] = [];

  for (const [id, version] of Object.entries(config.package.dependencies)) {
    manifest["dependencies"].push(`${id}-${version}`);
  }

  const manifestData = JSON.stringify(manifest, null, 2);
  const filename = path.join(path.dirname(tomlPath), "manifest.json");

  fs.writeFileSync(filename, manifestData);

  core.info(`Wrote manifest: ${filename}`);
};
