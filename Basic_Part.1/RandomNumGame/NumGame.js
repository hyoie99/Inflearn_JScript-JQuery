var low = 0;
var high = 0;
var card = 0; // 정답

while(true){
    var count = 0; // 사용자의 시도 횟수
    low = 0;
    high = 99;
    card = Math.floor(Math.random() * 100); // 0 ~ 99까지의 난수를 발생 
    alert("정답을 맞춰보세요.");

    while(true){
        var n = 0;
        alert(low + " - " + high);
        count++;
        //alert("시도 횟수 : " + count + "번");

        n = parseInt(prompt("숫자 입력"));
        if(n > high || n < low){
            alert("값의 범위를 확인하세요.");
        }
        else{
            if(n == card){
                alert("정답!");
                break;
            }
            else if(n > card){
                alert("숫자를 낮춰보세요.");
                high = n;
            }
            else{
                alert("숫자를 높여보세요.");
                low = n;
            }
        }
    }
    alert("시도횟수 = " + count);
    var con = confirm("Retry?");
    if(con == false){
        break;
    }
}
