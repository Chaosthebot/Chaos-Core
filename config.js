const os = require("os");
const path = require("path");

module.exports = {
    // Prefix for Git repo URLs
    REPO_PREFIX: "https://github.com/Chaosthebot/",

    // Repo for ChaosBot core
    CORE_REPO: "Chaos-Core",

    // Repos for enabled ChaosBot components
    COMPONENTS: [],

    // Location for cloned component repos
    COMPONENT_LOCATION: path.join(os.homedir(), "workspace"),

    // Location for temporary cloned repos
    COMPONENT_LOCATION_TEMP: path.join(os.homedir(), "workspace-temp"),
}
