const fileInput = document.querySelector("input"); // گرفتن اطلاعات اینپوت و ریختنش در یک متغیر
const downloadBtn = document.querySelector("button"); // گرفتن اطلاعات اینپوت و ریختنش در یک متغیر

// در صورت گلیک شدن رویداد زیر اتفاق میوفته
downloadBtn.addEventListener("click", (e) => {
  e.preventDefault(); // جلوگیری از رفرش شدن میشه
  downloadBtn.innerText = "Download File ..."; // نمایش دادن متن در داخل دکمه
  fetchFile(fileInput.value); // مقداری که در اینپوت نوشته شده رو با استفاده از تابع میخونه
});

// تابعی که بالا نوشته شده
function fetchFile(url) {
  fetch(url) // کارش فچ کردن اطلاعاتی هست که بوجود اومده
    .then((res) => res.blob()) // در صورت درست بودن اطلاعاتش رو نشون میده
    .then((file) => {
      // در صورت درست بودن میخونه اطلاعات رو
      let tempUrl = URL.createObjectURL(file); // یک ابجکت درست میکنه و میریزه در یک متغیر
      let aTag = document.createElement("a"); // یک تگ ا درست میکنه و میریزه در یک متغیر
      aTag.href = tempUrl; // به متغیر ایجاد شده یک اتریبیوت اضافه میکنه که در بالا نوشته شد
      aTag.download = url.replace(/^.*[\\\/]/, ""); //به اون تگ دوباره یه اتریبیوت اضافه میکنه که محتوای وارد شده در پارمتر اصلی رو جایگزین میکنه
      document.body.appendChild(aTag); //در اینجا اون تگ ا رو به برنامه از طریق اپند اضافه میکنه
      aTag.click(); // به اون تگ اضافه شده کلیک رو اضافه میکنه تا در صورت کلیک اجرا بشه
      aTag.remove(); // از این طریق اون تگ اضافه شده بهد از اجرا حذف میشه
      URL.revokeObjectURL(tempUrl); // اینو نمیدونم چیه // در اصل کارش تموم شده نسبت به اون ابجکت یو ار الی که درست کردیم میگه کارش تموم شده اینجا باید ازاد بشه
      downloadBtn.innerText = "Download File "; // متن نمایش داده شده رو نشون میده
    })
    .catch((error) => {
      //درصورت غلط بودن محتویات
      downloadBtn.innerText = "Download file"; // این متن رو نمایش میده
      alert("Failed to download file  "); // همچنین اینجا یه الرت میده که اشتباهه یه چیزی
    });
}
