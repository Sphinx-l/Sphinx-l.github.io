document.cookie="username='ljq'";
document.cookie="password='1234'"
$(".logbtn").click(function () {
  $(".logindiv").css("visibility", "visible");
});
$(".loginbtn").click(function () {
    console.log(111);
 if($('.usernamediv').val()=='ljq' && $('.passworddiv').val()=='1234'){
  $('.welcomediv').replaceWith('<div class="welcomediv"><p>亲爱的ljq,欢迎你</p></div>');
  $(".logindiv").css("visibility", "hidden");
 }
 else{
  $('.wrongpassword').show();
 }
});

$(".close").click(function () {
  $(".logindiv").css("visibility", "hidden");
});