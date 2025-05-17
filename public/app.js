let indx = '{기숙사}<br>{{이선관}}<br>&&&&以善館, *Bonitas**(善) 대건고의 교훈인 이선승지(以善勝之)에서 따왔다(이전 이름은 양업관).<br><br>&&&&주로 1학년을 위한 기숙사이나 2학년 소수 인원<br>&&&&또한 거주중이다(3-4층은 1학년, 1층은 2학년, 2층은 1학년과 2학년이 같이 거주한다)<br>&&&&화장실과 샤워실이 층마다 구비되어있다. 에어컨이 유일한 냉난방 시스템이다.<br>&&&&바로 뒤쪽이 봉화산이기 때문에 여름엔 종종 무당벌레가 나오곤 한다.<br>&&&&세 기숙사 중 가장 많은 호실을 자랑한다.<br><br>&&&&이선관 입구 모습+><br>&&&&ㅇㅁㅈ(https://i.namu.wiki/i/joyX9y51UE1cmIKJQv0nvjocqAxkJG_2FlfaQDUEJPdS-oXl_35Rpcbc4mypWvsaaWwXIyHBbehbmNfBUwqsBXxG3gP90erZ0IUAj4S6P4y94gobYJChkALzRCqJu1JO_HKvaWzd-oX0QBL4bqVakQ.webp)ㅇㅁㅈ<br>{{사랑관}}<br>&&&&*Caritas**(사랑, 자선)&&(이전 이름은 우정관)<br><br>&&&&2학년 기숙사 건물이다. 기존엔 ㄹㅋ(https://namu.wiki/w/%EB%B6%80%EC%98%81%EA%B7%B8%EB%A3%B9)ㄴㅇ(부영그룹)ㄴㅇ에서 기증한 동아리실 건물이였지만, 사설 기숙사가 폐쇠됨과<br>&&&&동시에 기숙사 건물로 리모델링 되었다. 화장실과 샤워실은 이선관과 동일하게 층마다 존재하고.<br>&&&&에어컨이 유일한 냉난방 시스템이다. 때문에 겨울에 바닥이 굉장히 차갑다.<br><br>&&&&사랑관 측면+><br>&&&&ㅇㅁㅈ(https://i.namu.wiki/i/29BGADxSdbaSYpbIwQ91DQeVW0FjAuGd55b_RfSjiXo9y4df9FTRlOHxT0GtvuA-fgIdDYhaHpkVx2MoAp7WmPEws6P4ck9uOSdUKe_YMUUygikcNXy4XOL5NjJqugBcyvLSztvlOaccY1P1H9o8pg.webp)ㅇㅁㅈ<br>{{진리관}}<br>&&&&*Veritas**(진리)<br><br>&&&&가장 신축 기숙사며 3학년 전용이다. <br>&&&&화장실이 방마다 있는 유일한 기숙사이다. 또한 보일러가 있는 유일한 기숙사이다.<br>&&&&3학년이 되면 누구나 거주할 수 있다.(단 예신은 불가능 -> 사랑관에 살게된다.)<br><br>&&&&진리관 정면+><br>&&&&ㅇㅁㅈ(https://i.namu.wiki/i/_M_Sfjkxr25rostX6onnoNxlAK-yv9zAuSJvYK7erHwSaeqZhokeX8muFkAR7_gYeVtrboaeSxdmBJfVVP884BkVyhig8uYogrocVi_zefDamzl-7bSPcJaTWzsjz8M-tBWB09pencvUwxlZcxkXXA.webp)ㅇㅁㅈ';
let neckslice = ""; //내용에서 제목부분만
let mokcha = "";
let neckkick = "";
let h1n = 1;
let h2n = 1;
let h3n = 1;
let h1nn = 1;
let h2nn = 1;
let h3nn = 1;
let skrrr;
let skrr;
let skr;
let ht3;
let ht2;
let ht1;
let lnn = [0, 0, 0];
let whol;
let tomat
let indxx = "";
let apll;
let selll;
let settt;
let username = "DART";
let inddx;
let sp = 0;
let likedp = [false, false, false];
let ddd = new Date().getDay();
settt = 100 + ddd * 35;
//const db = require('./db'); //db 객체 불러기기
//const wiki = db.prepare('SELECT * FROM wiki').all();
let params = new URLSearchParams(window.location.search);
let wikiname = params.get("wikie");

function slideup(){
    if (apll < 11){
        document.getElementById('msggg').style.top = 70 - apll + "px";
        document.getElementById('msggg').style.opacity = 1 - (apll * 0.1);
        setTimeout(function(){
            apll++;
            slideup();
        }, 10)
    }else{
        document.getElementById('msgg').style.display = 'none';
        document.getElementById('msggg').style.opacity = 0;
    }
}
function slidedown(){
    if (apll < 21){
        document.getElementById('msggg').style.top = 50 + apll + "px";
        document.getElementById('msggg').style.opacity = apll * 0.05;
        setTimeout(function(){
            apll++;
            slidedown();
        }, 10)
    }else{
        setTimeout(function(){
            apll = 0;
            slideup();
            document.getElementById('msggg').style.opacity = 1;
        }, 1500)
    }
}
function alerte(innout){
    document.getElementById('msgg').style.display = 'block';
    apll = 0;
    document.getElementById('msggg').style.opacity = 0;
    document.getElementById('msgg').innerHTML = innout;
    slidedown();
}
async function upl(event){
    event.preventDefault();
    let namew = wikiname;
    let indxxx = document.getElementById('ed').value;
    let todd = new Date();
    let editlog = "편집자 : " + username + " 수정본 업로드일 및 시간 : " + todd;
    const res = await fetch('/wiki', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ namew, indxxx, editlog})
    });

    const data = await res.json();
    console.log('서버 응답:', data);
}
async function upel(event){
    event.preventDefault();
    let title = wikiname;
    let indexx = document.getElementById('ed').value;
    let author = document.getElementById('auth').value;
    const res = await fetch('/econo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, indexx, author })
    });

    const data = await res.json();
    console.log('서버 응답:', data);
}
async function uplc(onetwothree){
    let dtl = ddd + ":" + onetwothree;
    let cmt = document.getElementById('cin' + onetwothree).value;
    let user = "DART"
    const res = await fetch('/babc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dtl, cmt, user})
    });

    const data = await res.json();
    console.log('서버 응답:', data);
    document.getElementById('tab' + onetwothree).innerHTML = '<td class="ctd"><strong>익명의대건인</strong></td></tr><tr><td class="ctd">' + cmt + '</td></tr><br>' + document.getElementById('tab' + onetwothree).innerHTML;
}

function selup(){
    selll = 0;
    settt = 100 + ddd * 35;
    if(selll < 36){
        document.getElementById("sel").
        setTimeout(function(){
            apll = 0;
            slideup();
            document.getElementById('msggg').style.opacity = 1;
        }, 10)
    }
}

async function opcom(numb){
    if (document.getElementById("commo" + numb).style.display == "none"){
        document.getElementById("commo" + numb).style.display = "block";
        document.getElementById("co" + numb).style.display = "block";
        const res = await fetch(`/babc/` + ddd + ":" + numb);
        const data = await res.json();
        data.forEach(item => {
            console.log(item.cmt);
            document.getElementById('tab' + numb).innerHTML = '<td class="ctd"><strong>익명의대건인</strong></td></tr><tr><td class="ctd">' + item.cmt + '</td></tr><br>' + document.getElementById('tab' + numb).innerHTML;
        }); 
    }else{
        document.getElementById("commo" + numb).style.display = "none";
        document.getElementById("co" + numb).style.display = "none";
        document.getElementById('tab' + numb).innerHTML = ""
    }
}

function homesweethome(){
    alerte("집가고싶다🧡");
}
async function likeit(onetwothree){
    document.getElementById('lk' + onetwothree).src = "liked.png";
    if (likedp[onetwothree]){
        console("nomorelike");
    }else{
        lnn[onetwothree]++;
        document.getElementById('like' + onetwothree).innerHTML = lnn[onetwothree];
    }
    likedp[onetwothree] = true;
    //백
    let dayl = ddd;
    let likeb = lnn[0];
    let likel = lnn[1];
    let liked = lnn[2];
    const res = await fetch('/babl/' + ddd, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ likeb, likel, liked})
    });

    const data = await res.json();
    console.log('서버 응답:', data);

}
async function likers(){
    const res = await fetch('/babl/reset', {
        method: 'PUT',
    });
  
}
//개발자 테스트용 함수(안중요함)
function supersecret(){
    if (document.getElementById('ed').value.includes('<br>')){
        document.getElementById('ed').value = document.getElementById('ed').value.replaceAll("<br>", "\n");
    }else{
        document.getElementById('ed').value = document.getElementById('ed').value.replaceAll(/\n/g, "<br>");
    }
    alerte("뾰로롱✨")
}
function srch(){
    window.location.href = "Index.html?wikie=" + document.getElementById('schb').value;
}
//위키 편집용 기호를 html 요소로 변환 (+내용에서 일부 발췌해 목차로 변환)
function conver(){
    document.getElementById('witie').innerHTML = wikiname;
    if (indx.includes('ㄷㅇㄹㅌ')){
        indx = indx.replaceAll("ㄷㅇㄹㅌ", "Index.html?wikie=");
        window.location.href = indx;
    }
    indx = indx.replaceAll("->", "→");
    indx = indx.replaceAll("<-", "←");
    indx = indx.replaceAll("+>", "↓");
    indx = indx.replaceAll("<+", "↑");
    indx = indx.replaceAll("ㅍㅍ", "</table>");
    indx = indx.replaceAll("ㅍ", "<div><table>");
    indx = indx.replaceAll("/*&", "</td><td>");
    indx = indx.replaceAll("[[&", "<tr><td>");
    indx = indx.replaceAll("[2[", "<tr><td style='border: solid; border-width='1' colspan=2>");
    indx = indx.replaceAll("/*", "</td><td style='border: solid; border-width='1'>");
    indx = indx.replaceAll("[[", "<tr><td style='border: solid; border-width='1';>");
    indx = indx.replaceAll("]]", "</td></tr>");
    indx = indx.replaceAll("ㄹㅋ(", "<a href='");
    indx = indx.replaceAll(")ㄴㅇ(", "'>");
    indx = indx.replaceAll(")ㄴㅇ", "</a>");
    indx = indx.replaceAll("**", "</strong>");
    indx = indx.replaceAll("*", "<strong>");
    indx = indx.replaceAll("ㅇㅁㅈ(", "<img width='300px' src='");
    indx = indx.replaceAll(")ㅇㅁㅈ", "'>");
    indx = indx.replaceAll("/d", "<br>");/*
    indx = indx.replaceAll("{{{", "<h3 class='hed' class='t3'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
    indx = indx.replaceAll("}}}", "</h3>");
    indx = indx.replaceAll("{{", "<h2 class='hed' class='t2'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
    indx = indx.replaceAll("}}", "</h2>");
    indx = indx.replaceAll("{", "<h1 class='hed' class='t1'>");
    indx = indx.replaceAll("}", "</h1>");*/
    indx = indx.replaceAll("{{{", "<h3 class='document3'>");
    indx = indx.replaceAll("}}}", "</h3>");
    indx = indx.replaceAll("{{", "<h2 class='document2'>");
    indx = indx.replaceAll("}}", "</h2>");
    indx = indx.replaceAll("{", "<h1 class='document1'>");
    indx = indx.replaceAll("}", "</h1>");
    indx = indx.replaceAll(/\n/g, "<br>");
    console.log(indx);
    document.getElementById('inp').innerHTML = indx;//에디터 내용을 내용 저장용 변수에 저장시킴
    skrrr = document.getElementsByClassName("document3");
    skrr = document.getElementsByClassName("document2");
    skr = document.getElementsByClassName("document1");
    ht3 = skrrr.length;
    ht2 = skrr.length;
    ht1 = skr.length;
    whol = indx.replaceAll("</h1>", "</h1>🥕")
    whol = whol.replaceAll("</h2>", "</h2>🥕")
    whol = whol.replaceAll("</h3>", "</h3>🥕")
    whol = whol.replaceAll("<br>", "<br>🥕")
    tomat = whol.split("🥕");
    document.getElementById('inp').innerHTML = "";
    for (i=0; i <= tomat.length - 1; i++){
        if (sp == 0){
            indxx = indxx + tomat[i];
        }else{
            if (sp == 1){
                indxx = indxx + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + tomat[i];
            }else{
                if (sp == 2){
                    indxx = indxx + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + tomat[i];
                }
            }
        }
        if (indxx.includes("<h1 class='document1'>")){
            indxx = indxx.replaceAll("<h1 class='document1'>", "<h1 class='hed' id='" + h1nn +"' class='t1'><a class='ln' href='#" + h1nn + "'>" + h1nn +". </a>");
            h1nn++;
            h2nn = 1;
            sp = 0;
        }
        if (indxx.includes("<h2 class='document2'>")){
            indxx = indxx.replaceAll("<h2 class='document2'>", "<h2 class='hed' id='" + (h1nn - 1) + "." + h2nn +"' class='t2'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a class='ln' href='#" + (h1nn - 1) + "." + h2nn + "'>" + (h1nn - 1) + "." + h2nn + ". </a>");
            h2nn++;
            h3nn = 1;   
            sp = 1;
        }
        if (indxx.includes("<h3 class='document3'>")){
            indxx = indxx.replaceAll("<h3 class='document3'>", "<h3 class='hed'id='" + (h1nn - 1) + "." + (h2nn - 1) + "." + h3nn +"' class='t3'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a class='ln' href='#" + (h1nn - 1) + "." + (h2nn - 1) + "." + h3nn + "'>" + (h1nn - 1) + "." + (h2nn - 1) + "."+ h3nn + ". </a>");
            h3nn++;
            sp = 2;
        }
    }
    document.getElementById('inp').innerHTML = indxx;
    document.getElementById('inp').textContent.replace(/undefined/g, '');
    /*
    whol = document.getElementById('document');
    whol = document.getElementsByTagName('br');
    tomat = whol.length;*/
    neckslice = document.getElementsByClassName('hed');//각 문단의 제목만 발췌해 넥슬라이스 변수에 배열변수로 저장
    for (i=0; i <= neckslice.length; i++){//문단(제목) 개수 만큼 반복
        mokcha = mokcha + neckslice[i].localName + neckslice[i].innerHTML + "</div>";
        mokcha = mokcha.replaceAll("&nbsp;", "");
        if (mokcha.includes("h1")){
            mokcha = mokcha.replaceAll("h1", "<div>"/* + h1n + ". "*/);
            h1n++;
            h2n = 1;
        }
        if (mokcha.includes("h2")){
            mokcha = mokcha.replaceAll("h2", "<div>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"/* + h2n + ". "*/);
            h2n++;
            h3n = 1;
        }
        if (mokcha.includes("h3")){
            mokcha = mokcha.replaceAll("h3", "<div>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"/* + h3n + ". "*/);
            h3n++;
        }
        document.getElementById('inf').innerHTML = mokcha;//목차 형식에 맞게 변환한 내용을 html의 목차 박스 안 내용으로 지정
    }
    //document.getElementById('inp').innerHTML.replaceAll("undefined", "")
}
function chad(dddd){
    document.getElementById('d' + ddd).style.background = "rgb(251, 251, 251)";
    document.getElementById('d' + ddd).style.color = "black";
    ddd = dddd;
    document.getElementById('d' + ddd).style.background = "#2f708b";
    document.getElementById('d' + ddd).style.color = "white";
}

//위키 편집용 기호를 html 요소로 변환 (목차 없음, 내용 편집기 미리보기용이라 글자크기 작게 표시됨)
function converte(){
    indx = indx.replaceAll("->", "→");
    indx = indx.replaceAll("<-", "←");
    indx = indx.replaceAll("+>", "↓");
    indx = indx.replaceAll("<+", "↑");
    indx = indx.replaceAll("ㅍㅍ", "</table>");
    indx = indx.replaceAll("ㅍ", "<div><table>");
    indx = indx.replaceAll("/*&", "</td><td>");
    indx = indx.replaceAll("[[&", "<tr><td>");
    indx = indx.replaceAll("[2[", "<tr><td style='border: solid; border-width='1' colspan=2>");
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
//에디터 내용을 본문에 적용
function conv(){
    indx = document.getElementById('ed').value;
    //document.getElementById(inf).innerHTML = indx.match(/{(.*?)}/);
    conver();
}
//에디터 미리보기에 내용 적용
function convv(){
    indx = document.getElementById('ed').value;
    alerte("미리보기 적용✅");
    //document.getElementById(inf).innerHTML = indx.match(/{(.*?)}/);
    converte();
}
//html 요소가 모두 불러와지고 자동 실행되어 본문에 내용 적용시킴
document.addEventListener("DOMContentLoaded", function(){
    //document.getElementById('sel').style.top = settt;
    document.getElementById('d' + ddd).style.background = "#2f708b";
    document.getElementById('d' + ddd).style.color = "white";
})
async function startt() {
    document.getElementById('vuswlq').href = "editor.html?wikie=" + wikiname;
    if (wikiname == null){
        window.location.href = "Index.html?wikie=논산대건고등학교";
    }else{
        if (document.getElementById('inp').innerHTML == ""){
            document.getElementById('inp').innerHTML = "아직 존재하지 않는 문서입니다. "+ "<br>" +"문서 편집을 클릭해 이 문서를 만들어주세요."
        }
    }
    const res = await fetch('/wiki/' + wikiname);
    const data = await res.json();
    if (!res.ok) {
        // 오류가 발생한 경우 처리
        console.error('데이터를 불러오는 데 문제가 발생했습니다.');
        return;
    }
    console.log('서버에서 받은 데이터:', data);
    indx = data.indxxx;
    conver();
}
async function likie() {
    const res = await fetch('/babl/' + ddd);
    const data = await res.json();
    if (!res.ok) {
        // 오류가 발생한 경우 처리
        console.error('데이터를 불러오는 데 문제가 발생했습니다.');
        return;
    }
    console.log('서버에서 받은 데이터:', data);
    lnn[0] = data.likeb
    lnn[1] = data.likel
    lnn[2] = data.liked
    document.getElementById('like0').innerHTML = lnn[0];
    document.getElementById('like1').innerHTML = lnn[1];
    document.getElementById('like2').innerHTML = lnn[2];
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === 'google_token') return value;
    }
    console.log(cookies);
}
async function editie() {
    document.getElementById('doctie').innerHTML = wikiname + ': 편집';
    const res = await fetch('/wiki/' + wikiname);
    const data = await res.json();
    if (!res.ok) {
        // 오류가 발생한 경우 처리
        console.error('데이터를 불러오는 데 문제가 발생했습니다.');
        return;
    }
    console.log('서버에서 받은 데이터:', data);
    document.getElementById('ed').value = data.indxxx
}


async function kjeditie() {
    document.getElementById('doctie').innerHTML = wikiname + ': 작성';
    const res = await fetch('/econo/' + wikiname);
    const data = await res.json();
    if (!res.ok) {
        // 오류가 발생한 경우 처리
        console.error('데이터를 불러오는 데 문제가 발생했습니다.');
        return;
    }
    console.log('서버에서 받은 데이터:', data);
    document.getElementById('ed').value = data.indxxx
}

async function kyungjae(){
    const res = await fetch('/econo/' + wikiname);
    const data = await res.json();
    let innddx = data.indexx;
    innddx = "<h1>" + wikiname + "</h1>" + innddx;
    innddx = innddx.replaceAll("ㄹㅋ(", "<a href='");
    innddx = innddx.replaceAll(")ㄴㅇ(", "'>");
    innddx = innddx.replaceAll(")ㄴㅇ", "</a>");
    innddx = innddx.replaceAll("**", "</strong>");
    innddx = innddx.replaceAll("*", "<strong>");
    innddx = innddx.replaceAll("ㅇㅁㅈ(", "<img width='300px' src='");
    innddx = innddx.replaceAll(")ㅇㅁㅈ", "'>");
    innddx = innddx.replaceAll("\n", "<br>");
    document.getElementById('inp').innerHTML = innddx;
}

document.addEventListener("DOMContentLoaded", function(){
    if (document.getElementById('inkey')){
        startt();
        console.log("🥕keychecked")
    }
    if (document.getElementById('babkey')){
        likie();
        console.log("🥕keychecked")
    }
    if (document.getElementById('editkey')){
        editie();
        console.log("🥕keychecked")
    }
    if (document.getElementById('economkey')){
        kyungjae();
        console.log("🥕keychecked")
    }
    if (document.getElementById('kjeditkey')){
        kjeditie();
        console.log("🥕keychecked")
    }
    document.getElementById('schb').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            srch();
        }
    });
})
conv();

function shc(ip){
    ip = ip.replaceAll(" ", "");
}
