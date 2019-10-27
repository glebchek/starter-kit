
const path = require("path");
const fs = require("fs");

const appRoot = fs.realpathSync(process.cwd());

const appSrc = path.resolve(appRoot, "src");
const appDist = path.resolve(appRoot, "dist")
const appAssets = path.resolve(appSrc, "assets");
const appConfig = path.resolve(appRoot, "config");
const appTemplateHtml = path.resolve(appAssets, "index.html");
const appTargetHtml = path.resolve(appDist, "index.html");
const appIndex = path.resolve(appSrc, "index.jsx");

module.exports = {
  appRoot,
  appSrc,
  appDist,
  appAssets,
  appConfig,
  appTemplateHtml,
  appTargetHtml,
  appIndex,
};
