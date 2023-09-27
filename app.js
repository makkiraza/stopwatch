var mseconds = 0;
var seconds = 0;
var minutes = 0;


var getmsec = document.getElementById('msec')
var getsec = document.getElementById('sec')
var getmins = document.getElementById('mins')




var interval;
function start() {
    interval = setInterval(function () {
        mseconds++
        getmsec.innerHTML = mseconds
        if (mseconds >= 100) {
            seconds++
            getsec.innerHTML = seconds
            mseconds = 0
        }
        else if (seconds>=60){
            minutes++
            getmins.innerHTML=minutes
            seconds=0
        }

    }, 10)
}

function pause() {
    clearInterval(interval)
}
  
  function reset(){
    clearInterval(interval)
    var minutes = 0;
    var seconds = 0;
    var mseconds = 0;

    minutes.innerHTML = minutes;
    seconds.innerHTML = seconds;
    mseconds.innerHTML = mseconds;

  }

