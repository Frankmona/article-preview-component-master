const shareBTN = document.querySelector(".share");
const section = document.querySelector(".section");

shareBTN.addEventListener("click", function () {
  // console.log(shareBTN);
  if (section.classList.contains("show-text")) {
    section.classList.remove("show-text");
  } else {
    section.classList.add("show-text");
  }
});
