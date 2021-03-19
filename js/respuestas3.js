//----------------------------------------------------------------
//Tercer ejercicio
//----------------------------------------------------------------
//Mujer portadora:    
const R3A = document.getElementById("R3A");
const R3AL = document.getElementById("R3AL");
//Mujer portadora:      
const R3B = document.getElementById("R3B");
const R3BL = document.getElementById("R3BL");
//P:      
const R3PA = document.getElementById("R3PA");
const R3PB = document.getElementById("R3PB");
//G:      
const R3GA = document.getElementById("R3GA");
const R3GB = document.getElementById("R3GB");
const R3GC = document.getElementById("R3GC");
const R3GD = document.getElementById("R3GD");
//F1:      
const R3FA = document.getElementById("R3FA");
const R3FB = document.getElementById("R3FB");
const R3FC = document.getElementById("R3FC");
const R3FD = document.getElementById("R3FD");
const R3FE = document.getElementById("R3FE");
const R3FF = document.getElementById("R3FF");
const R3FG = document.getElementById("R3FG");
const R3FH = document.getElementById("R3FH");

//P:      
const R3PA2 = document.getElementById("R3PA2");
const R3PB2 = document.getElementById("R3PB2");
//G:      
const R3GA2 = document.getElementById("R3GA2");
const R3GB2 = document.getElementById("R3GB2");
const R3GC2 = document.getElementById("R3GC2");
const R3GD2 = document.getElementById("R3GD2");
//F1:      
const R3FA2 = document.getElementById("R3FA2");
const R3FB2 = document.getElementById("R3FB2");
const R3FC2 = document.getElementById("R3FC2");
const R3FD2 = document.getElementById("R3FD2");
const R3FE2 = document.getElementById("R3FE2");
const R3FF2 = document.getElementById("R3FF2");
const R3FG2 = document.getElementById("R3FG2");
const R3FH2 = document.getElementById("R3FH2");
//Respuesta:      
const R3C  = document.getElementById("R3C");
const R3CL = document.getElementById("R3CL");
const R3D  = document.getElementById("R3D");
const R3DL = document.getElementById("R3DL");

const revisar3 = document.getElementById("respuestas3");


function ejercicio(){
    //---------------------------------------------
    if(R3A.options.selectedIndex == 0){
    R3AL.textContent = "Correcto"    
    R3AL.style.width = "75px";
    R3AL.style.borderRadius = "6px";
    R3AL.style.backgroundColor = "green";
    }
    else{
    R3AL.textContent = "Incorrecto: 1/4"
    R3AL.style.width = "130px";
    R3AL.style.borderRadius = "6px";
    R3AL.style.backgroundColor = "red";
    }

    if(R3B.options.selectedIndex == 2){
    R3BL.textContent = "Correcto"
    R3BL.style.width = "75px";
    R3BL.style.borderRadius = "6px";
    R3BL.style.backgroundColor = "green";
    }
    else{
    R3BL.textContent = "Incorrecto: 100%"
    R3BL.style.width = "160px";
    R3BL.style.borderRadius = "6px";
    R3BL.style.backgroundColor = "red";
    }
    //---------------------------------------------
    if(R3C.options.selectedIndex == 0){
        R3CL.textContent = "Correcto"    
        R3CL.style.width = "75px";
        R3CL.style.borderRadius = "6px";
        R3CL.style.backgroundColor = "green";
        }
        else{
        R3CL.textContent = "Incorrecto: ¼ de los hijos  tendrán ojos azules y 75% de los hijos tendrán ojos negros."
        R3CL.style.width = "600px";
        R3CL.style.borderRadius = "6px";
        R3CL.style.backgroundColor = "red";
    }
    if(R3D.options.selectedIndex == 1){
        R3DL.textContent = "Correcto"    
        R3DL.style.width = "75px";
        R3DL.style.borderRadius = "6px";
        R3DL.style.backgroundColor = "green";
        }
        else{
        R3DL.textContent = "Incorrecto: 100 % de los hijos tendrán ojos azules"
        R3DL.style.width = "400px";
        R3DL.style.borderRadius = "6px";
        R3DL.style.backgroundColor = "red";
    } 
    //---------------------------------------------
    //  P   
    if(R3PA.value == "Aa"){
        R3PA.style.backgroundColor = "green";
    }else{
        R3PA.value = "Aa";
        R3PA.style.backgroundColor = "red";        
    }
    if(R3PB.value == "Aa"){
        R3PB.style.backgroundColor = "green";
    }else{
        R3PB.value = "Aa";
        R3PB.style.backgroundColor = "red";        
    }
    //---------------------------------------------
    //  G
    if(R3GA.value == "A"){
        R3GA.style.backgroundColor = "green";
    }else{
        R3GA.value = "A";
        R3GA.style.backgroundColor = "red";        
    }
    if(R3GB.value == "a"){
        R3GB.style.backgroundColor = "green";
    }else{
        R3GB.value = "a";
        R3GB.style.backgroundColor = "red";        
    }
    if(R3GC.value == "A"){
        R3GC.style.backgroundColor = "green";
    }else{
        R3GC.value = "A";
        R3GC.style.backgroundColor = "red";        
    }
    if(R3GD.value == "a"){
        R3GD.style.backgroundColor = "green";
    }else{
        R3GD.value = "a";
        R3GD.style.backgroundColor = "red";        
    }
    //---------------------------------------------
    // F
    if(R3FA.value == "A"){
        R3FA.style.backgroundColor = "green";
    }else{
        R3FA.value = "A";
        R3FA.style.backgroundColor = "red";        
    }
    if(R3FB.value == "a"){
        R3FB.style.backgroundColor = "green";
    }else{
        R3FB.value = "a";
        R3FB.style.backgroundColor = "red";        
    }
    if(R3FC.value == "A"){
        R3FC.style.backgroundColor = "green";
    }else{
        R3FC.value = "A";
        R3FC.style.backgroundColor = "red";        
    }
    if(R3FD.value == "AA"){
        R3FD.style.backgroundColor = "green";
    }else{
        R3FD.value = "AA";
        R3FD.style.backgroundColor = "red";        
    }
    if(R3FE.value == "Aa"){
        R3FE.style.backgroundColor = "green";
    }else{
        R3FE.value = "Aa";
        R3FE.style.backgroundColor = "red";        
    }
    if(R3FF.value == "a"){
        R3FF.style.backgroundColor = "green";
    }else{
        R3FF.value = "a";
        R3FF.style.backgroundColor = "red";        
    }
    if(R3FG.value == "Aa"){
        R3FG.style.backgroundColor = "green";
    }else{
        R3FG.value = "Aa";
        R3FG.style.backgroundColor = "red";        
    }
    if(R3FH.value == "aa"){
        R3FH.style.backgroundColor = "green";
    }else{
        R3FH.value = "aa";
        R3FH.style.backgroundColor = "red";        
    }

    //---------------------------------------------
    //  P   
    if(R3PA2.value == "aa"){
        R3PA2.style.backgroundColor = "green";
    }else{
        R3PA2.value = "aa";
        R3PA2.style.backgroundColor = "red";        
    }
    if(R3PB2.value == "aa"){
        R3PB2.style.backgroundColor = "green";
    }else{
        R3PB2.value = "aa";
        R3PB2.style.backgroundColor = "red";        
    }
    //---------------------------------------------
    //  G
    if(R3GA2.value == "a"){
        R3GA2.style.backgroundColor = "green";
    }else{
        R3GA2.value = "a";
        R3GA2.style.backgroundColor = "red";        
    }
    if(R3GB2.value == "a"){
        R3GB2.style.backgroundColor = "green";
    }else{
        R3GB2.value = "a";
        R3GB2.style.backgroundColor = "red";        
    }
    if(R3GC2.value == "a"){
        R3GC2.style.backgroundColor = "green";
    }else{
        R3GC2.value = "a";
        R3GC2.style.backgroundColor = "red";        
    }
    if(R3GD2.value == "a"){
        R3GD2.style.backgroundColor = "green";
    }else{
        R3GD2.value = "a";
        R3GD2.style.backgroundColor = "red";        
    }
    //---------------------------------------------
    // F
    if(R3FA2.value == "a"){
        R3FA2.style.backgroundColor = "green";
    }else{
        R3FA2.value = "a";
        R3FA2.style.backgroundColor = "red";        
    }
    if(R3FB2.value == "a"){
        R3FB2.style.backgroundColor = "green";
    }else{
        R3FB2.value = "a";
        R3FB2.style.backgroundColor = "red";        
    }
    if(R3FC2.value == "a"){
        R3FC2.style.backgroundColor = "green";
    }else{
        R3FC2.value = "a";
        R3FC2.style.backgroundColor = "red";        
    }
    if(R3FD2.value == "aa"){
        R3FD2.style.backgroundColor = "green";
    }else{
        R3FD2.value = "aa";
        R3FD2.style.backgroundColor = "red";        
    }
    if(R3FE2.value == "aa"){
        R3FE2.style.backgroundColor = "green";
    }else{
        R3FE2.value = "aa";
        R3FE2.style.backgroundColor = "red";        
    }
    if(R3FF2.value == "a"){
        R3FF2.style.backgroundColor = "green";
    }else{
        R3FF2.value = "a";
        R3FF2.style.backgroundColor = "red";        
    }
    if(R3FG2.value == "aa"){
        R3FG2.style.backgroundColor = "green";
    }else{
        R3FG2.value = "aa";
        R3FG2.style.backgroundColor = "red";        
    }
    if(R3FH2.value == "aa"){
        R3FH2.style.backgroundColor = "green";
    }else{
        R3FH2.value = "aa";
        R3FH2.style.backgroundColor = "red";        
    }
}

revisar3.addEventListener('click', ejercicio);