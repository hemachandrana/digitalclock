
function displayTime(){
    let datetime = new Date();
    let hr = datetime.getHours();
    let min = padzero(datetime.getMinutes());
    let sec = padzero(datetime.getSeconds());
    let ampm = document.getElementById('ampm')
    if(hr>12){
        hr=hr-12
        ampm.innerHTML='PM'
    }
    document.getElementById('hours').innerHTML = padzero(hr);
    document.getElementById('mins').innerHTML = min;
    document.getElementById('secs').innerHTML = sec;
}

function padzero(num){
    return num<10?'0'+num:num
}

setInterval(displayTime,500)