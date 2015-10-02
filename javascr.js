
var lbox;
var rbox;
var yo = false;


document.addEventListener('DOMContentLoaded', function () {
    
    lbox = document.querySelector(".long-rect");
    rbox = document.querySelector(".short-rect");
    



lbox.addEventListener('mouseover', function() {
    
    
    rbox.innerHTML = "Mouse is hovering";
    
    if (yo === false) {

        rbox.addEventListener('click', function (){
        alert('clicked');
    
        });

        yo = true;    
        
    }
        
});
    
      
lbox.addEventListener('mouseout', function() {
    console.log("out");
    
    rbox.innerHTML = "Update the text in the right rectangle so that it shows whether the user is moving his cursor over or out of the left rectangle.";
 
});
    
 
    
});



