(function () {
  const WHATSAPP_NUMBER = "201017668746";
  const CALL_NUMBER = "+201017668746";

  function createFloatingLanguageToggle() {
    if (document.querySelector(".floating-lang-toggle")) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lang-toggle floating-lang-toggle";
    btn.setAttribute("aria-label", "Language");
    btn.textContent = "EN";
    document.body.appendChild(btn);
  }

  function setupNav() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    if (!menuToggle || !navLinks) return;

    function isMobileViewport() {
      return window.matchMedia("(max-width: 760px)").matches;
    }

    function closeMenu() {
      navLinks.classList.remove("open");
      menuToggle.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }

    menuToggle.setAttribute("aria-label", "Toggle menu");
    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuToggle.classList.toggle("is-open", open);
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
      const header = document.querySelector(".site-header");
      if (header) header.classList.remove("nav-hidden");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    document.addEventListener("click", (event) => {
      if (!isMobileViewport()) return;
      if (!navLinks.classList.contains("open")) return;

      const target = event.target;
      if (!(target instanceof Node)) return;
      const clickedInsideMenu = navLinks.contains(target) || menuToggle.contains(target);
      if (!clickedInsideMenu) {
        closeMenu();
      }
    });

    window.addEventListener(
      "scroll",
      () => {
        if (!isMobileViewport()) return;
        if (navLinks.classList.contains("open")) {
          closeMenu();
        }
      },
      { passive: true }
    );
  }

  function setupHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    let lastY = window.scrollY;

    window.addEventListener(
      "scroll",
      () => {
        const currentY = window.scrollY;
        const menuOpen = document.querySelector(".nav-links")?.classList.contains("open");

        if (menuOpen || currentY < 90) {
          header.classList.remove("nav-hidden");
        } else if (currentY > lastY) {
          header.classList.add("nav-hidden");
        } else {
          header.classList.remove("nav-hidden");
        }

        lastY = currentY;
      },
      { passive: true }
    );
  }

  function setupLanguage() {
    const langToggles = document.querySelectorAll(".lang-toggle");
    const savedLang = localStorage.getItem("siteLang");
    if (savedLang !== "en" && savedLang !== "ar") {
      localStorage.setItem("siteLang", "en");
    }
    const lang = window.SiteI18n.getLang();
    window.SiteI18n.applyLanguage(lang);

    langToggles.forEach((langToggle) => {
      langToggle.addEventListener("click", () => {
        const current = window.SiteI18n.getLang();
        window.SiteI18n.setLang(current === "ar" ? "en" : "ar");
        refreshWhatsAppLinks();
      });
    });
  }

  function buildWhatsappMessage(unitLabel) {
    const base = window.SiteI18n.t("en", "whatsapp_general");
    if (!unitLabel) return base;

    return `${base} Unit type: ${unitLabel}.`;
  }

  function setWhatsappHref(element, unitLabel) {
    const msg = buildWhatsappMessage(unitLabel);
    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    element.setAttribute("href", href);
    element.setAttribute("target", "_blank");
    element.setAttribute("rel", "noopener noreferrer");
  }

  function refreshWhatsAppLinks() {
    const generalButtons = document.querySelectorAll(".whatsapp-general");
    generalButtons.forEach((btn) => setWhatsappHref(btn, ""));

    const unitButtons = document.querySelectorAll(".whatsapp-unit");
    unitButtons.forEach((btn) => {
      const unitKey = btn.getAttribute("data-unit-key") || "";
      const label = unitKey ? window.SiteI18n.t("en", unitKey) : "";
      setWhatsappHref(btn, label);
    });
  }

  function setupCallLinks() {
    document.querySelectorAll(".call-link").forEach((link) => {
      link.setAttribute("href", `tel:${CALL_NUMBER}`);
    });
  }

  function decorateWhatsAppButtons() {
    document.querySelectorAll(".btn-whatsapp").forEach((btn) => {
      if (!btn.querySelector(".fa-whatsapp")) {
        const icon = document.createElement("i");
        icon.className = "fa-brands fa-whatsapp";
        icon.setAttribute("aria-hidden", "true");
        btn.prepend(icon);
      }
    });
  }

  function setupSmoothCtas() {
    document.querySelectorAll("[data-scroll-target]").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        const targetSelector = btn.getAttribute("data-scroll-target");
        const target = targetSelector && document.querySelector(targetSelector);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  function setCurrentYear() {
    document.querySelectorAll("[data-year]").forEach((el) => {
      el.textContent = String(new Date().getFullYear());
    });
  }

  function setupGalleryLightbox() {
    const galleryImages = Array.from(document.querySelectorAll("#gallery-section .gallery-cover"));
    if (!galleryImages.length) return;

    const lightbox = document.createElement("div");
    lightbox.className = "gallery-lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Image preview");

    lightbox.innerHTML = `
      <button type="button" class="gallery-lightbox-btn gallery-lightbox-close" aria-label="Close preview">&times;</button>
      <button type="button" class="gallery-lightbox-btn gallery-lightbox-prev" aria-label="Previous image">&#10094;</button>
      <img class="gallery-lightbox-image" src="" alt="" />
      <button type="button" class="gallery-lightbox-btn gallery-lightbox-next" aria-label="Next image">&#10095;</button>
    `;

    document.body.appendChild(lightbox);

    const previewImage = lightbox.querySelector(".gallery-lightbox-image");
    const closeBtn = lightbox.querySelector(".gallery-lightbox-close");
    const prevBtn = lightbox.querySelector(".gallery-lightbox-prev");
    const nextBtn = lightbox.querySelector(".gallery-lightbox-next");

    if (!(previewImage instanceof HTMLImageElement) || !(closeBtn instanceof HTMLButtonElement) || !(prevBtn instanceof HTMLButtonElement) || !(nextBtn instanceof HTMLButtonElement)) {
      return;
    }

    let currentIndex = 0;

    function renderImage(index) {
      const safeIndex = (index + galleryImages.length) % galleryImages.length;
      currentIndex = safeIndex;
      const selectedImage = galleryImages[safeIndex];
      previewImage.src = selectedImage.currentSrc || selectedImage.src;
      previewImage.alt = selectedImage.alt || "Gallery image";
    }

    function openLightbox(index) {
      renderImage(index);
      lightbox.classList.add("is-open");
      document.body.classList.add("lightbox-open");
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      document.body.classList.remove("lightbox-open");
      previewImage.src = "";
    }

    function showNext() {
      renderImage(currentIndex + 1);
    }

    function showPrevious() {
      renderImage(currentIndex - 1);
    }

    galleryImages.forEach((img, index) => {
      img.setAttribute("tabindex", "0");
      img.setAttribute("role", "button");
      img.setAttribute("aria-label", "Open image preview");

      img.addEventListener("click", () => openLightbox(index));
      img.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openLightbox(index);
        }
      });
    });

    closeBtn.addEventListener("click", closeLightbox);
    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrevious);

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (!lightbox.classList.contains("is-open")) return;

      if (event.key === "Escape") {
        closeLightbox();
      } else if (event.key === "ArrowRight") {
        showNext();
      } else if (event.key === "ArrowLeft") {
        showPrevious();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    createFloatingLanguageToggle();
    setupNav();
    setupHeaderScroll();
    setupLanguage();
    setupSmoothCtas();
    refreshWhatsAppLinks();
    decorateWhatsAppButtons();
    setupCallLinks();
    setupGalleryLightbox();
    setCurrentYear();
  });

  window.SiteMain = {
    refreshWhatsAppLinks,
    whatsappNumber: WHATSAPP_NUMBER
  };
})();
