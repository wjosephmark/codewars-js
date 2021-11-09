function formatDuration (seconds) {
    if(seconds>=60){
        var minutes = seconds/60
        var minutesInSeconds = minutes*60
        seconds = seconds-minutesInSeconds
        
        if(minutes>=60){
            var hours = minutes/60
            var hoursInMinutes = hours*60
            minutes = minutes-hoursInMinutes

            if(hours>=24){
                var days = hours/24
                var daysInHours = days*24
                hours = hours-daysInHours

                if(days>=365){
                    var years = days/365
                    var yearsInDays = years*365
                    days = days-yearsInDays
                }
            }
        }
    }

    console.log(`${years} years, ${days} days, ${minutes} minutes, ${seconds} seconds`)
}

formatDuration(3600)