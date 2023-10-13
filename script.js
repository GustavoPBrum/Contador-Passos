function contar() {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('final')
    var pas = document.getElementById('passos')
    var res = document.getElementById('resultado')


    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert('Há informações incorretas e/ou faltando') //Verifica se os campos digitados estão vazios

    } else {
        res.innerHTML = 'Aqui vai a contagem: <br>' //Cria novas variáveis decretando os campos inicio, passos e fim como números (antes estavam definidos somente como string)
        var campo1 = Number(ini.value) 
        var campo2 = Number(fim.value)
        var campo3 = Number(pas.value)

        if (campo3 == 0){ //Com apenas 1 "=" ele identifica como "recebe" e somente com 2 "==" ele identifica "se for"...
            alert('Número de passos incorretos, considerando passo 1!')
            campo3 = 1
        }
        
        if (campo1 < campo2) {
            for( let c = campo1; c <= campo2; c += campo3){ //Aplicando para inicio <= fim
                res.innerHTML += `${c} \u{1F914}` //Template string utilizada entre `` para incorporar ou conter valores ou expressões
            }
                res.innerHTML += `\u{1F44C}`
        } else {
            for (let c = campo1; c >= campo2; c -= campo3){
                res.innerHTML += `${c} \u{1F914}`
            }
            res.innerHTML += `\u{1F44C}` 
        }

    }

}

