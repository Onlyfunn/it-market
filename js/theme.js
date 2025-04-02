document.querySelector("body").addEventListener("keydown", function (e) {
  if (e.code == "KeyT") {
    document.querySelector("body").classList.toggle("dark-theme");
  }
});
