import * as fs from "node:fs";
import * as core from "@actions/core";
import * as toml from "toml";

export interface ThunderstoreConfig {
  config: { schemaVersion: string };
  package: {
    namespace: string;
    name: string;
    versionNumber: string;
    description: string;
    websiteUrl: string;
    containsNsfwContent: boolean;
    dependencies: Record<string, string>;
  };
  publish: {
    repository: string;
    communities: string[];
    categories: string[];
  };
}

export const getConfig = () => {
  const tomlPath = core.getInput("toml-path");

  if (tomlPath) {
    const output: ThunderstoreConfig = toml.parse(
      fs.readFileSync(tomlPath, "utf-8")
    );

    return output;
  }

  return undefined;
};
