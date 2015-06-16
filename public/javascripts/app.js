var Food = Food || {};

$(document).ready(function() {
  Food.all();
});


Food = {  
  all: function () {
    $.get("/foods").
      done(function (data) {
        console.log("RECEIVING RESPONSE");
        var foods = (JSON.parse(data));
        $.each(foods, function (index, food) {
          $("body").append(food.name);
        });
      });
    }
}
