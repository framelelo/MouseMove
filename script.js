const circles = document.querySelectorAll('.circle')


  window.addEventListener('mousemove', function (e) { 
    circles.forEach((circle) => {
    circle.style.left = e.x + 'px'; 
    circle.style.top = e.y + 'px'; 
   
  }); 

});
  




