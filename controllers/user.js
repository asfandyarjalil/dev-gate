const { User } = require("../models/user");
const { encryptIt, compareIt } = require("../utils/encrypt");
exports.checkout = async (req, res) => {
  try {
    let { card_number, cvv, holder_name, month, year } = req.body;
    const hashed_card_number = await encryptIt(card_number);
    const hashed_cvv = await encryptIt(cvv);

    let user = new User({
      card_number: hashed_card_number,
      cvv: hashed_cvv,
      holder_name,
      expiry_date: {
        month,
        year,
      },
    });
    await user.save();
    return res.send({
      success: true,
      message: "Great, everything is fine",
    });
  } catch (err) {
    console.log(err);
  }
};
