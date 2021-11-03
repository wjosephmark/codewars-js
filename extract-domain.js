function domainName(url){
    if(url.split('')[0] == 'h'){
        let splitUrl = url.split('://')
        let finalSplit = splitUrl[1].split('.')
    
        if(finalSplit[0]=='www'){
            return(finalSplit[1])
        }else{
            return(finalSplit[0])
        }
    }else{
        let splitUrl = url.split('.')
        if(splitUrl[0]=='www'){
            return(splitUrl[1])
        }else{
            return(splitUrl[0])
        }
    }
}

domainName('http://github.com')