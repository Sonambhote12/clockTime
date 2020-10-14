setInterval(setClock,1000);
const hour=document.querySelector('[data-hour]')
const minute=document.querySelector('[data-minute]')
const second=document.querySelector('[data-second]')
function setClock(){
    const nowDate= new Date;
    const presentSecond=nowDate.getSeconds()/60;
    const presentMinute=(presentSecond+nowDate.getMinutes())/60;
    const presentHour=(presentMinute+nowDate.getHours())/60;
    setRotation(hour,presentHour);
    setRotation(minute,presentMinute);
    setRotation(second,presentSecond);
    
}
function setRotation(element, rotationR){
    element.style.setProperty('--r',rotationR*360);

}
setClock();