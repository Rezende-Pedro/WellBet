//Define o objeto com os resultados(Banco de Dados)
const placarOficial ={
    1:{time1:2, time2:1},
    2:{time1:3, time2:0},
}

// FUNÇÃO SALVAR PALPITE

function salvarPalpite(nomeJogo,id){
    //CAPTURA OS ELEMENTOS DO DOM

    const input1 = document.getElementById(`time1-${id}`);
    const input2 = document.getElementById(`time2-${id}`);
    //VALIDAÇÃO DOS CAMPOS

}