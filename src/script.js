let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let startTimer;

start.addEventListener("click", () => {
  startTimer = setInterval(() => {
    timer.innerHTML = `${new Date().getHours()}h:${new Date().getMinutes()}m:${new Date().getSeconds()}s`;
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(startTimer);
});

reset.addEventListener("click", () => {
  clearInterval(startTimer);
  timer.innerHTML = "00:00:00";
});

let phone_number = document.getElementById("phone_number");
let message = document.getElementById("message");
let check = document.getElementById("check");
let pattern = /^(?:\d{3}-){2}\d{3,4}$/;

check.addEventListener("click", () => {
  if (pattern.test(phone_number.value)) {
    message.style.color = "green";
    message.style.textAlign = "center";
    message.innerHTML = "Phone number is valid.";
  } else if (phone_number.value == "") {
    message.style.color = "red";
    message.style.textAlign = "center";
    message.innerHTML = "Input is empty.";
  } else {
    message.style.color = "red";
    message.style.textAlign = "center";
    message.innerHTML = "Phone number is invalid.";
  }
});
