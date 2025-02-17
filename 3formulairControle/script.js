const email = document.querySelector('#mail');
const pass = document.querySelector('#pass');
const form = document.querySelector('form');
const col1 = document.querySelector('.col1');
const errmail = document.querySelector('#errmail');
const errpass = document.querySelector('#errpass');

// fonction qui gere les erreurs
// function err(a, b, c) {
//     const p = document.createElement('p');
//     a.appendChild(p);
//     a.style.color = c;
//     p.textContent = b;
//     p.style.color = c;
// }

const verif = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
form.addEventListener('submit', validation);
form.addEventListener('change', validation);

function validation(e) {
    if (verif.test(email.value) === false) {
        e.preventDefault();
        email.style.border = '1px solid red'
        errmail.style.color = 'red';
        errmail.innerText = "Email invalide.";
    } else if (pass.value.length < 8) {
        e.preventDefault();
        errmail.style.color = 'red';
        pass.style.border = '1px solid red'
        errpass.style.color = 'red';
        errpass.innerText = "Le mot de passe doit contenir au moins 8 caractères.";
    } else {
        // e.preventDefault();
        errpass.style.color = 'green';
        errpass.textContent = 'Reussi';
        pass.style.border = '1px solid green';

        errmail.style.color = 'green';
        errmail.textContent = 'Reussi';
        email.style.border = '1px solid green';
    }
}