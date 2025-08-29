const copyButtons = document.querySelectorAll(".copy");
const copyDiv = document.querySelector(".copy-div");
let copyCount = 0;
for (const copyButton of copyButtons) {
  copyButton.addEventListener("click", function (event) {
    const card = event.currentTarget.parentElement.parentElement;
    const serviceNumber = card.querySelector(".number").innerText;
    navigator.clipboard.writeText(serviceNumber);

    alert("Number copied: " + serviceNumber);

    copyCount++;
    copyDiv.innerText = copyCount + " Copy";
  });
}
