let button = document.getElementById("button")
let select = document.getElementById("select-moedas")



async function converterMoedas() {
    let moedas = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(function (resposta) {
        return resposta.json()
    })
let dolar = moedas.USDBRL.high
let euro = moedas.EURBRL.high
let bitcoin = moedas.BTCBRL.high

    console.log(moedas)
   
    let inputValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let inputReal = document.getElementById("texto-real")

    if (select.value === "US$ Dolar") {
        let valorEmDolares = inputValorEmReais / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-us', { style: 'currency', currency: 'USD' })

    }
    if (select.value === "€ Euro") {
        let valorEmEuros = inputValorEmReais / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })

    }

    if (select.value === "Bitcoin") {
        let valorEmBitcoin = (inputValorEmReais / bitcoin) /1000
        inputMoedas.innerHTML = valorEmBitcoin.toLocaleString('en-IN', { style: 'currency', currency: 'BTC' })

    }


    inputReal.innerHTML = inputValorEmReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}


// essa função troca o nome e bandeira das moedas 
function trocaDeMoedas() {
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")


    if (select.value === "US$ Dolar") {
        textoMoedas.innerHTML = "Dólar Americano"
        bandeiraMoedas.src = "./img/eua.png"
    }
    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./img/euro.png"
    }
    if (select.value === "Bitcoin") {
        textoMoedas.innerHTML = "Bitcoin"
        bandeiraMoedas.src ="./img/btc.png"
    }
    converterMoedas()
}

button.addEventListener("click", converterMoedas)
select.addEventListener("change", trocaDeMoedas)

// toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
