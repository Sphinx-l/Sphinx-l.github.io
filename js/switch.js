var skill = document.querySelector(".left").querySelector(".s");
var talent = document.querySelector(".left").querySelector(".t");
var equipment = document.querySelector(".left").querySelector(".e");
var skilldiv = document.querySelector(".skill");
var talentdiv = document.querySelector(".talent");
var skindiv = document.querySelector(".skin");
var skin = document.querySelector(".left").querySelector(".sk");
var equipmentdiv = document.querySelector(".equipment");
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