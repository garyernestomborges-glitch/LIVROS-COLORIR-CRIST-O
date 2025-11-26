
let bookIndex = 0;
const booksTrack = document.getElementById("booksTrack");
const booksTotal = booksTrack ? booksTrack.children.length : 0;

function updateBookCarousel() {
  if (!booksTrack) return;
  const offset = -bookIndex * 100;
  booksTrack.style.transform = `translateX(${offset}%)`;
}

function changeBookSlide(step) {
  if (!booksTrack) return;
  bookIndex += step;
  if (bookIndex < 0) bookIndex = booksTotal - 1;
  if (bookIndex >= booksTotal) bookIndex = 0;
  updateBookCarousel();
}

let depoIndex = 0;
const depoTrack = document.getElementById("depoTrack");
const depoTotal = depoTrack ? depoTrack.children.length : 0;

function updateDepoCarousel() {
  if (!depoTrack) return;
  const offset = -depoIndex * 100;
  depoTrack.style.transform = `translateX(${offset}%)`;
}

function changeDepoSlide(step) {
  if (!depoTrack) return;
  depoIndex += step;
  if (depoIndex < 0) depoIndex = depoTotal - 1;
  if (depoIndex >= depoTotal) depoIndex = 0;
  updateDepoCarousel();
}

function scrollToOfertas() {
  const el = document.getElementById("ofertas");
  if (el) el.scrollIntoView({behavior:"smooth"});
}

document.addEventListener("DOMContentLoaded", () => {
  updateBookCarousel();
  updateDepoCarousel();
});
