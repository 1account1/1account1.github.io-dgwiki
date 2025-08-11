const par = `
<span>
<a href="Index.html" style="margin: 10px;font-size: x-large; color: white; text-decoration: none; font-weight: 700; font-family: "Times New Roman", Times, Bold;">
<img src="dgwklogo.png" width="50px" alt="">
</a>
<span>
</span>
<span>
<a href="http://votedghs.kro.kr" style="text-decoration: none; color: white; font-weight: bolder;font-size: small;margin-left: 3%;">
회장선거
</a>
</span>
<span>
<a href="bab.html" style="text-decoration: none; color: white; font-weight: bolder;font-size: small;margin-left: 3%;">
급식
</a>
<a href="Index.html?wikie=문서 목록" style="text-decoration: none; color: white; font-weight: bolder;font-size: small;margin-left: 3%;">
문서목록
</a>
</span>
<a href="llogin.html" id="lgn" class="lgn">로그인</a><span class="search">
<input type="text" placeholder="검색" class="searc" id="schb">
<input type="button" value="검색" class="searbtn" onclick="srch();">
</span>`

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('barr').innerHTML = par;
})