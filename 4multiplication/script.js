const section = document.querySelector("#section");
const valeur = document.querySelector("#valeur");
// const form = document.querySelector("#form");

function createMult(num) {
    const div = document.createElement('div');
    section.appendChild(div);
    for (let i = 0; i < 11; i++) {
        const p = document.createElement('p');
        div.appendChild(p);
        p.innerHTML += `${num} * ${i} = ${num * i}`;
    }
};

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated');
            localStorage.setItem('nombre', JSON.stringify(valeur.value));
        }, false)
    })

    const inputValue = JSON.parse(localStorage.getItem('nombre'));
    if(inputValue) {
        createMult(inputValue);
    }
})();