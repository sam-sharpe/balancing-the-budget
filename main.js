const budget_total = parseFloat($(".total_budget span").text());



$("body").on("keyup keydown keypress change", ".department input", function(e){
  let running_total = budget_total;


  $(".department input").each(function(){
      let user_input = $(this).val();

      if (user_input !== ""){
        user_input = parseFloat(user_input);

        running_total = running_total - user_input;
      }
  });

const error_message = "You are over budget! Make some changes.";
const warning_message = "You are getting close to budget. Make good choices.";

if (running_total >= 0 && running_total <= 100) {
  $(".total_budget").addClass("warning").removeClass("error");
  $(".total_budget h4").text(warning_message);
} else if (running_total <= 0) {
  $(".total_budget").addClass("error").removeClass("warning");
  $(".total_budget h4").text(error_message);
} else {
    $(".total_budget").removeClass("error warning");
    $(".total_budget h4").text("");
  };

$(".total_budget span").text(running_total);
});
