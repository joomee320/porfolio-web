
  window.addEventListener("scroll", function() {
    var header = document.querySelector(".navbar"); // Selects the navbar
    var bar = document.querySelector(".menu"); // Selects the menu
    var burger = document.querySelector(".hamburger"); // Selects the hamburger menu (if any)
    
    // Toggles the "sticky" class based on the scroll position
    header.classList.toggle("sticky", window.scrollY > 0);
    bar.classList.toggle("sticky", window.scrollY > 0);
    burger.classList.toggle("sticky", window.scrollY > 0);
});
