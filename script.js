/*---------------------  ENCRYPT FUNCTION ---------------------*/ 
function Encrypt() {
    let raw_input = document.getElementById("input-box").value.toLowerCase();
    let arr_input = raw_input.split('');
    let final_txt = '';

    for (let i = 0; i < arr_input.length; i++) {
        switch (arr_input[i]) {
            case 'a':
                arr_input[i] = "ai";
                break;
            case 'e':
                arr_input[i] = "enter";
                break;

            case 'i':
                arr_input[i] = "imes";
                break;

            case 'o':
                arr_input[i] = "ober";
                break;

            case 'u':
                arr_input[i] = "ufat";
                break;

            default:
                break;
        }
    }

    final_txt = arr_input.join('');
    document.getElementById("encrypted-final-txt").textContent = final_txt;

    console.log(final_txt);
}

/*---------------------------------- DESENCRYPT FUNCTION ------------------- */
function Desencrypt(){
    let raw_input = document.getElementById("input-box").value.toLowerCase();
    let final_txt = '';

    final_txt = raw_input.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById("encrypted-final-txt").textContent = final_txt;

    console.log(final_txt);
  

}


// HIDE FUNCTION
function HideBox(){
    document.getElementById("error-box").style.display = "none";
}

// SHOW FUNCTION

function ShowBox(){
    document.getElementById("encrypted-txt").style.display = "block";
}


//COPY FUNCTION
function Copy() {
    let content = document.getElementById("encrypted-final-txt");

    content.select();
    document.execCommand("copy");
}

//COPY BUTTON
const btnCopy = document.getElementById("copy-btn");
btnCopy.addEventListener("click", Copy);

//ENCRYPT BUTTON
const btnEncrypt = document.getElementById("enc-btn");
btnEncrypt.addEventListener("click", () => {
    Encrypt();
    HideBox();
    ShowBox();
    EmptyInput();
});

//DESENCRYPT BUTTON

const btnDesencrypt = document.getElementById("desc-btn");
btnDesencrypt.addEventListener("click", () => {
    Desencrypt();
    HideBox();
    ShowBox();
    EmptyInput();
});


//ERROR FUNCTION
function EmptyInput() {
    let content = document.getElementById("input-box").value;

    if (content == 0) {
        document.getElementById("error-box").style.display = "block";
    }
}