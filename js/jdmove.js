//轮播图
(function() {
    var timer = null;
    var num = 1;
    $(".l_u1").prepend($(".l_u1>li:last").clone());
    $(".l_u1").append($(".l_u1>li:eq(1)").clone());
    var iw = $(".l_u1>li:eq(1)")[0].clientWidth;
    moveFn($(".l_u1"), -iw);
    op();

    function op() {
        timer = setInterval(dsFn, 1000)
    }

    function cleFn() {
        clearInterval(timer);
        timer = null;
    }

    function dsFn() {
        num++;
        moveFn($(".l_u1"), num * -iw);
        transFn($(".l_u1"), "all 0.4s");
    }
    $(".l_u1")[0].addEventListener("transitionend", function() {
        if (num >= $(".l_u1>li").length - 1) {
            num = 1;
            moveFn($(".l_u1"), num * -iw);
            transFn($(".l_u1"), "none");
        }
        if (num <= 0) {
            num = $(".l_u1>li").length - 2;
            moveFn($(".l_u1"), num * -iw);
            transFn($(".l_u1"), "none");
        }
        $(".active").removeClass("active");
        $(".l_u2>li").eq(num - 1).addClass("active");
    })

    function moveFn(obj, a) {
        obj.css("webkitTransform", "translateX(" + a + "px)");
        obj.css("oTransform", "translateX(" + a + "px)");
        obj.css("msTransform", "translateX(" + a + "px)");
        obj.css("mozTransform", "translateX(" + a + "px)");
        obj.css("Transform", "translateX(" + a + "px)");
    }

    function transFn(obj, a) {
        obj.css("webkitTransition", a);
        obj.css("oTransition", a);
        obj.css("msTransition", a);
        obj.css("mozTransition", a);
        obj.css("oTransition", a);
    }

    var startX = 0;
    var cha = 0;
    $(".l_u1")[0].addEventListener("touchstart", function(e) {
        cleFn();
        startX = e.touches[0].clientX;
    })
    $(".l_u1")[0].addEventListener("touchmove", function(e) {
        cha = e.touches[0].clientX - startX;

    })
    $(".l_u1")[0].addEventListener("touchend", function(e) {

        if (cha < 0 && Math.abs(cha) > iw / 3) {
            num++;
        }
        if (cha > 0 && Math.abs(cha) > iw / 3) {
            num--;
        }
        num = num < 0 ? 0 : num;
        num = num > $(".l_u1>li").length - 2 ? $(".l_u1>li").length - 2 : num;
        console.log(num);
        moveFn($(".l_u1"), num * -iw);
        transFn($(".l_u1"), "all 0.4s");
        $(".active").removeClass("active");
        $(".l_u2>li").eq(num - 1).addClass("active");
        op();
    })


})();

//秒杀倒计时
(function() {
    var tim = document.getElementsByClassName("j_sk_h");
    var allTime = 60 * 60 * 3;
    var s = 0;
    var timer = null;
    timer = setInterval(op(), 1000);

    function bl(e) {
        return e >= 10 ? e : "0" + e;
    }

    function op() {
        allTime--;
        s = allTime % 60;
        tim[0].innerHTML = bl(parseInt(allTime / 3600));
        tim[1].innerHTML = bl(parseInt(allTime % 3600 / 60));
        tim[2].innerHTML = bl(s);
        s == 0 ? 59 : s;
        return op;
    }
})();

(function() {
    var oHeight = parseInt($(".lunbo").css("height"));
    window.addEventListener("scroll", function() {
        if (window.scrollY > 500) {
            $(".goback").css("display", "block");
        } else {
            $(".goback").css("display", "none");
        }
        $("header").css("background", "rgba(200,37,25," + window.scrollY / oHeight + ")")
    })
    $(".goback")[0].addEventListener("touchend", function() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    })
})()