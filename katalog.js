function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

function renderProduk(daftar) {
  const container = document.getElementById("grid-produk");
  container.innerHTML = "";

  if (daftar.length === 0) {
    container.innerHTML = "<p>Tidak ada artefak yang cocok.</p>";
    return;
  }

  daftar.forEach(item => {
    const card = document.createElement("div");
    card.className = "produk-card";

    card.innerHTML = `
      <div class="produk-foto">
        <img src="${item.foto[0]}" alt="${item.nama}">
        ${item.status === "terjual" ? '<span class="badge-terjual">Terjual</span>' : ''}
      </div>
      <div class="produk-info">
        <h3>${item.nama}</h3>
        <p class="produk-era">${item.era} — ${item.asalDaerah}</p>
        <p class="produk-harga">${formatRupiah(item.harga)}</p>
        <a href="detail.html?id=${item.id}" class="btn-detail">Lihat Detail</a>
      </div>
    `;

    container.appendChild(card);
  });
}

const kategoriURL = new URLSearchParams(window.location.search).get("kategori");
if (kategoriURL) {
  document.getElementById("filterKategori").value = kategoriURL;
}

function filterProduk() {
  const kategori = document.getElementById("filterKategori").value;
  const keyword = document.getElementById("searchInput").value.toLowerCase();

  let hasil = artefakData.filter(item => {
    const cocokKategori = kategori === "semua" || item.kategori === kategori;
    const cocokKeyword = item.nama.toLowerCase().includes(keyword);
    return cocokKategori && cocokKeyword;
  });

  renderProduk(hasil);
}

filterProduk();

document.getElementById("filterKategori").addEventListener("change", filterProduk);
document.getElementById("searchInput").addEventListener("input", filterProduk);