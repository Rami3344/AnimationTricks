document.querySelector("button").addEventListener("click", () => {
  document.getElementById("a1").classList.remove("animated1");
  document.getElementById("btn").classList.remove("animatebutton");
  setTimeout(function () {
    document.getElementById("a1").classList.add("animated1");
    document.getElementById("btn").classList.add("animatebutton");
  }, 10);
});
$(window).scroll(function () {
  let sp = window.scrollY * 0.5;
  $("#star").css({ right: sp + "px" });
});
window.addEventListener("scroll", function () {
  let sp = window.scrollY;
  console.log(sp);
  if (sp >= 1020 && sp <= 2000) {
    document.getElementById("a3h1").classList.add("animated3");
    document.getElementById("a3h1").style.display = "block";
  }
  if (sp >= 1500 && sp <= 2300) {
    document.getElementById("a3img").classList.add("animated3");
    document.getElementById("a3img").style.display = "block";
  }
});
