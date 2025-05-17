let params = new URLSearchParams(window.location.search);
let wikiname = params.get("table");
async function loadAll() {
    const res = await fetch('/all' + wikiname);
    const data = await res.json();
    console.log('모든 데이터:', data);
    document.getElementById('dbm').value = JSON.stringify(data, null, 2);
}
async function pres(event) {
    if (event.key === 'Enter') {
        if (document.getElementById('terminal').value.includes("UPDATE")){
            const res = await fetch('/putm/' + document.getElementById('terminal').value, {
                method: 'PUT',
            });
        }
        if (document.getElementById('terminal').value.includes("INSERT")){
            const res = await fetch('/postm/' + document.getElementById('terminal').value, {
                method: 'POST',
            });

        }
        if (document.getElementById('terminal').value.includes("DELETE")){
            const res = await fetch('/delm/' + document.getElementById('terminal').value, {
                method: 'DELETE',
            });
        }
    }
    
}


async function upl(){
    try {
        const jsonData = JSON.parse(document.getElementById('dbm').value);  // JSON 문자열 → 객체
    
        const res = await fetch('/saveall', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(jsonData)
        });
    
        const result = await res.json();
    }catch (err) {
        alert('JSON 형식이 잘못됐습니다.');
        console.error(err);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('dbm').addEventListener("keyup", function(){
        if (document.getElementById('dbm').value == "cream"){
            document.getElementById('dbm').value = ""
            loadAll();
        }
    })
})