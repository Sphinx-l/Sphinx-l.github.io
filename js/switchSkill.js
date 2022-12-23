$(".skill img").click(function () {
    $(this).parent().parent().parent().find("p").hide();
    $(this).parent().siblings("p").show();
  });