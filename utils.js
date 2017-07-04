const fs = require("fs");

/**
 * Ensure that the directory exists, creating it if it doesn't already.
 * 
 * @param {string} dir The path of the directory to check
 * @returns {Promise.<boolean>} Whether or not the directory already existed.
 */
function ensureDirectory(dir) {
    return new Promise((resolve, reject) => {
        fs.access(dir, fs.constants.F_OK, (err) => {
            if (err) {
                fs.mkdir(dir, (err) => {
                    if (err) reject(err);
                    resolve(false);
                });
            } else {
                resolve(true);
            }
        });
    });
}

module.exports = {
    ensureDirectory,
}
