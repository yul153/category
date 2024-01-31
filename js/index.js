$(document).ready(function () {

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
  // let sch = true;
  // $(".search1").hover(function () {
  //   $(".srch").show();
  //   if (sch) {
  //     $("#sc").stop().animate({ "right": "195px" }, 500, "easeOutBack");
  //     sch = false;
  //   } else {
  //     $("#sc").stop().animate({ "right": "0px" }, 200);
  //     sch = true;
  //   }
  // }, function () {
  //   $(".srch").hide();
  // }
  // );


  //메인 슬라이드
  let $simg=$(".slide ul"); //슬라이드는 전체부모도 필요하고
  let $simgli=$(".slide ul li"); //자기부모도 필요함
  let $sbtn=$(".slide_btn ul li"); //경로가져오는것만 $ 붙임
  let $snext=$(".slide_side_btn .nex");
  let $spre=$(".slide_side_btn .pre");
  let simg_w=$simgli.width(); //이미지의 가로너비
  let simg_n=$simgli.length; //이미지의 총개수
  let soldidx=0; //기존이미지
  let sindex=0; //선택된 새이미지

  //index번째 비주얼이미지 이동하는 함수생성
  function slideImg(sindex){
    targetX=-(sindex*simg_w) //움직이는 거리(너비), 왼쪽으로 이동할거기때문에 "-" 붙임
    $simg.stop().animate({left:targetX},600); //위에서 계산한 거리만큼 움직임
    $sbtn.eq(soldidx).removeClass("active"); //기존버튼 활성화
    $sbtn.eq(sindex).addClass("active"); //선택버튼 활성화
    soldidx=sindex;
  };

  //자동함수 생성
  function slideAuto(){
    sindex++;
    if(sindex == simg_n){ //simg_n은 이미지 개수 5, index는 0,1,2,3,4
      sindex=0;
    }
    slideImg(sindex);
  };
  auto = setInterval(slideAuto,4000);

  //하단버튼
  $sbtn.click(function(){
    clearInterval(auto);
    $(".play").hide();
    $(".stop").show();
    sindex=$(this).index();
    slideImg(sindex);
    auto = setInterval(slideAuto,4000);
  });



//솔루션이미지

  let banner_w=$(".solution_image ul").width();

  $(".solution_image ul li:last").prependTo(".solution_image ul");
  //목록 마지막 이미지를 목록 안의 가장 앞으로 배치
  $(".solution_image ul").css({left:-banner_w});
  //첫번째 이미지가 보여야 하므로 앞으로 온 맨뒤 이미지를 왼쪽으로 한 칸 밀어두기

  //자동으로 슬라이드 함수 생성
  function bannerAuto(){ //bannerAuto라는 함수를 생성
    $(".solution_image ul").stop().animate({left:"-="+banner_w+"px"},500,function(){ //콜백함수, 앞에 먼저 하고 뒤에 하라고 넣은것
      $(".solution_image ul li:first-child").appendTo(".solution_image ul"); //첫번째 이미지가 맨뒤로 이동
      $(this).css({left:-banner_w}); //다음 움직임을 위해 초기화(최종목적지)
    });
  };
  bauto = setInterval(bannerAuto,3000);

  //마우스를 올리면 슬라이드 자동함수 멈추고, 마우스를 내리면 다시 자동함수 실행
  $(".solution_image").hover(function(){
    clearInterval(bauto);
  }, function(){
    bauto = setInterval(bannerAuto,3000); //3~5초
  });
});



//best 이미지
let banner_w=$(".best1 ul li").width()+10;

$(".best1 ul li:last").prependTo(".best1 ul");
//목록 마지막 이미지를 목록 안의 가장 앞으로 배치
$(".best1 ul").css({left:-banner_w});
//첫번째 이미지가 보여야 하므로 앞으로 온 맨뒤 이미지를 왼쪽으로 한 칸 밀어두기

//자동으로 슬라이드 함수 생성
function bannerAuto(){ //bannerAuto라는 함수를 생성
  $(".best1 ul").stop().animate({left:"-="+banner_w+"px"},500,function(){ //콜백함수, 앞에 먼저 하고 뒤에 하라고 넣은것
    $(".best1 ul li:first-child").appendTo(".best1 ul"); //첫번째 이미지가 맨뒤로 이동
    $(this).css({left:-banner_w}); //다음 움직임을 위해 초기화(최종목적지)
  });
};
let bauto = setInterval(bannerAuto,4000);

//마우스를 올리면 슬라이드 자동함수 멈추고, 마우스를 내리면 다시 자동함수 실행
$(".best1").hover(function(){
  clearInterval(bauto);
}, function(){
  bauto = setInterval(bannerAuto,4000); //3~5초
});