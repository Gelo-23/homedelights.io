// ================================
// HOME DELIGHTS - WEBSITE SETTINGS
// ================================

// CHANGE THIS to your Facebook Page username (NOT a share link).
// Example: if your page is facebook.com/HomeDelightsPH,
// use "HomeDelightsPH". A "/share/..." link will NOT work here —
// go to your Page, and copy the username from facebook.com/<username>.
const MESSENGER_USERNAME = "home.delights.kitchen";

const products = [
// CAKES
{ id: 1, category: "cakes", name: "2 Layer Fondant Cake", price: 7000, startingPrice: true, image: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/772379005_1461952169287315_2437400310643667521_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx896x1029&ctp=s896x1029&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF2olyy2gQhnaVlnvMPkf_MjgLCrpbWoTeOAsKultahN2fDWqJJuSGbM5P2_WDy6CRkk_Xa7XyUd_UMn6N50ANq&_nc_ohc=OrXND5a1Zm8Q7kNvwHJNxHP&_nc_oc=AdqFhN2ipYTVbIbarj-Ky6Ar2ANqsJAWcAQrj6K5IRrJGMRcpOHlVnVUyc5sk8YLRSOHcNjYM2ZUZBhS0I1xcOEO&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=uLdiFB0r1Y5VVAusC4re-w&_nc_ss=722a8&oh=00_AQJutgVfs1KOz77ZJykyYRjHPy-YFcthCnWolg3TWcu8Hg&oe=6A986C6B", desc: "Elegant two-layer fondant cake. Starting price shown — final price depends on design." },
{ id: 2, category: "cakes", name: "1 Layer Fondant Cake", price: 3000, image: "https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-6/649078633_1332932032189330_1310331309276842643_n.jpg?stp=dst-jpg_tt6&cstp=mx896x1044&ctp=s896x1044&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHmLGHjDerYtzgKzmfbTHU0QRQ-ZIAQi0RBFD5kgBCLRK1DtMaSicx9H8ArhvXr7Mx4PZRTL8bYBDlqQ0KOxXG7&_nc_ohc=4f4MJTYbjy4Q7kNvwFQCI8J&_nc_oc=Adqi5oFjBix03sPZI7XDhmw0xTTZfWYg-qdQlLGB8aoHRVUnZ1P_zG6z0TgwARuUmwV2YJWdDrVPIppCiFIZx0BB&_nc_zt=23&_nc_ht=scontent.fmnl3-2.fna&_nc_gid=1nynPqMFunfW7gEmowJt4w&_nc_ss=722a8&oh=00_AQIJpJa_BSj6ENyRMUhTuwxUiLJFxdOxL6e4WksrKWe-FQ&oe=6A988BF1", desc: "Beautiful fondant cake for your special celebration." },
{ id: 3, category: "cakes", name: "1 Layer Icing Cake", price: 2500, image: "https://scontent.fmnl3-3.fna.fbcdn.net/v/t39.30808-6/746823911_1438986244917241_3256729463001233864_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx869x1148&ctp=s869x1148&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHa2quukeFGgHk0q0aK0PGBh2xSsEDUNgGHbFKwQNQ2AWuSRpDMEatZHHN51j-TLBMS65UqfncSONuDWqWhpBQ4&_nc_ohc=FiK6AYODqN4Q7kNvwH3njYo&_nc_oc=Adpek5Ge8206cW3e3yINQcPzHqUjwTYCOcETHJ1H-7fUzmUBms-QfIySGX1Aiy1F3jfyfxref0IjRFmdpi5eb0e7&_nc_zt=23&_nc_ht=scontent.fmnl3-3.fna&_nc_gid=fbch3Ik5i_FNUwp8_auWPA&_nc_ss=722a8&oh=00_AQLn1-XSxZL3cS3yZ4Dxc7wa6Y0Rro32qNT-B4HYyBbUOw&oe=6A989B0D", desc: "Classic one-layer cake with smooth icing." },
{ id: 4, category: "cakes", name: "2 Layer Icing Cake", price: 5000, image: "https://scontent.fmnl3-3.fna.fbcdn.net/v/t39.30808-6/772818594_1461971969285335_7441678891611556993_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx743x991&ctp=s743x991&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEFqwK1FlA8yrU8YMF07GDsJrnt_XSV4S4mue39dJXhLu8ExIqpTBrT7elb772-lQLFZJ6sX7jUlXqFsH3M_u_3&_nc_ohc=H7XPUyGhopEQ7kNvwHuPleM&_nc_oc=Ado9F7Ju-H0Hv7aMg31LXDhZmzXWWp_QvYAuE9wQ6n-C4OxhXmZxaInXopcdgd-dbtTOoc7pyKTe_2Z9rnO7wu5y&_nc_zt=23&_nc_ht=scontent.fmnl3-3.fna&_nc_gid=0w671VqbB7BxbbCo0eamaw&_nc_ss=722a8&oh=00_AQJvQHnLDqJZSZcIXSYzjPJmhlHPmSAhbbQttmz28NVe6Q&oe=6A987908", desc: "Classic two-layer celebration cake with icing." },
{ id: 5, category: "cakes", name: "Dream Cake", price: 150, image: "https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-6/486611001_1057115343104335_3890362557494156836_n.jpg?stp=dst-jpg_tt6&cstp=mx960x720&ctp=s960x720&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEYu0qQ_6yQ0y6MseogMAHcxpEGMiFnZubGkQYyIWdm5v-oh3cARJLjwzTtbHhPf9yVdJ1uwDLGM7TXKTLE4oJw&_nc_ohc=SN4PGceHhpoQ7kNvwEhgqvv&_nc_oc=AdqcAZm4ZfPTYRWOWH5IUy_er_spm3hJX2OSUIp26QenWuAwv0nHWwudkRyTGOmOCIHPgTdJYidaTICVh_EiYsNN&_nc_zt=23&_nc_ht=scontent.fmnl3-2.fna&_nc_gid=K2nOkqgkAQtFSIUs-klKwA&_nc_ss=722a8&oh=00_AQKi5d0WxlikGv1YGbjm4XQSqKSN1uZu5ZY95ZYUHpdcKg&oe=6A9871C4", desc: "A rich and indulgent dream cake for dessert lovers." },

// BREADS
{ id: 6, category: "breads", name: "Spanish Bread", price: 10, image: "images/spanish-bread.jpg", desc: "Soft, sweet and buttery Filipino-style bread." },
{ id: 7, category: "breads", name: "Donut (Any Flavor)", price: 350, image: "https://scontent.fmnl3-3.fna.fbcdn.net/v/t39.30808-6/474812616_1118998496436808_7719269903052053780_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1152&ctp=s2048x1152&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeErTdfG88bwUEFs6OT07Ky564M2KDAO3pLrgzYoMA7ekgqbl_wqvaaEQW1wA_CHu_4pAIrZWqsvLiKLhywe1uHz&_nc_ohc=So9RPtBc_7oQ7kNvwFzsreg&_nc_oc=Adr8YJIkVeOm_WE2xc3Gu5h8UGIYxqyTmL-5ADK3u73x9I17M0JRkBhpds-vAl-2xQWhvqynlShGZS2YN9QZcH8G&_nc_zt=23&_nc_ht=scontent.fmnl3-3.fna&_nc_gid=E1UKlonRdlhSvVCzcbKTJw&_nc_ss=722a8&oh=00_AQJ5JBHYVxK3a48VohF5mPCSqs1-swSoI9NnzSRbRV9SAg&oe=6A989806", desc: "Choose your favorite donut flavor." },
{ id: 8, category: "breads", name: "Hotdog Bread", price: 20, image: "images/hotdog-bread.jpg", desc: "Soft bread filled with a savory hotdog." },
{ id: 9, category: "breads", name: "Ham & Cheese Bread", price: 20, image: "https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-6/506460892_1120834900065712_7463067678021201363_n.jpg?stp=dst-jpg_tt6&cstp=mx720x960&ctp=s720x960&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGBxcdw9QC_Sxubm2ZPpWYlUeKL3XOueUBR4ovdc655QCXpPnwhp_AxVdZ9XkXGmpyL6CrZawtv-HaZQaGFsFf1&_nc_ohc=I13I9eLmbg0Q7kNvwHHzflD&_nc_oc=AdrWGgIcAWc1Cz59ojdjsWXOgJKNjDVKnla8Iz8VaMVru8DYnGDcyBBQkU30YXUEBVodZDADKxTID6_7reRcCLdN&_nc_zt=23&_nc_ht=scontent.fmnl3-2.fna&_nc_gid=4wpvYxsOUB3CLa2qk7-RPg&_nc_ss=722a8&oh=00_AQKdco4fW71PX7zPbxEfAFl967M0vqsqf38TVnfndSam9Q&oe=6A987B49", desc: "Soft bread with delicious ham and cheese." },

// DESSERT BOXES
{ id: 10, category: "desserts", name: "Banana Loaf", price: 150, image: "images/banana-loaf.jpg", desc: "Moist homemade banana loaf, freshly baked." },
{ id: 11, category: "desserts", name: "Baby Burnt Basque Cheesecake", price: 185, image: "https://scontent.fmnl3-3.fna.fbcdn.net/v/t39.30808-6/679316314_1367829145366285_4148903851116703880_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1170x1543&ctp=s1170x1543&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEvM1pMYA_-Obq2VmE8BJ2hzKNlb8Tob_XMo2VvxOhv9aK5sk7dqIFBwooIsOfC3yOdofeqe-nPDIDlhys4-h69&_nc_ohc=7mgl-yhA9AUQ7kNvwFnKMwu&_nc_oc=Adr3N7x1gZCczIlRwK4meCE8oqFy9ebyY48cq_MXJj35PDvW7ysilRpLZOvxiLzobBClmpVSuah0QNcHEqPcDVdL&_nc_zt=23&_nc_ht=scontent.fmnl3-3.fna&_nc_gid=3UQtXc7A_dvv2LNvref0-g&_nc_ss=722a8&oh=00_AQKMOP02RVxFRbXlh8p2tEdyOKARpXUaf68iKRlmF4fvBw&oe=6A986DC2", desc: "Available in Blueberry, Biscoff, and Strawberry." }
];

let cart = JSON.parse(localStorage.getItem("homeDelightsCart")) || [];
let customer = JSON.parse(sessionStorage.getItem("homeDelightsCustomer")) || null;
let pendingCheckout = false;

function money(value, startingPrice) {
if (value <= 0) return "Message for price";
return startingPrice ? `Starts at ₱${value.toLocaleString()}` : `₱${value.toLocaleString()}`;
}

function cartTotal() {
return cart.reduce((sum, item) => {
const p = products.find(product => product.id === item.id);
return sum + (p.price > 0 ? p.price * item.qty : 0);
}, 0);
}

function cartHasUnpricedItem() {
return cart.some(item => {
const p = products.find(product => product.id === item.id);
return !(p.price > 0);
});
}

function cartHasStartingPriceItem() {
return cart.some(item => {
const p = products.find(product => product.id === item.id);
return p.startingPrice && p.price > 0;
});
}

function totalLabelFor(total) {
if (cartHasUnpricedItem()) {
return total > 0 ? `₱${total.toLocaleString()}+` : "Message for price";
}
if (cartHasStartingPriceItem()) {
return `Starts at ₱${total.toLocaleString()}`;
}
return money(total);
}

function renderProducts() {
const groups = {
cakes: document.getElementById("cakesGrid"),
breads: document.getElementById("breadsGrid"),
desserts: document.getElementById("dessertsGrid")
};

Object.values(groups).forEach(g => g.innerHTML = "");

products.forEach(product => {
const card = document.createElement("article");
card.className = "product-card";
card.innerHTML = `
<div class="product-image">
<img src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
<span class="image-label">${product.category === "desserts" ? "Dessert Box" : product.category}</span>
</div>
<div class="product-info">
<h4>${product.name}</h4>
<p>${product.desc}</p>
<div class="product-bottom">
<span class="price">${money(product.price, product.startingPrice)}</span>
<button class="add-btn" onclick="addToCart(${product.id})">+ Add to Cart</button>
</div>
</div>
`;
groups[product.category].appendChild(card);
});
}

function addToCart(id) {
const product = products.find(p => p.id === id);
const existing = cart.find(item => item.id === id);

if (existing) existing.qty++;
else cart.push({ id, qty: 1 });

saveCart();
openCart();
}

function changeQty(id, amount) {
const item = cart.find(i => i.id === id);
if (!item) return;
item.qty += amount;
if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
saveCart();
}

function removeItem(id) {
cart = cart.filter(item => item.id !== id);
saveCart();
}

function saveCart() {
localStorage.setItem("homeDelightsCart", JSON.stringify(cart));
renderCart();
}

function renderCart() {
const container = document.getElementById("cartItems");
const empty = document.getElementById("emptyCart");
const footer = document.getElementById("cartFooter");
const count = document.getElementById("cartCount");
const totalItems = document.getElementById("cartTotalItems");
const totalPrice = document.getElementById("cartTotalPrice");

const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
count.textContent = totalQty;
totalItems.textContent = totalQty;
const total = cartTotal();
totalPrice.textContent = totalLabelFor(total);

if (cart.length === 0) {
container.innerHTML = "";
empty.style.display = "block";
footer.style.display = "none";
return;
}

empty.style.display = "none";
footer.style.display = "block";

container.innerHTML = cart.map(item => {
const p = products.find(product => product.id === item.id);
return `
<div class="cart-item">
<img src="${p.image}" alt="${p.name}" onerror="this.src='images/placeholder.jpg'">
<div>
<h4>${p.name}</h4>
<small>${money(p.price, p.startingPrice)}</small>
<div class="qty">
<button onclick="changeQty(${p.id}, -1)">−</button>
<strong>${item.qty}</strong>
<button onclick="changeQty(${p.id}, 1)">+</button>
</div>
</div>
<button class="remove" onclick="removeItem(${p.id})">Remove</button>
</div>
`;
}).join("");
}

// ============ THEME (LIGHT / DARK) ============

function applyTheme(theme) {
document.documentElement.setAttribute("data-theme", theme);
localStorage.setItem("homeDelightsTheme", theme);
const btn = document.getElementById("themeToggle");
if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
}

function toggleTheme() {
const current = document.documentElement.getAttribute("data-theme") || "light";
applyTheme(current === "dark" ? "light" : "dark");
}

// ============ CUSTOMER LOGIN ============
// Simple, no-password login stored for this browser tab/session only.
// Closing the tab or browser (or leaving the site) automatically logs
// the customer out — the next visitor won't see someone else's name.

function renderAccountUI() {
const btn = document.getElementById("accountBtn");
if (customer) {
const firstName = customer.name.split(" ")[0];
btn.textContent = `Hi, ${firstName} · Log out`;
btn.classList.add("logged-in");
} else {
btn.textContent = "Log In";
btn.classList.remove("logged-in");
}
}

function openLogin() {
document.getElementById("loginModal").classList.add("active");
}

function closeLogin() {
document.getElementById("loginModal").classList.remove("active");
pendingCheckout = false;
}

function handleAccountClick() {
if (customer) {
if (confirm(`Log out of ${customer.name}'s account on this device?`)) {
customer = null;
sessionStorage.removeItem("homeDelightsCustomer");
renderAccountUI();
}
} else {
openLogin();
}
}

function handleLoginSubmit(event) {
event.preventDefault();
const name = document.getElementById("loginName").value.trim();
const phone = document.getElementById("loginPhone").value.trim();
if (!name || !phone) return;

customer = { name, phone };
sessionStorage.setItem("homeDelightsCustomer", JSON.stringify(customer));
renderAccountUI();
document.getElementById("loginModal").classList.remove("active");
document.getElementById("loginForm").reset();

if (pendingCheckout) {
pendingCheckout = false;
openCheckout();
}
}

function openCart() {
document.getElementById("cartDrawer").classList.add("active");
document.getElementById("overlay").classList.add("active");
}

function closeCart() {
document.getElementById("cartDrawer").classList.remove("active");
document.getElementById("overlay").classList.remove("active");
}

let selectedPhoto = null;

function handlePhotoSelect(event) {
const file = event.target.files[0];
const wrap = document.getElementById("photoPreviewWrap");
const preview = document.getElementById("photoPreview");

if (!file) {
selectedPhoto = null;
wrap.style.display = "none";
return;
}

selectedPhoto = file;
const reader = new FileReader();
reader.onload = e => {
preview.src = e.target.result;
wrap.style.display = "flex";
};
reader.readAsDataURL(file);
}

function clearPhoto() {
selectedPhoto = null;
document.getElementById("orderPhoto").value = "";
document.getElementById("photoPreviewWrap").style.display = "none";
}

async function tryCopyPhotoToClipboard() {
if (!selectedPhoto || !navigator.clipboard || !window.ClipboardItem) return false;
try {
// Clipboard image write needs a supported type — convert to PNG via canvas if needed.
const bitmap = await createImageBitmap(selectedPhoto);
const canvas = document.createElement("canvas");
canvas.width = bitmap.width;
canvas.height = bitmap.height;
canvas.getContext("2d").drawImage(bitmap, 0, 0);
const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
return true;
} catch (err) {
return false;
}
}

function openCheckout() {
if (cart.length === 0) {
alert("Please add at least one product to your cart.");
return;
}

if (!customer) {
pendingCheckout = true;
closeCart();
openLogin();
return;
}

const today = new Date();
const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
.toISOString().split("T")[0];

document.getElementById("orderDate").min = localDate;
document.getElementById("orderDate").value = localDate;

const summary = document.getElementById("orderSummary");
const customerRow = `<div class="summary-row customer-row"><span>Ordering as</span><strong>${customer.name} (${customer.phone})</strong></div>`;
const itemRows = cart.map(item => {
const p = products.find(product => product.id === item.id);
return `<div class="summary-row"><span>${p.name} × ${item.qty}</span><strong>${money(p.price, p.startingPrice)}</strong></div>`;
}).join("");
const total = cartTotal();
const totalLabel = totalLabelFor(total);
const totalRow = `<div class="summary-row total-row"><span>Estimated total</span><strong>${totalLabel}</strong></div>`;
summary.innerHTML = customerRow + itemRows + totalRow;

closeCart();
document.getElementById("orderModal").classList.add("active");
}

function closeCheckout() {
document.getElementById("orderModal").classList.remove("active");
}

async function sendMessengerOrder(event) {
event.preventDefault();

if (!customer) {
alert("Please log in first so we know who's ordering.");
openLogin();
return;
}

if (MESSENGER_USERNAME === "yourpageusername") {
alert("Ordering isn't fully set up yet — the site owner needs to add the real Facebook Page username in script.js.");
return;
}

const date = document.getElementById("orderDate").value;
const notes = document.getElementById("orderNotes").value.trim();

let message = `Hello Home Delights! I'm ${customer.name} (${customer.phone}) and I'd like to place an order.%0A%0A`;
message += "ORDER:%0A";

cart.forEach(item => {
const p = products.find(product => product.id === item.id);
message += `• ${p.name} x ${item.qty}%0A`;
});

const total = cartTotal();
const totalLabel = totalLabelFor(total).replace(/^Message for price$/, "to be confirmed");
message += `%0AEstimated total: ${encodeURIComponent(totalLabel)}`;
message += `%0AOrder date: ${encodeURIComponent(date)}`;
message += `%0ANotes: ${encodeURIComponent(notes || "None")}`;

let photoCopied = false;
if (selectedPhoto) {
photoCopied = await tryCopyPhotoToClipboard();
message += photoCopied
? "%0A%0A(I'm pasting a reference photo in this chat too!)"
: "%0A%0A(I have a reference photo — attaching it in this chat.)";
}

message += "%0A%0AThank you!";

window.open(`https://m.me/${MESSENGER_USERNAME}?text=${message}`, "_blank");

if (selectedPhoto) {
window.setTimeout(() => {
alert(photoCopied
? "Your photo was copied — paste it (Ctrl+V or long-press → Paste) into the Messenger chat that just opened."
: "Don't forget to manually attach your reference photo in the Messenger chat that just opened.");
}, 300);
}

cart = [];
saveCart();
closeCheckout();
clearPhoto();
document.getElementById("orderForm").reset();
}

document.getElementById("cartOpen").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
document.getElementById("overlay").addEventListener("click", closeCart);
document.getElementById("checkoutBtn").addEventListener("click", openCheckout);
document.getElementById("modalClose").addEventListener("click", closeCheckout);
document.getElementById("orderForm").addEventListener("submit", sendMessengerOrder);
document.getElementById("orderPhoto").addEventListener("change", handlePhotoSelect);
document.getElementById("photoRemove").addEventListener("click", clearPhoto);

document.getElementById("accountBtn").addEventListener("click", handleAccountClick);
document.getElementById("loginModalClose").addEventListener("click", closeLogin);
document.getElementById("loginForm").addEventListener("submit", handleLoginSubmit);
document.getElementById("themeToggle").addEventListener("click", toggleTheme);

// Click outside either modal's card to close it
document.querySelectorAll(".modal-overlay").forEach(overlay => {
overlay.addEventListener("click", (e) => {
if (e.target === overlay) overlay.classList.remove("active");
});
});

document.getElementById("menuToggle").addEventListener("click", () => {
document.getElementById("navLinks").classList.toggle("open");
});

document.querySelectorAll("#navLinks a").forEach(link => {
link.addEventListener("click", () => document.getElementById("navLinks").classList.remove("open"));
});

renderProducts();
renderCart();
renderAccountUI();
applyTheme(document.documentElement.getAttribute("data-theme") || "light");