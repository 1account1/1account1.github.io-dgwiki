const grade = 2;
const clas = 3;
const num = 4;
let subject = {국어: "a",}

document.addEventListener('DOMContentLoaded', function(){
    fetch('https://opensheet.elk.sh/1mfbFe-a_58JWIKVITafP_0oHg0o1K6FJBkiVqX4RLl0/Sheet1')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            if (element.제목 == wikiname){
                indx = element.문서;
            }
        })
        setTimeout(function() {
            conver();
        }, 10);
    })
})