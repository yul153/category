$(document).ready(function () {
  /* 서브메뉴*/
  $(".topMenuP").hover(function () {
    $(this).find(".p_sub_menu").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  }, function () {
    $(this).find(".p_sub_menu").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });

  $(".subMenuTitle li a").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".sub_category_menu").removeClass("active");
    $("#" + result).addClass("active");
  });

  $(".subMenuTitle li:first-child").click(function () {
    $(".subCtMn1").show();
  });
  $(".subMenuTitle li:nth-child(2)").click(function () {
    $(".subCtMn2").show();
  });
  $(".subMenuTitle li:last-child").click(function () {
    $(".subCtMn3").show();
  });


  /* 메인 슬라이드 */
  let $simg = $(".slide ul");
  let $simgli = $(".slide ul li");
  let $sbtn = $(".slide_indicator ul li");
  let $snext = $(".slide_prenex_btn .next");
  let $spre = $(".slide_prenex_btn .prev");
  let simg_w = $simgli.width();
  let simg_n = $simgli.length;
  let soldidx = 0;
  let sindex = 0;

  function slideImg(sindex) {
    targetX = -(sindex * simg_w)
    $simg.stop().animate({ left: targetX }, 600);
    $sbtn.eq(soldidx).removeClass("active");
    $sbtn.eq(sindex).addClass("active");
    soldidx = sindex;
  };

  function slideAuto() {
    sindex++;
    if (sindex == simg_n) {
      sindex = 0;
    }
    slideImg(sindex);
  };
  auto = setInterval(slideAuto, 4000);

  //인디케이터
  $sbtn.click(function () {
    clearInterval(auto);
    $(".play").hide();
    $(".pause").show();
    sindex = $(this).index();
    slideImg(sindex);
    auto = setInterval(slideAuto, 4000);
  });

  // 좌우버튼
  $spre.click(function () {
    clearInterval(auto);
    $(".play").hide();
    $(".pause").show();
    sindex--;
    if (sindex < 0) {
      sindex = simg_n - 1;
    }
    slideImg(sindex);
    auto = setInterval(slideAuto, 4000);
  });

  $snext.click(function () {
    clearInterval(auto);
    $(".play").hide();
    $(".pause").show();
    sindex++;
    if (sindex == simg_n) {
      sindex = 0;
    }
    slideImg(sindex);
    auto = setInterval(slideAuto, 4000);
  });

  // 재생/정지 버튼
  $(".slide_plst_btn .play").hide();

  $(".slide_plst_btn .play").click(function () {
    auto = setInterval(slideAuto, 4000);
    $(".play").hide();
    $(".pause").show();
  });

  $(".slide_plst_btn .pause").click(function () {
    clearInterval(auto);
    $(".pause").hide();
    $(".play").show();
  });



  /* 솔루션이미지 */
  $(".solution_category li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".solution_image ul li").removeClass("active");
    $("#" + $(this).find("a").attr("data-img")).addClass("active");
  });



  /* best 이미지 */
  let banner_b = $(".best1 ul li").width();

  $(".best1 ul li:last").prependTo(".best1 ul");
  $(".best1 ul").css({ left: -banner_b });

  function bannerAuto() {
    $(".best1 ul").stop().animate({ left: "-=" + banner_b + "px" }, 500, function () {
      $(".best1 ul li:first-child").appendTo(".best1 ul");
      $(this).css({ left: -banner_b });
    });
  };
  let bauto = setInterval(bannerAuto, 3000);

  $(".best1").hover(function () {
    clearInterval(bauto);
  }, function () {
    bauto = setInterval(bannerAuto, 3000);
  });


  /* 탑버튼 상단 안보이게 */
  $(window).scroll(function () {
    let position = $(window).scrollTop();

    if (position > 200) {
      $(".top").addClass("active");
    } else {
      $(".top").removeClass("active");
    }
  });

});