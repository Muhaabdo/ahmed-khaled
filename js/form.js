(function () {
  function buildLeadWhatsappMessage(form) {
    const lang = window.SiteI18n ? window.SiteI18n.getLang() : "en";
    const fullName = form.querySelector("#fullName")?.value.trim() || "";
    const phone = form.querySelector("#phone")?.value.trim() || "";
    const email = form.querySelector("#email")?.value.trim() || "";
    const unitType = form.querySelector("#unitType")?.value || "";

    const lines = lang === "ar"
      ? [
          "مرحبًا، أرغب في معرفة تفاصيل أكتر.",
          `الاسم: ${fullName}`,
          `الهاتف: ${phone}`,
          email ? `البريد الإلكتروني: ${email}` : "",
          unitType ? `نوع الوحدة: ${unitType}` : ""
        ]
      : [
          "Hello, I'd like more details.",
          `Name: ${fullName}`,
          `Phone: ${phone}`,
          email ? `Email: ${email}` : "",
          unitType ? `Unit Type: ${unitType}` : ""
        ];

    return lines.filter(Boolean).join("\n");
  }

  function setFieldError(field, hasError) {
    const wrap = field?.closest(".form-field");
    if (!wrap) return;
    wrap.classList.toggle("has-error", hasError);
  }

  function setupLeadForm() {
    const form = document.querySelector("#lead-form");
    if (!form) return;

    const whatsappSubmit = form.getAttribute("data-whatsapp-submit") === "true";
    const phone = form.querySelector("#phone");
    const unitType = form.querySelector("#unitType");

    phone?.addEventListener("input", () => {
      if (/^\+?[0-9\s-]{8,20}$/.test(phone.value.trim())) setFieldError(phone, false);
    });
    unitType?.addEventListener("change", () => {
      if (unitType.value) setFieldError(unitType, false);
    });

    form.addEventListener("submit", (event) => {
      const phoneValue = (phone?.value || "").trim();
      const phoneOk = /^\+?[0-9\s-]{8,20}$/.test(phoneValue);
      setFieldError(phone, !phoneOk);
      if (!phoneOk) {
        event.preventDefault();
        phone?.focus();
        return;
      }

      const unitTypeOk = !unitType || !!unitType.value;
      setFieldError(unitType, !unitTypeOk);
      if (!unitTypeOk) {
        event.preventDefault();
        unitType?.focus();
        return;
      }

      if (whatsappSubmit) {
        event.preventDefault();

        const number = (window.SiteMain && window.SiteMain.whatsappNumber) || "201017668746";
        const waLink = `https://wa.me/${number}?text=${encodeURIComponent(buildLeadWhatsappMessage(form))}`;

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "whatsapp_lead_submit", page: document.body.getAttribute("data-page") || "" });

        const note = document.querySelector("#leadFormWhatsappNote");
        if (note) {
          note.setAttribute("href", waLink);
          note.removeAttribute("hidden");
        }

        window.open(waLink, "_blank", "noopener,noreferrer");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", setupLeadForm);
})();
