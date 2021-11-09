function goodVsEvil(good, evil){
    splitGood = good.split(' ')
    splitEvil = evil.split(' ')

    goodTotal = 0

    goodWorth = [1,2,3,3,4,10]

    console.log(typeof(goodWorth))

    for(let i=0; i<splitGood.length; i++){
        let num = splitGood[i] * goodWorth[i]
        goodTotal = parseInt(goodTotal) + num
        console.log(num)
    }
    
    evilTotal = 0

    evilWorth = [1,2,2,2,3,5,10]

    for(let i=0; i<splitEvil.length; i++){
        let num = splitEvil[i] * evilWorth[i]
        evilTotal = parseInt(evilTotal) + num
        console.log(num)
    }

    if(goodTotal == evilTotal){
        return ("Battle Result: No victor on this battle field")
    }else if(goodTotal>evilTotal){
        return("Battle Result: Good triumphs over Evil")
    }else if(evilTotal>goodTotal){
        return("Battle Result: Evil eradicates all trace of Good")
    }
}

goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')