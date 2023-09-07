const first_name_input = document.getElementById("first_name");
const last_name_input = document.getElementById("last_name");
const email_input = document.getElementById("user_email");
const password_1 = document.getElementById("user_password");
const password_2 = document.getElementById("confirm_password");
const audio = document.getElementById("myAudio");
const speakerButton = document.getElementById("speakerButton");

window.onload = function () {
  audio.play();
};

document.addEventListener("DOMContentLoaded", function () {
  speakerButton.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
});

const checkPasswords = () => {
  let password_1_value = password_1.value;
  let password_2_value = password_2.value;

  if (
    password_1_value !== password_2_value ||
    password_1_value.length < 8 ||
    password_1_value == ""
  ) {
    password_1.style.border = "3px solid red";
    password_1.previousElementSibling.style.color = "red";
    password_2.style.border = "3px solid red";
    password_2.previousElementSibling.style.color = "red";
  } else if (password_1_value === password_2_value) {
    password_1.style.border = "3px solid green";
    password_1.previousElementSibling.style.color = "green";
    password_2.style.border = "3px solid green";
    password_2.previousElementSibling.style.color = "green";
  }
};

password_1.addEventListener("input", () => {
  checkPasswords();
});
password_2.addEventListener("input", () => {
  checkPasswords();
});

first_name_input.addEventListener("input", () => {
  let first_name_value = first_name_input.value;
  if (first_name_value.length < 2) {
    first_name_input.style.border = "3px solid red";
    first_name_input.previousElementSibling.style.color = "red";
  } else {
    first_name_input.style.border = "3px solid green";
    first_name_input.previousElementSibling.style.color = "green";
  }
});

last_name_input.addEventListener("input", () => {
  let last_name_value = last_name_input.value;
  if (last_name_value.length < 2) {
    last_name_input.style.border = "3px solid red";
    last_name_input.previousElementSibling.style.color = "red";
  } else {
    last_name_input.style.border = "3px solid green";
    last_name_input.previousElementSibling.style.color = "green";
  }
});

email_input.addEventListener("input", () => {
  let inputValue = email_input.value;
  if (/@\w*(.com|.ca|.org)/.test(inputValue) === false) {
    email_input.style.border = "3px solid red";
    email_input.previousElementSibling.style.color = "red";
  } else {
    email_input.style.border = "3px solid green";
    email_input.previousElementSibling.style.color = "green";
  }
});
