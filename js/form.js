(function () {
  function getUrlParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name) || "";
  }

  function setupLeadForm() {
    const form = document.querySelector("#lead-form");
    if (!form) return;

    const nextInput = form.querySelector('input[name="_next"]');
    if (nextInput) {
      nextInput.value = `${window.location.origin}${window.location.pathname.replace(/[^/]+$/, "")}thank-you.html`;
    }

    const sourceInput = form.querySelector('input[name="source"]');
    const campaignInput = form.querySelector('input[name="campaign"]');

    if (sourceInput) sourceInput.value = getUrlParam("utm_source") || "google";
    if (campaignInput) campaignInput.value = getUrlParam("utm_campaign") || "search_campaign";

    form.addEventListener("submit", (event) => {
      const phone = form.querySelector("#phone");
      const unitType = form.querySelector("#unitType");

      const phoneValue = (phone?.value || "").trim();
      const phoneOk = /^\+?[0-9\s-]{8,20}$/.test(phoneValue);
      if (!phoneOk) {
        event.preventDefault();
        alert("Please enter a valid phone number with country code / من فضلك ادخل رقم هاتف صحيح بكود الدولة");
        phone?.focus();
        return;
      }

      if (unitType && !unitType.value) {
        event.preventDefault();
        alert("Please choose a unit type / من فضلك اختر نوع الوحدة");
        unitType.focus();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", setupLeadForm);
})();
