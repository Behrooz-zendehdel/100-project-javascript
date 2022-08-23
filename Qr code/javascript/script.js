const wrapper = document.querySelector(".wrapper"),
  QrInput = wrapper.querySelector(".from input"),
  generateBtn = wrapper.querySelector(".from button"),
  qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
  let qrValue = QrInput.value;
  if (!qrValue) return;
  generateBtn.innerText = "Generate QR Code .......";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;

  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR Code ";
  });
});
QrInput.addEventListener("keyup", () => {
  if (!QrInput.value) {
    wrapper.classList.remove("active");
  }
});
