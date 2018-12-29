$(document).ready(function(){
$("#c").on("click",function(){
  form.textinput.value="";
})
 $("#slash").on("click",function(){
  form.textinput.value=form.textinput.value + "/";
})
  $("#mult").on("click",function(){
    form.textinput.value=form.textinput.value + "*";
})
  $("#seven").on("click",function(){
  form.textinput.value=form.textinput.value + "7";
})
  $("#eight").on("click",function(){
  form.textinput.value=form.textinput.value + "8";
})
  $("#nine").on("click",function(){
  form.textinput.value=form.textinput.value + "9";
})
  $("#minu").on("click",function(){
  form.textinput.value=form.textinput.value + "-";
})
  $("#four").on("click",function(){
  form.textinput.value=form.textinput.value + "4";
})
  $("#five").on("click",function(){
  form.textinput.value=form.textinput.value + "5";
})
  $("#six").on("click",function(){
  form.textinput.value=form.textinput.value + "6";
})
 $("#plus").on("click",function(){
  form.textinput.value=form.textinput.value + "+";
})
  $("#one").on("click",function(){
  form.textinput.value=form.textinput.value + "1";
})
  $("#two").on("click",function(){
  form.textinput.value=form.textinput.value + "2";
})
  $("#three").on("click",function(){
  form.textinput.value=form.textinput.value + "3";
})
  $("#equal").on("click",function(){
    var exp=form.textinput.value;
    if (exp){
  form.textinput.value=eval(exp);}
})
  $("#zero").on("click",function(){
  form.textinput.value=form.textinput.value + "0";
})
  $("#point").on("click",function(){
  form.textinput.value=form.textinput.value + ".";
})
  $("#back").on("click",function(){
   var res=form.textinput.value;         
  form.textinput.value=res.substring(0,res.length-1);
})

  })