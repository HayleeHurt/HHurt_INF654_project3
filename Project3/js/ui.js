    document.addEventListener("DOMContentLoaded", function () {
    //Nav Menu
    const menus = document.querySelectorAll(".side-menu");
    M.Sidenav.init(menus, { edge: "right" });
    // Add Order
    const forms = document.querySelectorAll(".side-form");
    M.Sidenav.init(forms, { edge: "left" });
    // Delete Orders  
    function myFunction() {
        var x = document.getElementsByClassName("order");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
          x.style.display = "none";
         }
        }

  });