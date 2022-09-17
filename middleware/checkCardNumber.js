let isValidNumber = async (req, res, next) => {
  try {
    let { card_number, cvv, holder_name, month, year } = req.body;

    if (!holder_name) {
      return res.send({
        success: false,
        message: "please enter a holder name",
      });
    }
    if (!card_number || card_number.length != 16) {
      return res.send({
        success: false,
        message: "please enter a valid credit number with 16 digit length",
      });
    }
    if (!month && !year) {
      return res.send({
        success: false,
        message: "please enter expiry date",
      });
    }
    if (!cvv || !cvv.length != 3) {
      return res.send({
        success: false,
        message: "please enter a valid 3 digit cvv",
      });
    }

    let reverseCardNumber = card_number.split("").reverse();
    let s1 = 0;
    let s2 = 0;
    let result = 0;
    for (let i = 0; i < reverseCardNumber.length; i += 2) {
      s1 += Number(reverseCardNumber[i]);
      if (reverseCardNumber[i + 1]) {
        result = Number(reverseCardNumber[i + 1]) * 2;
        if (result > 9) {
          s2 += await sumNumb(result);
        } else {
          s2 += Number(result);
        }
      }
    }
    result = s1 + s2;
    if (result % 10 === 0) {
      next();
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid Card Number",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
async function sumNumb(value) {
  try {
    let n = value.toString().split("");
    let sum = n.reduce((pv, cv) => Number(pv) + Number(cv));
    return Number(sum);
  } catch (err) {
    console.log(err);
  }
}
module.exports = isValidNumber;
