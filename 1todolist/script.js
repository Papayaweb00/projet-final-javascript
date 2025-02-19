// Appele et creation des variables et elements html
const tacheAjout = document.querySelector('#tache');
const submit = document.querySelector('#submit');
const divtache = document.querySelector('#tachediv');
const group = document.querySelector('.group');
const p = document.querySelector('#p');
const ul = document.createElement('ul');

divtache.appendChild(ul);

function aff(a, id) {
    const h = new Date();
    const date = h.toLocaleDateString();
    
    const li = document.createElement('li');
    li.innerText = a + '\n' + date;
    li.setAttribute('data-id', id);
    
    const btn = document.createElement('button');
    btn.innerHTML = `fermer`;
    li.appendChild(btn);
    ul.classList = 'ps-0'
    
    ul.appendChild(li);
}

const contentStorage = JSON.parse(localStorage.getItem('tache')) || [];
contentStorage.forEach(element => {
    aff(element.nom, element.id);
});

let ident = 0;

setInterval(()=>{
    ident = Math.floor(Math.random() * 1000);
}, 100);

submit.addEventListener('click', (e) => {
    if (tacheAjout.value.trim() === "") {
        e.preventDefault();
        group.classList.remove('success');
        group.classList.add('Error');
    } else {
        group.classList.remove('Error');
        group.classList.add('success');
        const newTask = {id: ident, nom: tacheAjout.value.trim() };
        aff(tacheAjout.value, ident)
        contentStorage.push(newTask);
        localStorage.setItem('tache', JSON.stringify(contentStorage));
        tacheAjout.value = '';
        group.classList.remove('success');
    }
})

divtache.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        // Suppression des elements
        const li = e.target.parentNode;
        ul.removeChild(li);
        let listid = li.getAttribute('data-id'); // Récupère l'ID unique
        console.log(listid);
        
        // suppression dans le localStorage
        let newStorage = contentStorage.filter(store => listid != store.id);
        contentStorage.pop(newStorage);
        // contentStorage = newStorage;
        localStorage.setItem('tache', JSON.stringify(contentStorage));
    }
});