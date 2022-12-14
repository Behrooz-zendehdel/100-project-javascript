const wrapper = document.querySelector(".wrapper");
const form = wrapper.querySelector("form");
const fileInp = form.querySelector("input");
const infoText = form.querySelector("p");
const copyBtn = document.getElementById("copy");
const closeBtn = document.getElementById("close");

function fetchRequest(formData, file) {
  infoText.innerText = "Scaning QR Code ...";
  fetch("http://api.qrserver.com/v1/read-qr-code/", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((result) => {
      result = result[0].symbol[0].data;
      wrapper.querySelector("textarea").innerText = result;
      console.log(result);
      form.querySelector("img").src = URL.createObjectURL(file);

      infoText.innerText = "Upload QR Code Scan ";
      wrapper.classList.add("active");
    });
}

fileInp.addEventListener("change", (e) => {
  let file = e.target.files[0];
  let formData = new FormData();
  formData.append("file", file);
  fetchRequest(formData, file);
});

copyBtn.addEventListener("click", () => {
  let text = wrapper.querySelector("textarea").textContent;
  navigator.clipboard.writeText(text);
});
form.addEventListener("click", () => fileInp.click());
closeBtn.addEventListener("click", () => wrapper.classList.remove("active"));
