//یک باگ اساسی داره -- در حال تجربه کسب کردن هستم تا یادش بگیرم مربوط به متد ایکلود میشه در خط ۳۷

const inputs = document.querySelector(".inputs"),
  resetBtn = document.querySelector(".reset-btn"),
  hint = document.querySelector(".hint span"),
  wrongLetter = document.querySelector(".wrong-letter span"),
  typingInput = document.querySelector(".typing-input");

let words; // تعریف کردن به صورت گلوبال و استفاده در هرجایی
let incorrect = [];
let correct = [];
function randomWord() {
  let ranObj = wordList[Math.floor(Math.random() * wordList.length)]; // گرفتن اطلاعات و تبدیل کردن به تصادفی و ریختن در یک متغیر
  let words = ranObj.word; //رفتن به پروپرتی اون متغیر و ریختن در یک متغیر جدید
  console.log(words);
  hint.innerText = ranObj.hint; //نمایش میده چیزی رو که در هینت وجود داره
  let html = ""; //ایجاد کردن متغیر جدید
  for (let i = 0; i < words.length; i++) {
    html += `  <input type="text" disabled />`; //اینجا میگه بر اساس حلقه ای کع زدی  که طول اون حرف رو شمارش میکنه براش یک اینپوت درست کن
  }
  inputs.innerHTML = html; //اینجا میگه اچ تی ام ال رو بریز تو اینپوت و اینپوت رو نمایش بده  خب
}

randomWord();

//تابع
function initGame(e) {
  let key = e.target.value; //ساختن یک تابع برای دریافت ورودی و ریختن در یک متغیر
  //در اینجا شرط گذاشت که این متغیر کی شامل این مچ یا همون ریجکس باشه و از این قوانین تبعیت بکنه
  if (
    key.match(/^[A-Za-z]+$/) &&
    !incorrect.includes(` ${key}`) &&
    !incorrect.includes(key)
  ) {
    console.log(key);
    if (words.includes(key)) {
      // در صورتی که ورد شامل حروف های بشه که در کی نشسته به ما دوتا خروجی بده اگر درست بود اولی اگر درست نبود دومی رو نشون بده    } else {
      for (let i = 0; i < words.length; i++) {
        if (words[i] === key) {
          correct.push(key);
          inputs.querySelectorAll("input")[i].value = key;
        }
      }
    } else {
      incorrect.push(`${key}`);
    }
  }
  wrongLetter.innerText = incorrect;
  typingInput.value = "";
}

resetBtn.addEventListener("click", randomWord); // با زدن دکمه ریست و کلیک شدن برنامه دوباره اجرا میشه و اون تابع که نوشته شده کال میشه
typingInput.addEventListener("input", initGame); //با اجرا شدن این تابع اینپوت هر چیزی که نوشته داخلش رو به کمک تابع نمایش میده
document.addEventListener("keydown", () => typingInput.focus()); //با این رویداد زمانی که کارکتری از حذف میشه اینپوت به حالت فوکوس در میاد
