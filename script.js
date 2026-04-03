let size = "";
let type = "";

function goToPage2(selectedSize) {
  size = selectedSize;
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
}

function goToPage3(selectedType) {
  type = selectedType;
  document.getElementById("page2").classList.add("hidden");
  document.getElementById("page3").classList.remove("hidden");
}

function submitForm() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  alert(`
    Квартира: 1 комнатная
    Квадратура: ${size}
    Ремонт: ${type}
    Аты: ${name}
    Телефон: ${phone}
  `);
}





function backToMenu() {
  
  document.getElementById("page1").classList.add("hidden");

  
  const menu = document.querySelector(".menu");
  if (menu) {
    menu.style.display = "block";
  }
}


function goBackToPage1() {
  document.getElementById("page2").classList.add("hidden");
  document.getElementById("page1").classList.remove("hidden");
}

function goBackToPage2() {
  document.getElementById("page3").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
}






function start(apart) {
  document.getElementById("overlay").classList.remove("hidden");

  const menu = document.querySelector(".menu");
  if (menu) {
    menu.style.display = "none";
  }

  document.getElementById("page1").classList.remove("hidden");

  let b1 = document.getElementById("btn1");
  let b2 = document.getElementById("btn2");

  if (apart === "1") {
    b1.innerText = "30м² - 40м²";
    b2.innerText = "40м² - 55м²";

    b1.onclick = () => goToPage2("30-40");
    b2.onclick = () => goToPage2("40-55");
  }

  if (apart === "2") {
    b1.innerText = "55м² - 70м²";
    b2.innerText = "70м² - 85м²";

    b1.onclick = () => goToPage2("55-70");
    b2.onclick = () => goToPage2("70-85");
  }

  if (apart === "3") {
    b1.innerText = "85м² - 120м²";
    b2.innerText = "120м² - 160м²";

    b1.onclick = () => goToPage2("85-120");
    b2.onclick = () => goToPage2("120-160");
  }
}
function backToMenu() {
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("page1").classList.add("hidden");

  const menu = document.querySelector(".menu");
  if (menu) {
    menu.style.display = "block";
  }
}

function start(apart) {
  document.getElementById("overlay").classList.remove("hidden");

  const menu = document.querySelector(".menu");
  if (menu) {
    // menu.style.display = "none";
  }

  document.getElementById("page1").classList.remove("hidden");

  let b1 = document.getElementById("btn1");
  let b2 = document.getElementById("btn2");

  if (apart === "1") {
    b1.innerText = "30м² - 40м²";
    b2.innerText = "40м² - 55м²";

    b1.onclick = () => goToPage2("30-40");
    b2.onclick = () => goToPage2("40-55");
  }

  if (apart === "2") {
    b1.innerText = "55м² - 70м²";
    b2.innerText = "70м² - 85м²";

    b1.onclick = () => goToPage2("55-70");
    b2.onclick = () => goToPage2("70-85");
  }

  if (apart === "3") {
    b1.innerText = "85м² - 120м²";
    b2.innerText = "120м² - 160м²";

    b1.onclick = () => goToPage2("85-120");
    b2.onclick = () => goToPage2("120-160");
  }
}
function backToMenu() {
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("page1").classList.add("hidden");

  const menu = document.querySelector(".menu");
  if (menu) {
    menu.style.display = "block";
  }
}


const elements = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", () => {
  elements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
























