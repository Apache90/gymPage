/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//mostrar menu
//validar si existe la constante

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//esconder menu
//validar si existe la constante

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //cuando se hace click en algun link del menu se remove la clase .show-menu
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {

    const sectionHeight = current.offsetHeight,

      sectionTop = current.offsetTop - 58,

      sectionId = current.getAttribute("id"),

      sectionsClass = document.querySelector(".nav_menu a[href*=" + sectionId + "]"
      );
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){

          sectionsClass.classList.add('active-link')
        }else{
          sectionsClass.classList.remove('active-link')
        }

  });
};
window.addEventListener('scroll',scrollActive)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
  :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  oring: 'top',
  distance: '60px',
  duration: '2500',
  delay: 300,
})

sr.reveal(`.home_data, .footer_container, .footer_group`)
sr.reveal(`.home_img`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logos_img, .program_card, .pricing_card`, {interval:100})
sr.reveal(`.choose_img, .calculate_content`, {origin:'left'})
sr.reveal(`.choose_content, .calculate_img`, {origin:'right'})

/*=============== CALCULATE JS ===============*/

const calculateForm = document.getElementById("calculate-form");
calculateCm = document.getElementById("calculate-cm");
calculateKg = document.getElementById("calculate-kg");
calculateMessage = document.getElementById("calculate-message");

const calculateImc = (e) => {
  e.preventDefault();
  //chequear si los campos tienen un valor
  if (calculateCm.value === "" || calculateMessage.value === "") {
    //agregar o quitar color al mensaje
    calculateMessage.classList.remove("color-green");
    calculateMessage.classList.add("color-red");
    //mostrar mensaje
    calculateMessage.textContent = "Completar con el Peso y la Altura ☝️";

    //remover el mensaje de completar
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 3000);
  } else {
    //IMC formula
    const cm = calculateCm.value / 100,
      kg = calculateKg.value,
      imc = Math.round(kg / (cm * cm));

    //mostrar resultad
    if (imc < 18.5) {
      calculateMessage.classList.add("color-red");
      calculateMessage.textContent = `Tu IMC es ${imc}, estas por de bajo de lo normal 😞`;
    } else if (imc < 25) {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Tu IMC es ${imc}, estas en los valores normales! 🙂`;
    } else {
      calculateMessage.classList.add("color-red");
      calculateMessage.textContent = `Tu IMC es ${imc}, estas por arriba de lo normal! 🐷`;
    }

    //limpiar todo
    calculateCm.value = "";
    calculateKg.value = "";
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 4000);
  }
};
calculateForm.addEventListener("submit", calculateImc);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message"),
  contactUser = document.getElementById("contact-user");

const sendEmail = (e) => {
  e.preventDefault();

  if (contactUser.value === "") {
    contactMessage.classList.remove("color-green");
    contactMessage.classList.add("color-red");

    contactMessage.textContent = "Tenes que ingresar tu email ☝️";

    setTimeout(() => {
      contactMessage.textContent = "";
    }, 4000);
  } else {
    emailjs
      .sendForm(
        "service_4anq4",
        "template_uqtd7pm",
        "#contact-form",
        "J8nA6fzyX7iXdGEQz"
      )
      .then(
        () => {
          contactMessage.classList.add("color-green");
          contactMessage.textContent = "Subscripcion correcta";
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 4000);
        },
        (error) => {
          alert("Email desactivado dado que es un demo", error);
        }
      );
  }
};
contactForm.addEventListener("submit", sendEmail);
