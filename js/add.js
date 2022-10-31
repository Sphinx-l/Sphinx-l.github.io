    var equipment="<select><option >多兰剑</option><option >多兰盾</option><option >长剑</option><option >鞋子</option><option >生命药水</option></select>"
    var text="<input type='text' class='textblur'>";
    $('.textblur').blur(function(){
        console.log(blur);
        $(this).replaceWith('<span class="onstage">'+$(this).val()+'%</span>');
    });
    $(".talentbtn").click(function(){
    $('.talent').find('ul').append('<li><img src="images/talent/精密.png" class="big" /><img src="images/talent/征服者.png" class="big" /><img src="images/talent/凯旋.png" class="middle" /><img src="images/talent/韧性.png" class="middle" /><imgsrc="images/talent/坚毅不倒.png"class="middle"style="margin-right: 40px"/><img src="images/talent/坚决.png" class="middle" /><img src="images/talent/复苏之风.png"  class="middle" /><imgsrc="images/talent/复苏.png"alt=""class="middle"style="margin-right: 40px"/><img src="images/talent/适应之力.png" class="small" /><img src="images/talent/适应之力.png" class="small" /><img src="images/talent/护甲.png" class="small" /><img src="images/talent/适应之力.png" alt="" class="small" /><img src="images/talent/适应之力.png" alt="" class="small" /><img src="images/talent/护甲.png" alt="" class="small" /><i>登场率:23.02%<button class="remove">删除</button></i><i>胜率:49.02%</i></li>');
  });
  $(".equipmentbtn1").click(function(){
    $(this).parent().find('.list').append('<div class="listdetail"><span class="equipmentbox"><img src="images/equipment/水银鞋.png" alt="" /><span class="onstage">48.12%</span><span class="win">51.14%</span></span></div>')
  });
  $(".equipmentbtn2").click(function(){
    $(this).parent().find('.list').append('<div class="listdetail"><span class="equipmentbox"><img src="images/equipment/水银鞋.png" alt="" /><span class="onstage">48.12%</span><span class="win">51.14%</span></span></div>')
  });
  $(".equipmentbtn3").click(function(){
    $(this).parent().find('.list').append('<div class="listdetail"><span class="equipmentbox"><img src="images/equipment/水银鞋.png" alt="" /><span class="onstage">48.12%</span><span class="win">51.14%</span></span></div>')
  });
  $(".equipmentbtn4").click(function(){
    $(this).parent().find('.list').append('<div class="listdetail"><span class="equipmentbox"><img src="images/equipment/水银鞋.png" alt="" /><span class="onstage">48.12%</span><span class="win">51.14%</span></span></div>')
  });
$('.listdetail').find('img').click(function(){
    $(this).replaceWith(equipment);
    $(this).blur(function(){
        console.log(1);
        console.log($(this.val()));
        $(this).replaceWith('<img src="images/equipment/绿甲.png" alt="" />');
    })
});
$('.listdetail').children('span').children('span').click(function(){
    $(this).replaceWith(text);
});
