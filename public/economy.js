function srch(){
    window.location.href = "Index.html?wikie=" + document.getElementById('schb').value;
}
document.addEventListener("DOMContentLoaded", async function(){
    const res = await fetch('/econo');
    const data = await res.json();
    data.forEach(item => {
        document.getElementById('econol').innerHTML = `<tr><td style="padding-right: 300px;"><a href="econom.html?wikie=` + item.title +`">` + item.title +`</a></td><td>` + item.author + `</td></tr>` + document.getElementById('econol').innerHTML;
    }); 
    document.getElementById('schb').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            srch();
        }
    });
})