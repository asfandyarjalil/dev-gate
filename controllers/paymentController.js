const { Payment } = require("../models/paymentSchema");
const { encryptIt, compareIt } = require("../utils/encrypt");
exports.checkout = async (req, res) => {
  try {
    let { card_number, cvv, holder_name, month, year } = req.body;
    const hashed_card_number = await encryptIt(card_number);
    const hashed_cvv = await encryptIt(cvv);

    let payment = new Payment({
      card_number: hashed_card_number,
      cvv: hashed_cvv,
      holder_name,
      expiry_date: {
        month,
        year,
      },
    });
    await payment.save();
    return res.send({
      success: true,
      message: "Congratulations! payment saved successfully",
    });
  } catch (err) {
    console.log(err);
    res.send({
      success: false,
      message: "somthing went wrong! please try again",
    });
  }
};
