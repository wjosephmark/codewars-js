function formatDuration (seconds) {
    if(seconds>=60){
        var minutes = parseInt(seconds/60)
        var minutesInSeconds = minutes*60
        seconds = seconds-minutesInSeconds
        
        if(minutes>=60){
            var hours = parseInt(minutes/60)
            var hoursInMinutes = hours*60
            minutes = minutes-hoursInMinutes

            if(hours>=24){
                var days = parseInt(hours/24)
                var daysInHours = days*24
                hours = hours-daysInHours
                
                if(days>=365){
                    var years = parseInt(days/365)
                    var yearsInDays = years*365
                    days = days-yearsInDays
                }
            }
        }
    }

    var response = ''
    var pushCount = 0

    if(seconds && seconds!=0){
        if(minutes || hours || days || years){
            if(seconds>1){
                var response = `and ${seconds} seconds`
                pushCount++
            }else{
                var response = `and ${seconds} second`
                pushCount++
            }
        }else{
            if(seconds>1){
                var response = `${seconds} seconds`
                pushCount++
            }else{
                var response = `${seconds} second`
                pushCount++
            }
        }

    }

    if(minutes && minutes!=0){
        if(pushCount == 0){
            if(hours || days || years){
                if(minutes>1){
                    var response = `and ${minutes} minutes`
                    pushCount++
                }else{
                    var response = `and ${minutes} minute`
                    pushCount++
                }
            }else{
                if(minutes>1){
                    var response = `${minutes} minutes`
                    pushCount++
                }else{
                    var response = `${minutes} minute`
                    pushCount++
                }
            }
        }else{
            if(pushCount==1){
                if(minutes>1){
                    response = `${minutes} minutes `+response
                    pushCount++
                }else{
                    response = `${minutes} minute `+response
                    pushCount++
                }
            }else{
                if(minutes>1){
                    response = `${minutes} minutes, `+response
                    pushCount++
                }else{
                    response = `${minutes} minute, `+response
                    pushCount++
                }
            }
        }
    }
    
    if(hours && hours!=0){
        if(pushCount==0){
            if(days || years){hours
                if(hours>1){
                    var response = `and ${hours} hours`
                    pushCount++
                }else{
                    var response = `and ${hours} hour`
                    pushCount++
                }
            }else{
                if(hours>1){
                    var response = `${hours} hours`
                    pushCount++
                }else{
                    var response = `${hours} hour`
                    pushCount++
                }
            }
        }else{
            if(pushCount==1){
                if(hours>1){
                    response = `${hours} hours `+response
                    pushCount++
                }else{
                    response = `${hours} hour `+response
                    pushCount++
                }
            }else{
                if(hours>1){
                    response = `${hours} hours, `+response
                    pushCount++
                }else{
                    response = `${hours} hour, `+response
                    pushCount++
                }
            }
        }
    }
  
    if(days && days!=0){
        if(pushCount==0){
            if(years){
                if(days>1){
                    var response = `and ${days} days`
                    pushCount++
                }else{
                    var response = `and ${days} day`
                    pushCount++
                }
            }else{
                if(days>1){
                    var response = `${days} days`
                    pushCount++
                }else{
                    var response = `${days} day`
                    pushCount++
                }
            }
        }else{
            if(pushCount==1){
                if(days>1){
                    response = `${days} days `+response
                }else{
                    response = `${days} day `+response
                }
            }else{
                if(days>1){
                    response = `${days} days, `+response
                }else{
                    response = `${days} day, `+response
                }
            }
        }
    }

    if(years && years!=0){
        if(pushCount==0){
            if(years>1){
                var response = `${years} years`
                pushCount++
            }else{
                var response = `${years} year`
                pushCount++
            }
        }else{
            if(pushCount==1){
                if(years>1){
                    response = `${years} years `+response
                    pushCount++
                }else{
                    response = `${years} year `+response
                    pushCount++
                }
            }else{
                if(years>1){
                    response = `${years} years, `+response
                    pushCount++
                }else{
                    response = `${years} year, `+response
                    pushCount++
                }
            }
        }
    }

    if(response == ''){
        return('now')
    }else{
        return(response)
    }
}

formatDuration(65455215)