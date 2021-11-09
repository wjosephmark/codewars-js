//ADD SPACES TO CAMEL CASED STRINGS

function solution(string) {
    let splitString = string.split('')
    var newStringArray = []

    var i = 0
    splitString.forEach(char => {   
        if(char === char.toLowerCase()){
            newStringArray.push(char)
        }else{
            if(i === 0){
                newStringArray.push(char)
            }else{
                newStringArray.push(' '+char)
            }
        }
        i++
    }) 
    console.log(newStringArray.join(''))
    return(newStringArray.join(''))
}

solution('Camel Case Test')