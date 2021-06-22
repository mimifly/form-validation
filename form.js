const claim = document.querySelector("form");
const inputs = document.querySelectorAll("input");

function validate(event) {
  event.preventDefault();
  Array.from(inputs).forEach((input) => {
    const message = document.querySelector(`.${input.name}`);
    if (/^\s*$/.test(input.value)) {
      input.classList.add("error");
      message.style.display = "block";
    } else if (input.name === "email" && !/.+@.+\..+/.test(input.value)) {
      input.classList.add("error");
      message.style.display = "block";
    } else {
      input.classList.remove("error");
      message.style.display = "none";
    }
  });
}

claim.addEventListener("submit", validate);
