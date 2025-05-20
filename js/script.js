const tonearm = document.getElementById("tonearm");
const record = document.querySelector(".record");

let isPlaying = false;

tonearm.addEventListener("click", () => {
  if (!isPlaying) {
    tonearm.classList.add("active"); // 針を乗せる
    record.classList.add("playing"); // レコード回す
  } else {
    tonearm.classList.remove("active"); // 針を戻す
    record.classList.remove("playing"); // レコード止める
  }
  isPlaying = !isPlaying; // 状態を反転
});

const menuButton = document.getElementById("menu-button");
const slideMenu = document.getElementById("slide-menu");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("close-button");

function openMenu() {
  slideMenu.classList.add("open");
  overlay.classList.add("active");
  menuButton.classList.add("hidden"); // ☰を非表示
}

function closeMenu() {
  slideMenu.classList.remove("open");
  overlay.classList.remove("active");
  menuButton.classList.remove("hidden"); // ☰を戻す
}

menuButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
