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
