// Animation d'apparition du bouton au chargement
window.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".buttona");
    button.style.opacity = 0;
    button.style.transform = "translateY(30px)";
    
    setTimeout(() => {
      button.style.transition = "all 1s ease";
      button.style.opacity = 1;
      button.style.transform = "translateY(0)";
    }, 300);
  });
  // Effet de rebond au clic
  const buttonClick = document.querySelector(".buttona");
  buttonClick.addEventListener("click", () => {
    buttonClick.style.transform = "scale(0.9)";
    setTimeout(() => {
      buttonClick.style.transform = "scale(1)";
    }, 150);
  });

// Animation de l'image ronde (rond1) qui vient de la gauche
window.addEventListener("DOMContentLoaded", () => {
    const imageRonde = document.querySelector(".rond1");
  
    imageRonde.style.opacity = 0;
    imageRonde.style.transform = "translateX(-100px)";
  
    setTimeout(() => {
      imageRonde.style.transition = "all 1s ease";
      imageRonde.style.opacity = 1;
      imageRonde.style.transform = "translateX(0)";
    }, 800); // délai pour apparaître après la navbar et le bouton
  });


  window.addEventListener('scroll', () => {
    const targets = [document.querySelector('.secghu'), document.querySelector('.secdrroitt')];
    const triggerBottom = window.innerHeight * 0.85;
  
    targets.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
  
      if (boxTop < triggerBottom && boxTop > 0) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  });
  