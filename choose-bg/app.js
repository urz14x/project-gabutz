const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log(button.getAttribute("id"));
    if (button.getAttribute("id") === "green") {
      document.body.style.backgroundColor = button.getAttribute("id");
    } else if (button.getAttribute("id") === "skyblue") {
      document.body.style.backgroundColor = button.getAttribute("id");
    } else if (button.getAttribute("id") === "dodgerblue") {
      document.body.style.backgroundColor = button.getAttribute("id");
    } else {
      document.body.style.backgroundColor = button.getAttribute("id");
    }
  });
});
