$(document).ready(function() {
    $(".link1").click(function() {
        $(".link1").hide();
        $(".hide1").show();
    });
    $(".hide1").click(function() {
        $(".hide1").hide();
        $(".link1").show();
    });
    $(".link2").click(function() {
        $(".link2").hide();
        $(".hide2").show();
    });
    $(".hide2").click(function() {
        $(".hide2").hide();
        $(".link2").show();
    });
    $(".link3").click(function() {
        $(".link3").hide();
        $(".hide3").show();
    });
    $(".hide3").click(function() {
        $(".hide3").hide();
        $(".link3").show();
    });
});