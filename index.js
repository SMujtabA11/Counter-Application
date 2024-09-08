var counterScreen = document.querySelector("#counterScreen");
var decrease = document.querySelector("#decrease");
var increase = document.querySelector("#increase");
var reset = document.querySelector("#reset");
var i= 0;
increase.addEventListener("click",function(){
    i++;
    counterScreen.innerHTML=i;
    console.log({counterScreen});
})
decrease.addEventListener("click",function(){
    i--;
    counterScreen.innerHTML=i;
    console.log({counterScreen});
})
reset.addEventListener("click",function(){
    i=0;
    counterScreen.innerHTML=i;
    console.log({counterScreen});
})