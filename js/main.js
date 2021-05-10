const parallax = document.getElementById("parallax");
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
});

AOS.init();

var typed = new Typed("#typed", {
  strings: ["Selamat Hari Raya Idul Fitri.", "Mohon Maaf Lahir dan Batin."],
  typeSpeed: 40,
});

window.addEventListener("change", cek());
window.addEventListener("load", cek());

function cek() {
  if (screen.width <= 537) {
    Swal.fire({
      title: "Layarmu terlalu kecil",
      text: "Web tidak kompatibel. Coba ubah ke landscape",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
}

// titlemarquee
title = "Selamat Hari Raya Idul Fitri. Mohon Maaf Lahir Dan Batin.";
function step() {
  title = title.substr(1) + title.substr(0, 1);
  document.title = title.substr(0, 100);
}
