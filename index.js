var object = document.getElementById('square'); /*quadrado 1*/
var object2 = document.getElementById('square2'); /*quadrado 2*/
var pontos = document.getElementById("pontos"); 
pontos = 0;

/*Função para mudar o quadrado aleatoriamente quando iniciar a página*/
window.onload = function(){
  var x = Math.floor(Math.random()*485);
  var y = Math.floor(Math.random()*485);
  object.style.top = x + 'px';
  object.style.left = y + 'px';

  var x2 = Math.floor(Math.random()*485);
  var y2 = Math.floor(Math.random()*485);
  object2.style.top = x2 + 'px';
  object2.style.left = y2 + 'px';

  var letters = "0123456789ABCDEF";
  var color = "#";
  var color2 = "#";
     for (var i = 0; i < 6; i++) {   
         color += letters[Math.floor(Math.random() * 16)];
         color2 += letters[Math.floor(Math.random() * 16)];  
     }
  object.style.backgroundColor = color;
  object2.style.backgroundColor = color2;
}

/*Mudar a posição e a cor aleatoriamente do quadrado 1*/
object.onclick=function(){
  var x = Math.floor(Math.random()*485);
  var y = Math.floor(Math.random()*485);
  object.style.top = x + 'px';
  object.style.left = y + 'px';
  pontos++;
  document.getElementById("pontos").innerText="Pontos: " +pontos;
  var letters = "0123456789ABCDEF";
     var color = "#";
     for (var i = 0; i < 6; i++) {   
         color += letters[Math.floor(Math.random() * 16)];  
     }
  object.style.backgroundColor = color;
};

/*Mudar a posição e a cor aleatoriamente do quadrado 2*/
object2.onclick=function(){
  var x = Math.floor(Math.random()*485);
  var y = Math.floor(Math.random()*485);
  object2.style.top = x + 'px';
  object2.style.left = y + 'px';
  pontos++;
  document.getElementById("pontos").innerText="Pontos: " +pontos;
  var letters = "0123456789ABCDEF";
     var color = "#";
     for (var i = 0; i < 6; i++) {   
         color += letters[Math.floor(Math.random() * 16)];  
     }
  object2.style.backgroundColor = color;
};