var saisir = document.querySelector('.ecran1');

function affiche(argument) {
    saisir.value += argument;
}

function resultat() {
    var result = saisir.value;
    saisir.value = eval(result);
    console.log(result);
    
}