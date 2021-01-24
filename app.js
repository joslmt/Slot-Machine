window.onload = ()=>{
    let coins = document.querySelector("#coins");
    let insertarCoin = document.querySelector("#insertarCoin");
    let start = document.querySelector("#start");
    let elementos = ["/img/aguacate.png", "/img/ajo.png", "/img/cebolla.png","/img/pepino.png", "/img/puerro.png", "/img/tomate.png","/img/zanahoria.png"];
    let fail = document.querySelector(".fail");
    let winner = document.querySelector(".winner");
    coins.value = '0';
    const getRandomElement = () =>{
        let allSlots = document.querySelectorAll(".slots>img");
        let resultados = []; 
        for(let i=0; i<allSlots.length; i++){
            let randomNumber = Math.round(Math.random()*6);
            resultados.push(randomNumber);
            allSlots[i].setAttribute('src', elementos[randomNumber]);
            let slots = allSlots[i].getAttribute('src');
        }
        checking(resultados);
    }
    const checking = (resultados) =>{
        if(resultados.length === 3){
            compare(resultados);
        }
    }
    const compare = (resultados) =>{ //Función que compara.
        if((resultados[0] === resultados[1]) && (resultados[1] === resultados[2])){
            trios();
            win();
        }else if (resultados[0] === resultados[1]) {
            dobles();
            win();
        }else if (resultados[0] === resultados[2]) {
            dobles();
            win();
        }else if (resultados[1] === resultados[2]) {
            dobles();
            win();
        }else{
            badluck();
        }
    }
    const trios = () =>{
        let newValue = parseInt(coins.value)+3;
        coins.value = newValue;
        winner.innerHTML = `<p id='tt'> Trío &#128176 &#128176 &#128176</p>`;
    }
    const dobles = () =>{
        let newValue = parseInt(coins.value)+2;
        coins.value = newValue;
        winner.innerHTML = `<p id='dbl'> Dobles &#128176 &#128176</p>`;
    }
    //Estilo ganar monedas.
    const win = () =>{
        coins.style.transform = 'scale(1.1, 1.1)';
        coins.style.transition ='.4s';
    }
    const cleanWin = () =>{
        coins.style.transform = 'scale(1, 1)';
    }
    const badluck = () =>{
        fail.innerHTML = `<p id='error'> Prueba otra vez</p>`;
    }
    //Limpiamos mensaje de error, evaluamos total monedas.
    const game = () =>{
        cleanWin();
        fail.innerHTML = '';
        winner.innerHTML = '';
        if(coins.value === '0'){
        }else{
            coins.value--;
            getRandomElement();
        }
    }
    const añadirCoin = () =>{
        cleanWin();
        coins.value++;
        fail.innerHTML = '';
        winner.innerHTML = '';
    }
    start.onclick = game;
    insertarCoin.onclick = añadirCoin;
}