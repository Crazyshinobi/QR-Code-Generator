const input = document.querySelector("input");
const button = document.querySelector("button");

const img = document.querySelector("img");

button.addEventListener("click", () => {
  if (!input.value) {
    alert("Enter a valid URL");
  } else {
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    img.alt = `QR code for ${input.value}`;
  }
});
