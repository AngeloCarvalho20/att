const inputName = document.getElementById("name");
const inputSurname = document.getElementById("surname");
const btInsert = document.getElementById("insert");

function helloBothNames() {
    let name = inputName.value;
    let surname = inputSurname.value;
    if (name === "" || surname === "") {
        alert("Insira nome e sobrenome válidos!");
    } else {
        alert(`Olá, ${name} ${surname}!`);
    }
    inputName.value = "";
    inputSurname.value = "";
    inputName.focus();
}

btInsert.onclick = helloBothNames;