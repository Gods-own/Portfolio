document.addEventListener("DOMContentLoaded", function() {   

    var modal = document.getElementById("myModal");
     var modal1 = document.getElementById("myModal1");
    var span = document.getElementsByClassName("close")[0];
    var contacts = document.querySelectorAll(".contact-me")
    var resumes = document.querySelectorAll(".myResume")


    function contac() {
 
      modal.style.display = "block";
   }

   function myresume() {
    modal1.style.display = "block";
   }

   span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}


    contacts.forEach(function(contact){
        contact.addEventListener("click", contac)
    });

    resumes.forEach(function(resume){
        resume.addEventListener("click", myresume)
    });


  });
