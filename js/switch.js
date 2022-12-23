var skill = document.querySelector(".left").querySelector(".s");
var talent = document.querySelector(".left").querySelector(".t");
var equipment = document.querySelector(".left").querySelector(".e");
var skin = document.querySelector(".left").querySelector(".sk");
var introduce=document.querySelector(".left").querySelector(".in");
$('.introduce').show();
skill.addEventListener("mouseover", function () {
  $('.right').hide();
  $('.skill').show();
});

talent.addEventListener("mouseover", function () {
  $('.right').hide();
  $('.talent').show();
});
equipment.addEventListener("mouseover", function () {
  $('.right').hide();
  $('.equipment').show();
});
skin.addEventListener("mouseover", function () {
  $('.right').hide();
  $('.skin').show();
  //加载轮播图
  $("#my-slider").camRollSlider();
});
introduce.addEventListener("mouseover", function () {
  $('.right').hide();
  $('.introduce').show();
});