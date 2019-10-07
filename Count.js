 var count = 0;
$("html").click(function() {
    count++;
    var firsttext,secondtext;
    if(count == 10) {
        minutePlay();
        secondPlay();
        firsttext = 'Good Design is as Little Design as Possible.';
        secondtext = 'Less is more.';
        
    } else if(count == 11) {
        minutePlay();
        count = 0;
        firsttext = $("ul.secondPlay li.active span p").text();
        secondtext = $("ul.secondPlay li.active span h1").text();
    }else {
        secondPlay();
        firsttext = $("ul.secondPlay li.active span p").text();
        secondtext = $("ul.secondPlay li.active span h1").text();

    }
    $(".txtprt1 .first-text").fadeOut(function () {
        $(".txtprt1 .first-text").text(firsttext).fadeIn();
        if (count == 0){
            $(".txtprt1 .first-text").css("font-size", "38px");
            $(".txtprt1 .first-text").css("line-height", "26px");
        }
        else{
            $(".txtprt1 .first-text").css("font-size", "29px");
            $(".txtprt1 .first-text").css("line-height", "35px");
        }
    })
    $(".txtprt1 .sec-text").fadeOut(function () {
        $(".txtprt1 .sec-text").text(secondtext).fadeIn();
        if (count == 0) {
            $(".txtprt1 .sec-text").css("font-size", "29px");
            $(".txtprt1 .sec-text").css("line-height", "34px");
        }
        else {
            $(".txtprt1 .sec-text").css("font-size", "16px");
            $(".txtprt1 .sec-text").css("line-height", "18px");
        }
    })
});


function secondPlay() {
$("body").removeClass("play");
var aa = $("ul.secondPlay li.active");

if (aa.html() == undefined) {
    aa = $("ul.secondPlay li").eq(0);
    aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");

}
else if (aa.is(":last-child")) {
    $("ul.secondPlay li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.secondPlay li").eq(0);
    aa.addClass("active")
        .closest("body")
        .addClass("play");
}
else {
    $("ul.secondPlay li").removeClass("before");
    aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");
}

}

function minutePlay() {
$("body").removeClass("play");
var aa = $("ul.minutePlay li.active");

if (aa.html() == undefined) {
    aa = $("ul.minutePlay li").eq(0);
    aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");

}
else if (aa.is(":last-child")) {
    $("ul.minutePlay li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.minutePlay li").eq(0);
    aa.addClass("active")
        .closest("body")
        .addClass("play");
}
else {
    $("ul.minutePlay li").removeClass("before");
    aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");
}

}