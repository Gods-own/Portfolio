let touchEvent = 'onclick' in window ? 'click' : 'touchstart';

document.addEventListener("DOMContentLoaded", function() {   

    var modal = document.getElementById("myModal");
     var modal1 = document.getElementById("myModal1");
    var span = document.getElementsByClassName("close")[0];
    var contacts = document.querySelectorAll(".contact-me");
    var resumes = document.querySelectorAll(".myResume");
    var close = document.querySelector(".cv-close-btn");
    var yes = document.querySelector(".yes-btn");
    var no = document.querySelector(".no-btn");


    function contac() {
 
      modal.style.display = "block";
   }

   function myresume() {
    modal1.style.display = "block";
    document.querySelector(".modal-div").style.display = "block";

   }

   span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.addEventListener(touchEvent, function() {
  if (event.target == modal1) {
    document.querySelector(".modal-div").style.display = "none";   
    document.querySelector(".modal-question").style.display = "block"; 
  }
})

close.addEventListener('click', function() {
    document.querySelector(".modal-div").style.display = "none";    
     document.querySelector(".modal-question").style.display = "block"; 
})

yes.addEventListener('click', function() {
  setTimeout(function() {
    document.querySelector(".modal-question").style.display = "none"; 
     modal1.style.display = "none";
  },2000)
})

no.addEventListener('click', function() {
    document.querySelector(".modal-question").style.display = "none"; 
     modal1.style.display = "none";
})

    contacts.forEach(function(contact){
        contact.addEventListener("click", contac)
    });

    resumes.forEach(function(resume){
        resume.addEventListener("click", myresume)
    });

  });
