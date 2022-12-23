
var input=`<input class="description" placeholder="请输入技能描描述" type="textarea">`
$(".skill").on("click",".skillBtn",function(){
    $(this).replaceWith(input)
})
$(".skill").on("blur",".description",function(){
    $(this).parent().replaceWith(`<p style="color: #fff" class="col-7">${$(this).val()}
    <button class="skillBtn">修改技能描述</button>
  </p>`)
  alert("修改成功，再次点击该技能图标即可查看")
})