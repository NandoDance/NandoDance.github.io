//----------------------------------------------------------------
//Primer ejercicio
//----------------------------------------------------------------
//Mujer portadora:    
const R1A = document.getElementById("R1A");
const R1AL = document.getElementById("R1AL");
//Mujer portadora:      
const R1B = document.getElementById("R1B");
const R1BL = document.getElementById("R1BL");
//P:      
const R1PA = document.getElementById("R1PA");
const R1PB = document.getElementById("R1PB");
//G:      
const R1GA = document.getElementById("R1GA");
const R1GB = document.getElementById("R1GB");
const R1GC = document.getElementById("R1GC");
const R1GD = document.getElementById("R1GD");
//F1:      
const R1FA = document.getElementById("R1FA");
const R1FB = document.getElementById("R1FB");
const R1FC = document.getElementById("R1FC");
const R1FD = document.getElementById("R1FD");
const R1FE = document.getElementById("R1FE");
const R1FF = document.getElementById("R1FF");
const R1FG = document.getElementById("R1FG");
const R1FH = document.getElementById("R1FH");
//Respuesta:      
const R1C = document.getElementById("R1C");
const R1CL = document.getElementById("R1CL");

const revisarPrimer = document.getElementById("respuestas1");


function primerEjer(){
    
    if(R1A.checked){
    R1AL.style.width = "50px";
    R1AL.style.borderRadius = "6px";
    R1AL.style.backgroundColor = "green";
    }
    else{
    R1AL.style.width = "50px";
    R1AL.style.borderRadius = "6px";
    R1AL.style.backgroundColor = "red";
    }

    if(R1B.checked){
    R1BL.style.width = "50px";
    R1BL.style.borderRadius = "6px";
    R1BL.style.backgroundColor = "green";
    }
    else{
    R1BL.style.width = "50px";
    R1BL.style.borderRadius = "6px";
    R1BL.style.backgroundColor = "red";
    }

    if(R1C.options.selectedIndex == 1){
    R1CL.textContent = "Correcto "
    R1CL.style.width = "100px";
    R1CL.style.borderRadius = "6px";
    R1CL.style.backgroundColor = "green";
    }
    else{
    R1CL.textContent = "Incorrecto - La respuesta es: La probabilidad de que tengan un hijo varón hemofílico es de 1/4"
    R1CL.style.width = "500px";
    R1CL.style.borderRadius = "6px";
    R1CL.style.backgroundColor = "red";
    }
    //  P   
    if(R1PA.value == "XhX"){
        R1PA.style.backgroundColor = "green";
    }else{
        R1PA.value = "XhX";
        R1PA.style.backgroundColor = "red";        
    }
    if(R1PB.value == "XY"){
        R1PB.style.backgroundColor = "green";
    }else{
        R1PB.value = "XY";
        R1PB.style.backgroundColor = "red";        
    }
    //  G
    if(R1GA.value == "Xh"){
        R1GA.style.backgroundColor = "green";
    }else{
        R1GA.value = "Xh";
        R1GA.style.backgroundColor = "red";        
    }
    if(R1GB.value == "X"){
        R1GB.style.backgroundColor = "green";
    }else{
        R1GB.value = "X";
        R1GB.style.backgroundColor = "red";        
    }
    if(R1GC.value == "X"){
        R1GC.style.backgroundColor = "green";
    }else{
        R1GC.value = "X";
        R1GC.style.backgroundColor = "red";        
    }
    if(R1GD.value == "Y"){
        R1GD.style.backgroundColor = "green";
    }else{
        R1GD.value = "Y";
        R1GD.style.backgroundColor = "red";        
    }
    // F
    if(R1FA.value == "X"){
        R1FA.style.backgroundColor = "green";
    }else{
        R1FA.value = "X";
        R1FA.style.backgroundColor = "red";        
    }
    if(R1FB.value == "Y"){
        R1FB.style.backgroundColor = "green";
    }else{
        R1FB.value = "Y";
        R1FB.style.backgroundColor = "red";        
    }
    if(R1FC.value == "Xh"){
        R1FC.style.backgroundColor = "green";
    }else{
        R1FC.value = "Xh";
        R1FC.style.backgroundColor = "red";        
    }
    if(R1FD.value == "XhX"){
        R1FD.style.backgroundColor = "green";
    }else{
        R1FD.value = "XhX";
        R1FD.style.backgroundColor = "red";        
    }
    if(R1FE.value == "XhY"){
        R1FE.style.backgroundColor = "green";
    }else{
        R1FE.value = "XhY";
        R1FE.style.backgroundColor = "red";        
    }
    if(R1FF.value == "X"){
        R1FF.style.backgroundColor = "green";
    }else{
        R1FF.value = "X";
        R1FF.style.backgroundColor = "red";        
    }
    if(R1FG.value == "XX"){
        R1FG.style.backgroundColor = "green";
    }else{
        R1FG.value = "XX";
        R1FG.style.backgroundColor = "red";        
    }
    if(R1FH.value == "XY"){
        R1FH.style.backgroundColor = "green";
    }else{
        R1FH.value = "XY";
        R1FH.style.backgroundColor = "red";        
    }
}

revisarPrimer.addEventListener('click', primerEjer);