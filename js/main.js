$(document).ready(function(){

$("div.info").hide();
$(".button-1").css("background-color","rgb(229,0,40)");
$(".button-2").css("background-color","#989898");
$(".button-3").css("background-color","#989898");
$("div.video").hide();

$(".button-1").click(function(){
  $("div.interactive").show("slow");
	$(".button-1").css("background-color","rgb(229,0,40)");
	$(".button-2").css("background-color","#989898");
	$(".button-3").css("background-color","#989898");
  $("div.info").hide("slow");
	$("div.video").hide("slow");
});

$(".button-2").click(function(){
  $("div.interactive").hide("slow");
	$(".button-1").css("background-color","#989898");
	$(".button-2").css("background-color","rgb(24,144,237)");
	$(".button-3").css("background-color","#989898");
  $("div.info").show("slow");
	$("div.video").hide("slow");
});

$(".button-3").click(function(){
  $("div.interactive").hide("slow");
	$(".button-1").css("background-color","#989898");
	$(".button-2").css("background-color","#989898");
	$(".button-3").css("background-color","rgb(254,197,54)");
  $("div.info").hide("slow");
	$("div.video").show("slow");
});

});
