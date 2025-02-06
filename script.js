// Add JavaScript code for your web site here and call it from index.html.
document.addEventListener("DOMContentLoaded", (event) => {
    //Create variables and connect them to HTML using document.querySelector
    toptext = document.querySelector(".toptext");
    opening_scene = document.querySelector(".open-Scene");
    openimage = document.querySelector(".openimage");
    button1 = document.querySelector(".");
    button2 = document.querySelector("");
    option1 = document.querySelector(".option-A-Scene");
    option2 = document.querySelector(".option-B-Scene");
    optionA1 = document.querySelector(".option-A1");
    optionA2 = document.querySelector(".option-A2");
    _button = document.querySelector(".");
    _button = document.querySelector(".");

    //Create click, funtions using addEventListener //
    _button.addEventListener('click',function(){ 
        optionA1.style.display="block"; 
    });
    
    _button.addEventListener('click',function(){ 
        optionA2.style.display="block"; 
    });
    
    button1.addEventListener('click',function(){
    option1.style.display="block";
    opening_scene.style.display="none";
    toptext.innerHTML = "";
    });
    
    button2.addEventListener('click',function(){
        option2.style.display="block";  
        opening_scene.style.display="none";  
    });
    
    toptext.addEventListener('dblclick',function(){ 
        toptext.innerHTML ="Choose one button from below" 
    });
    
    openimage.addEventListener('mouseover',function(){ 
        toptext.innerHTML ="Choose one button from below" 
    });
    
    _button.addEventListener('click',function(){ 
        optionA1.style.display="block"; 
    });
    
    _button.addEventListener('click',function(){ 
        optionA2.style.display="block"; 
    });
    
    
    //button1.addEventListener('mouseover',function(){
        //option1.style.display="block";
        //opening_scene.style.display="none";
        //toptext.innerHTML = "You're fishing from the sand";
        //});
});