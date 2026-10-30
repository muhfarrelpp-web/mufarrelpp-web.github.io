function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

function getIdDariURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"));
}

function renderDetail() {
  const id = getIdDariURL();
  const item = artefakData.find(a => a.id === id);
  const container = document.getElementById("detail-container");

  if (!item) {
    container.innerHTML = `
      <div class="detail-notfound">
        <h2>Artefak tidak ditemukan</h2>
        <a href="katalog.html" class="btn-primary">Kembali ke Katalog</a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="detail-grid">
      <div class="detail-galeri">
        <img src="${item.foto[0]}" alt="${item.nama}" class="foto-utama" id="foto-utama">
        <div class="thumbnail-list">
          ${item.foto.map((f, i) => `
            <img src="${f}" class="thumbnail" onclick="gantiFoto('${f}')">
          `).join("")}
        </div>
      </div>

      <div class="detail-info">
        ${item.status === "terjual" ? '<span class="badge-terjual">Terjual</span>' : ''}
        <h1>${item.nama}</h1>
        <p class="detail-meta">${item.kategori} • ${item.era} • ${item.asalDaerah}</p>
        <p class="detail-harga">${formatRupiah(item.harga)}</p>

        <div class="detail-section">
          <h3>Deskripsi</h3>
          <p>${item.deskripsi}</p>
        </div>

        <div class="detail-section">
          <h3>Kondisi</h3>
          <p>${item.kondisi}</p>
        </div>

        <div class="detail-section provenance-box">
          <h3>Riwayat Kepemilikan (Provenance)</h3>
          <p>${item.provenance}</p>
        </div>

        <a href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20${encodeURIComponent(item.nama)}"
           class="btn-primary" target="_blank">
          Tanyakan / Minat Beli
        </a>
      </div>
    </div>
  `;
}

function gantiFoto(src) {
  document.getElementById("foto-utama").src = src;
}

renderDetail();