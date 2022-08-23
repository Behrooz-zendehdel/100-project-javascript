const textarea = document.querySelector("textarea"); //صدا کردن  و ریختن در متغیر
fileNameInput = document.querySelector(".file-name input"); //صدا کردن و ریختن در متغیر
selectMenu = document.querySelector(".save-as select"); //صدا کردن ریختن در متغیر
savebtn = document.querySelector(".save-btn"); //صدا کردن ریختن در متغیر

/* ------- نوشتن رویداد کیلیک و اتفاقاتی که با زدن دکمه اتفاق میوفته --------*/
savebtn.addEventListener("click", () => {
  const blob = new Blob([textarea.value], { type: selectMenu.value }); // این بلاب میاد یک ورودی های رو میگیره که به صورت ارایه و ابجکت هست

  const fileurl = URL.createObjectURL(blob); // سپس یک ابجکت رو ایجاد میکنه که از نوع یو ار ال هست و در یک متغیر ذخیره میشه

  const link = document.createElement("a"); // ایجاد کردن یک تگ آ و ریختنش در یک متغیر
  link.download = fileNameInput.value; //مقدار ورودی آ را به متغیر بالا اضافه میکنه - در اصل داره اتریبیوت اضافه میکنه به متغیر لینک

  link.href = fileurl; // اینجا هم میگه اچ رف از نوع یو ار ال باشه و وصل میشه به متغییر بالا تر
  link.click(); // قابلیت کیلیک شدن میده به لینک
  textarea.value = ""; //بعد از اینکه کلیک شد مقدار داخل تکست اریا رو خالی میکنه
  fileNameInput.value = ""; // مقدار نام فایل رو خالی میکنه
});
