$(function () {
  // this 키워드, onclick, 
  // 밑의 li가 제일 중요하다 -> li 안에 있는 이미지를 찾아야 한다.
  $('.img-thumb li').click(function () {
    // 여기서 'this'는 부모 사용자(.img-thumb)가 클릭한 li. 
    // 클릭 이벤트로 인해 this를 찾는다(interaction)
    // 그 밑에 이미지 scr값 읽음
    var thisSrc = $(this).children().attr('src');
    /*console.log('thisSrc');*/
    // 메인 이미지 변경
    $('.main-image img').attr('src', thisSrc);
  });

});