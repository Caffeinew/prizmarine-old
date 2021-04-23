const header = document.querySelector("header");

header.querySelector(".menu-btn").addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("active");
  header.classList.toggle("active");
  header.querySelector(".collapse").style.display = "flex";
  header.querySelectorAll(".collapse span").forEach((element) => {
    element.classList.toggle("animated");
  });
});
