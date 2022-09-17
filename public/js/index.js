function checkOut(_this) {
  let holder_name = document.getElementById("holder_name").value.trim();
  let card_number = document.getElementById("card_number").value.trim();
  let month = document.getElementById("ccmonth");
  let year = document.getElementById("ccyear");
  let cvv = document.getElementById("cvv").value.trim();

  console.log(holder_name);
  console.log(card_number);
  console.log(month.value);
  console.log(year.value);
  console.log(cvv);
  let data = {
    holder_name,
    card_number,
    month: month.value,
    year: year.value,
    cvv,
  };

  $.ajax({
    url: "/api/checkout",
    type: "post",
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify(data),
    success: function (data) {
      console.log(data);
      if (data.success == true) {
        new PNotify({
          title: "Success",
          text: data.message,
          type: "success",
          addclass: "custom",
          icon: "fa fa-smile-o",
        });
      } else {
        new PNotify({
          title: "Error",
          text: data.message,
          type: "error",
          addclass: "custom",
          icon: "fa fa-frown-o",
        });
      }
    },
  });
}
