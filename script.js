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
      "Booking Length: " + document.getElementById("length").value + '\n' +
      "Comments: " + document.getElementById("comments").value,

    email: document.getElementById("email").value

  }

  let x = document.getElementById("fname").value;
  let y = document.getElementById("lname").value;
  let z = document.getElementById("email").value;
  let a = document.getElementById("number").value;
  let b = document.getElementById('stime').value;
  let c = document.getElementById("length").value;

  if (x == "" || y == "" || z == "" || a == "" || b == "" || c == "") {
    alert("Please ensure you have filled out all fields, excluding Comments");
  }
  else {

    emailjs.send('service_4rp61kq', 'template_7mh46q8', emailContents)
      .then(function () {
        alert("Booking Submitted - Under Review")
      })

  }
}




























