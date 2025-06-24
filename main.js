// Hiệu ứng reveal khi cuộn
window.addEventListener("scroll", function () {
  const reveals = document.querySelectorAll(".reveal");
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  }
});
