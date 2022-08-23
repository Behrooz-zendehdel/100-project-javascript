const wordText = document.querySelector(".word"); // صدا کردن کلاس ورد و ریختنش در متغیر جدید
const hintText = document.querySelector(".hint span"); // صدا کردن اسپن موجود در هینت و ریختن مقدارش در متغیر جدید
const timeText = document.querySelector(".time b"); // صدا کردن کلاس تایم بی  چیزی که تایمر رو نشون میده
const inputField = document.querySelector("input"); // صدا کردن اسپن موجود در هینت و ریختن مقدارش در متغیر جدید
const refreshbtn = document.querySelector(".refresh-word"); // صدا کردن رفرش و ریختنش در متغیر جدید
const checkBtn = document.querySelector(".check-word"); // صدا کردن دکمه چک و ریختنش در متغیر جدید

let correctWord, timer; // متغیری بدون مقدار تعریف شد

/*-----------------------------------------------*/
//نوشتن تابع تایمر
const initTimer = (maxTime) => {
  clearInterval(timer); // خالی کردن تایمر
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      timeText.className = "black";
      return (timeText.innerText = maxTime); // گذاشتن شرط برا اساس که گوچکتر از ۰ باشه یه دونه یه دونه کم کنه تا برسه به ۰
    }

    clearInterval(timer); // تایمرو خالی میکنه
    alert("تایم شما به اتمام رسیده دوباره تلاش کنید "); // نمایش میده تلاش کنید
    inputField.value = ""; // ورودی رو خالی میکنه
    initGame();
  }, 1000);
};




// نوشتن تابع
const initGame = () => {
  initTimer(10);
  let randomObj = words[Math.floor(Math.random() * words.length)]; //یک ارایه تصادفی رو به پایین رند شده از فایل ورد استخراج کرد و در داخل متغیر جدید ریخت
  let wordArray = randomObj.word.split(""); //اینجا حاصل به دست اومده را زیبا سازی کرد یعنی چیزی که بینشون بود که فاصله بود رو برداشت  و در داخل ارایه جدید ریخت

  for (let i = wordArray.length - 1; i > 0; i--) {
    // شرط گذاشت اگر ای مساوی به طول ارایه منهای یک که میشه اخرین ایندکس ارایه و سپس ای بزرگتر از ۱ بود بیاد چیکار کنه یک واحد یک واحد کم کنه
    let j = Math.floor(Math.random() * (i + 1)); // اینجا یک عدد تصادفی رو ضربدر عدد به دست اومده + یک کرد و ریخت تو یه متغیر جدید
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]; // اینجا اومده مقایسه کرده این عدد های که به دست اومده رو باهم
  }
  wordText.innerText = wordArray.join(""); //  با متد جوین و داخلش '' حذف کردیم محتویات بین حروف را -   نمایش متن بدست امده در جای خود
  hintText.innerText = randomObj.hint; // نمایش مقدار متغیر هینت - در اصل سوال های است که باید جواب داده بشه
  correctWord = randomObj.word.toLowerCase(); // تبدیل کردن مقدار های ارایه به حروف کوچک برای مقایسه
};
initGame(); // کال کردن تابع اصلی



const checkWord = () => {
  let userWord = inputField.value.toLowerCase(); //دریافت ورودی از اینپوت و تبدیل به حروف کوچک
  if (!userWord) return alert("please enter a word check"); //در صورتی که چیزی نوشته نشده باشه و دکمه زده بشه این پیام نشون داده میشه
  if (userWord !== correctWord)
    return alert(` متاسفانه ${userWord} درست نیست `); // مقدار وارد شده و مقداری که در ارایه وجود دارد باهم مقایسه میشود در صورت اشتباه بودن پیامی ظاهر میشود
  alert(
    ` افرین مقدار ${correctWord.toLowerCase()}  درست میباشد شما درست حدس زدید`
  ); //در صورتی که الرت اول اجرا نشه یعنی جواب درست بوده و پیام افرین نشون داده میشه  شرط بر اساس اجرا نشدن الرت اول هست در غیر اینصورت الرت دوم اجرا میشه
  inputField.value = ""; // بعد از درست بودن مقدار وارد شده توسط این خط مقدار اینپوت خالی میشه
  inputField.setAttribute("maxLength", correctWord.length);
  initGame(); // با فراخوانی این تابع در اینجا زمانی که درست باشه و بعد از خالی شدن اینپوت دوباره به اجرا در میاد و حروف تصادفی تولید میکنه
};




checkBtn.addEventListener("click", checkWord); // فانکشن نوشته شده که در صورت کلیک تابع بالا صدا زده بشه و اجرا بشه که کارش ثبت کردنه
refreshbtn.addEventListener("click", () => {
  inputField.value = "";
  initGame();
}); //فانکشن نوشته شد که در صورت کلیک شدن مقدار تغییر کند - اپدیت بشه
