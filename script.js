if (window.location.href === 'http://127.0.0.1:5500/login.html') {
    // code to run on login.html page only
}

document.querySelector(".btn").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "index.html";
  });

  $(document).ready(function () {
    $(".nav-link").click(function (e) {
      e.preventDefault();
      if ($(this).hasClass("parent-item")) {
        $(this).toggleClass("show");
        $(this).siblings().removeClass("show");
      }
    });
  });