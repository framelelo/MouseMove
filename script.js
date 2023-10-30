const circles = document.querySelectorAll('.circle')

circles.forEach(function(circle){
  window.addEventListener('mousemove', function (e) { 
 
    circle.style.left = e.x + 'px'; 
    circle.style.top = e.y + 'px'; 
   
  }); 
});
  




