document.querySelector(".form-kontak").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Terima kasih! Pesan kamu telah terkirim (simulasi — belum terhubung ke server).");
  this.reset();
});