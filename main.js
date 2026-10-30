// ===== MENU HAMBURGER =====
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".navbar nav");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("terbuka");
  });
}

// ===== WISHLIST (localStorage) =====
function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  } catch (e) {
    return [];
  }
}

function isDiWishlist(id) {
  return getWishlist().includes(id);
}

function toggleWishlist(id) {
  let list = getWishlist();
  if (list.includes(id)) {
    list = list.filter(x => x !== id);
  } else {
    list.push(id);
  }
  localStorage.setItem("wishlist", JSON.stringify(list));
  updateWishlistCount();
}

function updateWishlistCount() {
  const el = document.getElementById("wishlistCount");
  if (el) el.textContent = getWishlist().length;
}

updateWishlistCount();