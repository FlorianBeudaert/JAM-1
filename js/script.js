window.onload = async function(){
    const div_display = document.getElementById("display");
    const div_letter = document.getElementById("letter");
    const vilain = document.getElementById("image");
    const vilain_text = document.getElementById("dialog");
    const word = ["SUPERMAN", "MORBIUS"];
    const dialog = ["<p>Te voilà donc !</p>", "<p>J'ai préparé pour toi une série de petites énigmes que tu devras résoudre pour sauver cette ville.</p>", "<p>Je vais être gentil avec toi et te laisser 10 chances mais au délà de ces essais..</p>", "<p>LA VILLE VA SAUTER !</p>", "<p>NI-HAN NI-HAN NI-HAN !</p>"]
    let life = 10;
    var end = await context(vilain, dialog, vilain_text);
    if(end == "end"){
        displayNone(vilain, vilain_text);
        Display(div_display, word[0]);
        Letter(div_letter);
        var token = await Game(div_display, word[0], life)
        if(token == 1){
            Display(div_display, word[1]);
            let life = 10;
            var valid = await Game(div_display, word[1], life);
            if (valid = 1){
                window.location.assign("win.html");
            }
            else if (valid == 2) {
                window.location.assign("loose.html");
            }
        }
        else if (token == 2) {
            window.location.assign("loose.html");
        }
    }
}

async function context(object, text, textDisplay){
    return new Promise((resolve, reject) => {
        var img = document.createElement("img");
        var br = document.createElement("br");
        var button = document.createElement("button");
        let name = document.createTextNode("suivant");
        button.appendChild(name);
        img.src = "./asset/vilain.png";
        img.setAttribute("id", "donkeyVilain");
        object.appendChild(img);
        let count = 0;
        textDisplay.innerHTML = text[count];
        textDisplay.appendChild(button);
        textDisplay.insertBefore(br, document.querySelector("button"));
        button.onclick = function(){
            count++
            textDisplay.innerHTML = text[count];
            textDisplay.appendChild(button);
            textDisplay.insertBefore(br, document.querySelector("button"));
            if(count == text.length){
                resolve("end");
            }
        }
    })
}

function displayNone(object, textDisplay){
    object.remove();
    textDisplay.remove();
}

async function Game(object, word, life){
    document.getElementById("life").innerHTML = "Life : " + life;
    return new Promise((resolve, reject) => {
        const letter_button = document.getElementsByClassName("displayLetter");
        let win = 0;
        for (let index = 0; index < letter_button.length; index++) {
            let loose = 0;
            letter_button[index].onclick = function(){
                var wordArray = word.split("");
                for (let display_index = 0; display_index < wordArray.length; display_index++) {
                    if(letter_button[index].textContent == wordArray[display_index]){
                        win++;
                        document.getElementById("para " + display_index).innerHTML = letter_button[index].textContent;
                        document.getElementById("paragraphe " + index).style.backgroundColor = "rgb(0, 200, 0, 0.7)";
                        if(win == wordArray.length){
                            object.innerHTML = " ";
                            for (let index = 0; index < letter_button.length; index++) {
                                document.getElementById("paragraphe " + index).style.backgroundColor = "rgba(27, 27, 27, 0.6)";
                            }
                            resolve(1);
                        }
                    }
                    else if(letter_button[index].textContent != wordArray[display_index]){
                        loose++;
                        if(loose == wordArray.length){
                            document.getElementById("paragraphe " + index).style.backgroundColor = "rgb(255, 0, 0, 0.7)";
                            life--;
                            document.getElementById("life").innerHTML = "Life : " + life;
                            if(life == 0){
                                resolve(2);
                            }
                        }
                    }
                }
            }
        }
    })
}

function Display(object, word){
    var wordArray = word.split("");
    for (let index = 0; index < wordArray.length; index++) {
        const p = document.createElement("p");
        const underscore = document.createTextNode("_ ");
        p.setAttribute("class", "displayUnderscore");
        p.setAttribute("id", "para " + index);
        p.appendChild(underscore);
        object.appendChild(p);
    }
}

function Letter(object){
    var letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let max = 25;
    for (let index = 0; index < 26; index++) {
        let rand = Math.floor(Math.random() * max);
        const p_letter = document.createElement("p");
        p_letter.setAttribute("id", "paragraphe " + index);
        p_letter.setAttribute("class", "displayLetter");
        let lettre = document.createTextNode(letter[rand]);
        p_letter.appendChild(lettre);
        object.appendChild(p_letter);
        letter.splice(rand, 1);
        max--;
    }
}