function likes(names) {
    let arrayLength = names.length
    let response = undefined

    if(arrayLength == 1){
        response = `${names[0]} likes this`
    }else if(arrayLength == 0) {
        response = 'no one likes this'
    }else if(arrayLength == 2) {
        response = `${names[0]} and ${names[1]} like this`
    }else if(arrayLength == 3){
        response = `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else if(arrayLength > 3) {
        response = `${names[0]}, ${names[1]} and ${arrayLength-2} others like this`
    }

    return response
}