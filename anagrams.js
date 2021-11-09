async function anagrams(word, words) {
    var letterCountObject = await formatWord(word)
    var letterCountArray = await formatWords(words)
    var responseArray = await compareLetters(letterCountObject, letterCountArray)
    var response = await formatResponse(responseArray, words)
    return response
}

const formatWord = async (word) => {
    let splitWord = word.split('')

    var letterCountObject = {
    }

    splitWord.forEach(letter => {
        if(!letterCountObject[`${letter}`]){
            letterCountObject[`${letter}`] = 1
        }else{
            letterCountObject[`${letter}`]++
        }
    })

    return letterCountObject
}

const formatWords = async (words) => {
    const responseArray = []

    for(let i=0; i<words.length; i++){
        let word = words[i]
        let splitWord = word.split('')

        var letterCountObject = {}
        
        for(let j=0; j<splitWord.length; j++){
            let letter = splitWord[j]
            if(!letterCountObject[`${letter}`]){
                letterCountObject[`${letter}`] = 1
            }else{
                letterCountObject[`${letter}`]++
            }
    
            if(j == words.length-1){
                responseArray.push(letterCountObject)
            }
        }


    }

    return(responseArray)
}

const compareLetters = async (word, words) => {
    var theWordsLetters = Object.keys(word)

    var responseArray = []

    words.forEach(currentWord => {
        let currentWordLetters = Object.keys(currentWord)
        var wordStatus = true

        if(theWordsLetters.length == currentWordLetters.length){
            for(let i=0; i<currentWordLetters.length; i++){
                let letterInQuestion = currentWordLetters[i]
                let theWordsCount = word[letterInQuestion]
                let currentWordsCount = word[letterInQuestion]
                if(wordStatus){
                    if(theWordsCount == currentWordsCount){
                        if(i == currentWordLetters.length-1){
                            responseArray.push(true)
                        }
                    }else{
                       wordStatus = false
                       responseArray.push(false)
                    }
                }
            }
        }else{
            responseArray.push(false)
        }
    })

    return responseArray
}

const formatResponse = async (responseArray, words) => {
    var response = []

    for(let i=0; i<responseArray.length; i++){
        if(responseArray[i]==true){
            response.push(words[i])
        }
    }

    return response
}

anagrams('abbaf', ['abfba', 'asdfkja', 'abbaf'])