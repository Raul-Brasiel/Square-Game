var object = document.getElementById('square');
var pontos = document.getElementById("pontos");
pontos = 0;

object.onclick=function(){
  var x = Math.floor(Math.random()*560);
  var y = Math.floor(Math.random()*560);
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
window.onload

