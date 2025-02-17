const section = document.querySelector("#section");

function createMult(num) {
    const div = document.createElement('div');
    section.appendChild(div);
    for (let i = 0; i < 10; i++) {
        const p = document.createElement('p');
        div.appendChild(p);
        p.innerHTML += `${num} * ${i} = ${num * i}`;
    }
};

createMult(0);
createMult(1);
createMult(2);
createMult(3);
createMult(4);
createMult(5);
createMult(6);
createMult(7);
createMult(8);
createMult(9);
createMult(10);
createMult(11);
// createMult(12);