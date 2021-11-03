function openOrSenior(data){
    var response = []
    data.forEach(player => {
        let age = player[0]
        let handi = player[1]

        if(age>=55 && handi>7 ){
            console.log(age, handi)
            response.push('Senior')
        }else(response.push('Open'))
    })
    console.log(response)
    return(response)
}

openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])

// ['Open', 'Senior', 'Open', 'Senior']