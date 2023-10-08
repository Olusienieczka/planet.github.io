document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const allNavItems = document.querySelectorAll(".nav-link");
    console.log(allNavItems);
    const navlist = document.querySelector(".navbar-collapse");
  
    function addShadow() {
      if (window.scrollY >= 200) {
        nav.classList.add("shadow-bg");
      } else {
        nav.classList.remove("shadow-bg");
      }
    }
  
    allNavItems.forEach((item) =>
      item.addEventListener("click", () => {
        navlist.classList.remove("show");
      })
    );
  
    // function hideNav() {
    //   if (window.scrollY >= 200) {
    //     nav.classList.remove("show");
    //   } else {
    //     nav.classList.add("show");
    //   }
    // }
  
    window.addEventListener("scroll", addShadow);
    // nav.addEventListener("click", hideNav);
  });