let screen = document.getElementById("screen");
let buttons = document.querySelectorAll(".butt");
let screenValue = "";

buttons.forEach(function (item) {
  item.addEventListener("click", (e) => {
    const buttonText = e.target.innerText; //yesle button vitrako text dinxa//
    screenValue += buttonText;

    if (buttonText == "C") {
      screenValue = "";
    } else if (buttonText == "=") {
      screenValue = eval(screen.value);
    }
    screen.value = screenValue;
  });
});
