let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function navLink(n) {
  showSlides(slideIndex = n)
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}


function sendingEmail(ele) {


  let emailContents = {

    fromMessage:
      "First Name: " + document.getElementById("fname").value + '\n' +
      "Last Name: " + document.getElementById("lname").value + '\n' +
      "Email: " + document.getElementById("email").value + '\n' +
      "Phone Number: " + document.getElementById("number").value + '\n' +
      "Facility: " + document.getElementById("facility").value + '\n' +
      "Starting Time: " + document.getElementById('stime').value + '\n' +
      "Ending Time: " + document.getElementById("etime").value + '\n' +
      "Comments: " + document.getElementById("comments").value,

    email: document.getElementById("email").value


  }


  Email.send({  /* Emails currently sending from my school email to my home email to prove functioning,
                   If stakeholder chooses to use this I will put in his email information and make a new email specifcally for sending bookings*/

    Host: "smtp.gmail.com",
    Username: "9cbrewer@hbhs.school.nz",
    Password: "hyper3cum",
    To: 'cole.brewerton@gmail.com',
    From: "9cbrewer@hbhs.school.nz",
    Subject: "New Facility Booking",
    Body: document.getElementById(fname) +
      document.getElementById(lname) +
      document.getElementById(email) +
      document.getElementById(number) +
      document.getElementById(facility) +
      document.getElementById(stime) +
      document.getElementById(etime) +
      document.getElementById(comments),

    emailjs.send('service_4rp61kq', 'template_7mh46q8', emailContents)
      .then(function () {
        alert("Booking Submitted - Under Review")
      })








  }






















