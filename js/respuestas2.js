//----------------------------------------------------------------
//Segundo ejercicio
//----------------------------------------------------------------
//Progenitor afectado heterocigoto:    
const R2A = document.getElementById("R2A");
const R2AL = document.getElementById("R2AL");
//Progenitor normal:      
const R2B = document.getElementById("R2B");
const R2BL = document.getElementById("R2BL");

//P:      
const R2PA = document.getElementById("R2PA");
const R2PB = document.getElementById("R2PB");
//G:      
const R2GA = document.getElementById("R2GA");
const R2GB = document.getElementById("R2GB");
const R2GC = document.getElementById("R2GC");
const R2GD = document.getElementById("R2GD");
//F1:      
const R2FA = document.getElementById("R2FA");
const R2FB = document.getElementById("R2FB");
const R2FC = document.getElementById("R2FC");
const R2FD = document.getElementById("R2FD");
const R2FE = document.getElementById("R2FE");
const R2FF = document.getElementById("R2FF");
const R2FG = document.getElementById("R2FG");
const R2FH = document.getElementById("R2FH");
//Respuesta:      
const R2C  = document.getElementById("R2C");
const R2CL = document.getElementById("R2CL");
const R2D  = document.getElementById("R2D");
const R2DL = document.getElementById("R2DL");
const R2E  = document.getElementById("R2E");
const R2EL = document.getElementById("R2EL");

const revisar = document.getElementById("respuestas2");


function ejercicio(){
    //---------------------------------------------
    if(R2A.options.selectedIndex == 0){
    R2AL.textContent = "Correcto"    
    R2AL.style.width = "75px";
    R2AL.style.borderRadius = "6px";
    R2AL.style.backgroundColor = "green";
    }
    else{
    R2AL.textContent = "Incorrecto: Nn"
    R2AL.style.width = "130px";
    R2AL.style.borderRadius = "6px";
    R2AL.style.backgroundColor = "red";
    }

    if(R2B.options.selectedIndex == 1){
    R2BL.textContent = "Correcto"
    R2BL.style.width = "75px";
    R2BL.style.borderRadius = "6px";
    R2BL.style.backgroundColor = "green";
    }
    else{
    R2BL.textContent = "Incorrecto: nn"
    R2BL.style.width = "130px";
    R2BL.style.borderRadius = "6px";
    R2BL.style.backgroundColor = "red";
    }
    //---------------------------------------------
    if(R2C.options.selectedIndex == 0){
        R2CL.textContent = "Correcto"    
        R2CL.style.width = "75px";
        R2CL.style.borderRadius = "6px";
        R2CL.style.backgroundColor = "green";
        }
        else{
        R2CL.textContent = "Incorrecto: 2/4"
        R2CL.style.width = "130px";
        R2CL.style.borderRadius = "6px";
        R2CL.style.backgroundColor = "red";
    }
    if(R2D.options.selectedIndex == 0){
        R2DL.textContent = "Correcto"    
        R2DL.style.width = "75px";
        R2DL.style.borderRadius = "6px";
        R2DL.style.backgroundColor = "green";
        }
        else{
        R2DL.textContent = "Incorrecto: 50%"
        R2DL.style.width = "130px";
        R2DL.style.borderRadius = "6px";
        R2DL.style.backgroundColor = "red";
    }
    if(R2E.options.selectedIndex == 0){
        R2EL.textContent = "Correcto"    
        R2EL.style.width = "75px";
        R2EL.style.borderRadius = "6px";
        R2EL.style.backgroundColor = "green";
        }
        else{
        R2EL.textContent = "Incorrecto: 2:2"
        R2EL.style.width = "130px";
        R2EL.style.borderRadius = "6px";
        R2EL.style.backgroundColor = "red";
    }    
    //---------------------------------------------
    //  P   
    if(R2PA.value == "Nn"){
        R2PA.style.backgroundColor = "green";
    }else{
        R2PA.value = "Nn";
        R2PA.style.backgroundColor = "red";        
    }
    if(R2PB.value == "nn"){
        R2PB.style.backgroundColor = "green";
    }else{
        R2PB.value = "nn";
        R2PB.style.backgroundColor = "red";        
    }
    //---------------------------------------------
    //  G
    if(R2GA.value == "N"){
        R2GA.style.backgroundColor = "green";
    }else{
        R2GA.value = "N";
        R2GA.style.backgroundColor = "red";        
    }
    if(R2GB.value == "n"){
        R2GB.style.backgroundColor = "green";
    }else{
        R2GB.value = "n";
        R2GB.style.backgroundColor = "red";        
    }
    if(R2GC.value == "n"){
        R2GC.style.backgroundColor = "green";
    }else{
        R2GC.value = "n";
        R2GC.style.backgroundColor = "red";        
    }
    if(R2GD.value == "n"){
        R2GD.style.backgroundColor = "green";
    }else{
        R2GD.value = "n";
        R2GD.style.backgroundColor = "red";        
    }
    //---------------------------------------------
    // F
    if(R2FA.value == "N"){
        R2FA.style.backgroundColor = "green";
    }else{
        R2FA.value = "N";
        R2FA.style.backgroundColor = "red";        
    }
    if(R2FB.value == "n"){
        R2FB.style.backgroundColor = "green";
    }else{
        R2FB.value = "n";
        R2FB.style.backgroundColor = "red";        
    }
    if(R2FC.value == "n"){
        R2FC.style.backgroundColor = "green";
    }else{
        R2FC.value = "n";
        R2FC.style.backgroundColor = "red";        
    }
    if(R2FD.value == "Nn"){
        R2FD.style.backgroundColor = "green";
    }else{
        R2FD.value = "Nn";
        R2FD.style.backgroundColor = "red";        
    }
    if(R2FE.value == "nn"){
        R2FE.style.backgroundColor = "green";
    }else{
        R2FE.value = "nn";
        R2FE.style.backgroundColor = "red";        
    }
    if(R2FF.value == "n"){
        R2FF.style.backgroundColor = "green";
    }else{
        R2FF.value = "n";
        R2FF.style.backgroundColor = "red";        
    }
    if(R2FG.value == "Nn"){
        R2FG.style.backgroundColor = "green";
    }else{
        R2FG.value = "Nn";
        R2FG.style.backgroundColor = "red";        
    }
    if(R2FH.value == "n"){
        R2FH.style.backgroundColor = "green";
    }else{
        R2FH.value = "n";
        R2FH.style.backgroundColor = "red";        
    }
}

revisar.addEventListener('click', ejercicio);