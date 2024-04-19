let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("project");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function prevSlide() {
  plusSlides(-1);
}

function nextSlide() {
  plusSlides(1);
}


function openModal(img) {
    document.getElementById('myModal').style.display = "block";
    document.getElementById("modalImg").src = img.src;
  }
  
  // Función para cerrar el modal
  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }