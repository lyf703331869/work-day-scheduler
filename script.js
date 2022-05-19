var currentHour = moment().hour();

$("#currentDay").text(moment().format("dddd,MMM,Do"));
$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
});

for (i = 0; i < 10; i++) {
  $(".container")
    .children()
    .eq(i)
    .children()
    .eq(1)
    .val(localStorage.getItem(i + 8));

  if (currentHour < i + 8) {
    $(".container").children().eq(i).children().eq(1).addClass("future");
  } else if (currentHour == i + 8)
    $(".container").children().eq(i).children().eq(1).addClass("present");
  else {
    $(".container").children().eq(i).children().eq(1).addClass("past");
  }
}
