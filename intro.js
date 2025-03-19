/*let degr = 0;
let dd = 157;

function myLoop() {
    setTimeout(function() {
        degr = degr + 3;
        dd = 157 + degr;
        document.querySelector('body').style.background = "linear-gradient(" + dd + "deg, rgba(2,0,36,1) 0%, #27274c 46%, rgba(47,112,139,1) 100%);";
        console.log(document.querySelector('body').style.background);
        console.log(dd)
        myLoop();
    }, 1000)
}
myLoop();*/
let degr = 0;

function myLoop() {
    setTimeout(function() {
        if (degr > 315 || degr < 45 || 225 > degr > 135){
            degr = degr + 3;
        }else{
            degr = degr + 1;
        }
        
        // 360도를 초과하면 다시 0으로 리셋
        if (degr >= 360) {
            degr = 0;
        }
        
        // `dd`에 `degr`을 추가하여 그라디언트 방향을 동적으로 설정
        
        // 배경색을 변경하고 log를 통해 확인
        document.querySelector('body').style.background = `linear-gradient(${degr}deg, rgba(2,0,36,1) 0%, #27274c 46%, rgba(47,112,139,1) 100%)`;
        
        // 콘솔로 확인
        console.log(`Background set to: ${degr}deg`);
        console.log(document.querySelector('body').style.background);
        
        // 반복 호출
        myLoop();
    }, 10); // 1초마다 반복
}

myLoop();
