const User = require("../model/User");

const createEmail = async (req, res) => {
  const { email } = req.body;
  console.log("Request body:", req.body); //Debugging

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    // Create a new user with the provided email
    const newUser = await User.create({ email });
    console.log("New user created:", newUser); //Debugging
    res
      .status(201)
      .json({ message: "Email created successfully", email: newUser.email });
  } catch (error) {
    console.log("Error occurred:", error);
    if (error.code === 11000) {
      // Handle duplicates
      console.log("Duplicate email error");
      res.status(400).json({ message: "Email already exists" });
    } else {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }
};

const getEmails = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createEmail, getEmails };
