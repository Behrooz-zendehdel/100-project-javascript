// ----------- 1 ----------------

const wrapper = document.querySelector(".wrapper"), //صدا زدن رپر و ریختن در یک متغیر
  QrInput = wrapper.querySelector(".from input"), //  گرفتن اطلاعات اینپوت از فرم
  generateBtn = wrapper.querySelector(".from button"), // گرفتن اطلاعات باتن از فرم
  qrImg = wrapper.querySelector(".qr-code img"); //گرفتن اطلاعات از کی کد

//  ------------------2------------------
// رویداد کلیک زمانی اتفاق بیوفته که دکمه زده میشه
generateBtn.addEventListener("click", () => {
  let qrValue = QrInput.value; //مقثداز اینپوت رو بریز داخل متغیر
  if (!qrValue) return; // در صورتی که مقدار اینپوتی که ریخته شد در یک متغیر که اون کی ولیو هست درست نباشه هیج چیزی رو نشون نده
  generateBtn.innerText = "Generate QR Code ......."; //زمانی که دکمه زده شد این متن نمایش داده بشه
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`; //و بعد این مقداری که به صورت ای \ی ای اضافه شد ه را در اتریبوت اس ار سی قرار بده - دراصل کال کن دیتاها رو

  // میگه زمانی عکس لود شد این رویداد فعال بشه
  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active"); // و به رپر کلاس اکتیو اضافه بشه
    generateBtn.innerText = "Generate QR Code "; //دکممه کلیک شده این رو نمایش بده
  });
});
// این رویداد هم زمانی فراخوانی میشه که کی اپ یعنی برگرده به عقب باز یعنی متنی که مینویسی رو پاک کنی
QrInput.addEventListener("keyup", () => {
  if (!QrInput.value) {
    // در صورتی که مقدار در اینپوت نباشع
    wrapper.classList.remove("active"); // این کلاس رو از رپر حذف میکنه
  }
});
