/* Chaos-Core
 *
 * Core functionality of ChaosBot (self-maintenance).
 *
 */

const config = require("./config");
const utils = require("./utils");

Promise.all([
    utils.ensureDirectory(config.COMPONENT_LOCATION),
    utils.ensureDirectory(config.COMPONENT_LOCATION_TEMP),
]).then(() => {
    console.log("Ensured that all workspace directories exist.");
});
