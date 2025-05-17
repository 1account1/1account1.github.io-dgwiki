const par = `
<span>
<a href="Index.html" style="margin: 10px;font-size: x-large; color: white; text-decoration: none; font-weight: 700; font-family: "Times New Roman", Times, Bold;">
<img src="dgwklogo.png" width="50px" alt="">
</a>
<span>
</span>
<span>
<a href="" style="text-decoration: none; color: white; font-weight: bolder;font-size: small;margin-left: 3%;">
메뉴
</a>
</span>
<span>
<a href="bab.html" style="text-decoration: none; color: white; font-weight: bolder;font-size: small;margin-left: 3%;">
급식
</a>
<a href="economy.html" style="text-decoration: none; color: white; font-weight: bolder;font-size: small;margin-left: 3%;">
경제소식지
</a>
</span>
<a href="llogin.html" class="lgn">로그인</a><span class="search">
<input type="text" placeholder="검색" class="searc" id="schb">
<input type="button" value="검색" class="searbtn" onclick="srch();">
</span>`

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('barr').innerHTML = par;
})