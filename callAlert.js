const coinCountElement = document.getElementById("coin-count");
let coins = parseInt(coinCountElement.innerText);
const callButtons = document.querySelectorAll(".call");
const callHistoryList = document.querySelector(".call-history ul");
const clearBtn = document.querySelector(".clear-btn");

function getCurrentTime() {
  now = new Date();
  const time = now.toLocaleTimeString();
  return time;
}

for (const callButton of callButtons) {
  callButton.addEventListener("click", function (event) {
    if (coins < 20) {
      alert("You dont have enough coins to make a call");
      return;
    }
    const card = event.currentTarget.parentElement.parentElement;
    const serviceName = card.querySelector(".card-description").innerText;
    const serviceNumber = card.querySelector(".number").innerText;

    alert("Calling " + serviceName + ": " + serviceNumber);

    coins -= 20;
    coinCountElement.innerText = coins;

    const li = document.createElement("li");
    li.innerHTML =
      "<div class='history-item'>" +
      "<div>" +
      "<strong>" +
      serviceName +
      "</strong><br>" +
      serviceNumber +
      "</div>" +
      "<span>" +
      getCurrentTime() +
      "</span>" +
      "</div>";
    callHistoryList.append(li);
  });
}

clearBtn.addEventListener("click", function () {
  callHistoryList.innerHTML = "";
});
