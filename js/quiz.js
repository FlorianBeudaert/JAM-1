window.onload = function () {
    const questionDiv = document.querySelector(".quiz-question");
    const answerDiv = document.querySelectorAll(".quiz-answer");
    let count = 1;

    let question1 = function () {
        let question = "Batman et Robin partage-t-ils le même lit ?";
        let answers = ["Joker", "Oui", "Non", "Peut-être avec Le Joker"];
        questionDiv.innerHTML = question;
        answerDiv.forEach((div) => {
            let random = Math.floor(Math.random() * answers.length);
            div.innerHTML = answers[random];
            answers.splice(random, 1);
        });
        answerDiv.forEach((answer) => {
            answer.addEventListener("click", function () {
                if (answer.textContent === "Joker") {
                    count++;
                    answer.style.backgroundColor = "green";
                    setTimeout(() => {
                        dict["question" + count]();
                        answer.style.backgroundColor = "rgba(187, 187, 187, 0.9)";
                    }, 500);
                }
            });
        });
    };

    let question2 = function () {
        let question = "Eternel amoureux de Loïs Lane, il vient de Krypton :";
        questionDiv.innerHTML = question;
        let answers = ["Superman", "Batman", "Spiderman", "Iron man"];
        answerDiv.forEach((div) => {
            let random = Math.floor(Math.random() * answers.length);
            div.innerHTML = answers[random];
            answers.splice(random, 1);
        });
        answerDiv.forEach((answer) => {
            answer.addEventListener("click", function () {
                if (answer.textContent === "Superman") {
                    count++;
                    answer.style.backgroundColor = "green";
                    setTimeout(() => {
                        dict["question" + count]();
                        answer.style.backgroundColor = "rgba(187, 187, 187, 0.9)";
                    }, 500);
                }
            });
        });
    };

    let question3 = function () {
        let question =
            "Riche industriel de Gotham City le jour, il en est son chevalier noir la nuit :";
        questionDiv.innerHTML = question;
        let answers = ["Batman", "Dardevil", "Hulk", "Iron man"];
        answerDiv.forEach((div) => {
            let random = Math.floor(Math.random() * answers.length);
            div.innerHTML = answers[random];
            answers.splice(random, 1);
        });
        answerDiv.forEach((answer) => {
            answer.addEventListener("click", function () {
                if (answer.textContent === "Batman") {
                    count++;
                    answer.style.backgroundColor = "green";
                    setTimeout(() => {
                        dict["question" + count]();
                        answer.style.backgroundColor = "rgba(187, 187, 187, 0.9)";
                    }, 500);
                }
            });
        });
    };

    let question4 = function () {
        let question =
            "Orphelin élevé par sa tante et son oncle, il est piqué par une araignée radioactive :";
        questionDiv.innerHTML = question;
        let answers = ["Spiderman", "Hulk", "Groot", "Thor"];
        answerDiv.forEach((div) => {
            let random = Math.floor(Math.random() * answers.length);
            div.innerHTML = answers[random];
            answers.splice(random, 1);
        });
        answerDiv.forEach((answer) => {
            answer.addEventListener("click", function () {
                if (answer.textContent === "Spiderman") {
                    count++;
                    answer.style.backgroundColor = "green";
                    setTimeout(() => {
                        dict["question" + count]();
                        answer.style.backgroundColor = "rgba(187, 187, 187, 0.9)";
                    }, 500);
                }
            });
        });
    };

    let question5 = function () {
        let question =
            "Inspiré de Robin des Bois, il est dépourvu de supers pouvoirs mais est très habile à l'arc :";
        questionDiv.innerHTML = question;
        let answers = [
            "Green Arrow",
            "Captain America",
            "Green Lantern",
            "Iron man",
        ];
        answerDiv.forEach((div) => {
            let random = Math.floor(Math.random() * answers.length);
            div.innerHTML = answers[random];
            answers.splice(random, 1);
        });
        answerDiv.forEach((answer) => {
            answer.addEventListener("click", function () {
                if (answer.textContent === "Green Arrow") {
                    count++;
                    answer.style.backgroundColor = "green";
                    setTimeout(() => {
                        dict["question" + count]();
                        answer.style.backgroundColor = "rgba(187, 187, 187, 0.9)";
                    }, 500);
                }
            });
        });
    };

    let question6 = function () {
        let question =
            "C'est un playboy et un industriel qui travaille à la fabrication d'armes :";
        questionDiv.innerHTML = question;
        let answers = ["Iron man", "Deadpool", "Green Lantern", "Flash"];
        answerDiv.forEach((div) => {
            let random = Math.floor(Math.random() * answers.length);
            div.innerHTML = answers[random];
            answers.splice(random, 1);
        });
        answerDiv.forEach((answer) => {
            answer.addEventListener("click", function () {
                if (answer.textContent === "Iron man") {
                    count++;
                    answer.style.backgroundColor = "green";
                    setTimeout(() => {
                        dict["question" + count]();
                        answer.style.backgroundColor = "rgba(187, 187, 187, 0.9)";
                    }, 500);
                }
            });
        });
    };

    let question7 = function () {
        let question = "Il tire son pouvoir d'un anneau magique :";
        questionDiv.innerHTML = question;
        let answers = ["Green Lantern", "Wonder Woman", "Wolverine", "Hulk"];
        answerDiv.forEach((div) => {
            let random = Math.floor(Math.random() * answers.length);
            div.innerHTML = answers[random];
            answers.splice(random, 1);
        });
        answerDiv.forEach((answer) => {
            answer.addEventListener("click", function () {
                if (answer.textContent === "Green Lantern") {
                    count++;
                    answer.style.backgroundColor = "green";
                    setTimeout(() => {
                        dict["question" + count]();
                        answer.style.backgroundColor = "rgba(187, 187, 187, 0.9)";
                    }, 500);
                }
            });
        });
    };

    let question8 = function () {
        let question = "Alter ego au féminin d'un célèbre kryptonien :";
        questionDiv.innerHTML = question;
        let answers = ["Supergirl", "Wonder Woman", "Hawkgirl", "Black Widow"];
        answerDiv.forEach((div) => {
            let random = Math.floor(Math.random() * answers.length);
            div.innerHTML = answers[random];
            answers.splice(random, 1);
        });
        answerDiv.forEach((answer) => {
            answer.addEventListener("click", function () {
                if (answer.textContent === "Supergirl") {
                    count++;
                    answer.style.backgroundColor = "green";
                    setTimeout(() => {
                        dict["question" + count]();
                        answer.style.backgroundColor = "rgba(187, 187, 187, 0.9)";
                    }, 500);
                }
            });
        });
    };

    let question9 = function () {
        let question = "Ils sont 4 et ils sont :";
        questionDiv.innerHTML = question;
        let answers = [
            "Les 4 Fantastiques",
            "Les watchmen",
            "La justice league",
            "Suicide squad",
        ];
        answerDiv.forEach((div) => {
            let random = Math.floor(Math.random() * answers.length);
            div.innerHTML = answers[random];
            answers.splice(random, 1);
        });
        answerDiv.forEach((answer) => {
            answer.addEventListener("click", function () {
                if (answer.textContent === "Les 4 Fantastiques") {
                    count++;
                    answer.style.backgroundColor = "green";
                    setTimeout(() => {
                        dict["question" + count]();
                        answer.style.backgroundColor = "rgba(187, 187, 187, 0.9)";
                    }, 500);
                }
            });
        });
    };

    let question10 = function () {
        let question = "X-Men : elle a la peau bleue et est polymorphe :";
        questionDiv.innerHTML = question;
        let answers = [
            "Mystique",
            "Jean Gruey(Phoenix)",
            "Rogue(Malicia)",
            "La femme invisible",
        ];
        answerDiv.forEach((div) => {
            let random = Math.floor(Math.random() * answers.length);
            div.innerHTML = answers[random];
            answers.splice(random, 1);
        });
        answerDiv.forEach((answer) => {
            answer.addEventListener("click", function () {
                if (answer.textContent === "Mystique") {
                    setTimeout(() => {
                        document.body.style.backgroundColor = "brown";
                    }, 500);
                }
            });
        });
    };

    let dict = {
        question1: question1,
        question2: question2,
        question3: question3,
        question4: question4,
        question5: question5,
        question6: question6,
        question7: question7,
        question8: question8,
        question9: question9,
        question10: question10,
    };

    dict["question" + count]();
};