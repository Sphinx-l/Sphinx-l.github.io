$(".remove").click(function(){
    if($(this).parent().parent().parent().children().length>1)
    $(this).parent().parent().remove();
    else
    alert("不能全删了呀，他可是独苗了啊")
});