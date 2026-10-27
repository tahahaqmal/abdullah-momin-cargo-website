let menu = document.querySelector('.card');
let toggle = document.querySelector('.toggle1');

toggle.addEventListener('click', () => {
menu.classList.toggle('active');
});

$(document).ready(function() {
    $('.demo').addClass('fromLeftAnimation');
});



  document.addEventListener('scroll', function() {
    var element = document.getElementById('yourDiv');
    var position = element.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('in-view');
    }
  });
  document.addEventListener('scroll', function() {
    var element = document.getElementById('yourDiv1');
    var position = element.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('in-view');
    }
  });
  document.addEventListener('scroll', function() {
    var element = document.getElementById('yourDiv2');
    var position = element.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('in-view');
    }
  });
  document.addEventListener('scroll', function() {
    var element = document.getElementById('yourDiv3');
    var position = element.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('in-view');
    }
  });
  document.addEventListener('scroll', function() {
    var element = document.getElementById('yourDiv4');
    var position = element.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('in-view');
    }
  });
  document.addEventListener('scroll', function() {
    var element = document.getElementById('yourDiv5');
    var position = element.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('in-view');
    }
  });
  document.addEventListener('scroll', function() {
    var element = document.getElementById('yourDiv6');
    var position = element.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('in-view');
    }
  });
  document.addEventListener('scroll', function() {
    var element = document.getElementById('yourDiv7');
    var position = element.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('in-view');
    }
  });
  document.addEventListener('scroll', function() {
    var element = document.getElementById('yourDiv8');
    var position = element.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('in-view');
    }
  });
  document.addEventListener('scroll', function() {
    var element = document.getElementById('yourDiv9');
    var position = element.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('in-view');
    }
  });
  document.addEventListener('scroll', function() {
    var element = document.getElementById('yourDiv10');
    var position = element.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('in-view');
    }
  });
  document.addEventListener('scroll', function() {
    var element = document.getElementById('yourDiv12');
    var position = element.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('in-view');
    }
  });
  document.addEventListener('scroll', function() {
    var element = document.getElementById('yourDiv13');
    var position = element.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('in-view');
    }
  });
  document.addEventListener('scroll', function() {
    var element = document.getElementById('yourDiv14');
    var position = element.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('in-view');
    }
  });
  document.addEventListener('scroll', function() {
    var element = document.getElementById('yourDiv15');
    var position = element.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('in-view');
    }
  });
  document.addEventListener('scroll', function() {
    var element = document.getElementById('yourDiv16');
    var position = element.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('in-view');
    }
  });
  document.addEventListener('scroll', function() {
    var element = document.getElementById('yourDiv17');
    var position = element.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('in-view');
    }
  });

  function showSlide(slideNumber) {
    var slides = document.getElementsByClassName('slide10');
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    document.getElementById('slide'+slideNumber).style.display = 'block';
  }
  const slides = document.querySelectorAll('.slide');
  const texts = document.querySelectorAll('.text');
  const buttonsLeft = document.querySelectorAll('.button-left');
  const buttonsRight = document.querySelectorAll('.button-right');
  let currentSlide = 0;
  

  
  function showSlide(index) {
    slides.forEach((slide, i) => {
  
        if (i === index) {
          slide.classList.add('active');
          texts[i].style.top = '5%';
          buttonsLeft[i].style.left = '34%';
          buttonsRight[i].style.right = '67%';
        } else {
          slide.classList.remove('active');
          texts[i].style.top = '-50px';
          buttonsLeft[i].style.left = '-100px';
          buttonsRight[i].style.right = '-100px';
        }
 
    });
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
  
  document.querySelector('.arrow-left').addEventListener('click', prevSlide);
  document.querySelector('.arrow-right').addEventListener('click', nextSlide);
  
  setInterval(nextSlide, 5000);

  function expand(element) {
    var isExpanded = element.classList.contains('expanded');
  
    var elements = document.getElementsByClassName('parts');
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('expanded');
    }
  
    if (!isExpanded) {
      element.classList.add('expanded');
    }
  }
  $('#about').on('click', function(e){
    if(this.hash !== '') {
      e.preventDefault();

      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
        window.location.hash = hash;
      });
    }
  });

    $('#serv').on('click', function(e){
    if(this.hash !== '') {
      e.preventDefault();

      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
        window.location.hash = hash;
      });
    }
  });

  $('#cont').on('click', function(e){
    if(this.hash !== '') {
      e.preventDefault();

      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });
  $('.go').on('click', function(e){
    if(this.hash !== '') {
      e.preventDefault();

      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });

const button = document.getElementById('call-button');

setInterval(() => {
  button.classList.add('animate__animated', 'animate__bounce');
  
  setTimeout(() => {
    button.classList.remove('animate__animated', 'animate__bounce');
  }, 1000);
}, 2000); 

const button1 = document.getElementById('call-button1');

setInterval(() => {
  button1.classList.add('animate__animated', 'animate__bounce');
  
  setTimeout(() => {
    button1.classList.remove('animate__animated', 'animate__bounce');
  }, 999);
}, 3000); 
