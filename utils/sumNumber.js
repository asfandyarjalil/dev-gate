async function sumNumb(value) {
  try {
    let n = value.toString().split("");
    let sum = n.reduce((pv, cv) => Number(pv) + Number(cv));
    return Number(sum);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  sumNumb,
};
