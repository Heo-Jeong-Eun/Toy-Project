const bcrypt = require("bcrypt");

module.exports = (password) => {
  const hash = bcrypt.createHash("sha1");
  hash.update(password);
  return hash.digest("hex");
}