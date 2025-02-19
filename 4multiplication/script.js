const section = document.querySelector("#section");
const valeur = document.querySelector("#valeur");
// const arret = document.querySelector("#arret");
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

function createMult(num, arret) {
    const div = document.createElement('div');
    const ptext = document.createElement('button');
    ptext.innerHTML = `Effacer tout`;
    ptext.classList = "btn btn-light shadow";
    section.appendChild(div);

    for (let i = 1; i < 11; i++) {
        const p = document.createElement('p');
        div.appendChild(p);
        p.innerHTML += `${num} * ${i} = ${num * i}`;
        console.log(i);
    }

    div.appendChild(ptext);
    ptext.addEventListener('click', ()=>{
        localStorage.removeItem('nombre');
        // localStorage.removeItem('nombreArret');
        window.location.reload();
    })
};

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated');
            localStorage.setItem('nombre', JSON.stringify(valeur.value));
            // localStorage.setItem('nombreArret', JSON.stringify(arret.value));
        }, false)
    })

    const inputValue = JSON.parse(localStorage.getItem('nombre'));
    // const inputArret = JSON.parse(localStorage.getItem('nombreArret'));
    if(inputValue) {
        createMult(inputValue);
        // createMult(inputValue, inputArret);
    }
})();