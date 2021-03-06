const User = require("../models/User");
const bcrypt = require("bcryptjs");

// helper function.
let checkUser = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({ email });
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

const handleLoginUser = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await checkUser(email);
      if (user) {
        // user aready exist.
        const checkPassword = await bcrypt.compareSync(password, user.password);

        if (checkPassword) {
          resolve({
            success: true,
            user: {
              _id: user._id,
              email: user.email,
            },
          });
        } else {
          resolve({
            success: false,
          });
        }
      } else {
        resolve({
          success: false,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleLoginUser,
};
