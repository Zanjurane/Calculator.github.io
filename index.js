let display=document.getElementById('display');
let buttons=Array.from(document.getElementsByClassName('button'));
buttons.map(button=>{button.addEventListener('click',(e)=>{
    switch (e.target.innerText) {
        case 'c':display.innerText='';
            
            break;
        case'BACK': 
        if (display.innerText) {
            display.innerText=display.innerText.slice(0,-1)
            
        }
        
        break;
        case'=':try {display.innerText=eval(display.innerText);
            
        } catch (error) {display.innerText='Error';
            
        }

    
        
            break;
            default:display.innerText+=e.target.innerText;
    }
     
})})
