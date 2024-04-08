var hamburger=document.getElementById("hamburger");
var navtopic=document.getElementById("navtopicli");
hamburger.addEventListener("click",()=>{
    if(navtopic.style.display=="flex"){
        navtopic.style.display="none";

    }
    else{
        navtopic.style.display="flex";
    }
})