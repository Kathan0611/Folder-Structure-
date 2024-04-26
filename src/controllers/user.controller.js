const UserModel = require("./../models/user");

exports.signup = async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    res.status(400).json({ message: "username and password are required" });
  }
  const existingUser = UserModel.find((user) => user.email === email);

  if (existingUser) {
    return res.status(400).json({ message: "User already in exist" });
  }

  const salt = bcrypt.genSalt(10);

  const hashPassword = bcrypt.hashSync(password, salt);
  const newUser = new UserModel({
    name: username,
    email: email,
    password: hashPassword,
  });

  await newUser.save();
};
