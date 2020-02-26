const mail = document.getElementById("mail");
const submitFormButton = document.querySelector('button[type="submit"]');
const password = document.getElementById("password");

submitFormButton.addEventListener("submit", e => {
  let errorMsg = [];
  if (password.length >= 10) {
    errorMsg.push("password is too short");
  }
  if (errorMsg.length > 0) {
    e.preventDefault();
    console.log("password is too short");
  }
});
