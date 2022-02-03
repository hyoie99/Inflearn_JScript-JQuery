function hello(){
    var numRan = Math.floor(Math.random() * 20);
    var numRan2 = Math.floor(Math.random() * 40);
    var numRan3 = Math.floor(Math.random() * 3) + 100;

    // text 흔들기
    $(".text").css({
        "bottom" : numRan,
        "left" : numRan2
    });

    // 배경 확대
    $(".hello").css({
        "background-size" : numRan3 + "%"
    });
}

// 0.01초마다 hello() 함수 호출
setInterval(hello, 10);
