function qs(selector){
    return document.querySelector(selector);
}

function display_time(){
    d = new Date;
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    qs("#time").innerHTML = h + ':' + m + ":" + s;
}

var timer;

function start_timer(){
    timer = setInterval(display_time, 1000);
    qs("#timer_btn").onclick = stop_timer;
    qs("#timer_btn").value = "Stop";
}

function stop_timer(){
    clearInterval(timer);
    qs("#timer_btn").onclick = star_timer;
    qs("#timer_btn").value = "Start";
}