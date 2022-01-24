function showPrice(){
    var oPrice = document.querySelector("#originalPrice").value;
    var rate = document.querySelector("#rate").value;

    if(oPrice > 0 && rate > 0){
        var savedPrice = oPrice * (rate / 100);
        var resultPrice = oPrice - savedPrice;

        document.querySelector("#showResult").innerHTML = "할인된 가격은 " + savedPrice + "원이고, 최종 가격은 " + resultPrice + "원입니다.";
    }
}
