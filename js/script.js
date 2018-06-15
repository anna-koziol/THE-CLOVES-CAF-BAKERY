
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("Podłączono")
    $("#arrow").click(function () {
        $("#arrow").addClass("animation");
        setTimeout(function () {
            $("#content").css("display", "none");
            $("#more").css("display", "flex");
            $("#arrow").removeClass("animation");
        }, 2000);
    });

    $("#return").click(function () {
        $("#more").addClass("animationDown");
        setTimeout(function () {
            $("#more").css("display", "none");
            $("#content").css("display", "flex");
            $("#more").removeClass("animationDown");
        }, 1000);
    });
    
    $("#menu").click(function () {
        $("#content").css("display", "none");        
        $("#menuDiv").css("display", "flex");
        $("#menuDiv").addClass("animationOpacity");
        setTimeout(function () {
            $("#menuDiv").removeClass("animationOpacity");
        }, 1000);
        
    });

    $("#mainPage").click(function () {
        $("#content").css("display", "flex");
        $("#menuDiv").addClass("animationDown");
        setTimeout(function () {
            $("#menuDiv").css("display", "none");
            $("#menuDiv").removeClass("animationDown");
        }, 1000);
    });

});
