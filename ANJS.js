const btn_iniciar=document.querySelector('#btn_iniciar');
const carro=document.querySelector("#carro");
const parar=document.querySelector("#btn_para");

let tamMax=null
let anima=null;
let tamcarro=null;

// metedo que faz a incialização
 const int=()=>{
    //
    carro.style="position:relative;left:0px;width:100px; height:40px; background-color: rgb(255,0,0);"
    // calculando o tamnho do carro
   tamcarro= parseInt(carro.style.width);
   // tamanho maximo da janela
    tamMax= window.innerWidth -tamcarro; 
 }

let dir=0;//direção

// Metodo que faz a movimentação
const mover=()=>{

            if(parseInt(carro.style.left)>=tamMax){
                dir=-1
                carro.style.background=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)});`
            }else if(parseInt(carro.style.left)<=0){
                dir=1
            }
            carro.style.left=parseInt(carro.style.left) + (10*dir) +"px";
            anima=setTimeout(mover,20)
        }
//    carro.style.left=parseInt(carro.style.left) + (10*dir) +"px";
  

btn_iniciar.addEventListener("click",()=>{
    mover()    
})

 parar.addEventListener("click",()=>{
    //clearInterval(anima)
    clearTimeout(anima)
 })
 
window.addEventListener("load",int())// chamda do metodo int() quando a janela é carregada
window.addEventListener('resize',()=>{
 tamMax=window.innerWidth - parseInt(carro.style.width);
})


window.addEventListener("keydown",(event)=>{
    if(event.code==="ArrowUp"){
        carro.style.width=parseInt(carro.style.width)+10+"px";
        carro.style.height=parseInt(carro.style.height)+10+"px";
    }
    if(event.code==="ArrowDown"){
        carro.style.width=parseInt(carro.style.width)-10+"px";
        carro.style.height=parseInt(carro.style.height)-10+"px";
    }
    tamcarro= parseInt(carro.style.width);
    tamMax= window.innerWidth -tamcarro; 
    
})