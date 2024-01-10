const opne = document.querySelector('.fa-bars'),
      menu = document.querySelector('.menu-head'),
      close = document.querySelector('.fa-xmark'),
      logo = document.getElementById('logo'),
      closemenu1 = document.querySelector('.close-menu1'),
      closemenu2 = document.querySelector('.close-menu2'),
      closemenu3 = document.querySelector('.close-menu3');
      
opne.addEventListener("click", () =>{
    menu.classList.add("opnemenu");
    opne.classList.toggle("fa-bars");
    logo.style.display = "none";
});

close.addEventListener("click", () =>{
    menu.classList.remove("opnemenu");
    opne.classList.toggle("fa-bars");
    logo.style.display = "block";
});

closemenu1.addEventListener("click", () =>{
    menu.classList.remove("opnemenu");
    opne.classList.toggle("fa-bars");
    logo.style.display = "block";
});
closemenu2.addEventListener("click", () =>{
    menu.classList.remove("opnemenu");
    opne.classList.toggle("fa-bars");
    logo.style.display = "block";
});
closemenu3.addEventListener("click", () =>{
    menu.classList.remove("opnemenu");
    opne.classList.toggle("fa-bars");
    logo.style.display = "block";
});