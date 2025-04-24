"use-strict";

document.querySelector("body").addEventListener("keydown", function (e) {
  if (e.code == "KeyT") {
    document.querySelector("body").classList.toggle("dark-theme");
  }
  if (e.code == "KeyV") {
    let k = 0;
    for (let i of document.querySelectorAll(".version-1")) {
      console.log(i);
      if (i.style.display == "none") {
        if (k == 2) {
          i.style.display = "flex";
        } else {
          i.style.display = "block";
        }
      } else {
        i.style.display = "none";
      }
      k += 1;
    }
    k = 0;
    for (let i of document.querySelectorAll(".version-2")) {
      console.log(i);
      if (i.style.display == "none") {
        if (k == 0) {
          i.style.display = "grid";
        } else {
          i.style.display = "block";
        }
      } else {
        i.style.display = "none";
      }
      k += 1;
    }
  }
});
