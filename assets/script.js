let dollar = 6.18

let usdInput = document.querySelector('#usd')
let brlInput = document.querySelector('#brl')

usdInput.addEventListener('keyup', () => {
    convert('usd-to-brl')
})

brlInput.addEventListener('keyup', () => {
    convert('brl-to-usd')
})

usdInput.addEventListener('blur', () => {
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener('blur', () => {
    brlInput.value = formatCurrency(brlInput.value)
})

usdInput.value = '1,00'
convert('usd-to-brl')

//Funções
function formatCurrency (value) {
    //Ajustar o valor
    let fixedValue = fixValue(value)
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    //Utilizar a funçao de formatar
    let formatter = new Intl.NumberFormat('pt-BR', options)
    //retorna o valor formatado
    return formatter.format(fixedValue)
}

function fixValue (value) {
    let fixedValue = value.replace(",", ".")
    let floatValue = parseFloat(fixedValue)
    if(floatValue == NaN) {
        floatValue = 0
    }
    return floatValue
}

function convert (type) {
    if(type == 'usd-to-brl') {
        //Ajustar o valor
        let fixedValue = fixValue(usdInput.value)

        //Converter o valor
        let result = fixedValue * dollar
        result = result.toFixed(2)

        //mostrar no campo Real
        brlInput.value = formatCurrency(result)
    }
    if(type == 'brl-to-usd') {
          //Ajustar o valor
          let fixedValue = fixValue(brlInput.value)

          //Converter o valor
          let result = fixedValue / dollar
          result = result.toFixed(2)

          //mostrar no campo Dolar
          usdInput.value = formatCurrency(result)
    }
}