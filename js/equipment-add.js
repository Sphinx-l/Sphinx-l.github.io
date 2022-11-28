var equipment1 =
  "<select><option>多兰剑</option><option >多兰盾</option><option >长剑</option><option >鞋子</option><option >生命药水</option></select>";
var equipment2 =
  "<select><option>渴血</option><option >星蚀</option><option >狂风</option><option >神分</option><option >大饮魔刀</option><option >赛瑞尔达的怨恨</option><option >挺近</option><option >黑切</option></option><option >血手</option>";
var equipment3 =
  "<select><option>攻速鞋</option><option >护甲鞋</option><option >法穿鞋</option><option >水银鞋</option><option >冷却鞋</option></select>";
var equipment4 =
  "<select><option>复活甲</option><option >绿甲</option><option >夜之锋刃</option><option >中亚沙漏</option><option >水银弯刀</option></select>";
function test(value) {
  let reg = /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/;
  if (!reg.test(value)) alert("输入的必须是数字!");
  else if (value > 100) alert("输入的数字不能大于100!");
  else if (value < 0) alert("输入的数字不能小于0!");
  else return true;
}
$(".equipment").on("blur", ".onstagetext", function () {
  if (test($(this).val()))
    $(this).replaceWith('<span class="onstage">' + $(this).val() + "%</span>");
});
$(".equipment").on("blur", ".wintext", function () {
  if (test($(this).val()))
    $(this).replaceWith('<span class="win">' + $(this).val() + "%</span>");
});
//装备胜率、登场率
$(".equipment").on("click", ".onstage", function () {
  $(this).replaceWith('<input type="text" class="onstagetext"></input>');
});
$(".equipment").on("click", ".win", function () {
  $(this).replaceWith('<input type="text" class="wintext"></input>');
});
//装备
$(".equipment").on("click", "button", function () {
  $(this)
    .parent()
    .find(".listdetail")
    .eq(0)
    .clone()
    .appendTo($(this).parent().find(".list"));
});
$(".list")
  .eq(0)
  .on("click", "img", function () {
    $(this).replaceWith(equipment1);
  });
$(".list")
  .eq(1)
  .on("click", "img", function () {
    $(this).replaceWith(equipment2);
  });
$(".list")
  .eq(2)
  .on("click", "img", function () {
    $(this).replaceWith(equipment3);
  });
$(".list")
  .eq(3)
  .on("click", "img", function () {
    $(this).replaceWith(equipment4);
  });
$(".equipment").on("blur", "select", function () {
  $(this).replaceWith(
    '<img src="images/equipment/' + $(this).val() + '.png" class="big" />'
  );
});
