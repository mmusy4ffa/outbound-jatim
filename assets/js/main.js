/* =========================================================
   Outbound Jatim — Shared JS
   ========================================================= */

// Nomor WhatsApp resmi Outbound Jatim (format internasional, tanpa tanda +)
const WA_NUMBER = "6285156872655";

/**
 * Membuka WhatsApp dengan pesan yang sudah diisi otomatis.
 * @param {string} message
 */
function openWhatsApp(message) {
  const url = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank", "noopener");
}

/**
 * Membangun URL wa.me (dipakai untuk atribut href langsung di HTML).
 * @param {string} message
 * @returns {string}
 */
function waLink(message) {
  return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(message);
}

document.addEventListener("DOMContentLoaded", function () {
  // Set semua elemen dengan atribut data-wa-message agar href-nya otomatis terisi
  document.querySelectorAll("[data-wa-message]").forEach(function (el) {
    const msg = el.getAttribute("data-wa-message");
    el.setAttribute("href", waLink(msg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  // Navbar: sedikit menyusut saat discroll
  const nav = document.querySelector(".navbar-oj");
  if (nav) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 40) {
        nav.classList.add("py-1");
        nav.classList.remove("py-3");
      } else {
        nav.classList.add("py-3");
        nav.classList.remove("py-1");
      }
    });
  }

  // Set tahun otomatis di footer
  document.querySelectorAll(".current-year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
