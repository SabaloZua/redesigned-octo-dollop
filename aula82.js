 const btn_remover=document.querySelector('#btn_remover');
 const btn_add=document.querySelector("#btn_add")
 const num_objectos=document.querySelector("#num_objectos")
 const palco=document.getElementById("palco")
 const txt_qtde=document.querySelector("#txt_qtde")
 const controle=document.querySelector("#controle")

 // pegando a largura do palco
 let largura_palco=palco.offsetWidth;
 let altura_palco=palco.offsetHeight;
 let bolas=[]
 let num_bola=0
// class de bolas
class Bola{
   constructor(arrybolas,palco){
      this.tam=Math.floor(Math.random()*15)+10
      this.r=Math.floor(Math.random()*255)
      this.g=Math.floor(Math.random()*255)
      this.b=Math.floor(Math.random()*255)
      this.px=Math.floor(Math.random()*(largura_palco-this.tam))
      this.py=Math.floor(Math.random()*(altura_palco-this.tam))
       this.velx=Math.floor(Math.random()*2)+0.5
      this.vely=Math.floor(Math.random()*2)+0.5
      this.dirx=Math.floor((Math.random()*10)) > 5 ? 1 :-1
      this.diry=Math.floor((Math.random()*10)) > 5 ? 1 :-1
      this.palco=palco;
      this.arrybolas=arrybolas
      this.id=Date.now()+"_"+Math.floor(Math.random()*10000000000000)
     this.desenhar()
      this.controle=setInterval(this.controlar1,10);
      this.eu=document.getElementById(this.id)
      num_bola++
      num_objectos.innerHTML=num_bola
   }
 // função que returna posição da bolinha
   mpos=()=>{
        
      return this.arrybolas.indexOf(this)
   }

   // função que remove a bolinha
   remover=()=>{
         clearInterval(this.controle)
         bolas=bolas.filter((b)=>{
            if(b.id!=this.id)
            return b
         })
         this.eu.remove()
         num_bola-- 
         num_objectos.innerHTML=num_bola
   }
 // função que desenha a bolinha no DOM
   desenhar=()=>{
      const div=document.createElement('div')
      div.setAttribute("id",this.id)
      div.setAttribute('class',"bola")
      div.setAttribute('style',`left:${this.px}px; top:${this.py}px;
      width:${this.tam}px; height:${this.tam}px; background-color:rgb(${this.r},${this.g},${this.b});`)
      this.palco.appendChild(div)
   }
  // função que verifica se a bolinha colidiu com as extremidades do palco
      colidir=()=>{
         if(this.px+this.tam>=largura_palco){
            this.dirx=-1
         }else if(this.px<=0){
            this.dirx=1
         }
         if(this.py+this.tam>=altura_palco){
            this.diry=-1
         }else if(this.py<=0){
            this.diry=1
         }
      }   
  // função que controla a movimentação das bolinhas
   controlar1=()=>{
         this.colidir()
      this.px+=this.dirx*this.velx
      this.py+=this.diry*this.vely
      this.eu.setAttribute('style',`left:${this.px}px; top:${this.py}px;
      width:${this.tam}px; height:${this.tam}px; background-color:rgb(${this.r},${this.g},${this.b});`)
       if((this.py > altura_palco)|| (this.px > largura_palco)){
       this.remover()
       }
   } 

}

 window.addEventListener("resize",()=>{
    
 let largura_palco=palco.offsetWidth;
 let autora_palco=palco.offsetHeight;        
   
 })

 btn_add.addEventListener('click',()=>{
         const qtde=txt_qtde.value;  
         for(let i=0;i<qtde;i++){
            //intaciar novas bolinhas
            bolas.push(new Bola(bolas,palco)) 
         }
      
 })

     
 btn_remover.addEventListener("click",()=>{
   
   bolas.map((b)=>{
         // remover bolinha

      b.remover();


   })

 })
