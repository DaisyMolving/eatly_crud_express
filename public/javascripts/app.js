var Food = Food || {};
var View = View || {};

$(document).ready(function() {
  Food.all();
  View.initialise();
});

View = {
  initialise: function() {
    $('#food-form').on('submit', function(e) {
      e.preventDefault();
      Food.create($(this).serialize());

    })
  }
}


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
    },
  create: function(foodParams) {
    $.post('/foods', foodParams)
    .done(function(response){
      console.log(response);
    });
  }
}
