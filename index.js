const form = document.getElementById("form_animais")
form.addEventListener("submit", function (event) {
    
    event.preventDefault();

    const animal = document.getElementById("animal");
    const numero = document.getElementById("numero");
    const valor = document.getElementById("valor");
    const resultado = document.getElementById("resultado");

    let betType, betValue
    if (animal.value !== ""){
        betType = "animal";
        betValue = animal.value;
    } else if (numero.value !== ""){
        betType = "numero";
        betValue = numero.value;
    } else{
        alert("Precisa escolher um animal ou número seu animal!!")
        return;
    }

    if (valor.value < 1){
        alert("como vai aposta 0 bobão?");
        return;
    }

    const sorteio = [];
    for (let i = 0; i < 3; i++) {
        sorteio.push(Math.floor(Math.random() * 100));
    }


    ganhos = 0;
    if(betType == "animal"){
        if (betValue == sorteio[0]){
            ganhos = valor.value * 12;
        } else if (betValue == sorteio[1] || betValue == sorteio[2]){
            ganhos = valor.value * 3;
        }
    } else if  (betType == "numero"){
        if (betValue == sorteio[0]){
            ganhos = valor.value * 50;
        } else if (betValue == sorteio[1] || betValue == sorteio[2]){
            ganhos = valor.value * 7;
        }
    }

    resultado.innerHTML = `O resultado do sorteio foi ${sorteio[0]}, ${sorteio[1]} e ${sorteio[2]}.<br>`;
    if (ganhos === 0) {
      resultado.innerHTML += "Você não ganhou nada. Tente novamente!";
    } else {
      resultado.innerHTML += `Parabéns! Você ganhou R$ ${ganhos.toFixed(2)}!`;
    }
    
    animal.value = "";
    numero.value = "";
    valor.value = "";
  });
  function egg(){
    const animal = Number (document.getElementById("animal").value);
    const numero = Number (document.getElementById("numero").value);
    if (animal == 24 && numero == 24){
        imagem.innerHTML += '<img src="bambi.png" alt="bambi"></img>'
    }
}