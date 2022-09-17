const bcrypt = require("bcrypt");
exports.encryptIt = (value) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(value, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

exports.compareIt = (value, hashed) => {
  return bcrypt.compare(value, hashed);
};
