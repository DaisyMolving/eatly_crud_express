$(function () {
  alert("The Page Has Loaded!");



$(function () {
  $.get("/foods").
    done(function (data) {
      console.log("RECEIVING RESPONSE");
      console.log("DATA", data);
      $(data).each(function (index, food) {
        var $food = $("<div>" + food.name + "</div>").addClass( "foodNames" );
        $("body").append($food);
      });
    });
});
});