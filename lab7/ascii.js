window.onload = function(){
    "use strict";
    let intervalAnim;
    let textArea;
    let stop;
    let start;
    
    const animate = function(a,b){
        let i = 0;
        let speed = document.getElementById("turbo").checked;
        let animSpeed = 250;
        if(speed)
        {
              animSpeed = 50;
        }
        intervalAnim =  setInterval(function(){
            let val = a[i];
            i = (i + 1) % a.length;
            b.value = val;
        }, animSpeed);
    };
    
    start = function()
    {
        let message = "Please choose an animation or write your " +
                    "own animation here separated by 5" +
                    "equal signs and a newline('=====/n') for each frame.";
        textArea = document.getElementById("text-area").value;
        let textAreaField = document.getElementById("text-area");
        let toBeAnimated = document.getElementById("animation").value;
        if(textAreaField.value === "" && toBeAnimated ==="Blank")
        {
            textAreaField.value  = message;
            document.getElementById("stop").disabled = true;
            document.getElementById("start").disabled = false;
        }
        else{
            document.getElementById("stop").disabled = false;
            document.getElementById("start").disabled = true;
            let animElements = textAreaField.value;
            let anim = animElements.split("=====\n");
            animate(anim, textAreaField);  
        }
    };
   
    

    stop =  function(){
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
        if(intervalAnim != null)
        {
            clearInterval(intervalAnim);
        }
       
        document.getElementById("text-area").value = textArea;
    };
    
    document.getElementById("turbo").onchange = function(){
        if(intervalAnim)
        {
            stop();
            start();
        }
        
    };
    document.getElementById("animation").onchange = function(){
        stop();
        let val = document.getElementById("animation");
        let selected = val.value;
        document.getElementById("text-area").value = ANIMATIONS[selected];
    };
    document.getElementById("fontsize").onchange = function(){
        let size = document.getElementById("fontsize").value;
        if(size === "Tiny")
        {
            document.getElementById("text-area").style.fontSize = "7pt";
        }
        if(size === "Small")
        {
            document.getElementById("text-area").style.fontSize = "10pt";
        }
        if(size === "Medium")
        {
            document.getElementById("text-area").style.fontSize = "12pt";
        }
        if(size === "Large")
        {
            document.getElementById("text-area").style.fontSize = "16pt";
        }
        if(size === "Extra Large")
        {
            document.getElementById("text-area").style.fontSize = "24pt";
        }
        if(size === "XXL")
        {
            document.getElementById("text-area").style.fontSize = "32pt";
        }
    };
    document.getElementById("start").onclick = start;
    document.getElementById("stop").onclick = stop;
};
