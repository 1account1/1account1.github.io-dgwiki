let indx = "{기숙사}<br>{{이선관}}<br>&&&&以善館, *Bonitas**(善) 대건고의 교훈인 이선승지(以善勝之)에서 따왔다(이전 이름은 양업관).<br><br>&&&&주로 1학년을 위한 기숙사이나 2학년 소수 인원<br>&&&&또한 거주중이다(3-4층은 1학년, 1층은 2학년, 2층은 1학년과 2학년이 같이 거주한다)<br>&&&&화장실과 샤워실이 층마다 구비되어있다. 에어컨이 유일한 냉난방 시스템이다.<br>&&&&바로 뒤쪽이 봉화산이기 때문에 여름엔 종종 무당벌레가 나오곤 한다.<br>&&&&세 기숙사 중 가장 많은 호실을 자랑한다.<br><br>&&&&이선관 입구 모습+><br>&&&&ㅇㅁㅈ(https://i.namu.wiki/i/joyX9y51UE1cmIKJQv0nvjocqAxkJG_2FlfaQDUEJPdS-oXl_35Rpcbc4mypWvsaaWwXIyHBbehbmNfBUwqsBXxG3gP90erZ0IUAj4S6P4y94gobYJChkALzRCqJu1JO_HKvaWzd-oX0QBL4bqVakQ.webp)ㅇㅁㅈ<br>{{사랑관}}<br>&&&&*Caritas**(사랑, 자선)&&(이전 이름은 우정관)<br><br>&&&&2학년 기숙사 건물이다. 기존엔 ㄹㅋ(https://namu.wiki/w/%EB%B6%80%EC%98%81%EA%B7%B8%EB%A3%B9)ㄴㅇ(부영그룹)ㄴㅇ에서 기증한 동아리실 건물이였지만, 사설 기숙사가 폐쇠됨과<br>&&&&동시에 기숙사 건물로 리모델링 되었다. 화장실과 샤워실은 이선관과 동일하게 층마다 존재하고.<br>&&&&에어컨이 유일한 냉난방 시스템이다. 때문에 겨울에 바닥이 굉장히 차갑다.<br><br>&&&&사랑관 측면+><br>&&&&ㅇㅁㅈ(https://i.namu.wiki/i/29BGADxSdbaSYpbIwQ91DQeVW0FjAuGd55b_RfSjiXo9y4df9FTRlOHxT0GtvuA-fgIdDYhaHpkVx2MoAp7WmPEws6P4ck9uOSdUKe_YMUUygikcNXy4XOL5NjJqugBcyvLSztvlOaccY1P1H9o8pg.webp)ㅇㅁㅈ<br>{{진리관}}<br>&&&&*Veritas**(진리)<br><br>&&&&가장 신축 기숙사며 3학년 전용이다. <br>&&&&화장실이 방마다 있는 유일한 기숙사이다. 또한 보일러가 있는 유일한 기숙사이다.<br>&&&&3학년이 되면 누구나 거주할 수 있다.(단 예신은 불가능 -> 사랑관에 살게된다.)<br><br>&&&&진리관 정면+><br>&&&&ㅇㅁㅈ(https://i.namu.wiki/i/_M_Sfjkxr25rostX6onnoNxlAK-yv9zAuSJvYK7erHwSaeqZhokeX8muFkAR7_gYeVtrboaeSxdmBJfVVP884BkVyhig8uYogrocVi_zefDamzl-7bSPcJaTWzsjz8M-tBWB09pencvUwxlZcxkXXA.webp)ㅇㅁㅈ";
let neckslice = "";
let mokcha = "";
let neckkick = "";
let h1n = 1;
let h2n = 1;
let h3n = 1;
function supersecret(){
    if (document.getElementById('ed').value.includes('<br>')){
        document.getElementById('ed').value = document.getElementById('ed').value.replaceAll("<br>", "\n");
    }else{
        document.getElementById('ed').value = document.getElementById('ed').value.replaceAll(/\n/g, "<br>");
    }
}
function conver(){
    indx = indx.replaceAll("->", "→");
    indx = indx.replaceAll("<-", "←");
    indx = indx.replaceAll("+>", "↓");
    indx = indx.replaceAll("<+", "↑");
    indx = indx.replaceAll("ㅍㅍ", "</table>");
    indx = indx.replaceAll("ㅍ", "<div><table>");
    indx = indx.replaceAll("/*&", "</td><td>");
    indx = indx.replaceAll("[[&", "<tr><td>");
    indx = indx.replaceAll("/*", "</td><td style='border: solid; border-width='1'>");
    indx = indx.replaceAll("[[", "<tr><td style='border: solid; border-width='1'>");
    indx = indx.replaceAll("]]", "</td></tr>");
    indx = indx.replaceAll("ㄹㅋ(", "<a href='");
    indx = indx.replaceAll(")ㄴㅇ(", "'>");
    indx = indx.replaceAll(")ㄴㅇ", "</a>");
    indx = indx.replaceAll("**", "</strong>");
    indx = indx.replaceAll("*", "<strong>");
    indx = indx.replaceAll("ㅇㅁㅈ(", "<img src='");
    indx = indx.replaceAll(")ㅇㅁㅈ", "'>");
    indx = indx.replaceAll("/d", "<br>");
    indx = indx.replaceAll("{{{", "<h3 class='hed' class='t3'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
    indx = indx.replaceAll("}}}", "</h3>");
    indx = indx.replaceAll("{{", "<h2 class='hed' class='t2'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
    indx = indx.replaceAll("}}", "</h2>");
    indx = indx.replaceAll("{", "<h1 class='hed' class='t1'>");
    indx = indx.replaceAll("}", "</h1>");
    indx = indx.replaceAll("&&", "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
    indx = indx.replaceAll(/\n/g, "<br>");
    console.log(indx);
    document.getElementById('inp').innerHTML = indx;
    neckslice = document.getElementsByClassName('hed');
    for (i=0; i <= neckslice.length; i++){
        mokcha = mokcha + neckslice[i].localName + neckslice[i].innerHTML + "</div>";
        mokcha = mokcha.replaceAll("&nbsp;", "");
        if (mokcha.includes("h1")){
            mokcha = mokcha.replaceAll("h1", "<div>" + h1n + ". ");
            h1n++;
            h2n = 1;
        }
        if (mokcha.includes("h2")){
            mokcha = mokcha.replaceAll("h2", "<div>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + h2n + ". ");
            h2n++;
            h3n = 1;
        }
        if (mokcha.includes("h3")){
            mokcha = mokcha.replaceAll("h3", "<div>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + h3n + ". ");
            h3n++;
        }
        document.getElementById('inf').innerHTML = mokcha;
    }
    alert(mokcha);
}function converte(){
    indx = indx.replaceAll("->", "→");
    indx = indx.replaceAll("<-", "←");
    indx = indx.replaceAll("+>", "↓");
    indx = indx.replaceAll("<+", "↑");
    indx = indx.replaceAll("ㅍㅍ", "</table>");
    indx = indx.replaceAll("ㅍ", "<div><table>");
    indx = indx.replaceAll("/*&", "</td><td>");
    indx = indx.replaceAll("[[&", "<tr><td>");
    indx = indx.replaceAll("/*", "</td><td style='border: solid; border-width='1'>");
    indx = indx.replaceAll("[[", "<tr><td style='border: solid; border-width='1'>");
    indx = indx.replaceAll("]]", "</td></tr>");
    indx = indx.replaceAll("ㄹㅋ(", "<a href='");
    indx = indx.replaceAll(")ㄴㅇ(", "'>");
    indx = indx.replaceAll(")ㄴㅇ", "</a>");
    indx = indx.replaceAll("**", "</strong>");
    indx = indx.replaceAll("*", "<strong>");
    indx = indx.replaceAll("ㅇㅁㅈ(", "<img width='50%' src='");
    indx = indx.replaceAll(")ㅇㅁㅈ", "'>");
    indx = indx.replaceAll("/d", "<br>");
    indx = indx.replaceAll("{{{", "<h4 class='hed' class='t3'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
    indx = indx.replaceAll("}}}", "</h4>");
    indx = indx.replaceAll("{{", "<h3 class='hed' class='t2'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
    indx = indx.replaceAll("}}", "</h3>");
    indx = indx.replaceAll("{", "<h2 class='hed' class='t1'>");
    indx = indx.replaceAll("}", "</h2>");
    indx = indx.replaceAll("&&", "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
    indx = indx.replaceAll(/\n/g, "<br>");
    console.log(indx);
    document.getElementById('inpp').innerHTML = indx;
}
function conv(){
    indx = document.getElementById('ed').value;
    //document.getElementById(inf).innerHTML = indx.match(/{(.*?)}/);
    conver();
}
function convv(){
    indx = document.getElementById('ed').value;
    //document.getElementById(inf).innerHTML = indx.match(/{(.*?)}/);
    converte();
}
document.addEventListener("DOMContentLoaded", function(){
    conver();
})
conv();

function shc(ip){
    ip = ip.replaceAll(" ", "");
}