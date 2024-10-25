let notas = []; //array para armazenar notas;

function adicionarNota(){
    const inputNota = document.getElementById('nota');
    const novaNota = parseFloat(inputNota.value);

    // Verifica se a nota é válida
    if (!isNaN(novaNota) && novaNota >= 0 && novaNota <=10){
        notas.push(novaNota);
        atualizarNotas();
        inputNota.value = ''; // limpa o campo de entrada
    } else{
        alert("Por favor, insira uma nota válida entre 0 e 10.");
    }
}
    // Atualizar notas na interface
function atualizarNotas(){
    const listaNotas = document.getElementById('listaNotas');
    listaNotas.innerHTML = '';

    // Exibe todas as notas do array
    notas.forEach((nota,index) => {
        const item = document.createElement('li');
        item.textContent = `Nota ${index + 1}: ${nota}`;
        listaNotas.appendChild(item);
    })
}

// 1 - criar uma calculadora
// 2. Deve ter cada uma das notas inseridas.
// 3. Calcular a media = somar as notas e depois dividir o resultado pela quantidade de notas;
// 4.Se a media for >6 o estudando está aprovado.
// 5. Se for menor que 6 está reprovada.

//funcionalidade = FUNCTION calculaMedia
//SE = IF-ELSE
//LOOP = FOR = PARA

function calcularMedia (){
    let somatorioNotas = 0;
    let media = 0;

    for (let index = 0; index < notas.length; index += 1) {
        somatorioNotas = somatorioNotas + notas[index];
    }
     media = somatorioNotas / notas.length;

     if (media > 6){
        document.getElementById('resultado').textContent = `Média: ${media.toFixed(2)} - Pessoa estudante aprovada!`;
     } else{
         document.getElementById('resultado').textContent = `Média: ${media.toFixed(2)} - Pessoa estudante reprovada!`;
     }
}