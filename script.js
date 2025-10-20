window.addEventListener("load", () => {
  const content = document.getElementById("content");
  const splash = document.getElementById("splash");

  setTimeout(() => {
    splash.style.display = "none";
    content.classList.remove("hidden");
    content.style.transition = "opacity 0.5s ease";
    content.style.opacity = "1";
  }, 1600); // tempo total do splash
});


