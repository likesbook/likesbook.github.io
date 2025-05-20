// const otter = document.querySelector(".otter");
const tank = document.querySelector(".tank");

let isOtter1 = true;

function moveOtter(otter) {
  const tankWidth = tank.clientWidth;
  const tankHeight = tank.clientHeight;

  const otterWidth = otter.offsetWidth;
  const otterHeight = otter.offsetHeight;

  const maxX = tankWidth - otterWidth;
  const maxY = tankHeight - otterHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  otter.style.left = `${randomX}px`;
  otter.style.top = `${randomY}px`;
}
// 🫧 ラッコの移動を一定間隔で繰り返す
function startOtterMovement(otter) {
  moveOtter(otter);
  setInterval(() => moveOtter(otter), 4000);
}

// スタートさせる
startOtterMovement(document.getElementById("otter1"));
startOtterMovement(document.getElementById("otter2"));

function startRandomImageSwitch(otter) {
  function switchImage() {
    const nextImg =
      Math.random() > 0.1 ? "photo/otter1.png" : "photo/otter2.png";
    otter.src = nextImg;

    const nextDelay = 1000 + Math.random() * 1000; // 1〜4秒後にまた切り替え
    setTimeout(switchImage, nextDelay);
  }

  switchImage(); // 最初の起動
}

const otter1 = document.getElementById("otter1");
const otter2 = document.getElementById("otter2");

startRandomImageSwitch(otter1);
startRandomImageSwitch(otter2);

// インターバルで動き＋画像切り替え
setInterval(moveOtter, 6000); // ← 速度もゆったり調整OK

// 泡を作る関数
function createBubble(x, y) {
  const bubble = document.createElement("div");
  bubble.className = "bubble";

  const randomSize = 5 + Math.random() * 15;
  const randomBlur = Math.random() * 3;
  const randomOpacity = 0.4 + Math.random() * 0.4;
  const animTypes = ["floatUp1", "floatUp2", "floatUp3"];
  const randomAnim = animTypes[Math.floor(Math.random() * animTypes.length)];

  bubble.style.left = `${x}px`;
  bubble.style.top = `${y}px`;
  bubble.style.width = `${randomSize}px`;
  bubble.style.height = `${randomSize}px`;
  bubble.style.opacity = randomOpacity;
  bubble.style.filter = `blur(${randomBlur}px)`;
  bubble.style.animationName = randomAnim;

  tank.appendChild(bubble);
  setTimeout(() => {
    bubble.remove();
  }, 3000);
}

function createRandomBubble() {
  const bubble = document.createElement("div");
  bubble.className = "bubble";

  const randomX = Math.random() * window.innerWidth;
  const randomSize = 1 + Math.random() * 15;
  const randomBlur = Math.random() * 3;
  const randomOpacity = 0.4 + Math.random() * 0.4;
  const animTypes = ["floatUp1", "floatUp2", "floatUp3"];
  const randomAnim = animTypes[Math.floor(Math.random() * animTypes.length)];

  bubble.style.left = `${randomX}px`;
  bubble.style.bottom = `0px`;
  bubble.style.width = `${randomSize}px`;
  bubble.style.height = `${randomSize}px`;
  bubble.style.opacity = randomOpacity;
  bubble.style.filter = `blur(${randomBlur}px)`;
  bubble.style.animationName = randomAnim;

  tank.appendChild(bubble);
  setTimeout(() => {
    bubble.remove();
  }, 3000);
}

function createPopBubble() {
  const bubble = document.createElement("div");
  bubble.className = "bubble";

  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;
  const randomSize = 5 + Math.random() * 20;
  const randomBlur = Math.random() * 3;
  const randomOpacity = 0.4 + Math.random() * 0.4;

  bubble.style.left = `${randomX}px`;
  bubble.style.top = `${randomY}px`;
  bubble.style.width = `${randomSize}px`;
  bubble.style.height = `${randomSize}px`;
  bubble.style.filter = `blur(${randomBlur}px)`;
  bubble.style.opacity = randomOpacity;

  tank.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 2000);
}
function popBubbleLoop() {
  const bubbleCount = 2 + Math.floor(Math.random() * 4); // 2〜5個
  for (let i = 0; i < bubbleCount; i++) {
    setTimeout(() => {
      createPopBubble();
    }, i * 150); // 少しずつ出現
  }

  const nextDelay = 300 + Math.random() * 700; // 次の波まで
  setTimeout(popBubbleLoop, nextDelay);
}

popBubbleLoop();

function bubbleLoop() {
  const bubbleCount = 3 + Math.floor(Math.random() * 6); // 3〜5個

  for (let i = 0; i < bubbleCount; i++) {
    setTimeout(() => {
      createRandomBubble();
    }, i * 100); // 少しずつずらして自然に出す
  }

  const nextDelay = 300 + Math.random() * 300; // 次のバブル波までの間隔
  setTimeout(bubbleLoop, nextDelay);
}

bubbleLoop(); // スタート！

// メニュー
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
