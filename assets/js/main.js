const form = document.querySelector('.form'); //selecionando o form 

form.addEventListener('submit', function(evento){ //vamos criar a função que recebe os valores 
    evento.preventDefault();
    const Inputpeso  = evento.target.querySelector('#peso'); //varivel que pega o INPUT 
    const Inputaltura  = evento.target.querySelector('#altura');

    const peso = Number(Inputpeso.value); //variavel que pega o VALOR do input 
    const altura = Number(Inputaltura.value); 

    if(!peso){ //se o peso for um NaN
        setResult('Peso Inválido', false);
        return;
    }
    if(!altura){ //se o peso for um NaN
        setResult('Altura Inválida', false);
        return;
    } 
    const imc = calculaImc(peso, altura); // recebe imc 
    if (imc<18.5){
        setResult(`${imc}, Voce está abaixo do peso!`, true);
        return;
    }
     if(imc>=18.5 && imc <= 24.9){
        setResult(`${imc}, Seu peso está normal )`, true);
        return;
    }
     if(imc>=25 && imc <= 29.9){
        setResult(`${imc}, Você está com sobrepeso!`, true);
        return;
    }
     if(imc>=30 && imc <= 34.9){
        setResult(`${imc}, Você está com Obesidade grau 1!`, true);
        return;
    }
     if(imc>=35 && imc <= 39.9){
        setResult(`${imc}, Você está com Obesidade grau 2!`, true);
        return;
    }
     if(imc>=40){
        setResult(`${imc}, Você está com Obesidade grau 3!`, true);
        return;
    }
});
function calculaImc(peso, altura){  //calcula imc
    let imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP(){ //cria parágrafo
    const p = document.createElement('p');
    return p;
}

function setResult(mensagem, isValid){ //o faz com que se o valor for invalido, retorne um background vermelho e msg
    const resultado = document.querySelector('.resultado'); //selecionando a div resultado
    resultado.innerHTML='';
    
    const p = criaP();

    if (isValid){
        p.classList.add('p-resultado')
    } else {
        p.classList.add('invalid');
    }
    p.innerHTML = `${mensagem}`;
    resultado.appendChild(p);
}
