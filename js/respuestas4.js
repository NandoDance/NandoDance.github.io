//----------------------------------------------------------------
//Cuarto ejercicio
//----------------------------------------------------------------
//Hombre Daltónico  
const R4A = document.getElementById("R4A");
const R4AL = document.getElementById("R4AL");
//Mujer Normal:      
const R4B = document.getElementById("R4B");
const R4BL = document.getElementById("R4BL");

//P:      
const R4PA = document.getElementById("R4PA");
const R4PB = document.getElementById("R4PB");
//G:      
const R4GA = document.getElementById("R4GA");
const R4GB = document.getElementById("R4GB");
const R4GC = document.getElementById("R4GC");
const R4GD = document.getElementById("R4GD");
//F1:      
const R4FA = document.getElementById("R4FA");
const R4FB = document.getElementById("R4FB");
const R4FC = document.getElementById("R4FC");
const R4FD = document.getElementById("R4FD");
const R4FE = document.getElementById("R4FE");
const R4FF = document.getElementById("R4FF");
const R4FG = document.getElementById("R4FG");
const R4FH = document.getElementById("R4FH");
//Respuesta:      
const R4C  = document.getElementById("R4C");
const R4CL = document.getElementById("R4CL");

const revisar4 = document.getElementById("respuestas4");


function ejercicio(){
    //---------------------------------------------
    if(R4A.checked){
        R4AL.style.width = "50px";
        R4AL.style.borderRadius = "6px";
        R4AL.style.backgroundColor = "green";
        }
    else{
        R4AL.style.width = "50px";
        R4AL.style.borderRadius = "6px";
        R4AL.style.backgroundColor = "red";
        }
    
    if(R4B.checked){
        R4BL.style.width = "50px";
        R4BL.style.borderRadius = "6px";
        R4BL.style.backgroundColor = "green";
        }
    else{
        R4BL.style.width = "50px";
        R4BL.style.borderRadius = "6px";
        R4BL.style.backgroundColor = "red";
    }
    //---------------------------------------------
    if(R4C.options.selectedIndex == 0){
        R4CL.textContent = "Correcto"    
        R4CL.style.width = "75px";
        R4CL.style.borderRadius = "6px";
        R4CL.style.backgroundColor = "green";
        }
        else{
        R4CL.textContent = "Incorrecto: el 50% correspondiente a las hijas serán portadoras (con visión normal) y el 50% correspondiente a los hijos tendrá visión normal"
        R4CL.style.width = "500px";
        R4CL.style.borderRadius = "6px";
        R4CL.style.backgroundColor = "red";
    }
    //---------------------------------------------
    //  P   
    if(R4PA.value == "XdY"){
        R4PA.style.backgroundColor = "green";
    }else{
        R4PA.value = "XdY";
        R4PA.style.backgroundColor = "red";        
    }
    if(R4PB.value == "XX"){
        R4PB.style.backgroundColor = "green";
    }else{
        R4PB.value = "XX";
        R4PB.style.backgroundColor = "red";        
    }
    //---------------------------------------------
    //  G
    if(R4GA.value == "Xd"){
        R4GA.style.backgroundColor = "green";
    }else{
        R4GA.value = "Xd";
        R4GA.style.backgroundColor = "red";        
    }
    if(R4GB.value == "Y"){
        R4GB.style.backgroundColor = "green";
    }else{
        R4GB.value = "Y";
        R4GB.style.backgroundColor = "red";        
    }
    if(R4GC.value == "X"){
        R4GC.style.backgroundColor = "green";
    }else{
        R4GC.value = "X";
        R4GC.style.backgroundColor = "red";        
    }
    if(R4GD.value == "X"){
        R4GD.style.backgroundColor = "green";
    }else{
        R4GD.value = "X";
        R4GD.style.backgroundColor = "red";        
    }
    //---------------------------------------------
    // F
    if(R4FA.value == "X"){
        R4FA.style.backgroundColor = "green";
    }else{
        R4FA.value = "X";
        R4FA.style.backgroundColor = "red";        
    }
    if(R4FB.value == "X"){
        R4FB.style.backgroundColor = "green";
    }else{
        R4FB.value = "X";
        R4FB.style.backgroundColor = "red";        
    }
    if(R4FC.value == "Xd"){
        R4FC.style.backgroundColor = "green";
    }else{
        R4FC.value = "Xd";
        R4FC.style.backgroundColor = "red";        
    }
    if(R4FD.value == "XdX"){
        R4FD.style.backgroundColor = "green";
    }else{
        R4FD.value = "XdX";
        R4FD.style.backgroundColor = "red";        
    }
    if(R4FE.value == "XdX"){
        R4FE.style.backgroundColor = "green";
    }else{
        R4FE.value = "XdX";
        R4FE.style.backgroundColor = "red";        
    }
    if(R4FF.value == "Y"){
        R4FF.style.backgroundColor = "green";
    }else{
        R4FF.value = "Y";
        R4FF.style.backgroundColor = "red";        
    }
    if(R4FG.value == "XY"){
        R4FG.style.backgroundColor = "green";
    }else{
        R4FG.value = "XY";
        R4FG.style.backgroundColor = "red";        
    }
    if(R4FH.value == "XY"){
        R4FH.style.backgroundColor = "green";
    }else{
        R4FH.value = "XY";
        R4FH.style.backgroundColor = "red";        
    }
}

revisar4.addEventListener('click', ejercicio);