//轮播图
(function() {

    var arr = [
        './img/lunbo3.jpg.dpg.jpg',
        './img/lunbo4.jpg',
        './img/lunbo5.jpg.dpg.jpg',
        './img/lunbo6.jpg',
        './img/lunbo7.jpg.dpg.jpg',
        './img/lunbo8.jpg.dpg.jpg',
        './img/lunbo1.jpg',
        './img/lunbo2.jpg.dpg.png'
    ]
    var timer = null;
    var index = -1;
    var sum = 0;
    $(".l_u2>li").eq(0).css("backgroundColor", "red").siblings().css("backgroundColor", "white");
    lunbo();

    function lunbo() {
        timer = setInterval(open, 1000);
    }

    function open() {
        index++;
        var oLi = document.querySelectorAll(".l_u1>li");
        let aLeft = parseInt(window.getComputedStyle($(".l_u1>li:eq(0)")[0]).left);
        let bWidth = parseInt(window.getComputedStyle($(".l_u1")[0]).width);
        $(".l_u1>li").css("transition", "all 0.5s")
        $(".l_u1>li:eq(0)").css("left", "-100%");
        $(".l_u1>li:eq(1)").css("left", "0%");
        oLi[0].addEventListener("transitionend", function() {
            $(".l_u1>li").eq(0).remove();
            if (index >= 0) {
                creatE();
            }
            sum++;
            $(".l_u2>li").eq(sum).css("backgroundColor", "red").siblings().css("backgroundColor", "white");
            sum = sum == 7 ? -1 : sum;
        })
        index = index == 8 ? 0 : index;
    }

    function creatE() {
        $(".l_u1").append($("<li><a href ='#' ><img src =' " + arr[index] + "'alt = ''></a></li>"));
    }

    function creatEs() {
        var asd = index - 2;
        asd == -1 ? 7 : asd;
        asd == -2 ? 6 : asd;

        $(".l_u1>li:eq(0)").before($("<li><a href ='#' ><img src =' " + arr[asd] + "'alt = ''></a></li>"));
        $(".l_u1>li:eq(0)").css("left", "-100%");
    }

    function cle() {
        clearInterval(timer);
        timer = null;
    }
    var qiX = 0;
    var moX = 0;

    var ulW = parseInt(window.getComputedStyle($(".l_u1")[0]).width);
    $(".l_u1")[0].addEventListener("touchstart", function(e) {
        cle();
        creatEs();
        $(".l_u1>li:eq(2)").css("left", "100%");
        qiX = e.changedTouches[0].screenX;

    })

    $(".l_u1")[0].addEventListener("touchmove", function(e) {

        moX = e.changedTouches[0].screenX;
        $(".l_u1>li").css("transition", "none");
        $(".l_u1>li:eq(1)").css("left", (moX - qiX) + "px");

        if ((qiX - moX) > 0) {
            $(".l_u1>li:eq(2)").css("left", ulW - (qiX - moX) + "px");

        }
        if ((qiX - moX) < 0) {
            $(".l_u1>li:eq(0)").css("left", -ulW + (moX - qiX) + "px");
        }



    })
    $(".l_u1")[0].addEventListener("touchend", function(e) {
        $(".l_u1>li").eq(0).remove();
        lunbo();
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