$(document).ready(function () {
  /* 서브메뉴*/
  // 서브메뉴 오버
  $(".topMenuP").hover(function () {
    $(this).find(".p_sub_menu").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  }, function () {
    $(this).find(".p_sub_menu").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });

  // 서브메뉴 카테고리별 클릭
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

  // 검색창 호버
  /*   let src = true;
    $(".search1").click(function () {
      $(".srch").show();
      if (src) {
        $(".srch").stop().animate({ "right": "195px" }, 500, "easeOutBack");
        src = false;
      } else {
        $(".srch").stop().animate({ "right": "0px" }, 200);
        src = true;
      }
    }, function () {
      $(".srch").hide();
    }
    ); */


  /* 메인 슬라이드 */
  let $simg = $(".slide ul");
  let $simgli = $(".slide ul li");
  let $sbtn = $(".slide_btn ul li");
  let $snext = $(".slide_side_btn .nex");
  let $spre = $(".slide_side_btn .pre");
  let simg_w = $simgli.width();
  let simg_n = $simgli.length;
  let soldidx = 0;
  let sindex = 0;

  //index번째 비주얼이미지 이동하는 함수생성
  function slideImg(sindex) {
    targetX = -(sindex * simg_w)
    $simg.stop().animate({ left: targetX }, 600);
    $sbtn.eq(soldidx).removeClass("active");
    $sbtn.eq(sindex).addClass("active");
    soldidx = sindex;
  };

  //자동함수 생성
  function slideAuto() {
    sindex++;
    if (sindex == simg_n) {
      sindex = 0;
    }
    slideImg(sindex);
  };
  auto = setInterval(slideAuto, 4000);

  //하단버튼
  $sbtn.click(function () {
    clearInterval(auto);
    $(".play").hide();
    $(".stop").show();
    sindex = $(this).index();
    slideImg(sindex);
    auto = setInterval(slideAuto, 4000);
  });



  /* 솔루션이미지 */
  let banner_s = $(".solution_image ul li").width();

  $(".solution_image ul li:last").prependTo(".solution_image ul");
  $(".bsolution_image ul").css({ left: -banner_s });

  //자동으로 슬라이드 함수 생성
  function sbannerAuto() {
    $(".solution_image ul").stop().animate({ left: "-=" + banner_s + "px" }, 500, function () {
      $(".solution_image ul li:first-child").appendTo(".solution_image ul");
      $(this).css({ left: -banner_s });
    });
  };
  let sauto = setInterval(sbannerAuto, 3000);

  //마우스를 올리면 슬라이드 자동함수 멈추고, 마우스를 내리면 다시 자동함수 실행
  $(".solution_image").hover(function () {
    clearInterval(sauto);
  }, function () {
    sauto = setInterval(sbannerAuto, 3000);
  });





  /* best 이미지 */
  let banner_b = $(".best1 ul li").width();

  $(".best1 ul li:last").prependTo(".best1 ul");
  $(".best1 ul").css({ left: -banner_b });

  //자동으로 슬라이드 함수 생성
  function bannerAuto() {
    $(".best1 ul").stop().animate({ left: "-=" + banner_b + "px" }, 500, function () {
      $(".best1 ul li:first-child").appendTo(".best1 ul");
      $(this).css({ left: -banner_b });
    });
  };
  let bauto = setInterval(bannerAuto, 3000);

  //마우스를 올리면 슬라이드 자동함수 멈추고, 마우스를 내리면 다시 자동함수 실행
  $(".best1").hover(function () {
    clearInterval(bauto);
  }, function () {
    bauto = setInterval(bannerAuto, 3000);
  });
});