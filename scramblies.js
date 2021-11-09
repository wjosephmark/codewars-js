function scramble(str1, str2) {
    let strOneLetterCount = {}
    let splitStrOne = str1.split('')
    splitStrOne.forEach(letter => {
        if(!strOneLetterCount[`${letter}`]){
            strOneLetterCount[`${letter}`] = 1
        }else{
            strOneLetterCount[`${letter}`]++
        }
    })

    let strTwoLetterCount = {}
    let splitStrTwo = str2.split('')
    splitStrTwo.forEach(letter => {
        if(!strTwoLetterCount[`${letter}`]){
            strTwoLetterCount[`${letter}`] = 1
        }else{
            strTwoLetterCount[`${letter}`]++
        }
    })

    let strTwoLetters = Object.keys(strTwoLetterCount)

    for(let i=0; i<strTwoLetters.length; i++){
        let letterInQuestion = strTwoLetters[i]
        console.log(letterInQuestion)
        if(strOneLetterCount[letterInQuestion]){
            if(strOneLetterCount[letterInQuestion]>=strTwoLetterCount[letterInQuestion]){
                if(i==strTwoLetters.length-1){
                    return(true)
                }
            }else{
                return false
            }
        }else{
            return false
        }
    }
}

scramble('cedewaraaossoqqyt', 'codewars')