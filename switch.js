var skill=document.querySelector(".left").querySelector('.s');
var talent=document.querySelector(".left").querySelector('.t');
var equipment=document.querySelector(".left").querySelector('.e');
var skilldiv=document.querySelector('.skill');
var talentdiv=document.querySelector('.talent');
var equipmentdiv=document.querySelector('.equipment');
skill.addEventListener('mouseover',function(){
  skilldiv.style.display="block";
  talentdiv.style.display='none';
  equipmentdiv.style.display="none";
})

talent.addEventListener('mouseover',function(){
  skilldiv.style.display="none";
  talentdiv.style.display="block";
  equipmentdiv.style.display="none";
})
equipment.addEventListener('mouseover',function(){
  skilldiv.style.display="none";
  talentdiv.style.display="none";
  equipmentdiv.style.display="block";
})
alert(1);