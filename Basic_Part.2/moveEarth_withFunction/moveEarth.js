 // 전역변수로 선언

var $earth = null;

$(document).ready(function(){
    initialize();
    startEvent();
});

// 전역변수 초기화
function initialize(){
    // 지구본 찾기
    $earth = $("#earth");
    
};

function startEvent(){
    // 버튼에 이벤트 등록
    $("#btnStart").click(function(){
        // 지구본 움직이기
        // 지구본 위치 값 구하기
        var x = parseInt($("#txtX").val());
        var y = parseInt($("#txtY").val());
        moveEarth(x, y);
    });
};

function moveEarth(x, y){
    if((x >= 0 && x <= 500) && (y >= 0 && y <= 300)){
        $earth.css({
            left : x,
            top : y
        })
    }
    else{
        alert("입력된 값이 범위를 벗어났습니다.");
    }
};
