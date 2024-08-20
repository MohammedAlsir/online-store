var popup = document.getElementById("popup");
var cards = document.getElementsByClassName("card");

for (var i = 0; i < 2; i++) {
  cards[i].addEventListener("mouseover", () => {
    popup.classList.add("flex");
    popup.classList.remove("hidden");
  });

  cards[i].addEventListener("mouseout", () => {
    popup.classList.add("hidden");
    popup.classList.remove("flex");
  });
}

// scroll up
const scrollToTopButton = document.getElementById("scroll-top");

// Show button when user scrolls down
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTopButton.style.display = "flex";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

scrollToTopButton.addEventListener("click", scrollToTop);

// show grid or list
const btn_show_grid = document.getElementById("btn-show-grid");
const btn_show_list = document.getElementById("btn-show-list");
const items = document.getElementById("items");
const items_div = document.querySelectorAll("#items>div");

if (btn_show_grid && btn_show_list) {
  btn_show_grid.addEventListener("click", () => {
    btn_show_grid.classList.add("active-item");
    btn_show_list.classList.remove("active-item");

    items.classList.add("lg:grid-cols-3");
    items.classList.remove("lg:grid-cols-1");

    items_div.forEach((item) => {
      item.classList.remove("lg:flex");
      item.firstElementChild.classList.remove("lg:w-1/4");
    });
  });

  btn_show_list.addEventListener("click", () => {
    btn_show_list.classList.add("active-item");
    btn_show_grid.classList.remove("active-item");

    items.classList.add("lg:grid-cols-1");
    items.classList.remove("lg:grid-cols-3");

    items_div.forEach((item) => {
      item.classList.add("lg:flex");
      item.firstElementChild.classList.add("lg:w-1/4");
    });
  });
}

// imgaes item
const current = document.getElementById("current");
const opacity = 0.6;
const item_imgs = document.querySelectorAll(".item-imgs img");

if (current && item_imgs) {
  item_imgs.forEach((img) => {
    img.addEventListener("click", (e) => {
      // reset opacity
      item_imgs.forEach((img) => {
        img.style.opacity = 1;
      });

      // add opacity for this item
      e.target.style.opacity = opacity;

      // show img as current
      current.src = e.target.src;
    });
  });
}
