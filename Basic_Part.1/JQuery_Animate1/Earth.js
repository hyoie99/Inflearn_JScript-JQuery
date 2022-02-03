$(document).ready(function(){
    // 지구 이미지 웹요소(노드) 찾아서 저장
    var $earth = $("#earth");
    // btn에 event 등록
    $("#btnStart").click(function(){
        $earth.animate({
            left : "480px"
        }, 1000);
    })
})
