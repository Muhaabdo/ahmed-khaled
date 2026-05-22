(function () {
  function setupCookieBanner() {
    const banner = document.querySelector("#cookieBanner");
    if (!banner) return;

    const closeBtn = banner.querySelector(".cookie-close");
    let closed = false;

    function hideBanner() {
      if (closed) return;
      closed = true;
      banner.classList.remove("show");
    }

    function maybeHideOnScroll() {
      if (window.scrollY > 900) {
        hideBanner();
        window.removeEventListener("scroll", maybeHideOnScroll);
      }
    }

    banner.classList.add("show");

    if (closeBtn) {
      closeBtn.addEventListener("click", hideBanner);
    }

    window.addEventListener("scroll", maybeHideOnScroll);

    window.setTimeout(hideBanner, 20000);
  }

  document.addEventListener("DOMContentLoaded", setupCookieBanner);
})();
