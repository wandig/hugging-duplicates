const body = document.body;
const overlay = document.querySelector("[data-overlay]");
const mobileMenu = document.querySelector("#mobileMenu");
const navToggle = document.querySelector(".nav-toggle");
const cart = document.querySelector("[data-cart]");
const search = document.querySelector("[data-search]");
const galleryTrack = document.querySelector(".gallery-track");

function showLayer(layer) {
  if (!layer) return;
  layer.hidden = false;
  overlay.hidden = false;
  body.classList.add("locked");
}

function hideLayers() {
  if (cart) cart.hidden = true;
  if (search) search.hidden = true;
  overlay.hidden = true;
  body.classList.remove("locked");
}

navToggle?.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  mobileMenu.hidden = expanded;
});

mobileMenu?.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    mobileMenu.hidden = true;
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll("[data-open-cart]").forEach((button) => {
  button.addEventListener("click", () => showLayer(cart));
});

document.querySelectorAll("[data-close-cart]").forEach((button) => {
  button.addEventListener("click", hideLayers);
});

document.querySelectorAll("[data-open-search]").forEach((button) => {
  button.addEventListener("click", () => {
    showLayer(search);
    window.setTimeout(() => document.querySelector("#siteSearch")?.focus(), 50);
  });
});

document.querySelectorAll("[data-close-search]").forEach((button) => {
  button.addEventListener("click", hideLayers);
});

overlay?.addEventListener("click", hideLayers);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideLayers();
  }
});

document.querySelectorAll("[data-compare]").forEach((input) => {
  const comparison = input.closest(".compare");
  input.addEventListener("input", () => {
    comparison.style.setProperty("--position", `${input.value}%`);
  });
});

document.querySelector("[data-gallery-prev]")?.addEventListener("click", () => {
  galleryTrack?.scrollBy({ left: -320, behavior: "smooth" });
});

document.querySelector("[data-gallery-next]")?.addEventListener("click", () => {
  galleryTrack?.scrollBy({ left: 320, behavior: "smooth" });
});

document.querySelector("[data-newsletter]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = form.querySelector(".form-message");
  const email = new FormData(form).get("email");

  if (message) {
    message.textContent = `Thanks. ${email} has been added to this demo signup list.`;
  }

  form.reset();
});
