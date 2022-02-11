$(document).ready(function(){
    init();
    playEvent();
});

var $images = null;

function init(){
    $images = $("#container1 img");
};

function playEvent(){
    $("#btnStart").click(function(){
        showImages();
    })
};

function showImages(){
    var length = $images.length;

    for(var i=0; i<length; i++){
        var $img = $images.eq(i);
        // 위치 값 구하기
        var x = 100 + ((i % 3) * 200); // 100 300 500 100 300 500 ...
        var y = 100 + (parseInt(i/3) * 200); // 100 100 100 300 300 ...

        // 이미지 위치 설정
        $img.css({
            left : x,
            top : y
        })
    }
}
