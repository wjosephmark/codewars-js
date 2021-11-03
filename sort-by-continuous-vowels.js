function sortStringsByVowels(strings){
    var allSetsArray = []

    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    if(strings.length > 1){
        for(let i=0; i<strings.length; i++){
            let string = strings[i]
            let splitString = string.split('')
            let longestSetArray = []
            let longestSetLength = 0
            let longestSet = undefined
    
            splitString.forEach(character => {
                if(vowels.includes(character)){
                    longestSetArray.push(character)
                }else{
                    if(longestSetArray.length > longestSetLength){
                        longestSetLength = longestSetArray.length
                        longestSetArray = []
                    }else{
                        longestSetArray = []
                    }
                }
            })
    
            longestSet = longestSetArray.join('')
            allSetsArray.push(longestSet)
        }
    
        allSetsArray.sort((a, b) => {
            return a-b
        })
    
        return allSetsArray;
    }
}