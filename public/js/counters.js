var counterTeaserL = $(".go-counterTeaser");
var winHeight = $(window).height();
if (counterTeaserL.length) {
  var firEvent = false,
    objectPosTop = $(".go-counterTeaser").offset().top;

  //when element shows at bottom
  var elementViewInBottom = objectPosTop - winHeight;
  $(window).on("scroll", function () {
    var currentPosition = $(document).scrollTop();
    //when element position starting in viewport
    if (currentPosition > elementViewInBottom && firEvent === false) {
      firEvent = true;
      animationCounter();
    }
  });
}

//counter function will animate by using external js also add seprator "."
function animationCounter() {
  $(".numberBlock h2").each(function () {
    var comma_separator_number_step =
      $.animateNumber.numberStepFactories.separator(".");
    var counterValv = $(this).text();
    $(this).animateNumber({
      number: counterValv,
      numberStep: comma_separator_number_step,
    });
  });
}
