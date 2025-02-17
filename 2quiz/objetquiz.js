let myquestion = [
    {
        question: "1)Que signifie HTML ?",
        answers: {
            a: 'HiperLinke text Metcn',
            b: 'Hyper Text Markup Langage',
            c: 'Home Tools Mark Lang'
        },
        correctAnswer: "b",
    },
    {
        question: "2)Que signifie CSS ?",
        answers: {
            a: 'Cascade Sous Sol',
            b: 'Cascading sheets Styles',
            c: 'Cascading Style Sheets'
        },
        correctAnswer: "c",
    },
    {
        question: "3)Quel est l'element qui permet de modifier la taille d'un texte en CSS ?",
        answers: {
            a: 'font-size',
            b: 'text-size',
            c: 'modif-size'
        },
        correctAnswer: "a",
    },
    {
        question: "4)Quel est l'element qui permet de modifier la couleur d'un texte en CSS ?",
        answers: {
            a: 'Couleur',
            b: 'colorier',
            c: 'color'
        },
        correctAnswer: "c",
    },
]

const submit = document.querySelector('#submit');
const section = document.querySelector('section');

export function generatequestion() {
    myquestion.forEach((question, index) => {
        const element = document.createElement('div');

        element.innerHTML = `
                <div class="complete_question">
                    <label for="${question}${index}">${question.question}</label>
                    <div class="response_btn">
                            <div><input type="radio" value="a" name="question${index}">${question.answers.a}</div>
                            <div><input type="radio" value="b" name="question${index}">${question.answers.b}</div>
                            <div><input type="radio" value="c" name="question${index}">${question.answers.c}</div>
                    </div>
                </div>
                `;
        section.appendChild(element);
    });

    myquestion.forEach((question, index) => {
        submit.addEventListener('click', function () {
            const response_btn = document.querySelector(".response_btn");

            let response_cor = document.querySelector(
                `
                    input[name="question${index}"]:checked
                `
            );

            if (response_cor) {
                let selectrespon = response_cor.value;
                let parentLabel = response_cor.parentElement;
                if (selectrespon === question.correctAnswer) {
                    parentLabel.style.color = 'green';
                } else {
                    parentLabel.style.color = 'red';
                }
            }
        })
    })
}