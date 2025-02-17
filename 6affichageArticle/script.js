(async function () {
    const element = await fetch('./fichier.json');
    const article = await element.json();

    const affichageContainer = document.querySelector('#affichageContainer');
    for (const art of article) {
        const div = document.createElement('div');
        affichageContainer.appendChild(div);
        const h1 = document.createElement('h1');
        div.appendChild(h1);
        h1.innerText = art.name;
        const h4 = document.createElement('h4');
        div.appendChild(h4);
        h4.innerText = art.email;
        const p = document.createElement('p');
        div.appendChild(p);
        p.innerText = art.body;
    }
})()