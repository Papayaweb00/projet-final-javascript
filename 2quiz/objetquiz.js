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
const contentscore = document.querySelector('#score');
submit.style.display = 'none';
const section = document.querySelector('section');
let score = 0;

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

    // Vérifier si toutes les questions ont une réponse sélectionnée
    function selectionTous() {
        /* La méthode .every() nous permet de vérifier si 
            -toutes les questions ont une réponse sélectionnée.*/
        let allAnswered = myquestion.every((_, index) => {
            return document.querySelector(`input[name="question${index}"]:checked`);
        });

        // Afficher le bouton uniquement si toutes les réponses sont sélectionnées
        submit.style.display = allAnswered ? "block" : "none";
    }

    // Ajouter un écouteur d'événement sur chaque radio pour détecter les changements
    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.addEventListener('change', selectionTous);
    });
    const p = document.createElement('h1');

    myquestion.forEach((question, index) => {
        submit.addEventListener('click', function () {
            const response_btn = document.querySelector(".response_btn");

            let response_cor = document.querySelector(
                `input[name="question${index}"]:checked`
            );

            let non_selection = document.querySelectorAll(
                `input[name="question${index}"]:not(:checked)`
            );

            if (response_cor) {
                let selectrespon = response_cor.value;
                let parentLabel = response_cor.parentElement;

                if (selectrespon === question.correctAnswer) {
                    parentLabel.style.color = "green";
                        score++;
                        console.log(score);

                        // p.innerHTML = `Vous avez un score de ${score} sur ${myquestion.length}`;
                        // p.style.textAlign = 'center';
                        // section.appendChild(p);

                        p.id = "scoreDisplay";
                        p.style.textAlign = "center";
                        contentscore.appendChild(p);
    
                        // p.innerHTML = `Vous avez un score de ${score} sur ${myquestion.length}`;
                        p.innerHTML = `Vous avez un score de ${score} sur ${myquestion.length}.`;
                } else {
                    parentLabel.style.color = "red";
                }

                // Désactiver toutes les autres réponses non cochées
                non_selection.forEach(input => input.disabled = true);

                /* 
                    La méthode find() renvoie la valeur du premier élément trouvé 
                        dans le tableau qui respecte la condition donnée 
                            par la fonction de test passée en argument.
                */
                let correctOption = [...non_selection].find(input => input.value === question.correctAnswer);
                if (correctOption) {
                    // Affichage de la bonne réponse
                    correctOption.parentElement.style.color = "green";
                }

                submit.style.backgroundColor = 'red';
                submit.innerHTML = 'Recommencer';
                submit.addEventListener('click', () => {
                    window.location.reload();
                })
            }
        })
    })
}