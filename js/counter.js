$.fn.jQuerySimpleCounter = function (options) {
  var settings = $.extend(
    {
      start: 0,
      end: 100,
      easing: "swing",
      duration: 1000,
      complete: "",
    },
    options
  );

  var thisElement = $(this);

  $({ count: settings.start }).animate(
    { count: settings.end },
    {
      duration: settings.duration,
      easing: settings.easing,
      step: function () {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete,
    }
  );
};

$("#number1").jQuerySimpleCounter({ end: 12, duration: 30000 });
$("#number2").jQuerySimpleCounter({ end: 55, duration: 30000 });
$("#number3").jQuerySimpleCounter({ end: 750, duration: 20000 });
//$("#number4").jQuerySimpleCounter({ end: 246, duration: 2500 });