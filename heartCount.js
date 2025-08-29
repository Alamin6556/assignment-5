let heartCountElement = document.getElementById("heart-count");
let heartCount = parseInt(heartCountElement.innerText);

const heartIcons = document.getElementsByClassName("heart-icon");

for (const heartIcon of heartIcons) {
  heartIcon.addEventListener("click", function (event) {
    if (heartIcon.classList.contains("fa-regular")) {
      heartIcon.classList.remove("fa-regular");
      heartIcon.classList.add("fa-solid");
      heartCount = heartCount + 1;
    } else {
      heartIcon.classList.remove("fa-solid");
      heartIcon.classList.add("fa-regular");
      heartCount = heartCount - 1;
    }
    heartCountElement.innerText = heartCount;
  });
}
