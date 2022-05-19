$("#currentDay").text(moment().format("dddd,MMM,Do"));

$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(text, time);
});
