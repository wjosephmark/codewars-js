function dirReduc(arr){
    var n = []
    var s = []
    var e = []
    var w = []

    for (let i=0; i<arr.length; i++) {
        const dir = arr[i];

        if(dir == 'NORTH'){
            n.push([i])
        }else if(dir == 'SOUTH'){
            s.push([i])
        }else if(dir == 'EAST'){
            e.push([i])
        }else if(dir == 'WEST'){
            w.push([i])
        }
    }

    console.log(arr)
    if(n.length==s.length){
        let nPopped = false
        let sPopped = false
        for(let i=0; i<arr.length; i++){
            var dir = arr[i]
            if(dir=='NORTH'){
                if(!nPopped){
                    if(!sPopped){
                        arr.pop(i)
                        nPopped++
                    }else{
                        arr.pop(i-1)
                        nPopped++
                    }
                }
            }else if(dir=='SOUTH'){
                if(!sPopped){
                    if(!nPopped){
                        arr.pop(i)
                        sPopped++
                    }else{
                        arr.pop(i-1)
                        sPopped++
                    }
                }
            }
        }
        n.forEach(pos => {
            arr.pop(pos)
        })
        s.forEach(pos => {
            arr.pop(pos)
        })
    }else if(n>s){
        n = n-s
        s=0
    }else if(s>n){
        s = s-n
        n=0
    }

    console.log(arr)

    if(e.length==w.length){
        e.forEach(pos => {
            arr.pop(pos)
        })
        w.forEach(pos => {
            arr.pop(pos)
        })
    }else if(e>w){
        e = e-w
        w=0
    }else if(w>e){
        w = w-e
        e=0
    }

    var response = []

    var pushed = false

    if(n!=0){
        for (let i = 0; i < n; i++) {
            response.push('NORTH')
            pushCount++
        }
    }

    if(s!=0){
        if(pushed){

        }
        for (let i = 0; i < s; i++) {
            response.push('SOUTH')
        }
    }

    if(e!=0){
        for (let i = 0; i < e; i++) {
            response.push('EAST')
        }
    }

    if(w!=0){
        for (let i = 0; i < w; i++){ 
            response.push('WEST')
        }
    }

    return response
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])