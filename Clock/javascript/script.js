const selectMenu = document.querySelectorAll("select"); //انتخاب کردن و ریختن در یک متغیر
const currentTime = document.querySelector("h1"); //انتخاب کردن و ریختن در یک متغیر
const setAlarmBtn = document.querySelector("button"); //انتخاب کردن و ریختن در یک متغیر
const content = document.querySelector(".content"); //انتخاب کردن و ریختن در یک متغیر
let timeAlram, //  ایجاد کردن یک متغیر بدون مقدار دهی اولیه
  isAlarmSet = ""; //ایجاد کردن یک متغیر با مقدار دهی خالی

for (let i = 12; i > 0; i--) {
  // ایجاد یک حلقه با شمارنده کاهش از ۱۲ به پایین
  i = i < 10 ? "0" + i : i; // شرطی نوشته شده که اگر ای کوچکتر از ۱۰ بود ۰ به علاوه ای بشه در غیراینصورت همون ای رو بریزه در متغیر
  let option = `<option value="${i}">${i}</option>`; //اینجا متغیر تعریف شد و میگه که این اپن رو بساز که مقادیر داینامیک داره
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option); //اینجا انتخاب میشه اولین ایندکس از سلکت منو و اون اپشن رو داخلش با درج کردن قرار میده
}

for (let i = 59; i >= 0; i--) {
  //شرط از ۵۹ به پایین شروع میشه و و مقدار ای هم = ۰ هست  که عدد ۰ رو هم با مقدارهای دیگه نشون بده
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 2; i > 0; i--) {
  //اینجا ای رو مساوی دو قرار داد که دو حالت بیشتر وجود نداره
  let ampm = i == 1 ? "AM" : "PM";
  let option = `<option value="${ampm}">${ampm}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
// در این تابع عملیاتی فراخوانی میشه که مربوط به تایمر هست برای نمایش ساعت
setInterval(() => {
  let date = new Date(); //دریافت کردن ساعت فعلی روی سیستم و ریختن در یک متغیر
  let h = date.getHours(); //دریافت کردن فقط ساعت و ریختن در یک متغیر
  let m = date.getMinutes(); //دریافت کردن فقط دقیقه و ریختن در یک متغیر
  let s = date.getSeconds(); //دریافت کردن فقط ثانیه و ریختن در یک متغیر
  let ampm = "AM"; //ریختن یک مقدار در یک متغیر

  if (h >= 12) {
    // ایجاد یک شرط که اگر ساعت بزرگتر یا مساوی ۱۲ بود ۱۲ رو منهای ساعت کن و در متغیر بریز و بعد متغیر ای ام ام پی رو تغییر بده
    h = h - 12;
    ampm = "PM";
  }
  h = h == 0 ? (h = 12) : h;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  currentTime.innerText = `${h}:${m}:${s} ${ampm}`; //در اینجا میگه این مقادیر داینامیک رو که در این متغیر هست رو نمایش بده

  if (timeAlram == `${h}:${m} ${ampm}`) {
    console.log("ssssss");
    //شرطی گذاشته شده که در صورتی که این متغیر مساوی با این ساعت بود این رو نمایش بده که فعلا کار نمیکنه
  }
}, 1000);

function setAlarm() {
  //تابعی نوشته شد که مقادیر که انتخاب میشن رو در یک متغیر میریزه با کلیک کردن که در پایین فراخوانی میشه
  let time = ` ${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;

  if (isAlarmSet) {
    //یک شرط میزاره که اول
    timeAlram = ""; //اینجا خالی میکنه
    content.classList.remove("disable"); //اینجا بهش مگه این کلاس رو از این متغیر حذف کن
    setAlarmBtn.innerText = "Set Alarm"; //اینجا میگه این رو نمایش بده
    setAlarmBtn.style.backgroundColor = "red"; //اینجا میگه نمایشش رو اینطوری تغییر بده
    return (isAlarmSet = false); //در غیراینصورت اصلا نمایش نده
  }
  if (
    //اینجا شرط میزاره که هرکدوم ازاینادرست باشه خروجی درست دربیاد  فقط یکی درست باشه خروجی چاپ میشه
    time.includes("Hour") ||
    time.includes("Minute") ||
    time.includes("AM/PM")
  ) {
    return alert("please , select time alarm"); // یعنی اینجا
  }
  isAlarmSet = true; //اینجا مقدار متغیر رو مثبت میکنه
  timeAlram = time; // مقدار متغیر رو برابر با متغییری که در بالا ثبت شده قرار میده
  content.classList.add("disable"); // ایجاد یک کلاس به متغیر برای انجام عملی
  setAlarmBtn.innerText = "Clear Alarm"; //نشون دادن یک متن
  setAlarmBtn.style.backgroundColor = "#5c8ef1 "; // نمایش جدید برای سی اس اس
}
setAlarmBtn.addEventListener("click", setAlarm); // با کلیلک کردن رویداد اجرا میشه که تابع در اون کال میشه
