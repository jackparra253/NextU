// JavaScript source code
$(document).ready(function () {
    $("#animar").click(function () {
        $("div").animate({ "width": "2000px" }, 10000)
    });

    $("#detener").click(function () {
        $("div").stop();
    })
})
