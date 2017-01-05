$(document).ready(function(){

  $("#b_click").click(function(){
      $("#p_click").append("Texto nuevo. ");
  });

  $("#b_mouseenter").mouseenter(function(){
    alert("has pasado el mouse por el boton");
  });

  $("#b_mouseleave").mouseleave(function(){
    alert("El mouse dejo de estar sobre el boton")
  });

  $("#i_focus").focus(function(){
    $(this).css("background-color","#848484")
  });

  $("#i_focus").blur(function(){
    $(this).css("background-color","#111111")
  });

  $("#db_dbclick").dblclick(function(){
    $("#p_dbclick").append("Texto nuevo.");
  });
});
