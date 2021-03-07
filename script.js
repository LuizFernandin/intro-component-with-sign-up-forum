
const form = document.querySelector("#some-form")
form.addEventListener('submit', e => {
    e.preventDefault()

    const arrayWrited = new Array()

    arrayWrited.push(document.querySelector("#firstName"))
    arrayWrited.push(document.querySelector("#lastName"))
    arrayWrited.push(document.querySelector("#emailAddress"))
    arrayWrited.push(document.querySelector("#password"))

    for(let a of arrayWrited) {        
        const input = document.getElementById('input_' + arrayWrited.indexOf(a).toString())
        const img = document.getElementById('img_' + arrayWrited.indexOf(a).toString())
        const span = document.getElementById('span_' + arrayWrited.indexOf(a).toString())
        if(a.value == "") {
            input.classList.add("isNoValid")
            img.style.visibility = 'visible';
            span.style.visibility = 'visible';
        } 
        else{
            input.classList.remove("isNoValid")
            img.style.visibility = 'hidden';
            span.style.visibility = 'hidden';
        }
    }

})