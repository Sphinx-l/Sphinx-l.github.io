    var equipment1="<select><option>多兰剑</option><option >多兰盾</option><option >长剑</option><option >鞋子</option><option >生命药水</option></select>"
    var equipment2="<select><option>渴血</option><option >星蚀</option><option >狂风</option><option >神分</option><option >大饮魔刀</option><option >赛瑞尔达的怨恨</option><option >挺近</option><option >黑切</option></option><option >血手</option>"
    var equipment3="<select><option>攻速鞋</option><option >护甲鞋</option><option >法穿鞋</option><option >水银鞋</option><option >冷却鞋</option></select>"
    var equipment4="<select><option>复活甲</option><option >绿甲</option><option >夜之锋刃</option><option >中亚沙漏</option><option >水银弯刀</option></select>"

    //装备胜率、登场率
  $(".onstage").click(function(){
    $(this).replaceWith('<input type="text" class="onstagetext"></input>');
  });
  $(".equipment").on("blur",'.onstagetext',function(){
    $(this).replaceWith('<span class="onstage">'+$(this).val()+'%</span>');
  });
  $(".win").click(function(){
    $(this).replaceWith('<input type="text" class="wintext"></input>');
  });
  $(".equipment").on("blur",'.wintext',function(){
    $(this).replaceWith('<span class="win">'+$(this).val()+'%</span>');
  });
  //装备
  $(".equipment").on("click",'button',function(){
    $(this).parent().find('.list').append('<div class="listdetail"><span class="equipmentbox"><img src="images/equipment/水银鞋.png" alt="" /><span class="onstage">48.12%</span><span class="win">51.14%</span></span></div>');
  });
$('.list').eq(0).on('click','img',function(){
  $(this).replaceWith(equipment1);
});
$('.list').eq(1).on('click','img',function(){
  $(this).replaceWith(equipment2);
});
$('.list').eq(2).on('click','img',function(){
  $(this).replaceWith(equipment3);
});
$('.list').eq(3).on('click','img',function(){
  $(this).replaceWith(equipment4);
});
$('.equipment').on('blur','select',function(){
  $(this).replaceWith('<img src="images/equipment/'+$(this).val()+'.png" class="big" />');
});
