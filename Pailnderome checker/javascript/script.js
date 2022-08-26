const txtInput = document.querySelector(".inputs input"),
  checkBtn = document.querySelector(".inputs button"),
  infoText = document.querySelector(".info-txt");
let filterInput;

// با کلیک کردن رویداد زیر اجرا میشه
checkBtn.addEventListener("click", () => {
  let reverseInput = filterInput.split("").reverse().join("");
  infoText.style.display = "block";
  if (filterInput != reverseInput) {
    return (infoText.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`);
  }
  infoText.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`;
});
// --------


txtInput.addEventListener("keyup", () => {
  filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/, "");
  if (filterInput) {
    return checkBtn.classList.add("active");
  }
  infoText.style.display = "none";

  checkBtn.classList.remove("active");
});
