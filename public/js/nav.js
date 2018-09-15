$(document).ready(function(){
    $("#fixed-collapse-navbar").click(function(){
        $("#fixed-collapse-navbar").removeClass("navbar-collapse navbar-right collapse in");
        $("#fixed-collapse-navbar").addClass("navbar-collapse navbar-right collapse");
        $("#fixed-collapse-navbar").css("height", "1px");
        $("#fix-burger").removeClass("navbar-toggle");
        $("#fix-burger").addClass("navbar-toggle collapsed");
    });
});