/** رقم واتساب بدون + أو مسافات (مثال مصر: 2010xxxxxxxx) — غيّره لرقم الكافيه الفعلي */
const WHATSAPP_NUMBER = "201034453795";
const WHATSAPP_MESSAGE =
  "مرحباً Alharam Cafe، أود الاستفسار أو الطلب بخصوص المنيو.";

const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {
  const toggleScrollButton = () => {
    if (window.scrollY <= 80) {
      scrollTopBtn.classList.add("is-hidden");
    } else {
      scrollTopBtn.classList.remove("is-hidden");
    }
  };

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", toggleScrollButton);
  toggleScrollButton();
}

const whatsappFab = document.getElementById("whatsappFab");
if (whatsappFab && WHATSAPP_NUMBER.replace(/\D/g, "").length >= 10) {
  const text = encodeURIComponent(WHATSAPP_MESSAGE);
  whatsappFab.href = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${text}`;
} else if (whatsappFab) {
  whatsappFab.addEventListener("click", (e) => {
    e.preventDefault();
    alert("يرجى تعيين رقم واتساب الصحيح في ملف script.js (WHATSAPP_NUMBER).");
  });
}

const menuSearchInput = document.getElementById("menuSearch");
const menuSearchEmpty = document.getElementById("menuSearchEmpty");

function filterMenu(query) {
  const q = query.trim().toLowerCase();
  const items = document.querySelectorAll(".menu-section .menu-item");

  if (!q) {
    items.forEach((el) => el.classList.remove("is-hidden-search"));
    document
      .querySelectorAll(".category-block")
      .forEach((b) => b.classList.remove("is-hidden-search"));
    document
      .querySelectorAll(".menu-section")
      .forEach((s) => s.classList.remove("is-hidden-search"));
    if (menuSearchEmpty) menuSearchEmpty.hidden = true;
    return;
  }

  let anyMatch = false;
  items.forEach((el) => {
    const text = el.textContent.toLowerCase();
    const match = text.includes(q);
    el.classList.toggle("is-hidden-search", !match);
    if (match) anyMatch = true;
  });

  document.querySelectorAll(".category-block").forEach((block) => {
    const visible = [...block.querySelectorAll(".menu-item")].some(
      (el) => !el.classList.contains("is-hidden-search")
    );
    block.classList.toggle("is-hidden-search", !visible);
  });

  document.querySelectorAll(".menu-section").forEach((section) => {
    const visible = [...section.querySelectorAll(".menu-item")].some(
      (el) => !el.classList.contains("is-hidden-search")
    );
    section.classList.toggle("is-hidden-search", !visible);
  });

  if (menuSearchEmpty) menuSearchEmpty.hidden = anyMatch;
}

if (menuSearchInput) {
  menuSearchInput.addEventListener("input", () => {
    filterMenu(menuSearchInput.value);
  });
}
