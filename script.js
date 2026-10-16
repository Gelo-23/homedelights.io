const MESSENGER_USERNAME = "home.delights.kitchen";

const products = [
// CAKES
{ id: 1, category: "cakes", name: "2 Layer Fondant Cake", price: 7000, startingPrice: true, image: "https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-6/825273338_1502153745267157_2223163657993757993_n.jpg?stp=dst-jpg_tt6&cstp=mx895x1179&ctp=s895x1179&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFnt3syvtkiqxlXAKqbmPgAueegWEyttXK556BYTK21cjf5dFeeeEIYLVMmLrJ59X5R53s-qqsxxOrVwJRLB0vN&_nc_ohc=dgc95901w7YQ7kNvwFtEkaG&_nc_oc=AdpARVaVraFABBSplxjHEBuTQJAz6CHmq7GM4wS8NsjK0gNNPuSH6wwKhxT1Wen34v-_aG77ManQVKZVX84eqlYr&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&_nc_gid=SP4VO_vkbcQwQ32ci49tow&_nc_ss=7b2a8&oh=00_AQNXkyXNj7yFelg3VLDnQDDm3QlC2fMcLjVHR9euYadQqg&oe=6AD77593", desc: "Elegant two-layer fondant cake. Starting price shown — final price depends on design." },
{ id: 2, category: "cakes", name: "1 Layer Fondant Cake", price: 3000, image: "https://scontent.fmnl33-6.fna.fbcdn.net/v/t39.30808-6/672677359_1362621332553733_4966160736559366882_n.jpg?stp=dst-jpg_tt6&cstp=mx896x1044&ctp=s896x1044&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFLxPimYT_tPNtTqlTZJLOL-sKt2fXS9cT6wq3Z9dL1xJ_WTL_u1__QUXtQiC13egA6Faw6UXJXWEMwWZivOAbq&_nc_ohc=mH9H85X5kYgQ7kNvwH_m_0G&_nc_oc=Adp39DcdFSAZMh1VqQTpvHZS7956bHnAs_AjKxJuQUt2e_zLhK35l4DSkwZaRnCpt7x0NkZVjneXceHAKZs9Cl9T&_nc_zt=23&_nc_ht=scontent.fmnl33-6.fna&_nc_gid=3QrfBiCI_VJZrndYOoYDAQ&_nc_ss=7b2a8&oh=00_AQMKg10nlAUecvdHgNauhjpzHyPePJuaw74sScnumrVEBQ&oe=6AD7751A", desc: "Beautiful fondant cake for your special celebration." },
{ id: 3, category: "cakes", name: "1 Layer Icing Cake", price: 2500, image: "https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-6/777237669_1467900748692457_1418936026575939024_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHrQoPq-q_wd-HEtL7HVsgHRk7bAyqCwQZGTtsDKoLBBmSCvD1pjtPP9Rz_di1QfuRfG05IlpLJCYy2f3oB2M_k&_nc_ohc=eLVayCthPgwQ7kNvwH-ykm1&_nc_oc=AdrWnrmMPyFL5UwzFYhsvxMlr8wwc6cFWoIBNcKHOPmm_gf4FvFmzApRf-67_-ulspUWcwz3hh7HtNs4hmuatjXv&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&_nc_gid=y9NgAdcA9FjxUQeDS15Dpg&_nc_ss=7b2a8&oh=00_AQOLccVDp8D_h-UMOE7p2PTxyNPvV5LO2mYElnsWX_Eisw&oe=6AD79540", desc: "Classic one-layer cake with smooth icing." },
{ id: 4, category: "cakes", name: "2 Layer Icing Cake", price: 5000, image: "https://scontent.fmnl33-6.fna.fbcdn.net/v/t39.30808-6/825274171_1502209625261569_7040294838086207298_n.jpg?stp=dst-jpg_tt6&cstp=mx896x1120&ctp=s896x1120&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGpzH9dq5ZiASAxU8NgiVritcsU5Dn0-g61yxTkOfT6DoqDJ2bwPbIp3lx0SeELrX0kWp8FWW8FSIbKlB0WtkG3&_nc_ohc=03g5c2H4ZGwQ7kNvwH-UDFD&_nc_oc=AdoDJP9X5LNjGB9cdd_-Vc4LI81BXolX4Ip600--8EM1AQFqxJINe00s31MUHHAJgVWyi45guIoeAJUe_EHXxUl8&_nc_zt=23&_nc_ht=scontent.fmnl33-6.fna&_nc_gid=3SW2XbWZrWFqpN3qDsi-4Q&_nc_ss=7b2a8&oh=00_AQMfUPrypdjMAJ_3QJbPH3w6y7Sx8OLLh4iVDoJG6CT6sg&oe=6AD77A37", desc: "Classic two-layer celebration cake with icing." },
{ id: 5, category: "cakes", name: "Dream Cake", price: 150, image: "https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-6/486611001_1057115343104335_3890362557494156836_n.jpg?stp=dst-jpg_tt6&cstp=mx960x720&ctp=s960x720&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEYu0qQ_6yQ0y6MseogMAHcxpEGMiFnZubGkQYyIWdm5v-oh3cARJLjwzTtbHhPf9yVdJ1uwDLGM7TXKTLE4oJw&_nc_ohc=_CCkDyMs55wQ7kNvwHMosXw&_nc_oc=AdofQqvsZ4eWowSWRka3slDqOpZQDMuLJuN7zVmc80gDYCmP_ny08Wuqb7Kn4O9mvLvHFtFag4ld7vHxmxzb14_z&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&_nc_gid=Akv-5iQj38naEN3uDFtLPQ&_nc_ss=7b2a8&oh=00_AQP-cHfpTBE7zr9w3retahStYyRFCdDVIO6vXGEIHcsR_A&oe=6AD78184", desc: "A rich and indulgent dream cake for dessert lovers." },

// BREADS
{ id: 6, category: "breads", name: "Spanish Bread", price: 10, image: "https://i.pinimg.com/1200x/fd/e3/1b/fde31b1fb895c4112697e60abd3fef87.jpg", desc: "Soft, sweet and buttery Filipino-style bread." },
{ id: 7, category: "breads", name: "Donut (Any Flavor)", price: 350, image: "https://i.pinimg.com/1200x/87/fe/84/87fe8407bd84e09fb5ffc973f64bc325.jpg", desc: "Choose your favorite donut flavor." },
{ id: 8, category: "breads", name: "Hotdog Bread", price: 20, image: "https://i.pinimg.com/736x/3d/a4/e8/3da4e85cbf8f9eb96411bacc7656f41f.jpg", desc: "Soft bread filled with a savory hotdog." },
{ id: 9, category: "breads", name: "Ham & Cheese Bread", price: 20, image: "https://i.pinimg.com/1200x/48/5c/89/485c89928c4307849fe3288576c81d76.jpg", desc: "Soft bread with delicious ham and cheese." },

// DESSERT BOXES
{ id: 10, category: "desserts", name: "Banana Loaf", price: 150, image: "https://scontent.fmnl33-2.fna.fbcdn.net/v/t39.30808-6/666617696_1353211220161411_8654780433630099700_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1350&ctp=s1080x1350&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGUoh-jaQwBrNK6X496fg07oyZ1a_vE0aWjJnVr-8TRpcvoZ7DpHXXdndGqTF33Af5EAzRpOrZ_RI-6aCmk2qES&_nc_ohc=QMARUc62zEEQ7kNvwHUr4Sp&_nc_oc=AdrNfEfPGQfrbz0pVTDv0osVg1aPscnhNnRw2gqj9sIqv91_DmZ-CxMgMRMpGJeal56ftgx5BhVP6JU8OgNQS9i3&_nc_zt=23&_nc_ht=scontent.fmnl33-2.fna&_nc_gid=yQikFu8UUpt1UcTXRQxnlw&_nc_ss=7b2a8&oh=00_AQND6W_6xaOxsv0i1Qyctr0ggiZKBbn83JmMm30t4iigAQ&oe=6AD76D44", desc: "Moist homemade banana loaf, freshly baked." },
{ id: 11, category: "desserts", name: "Baby Burnt Basque Cheesecake", price: 185, image: "https://scontent.fmnl33-1.fna.fbcdn.net/v/t39.30808-6/678755529_1368141085335091_2988982544023681601_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFgK2b9iWBHy68uLxTUr9TJsOflDcBjAKWw5-UNwGMApYIxTJmVHRHr6RPZgLEFXTUehZHlRQx5L9GXI9stAWg4&_nc_ohc=B8HW6eRUsbwQ7kNvwF8hmyP&_nc_oc=AdqnYg3-dZorEwLOY61BR3Rr4_g-2_asPaPl57Q95sI9QS-9gKOAFD-pcPbVem-r9aKKn1SLSF2rhi5zrBYEDj7V&_nc_zt=23&_nc_ht=scontent.fmnl33-1.fna&_nc_gid=a8zJlIxMo2koAiRLSDm0ww&_nc_ss=7b2a8&oh=00_AQOLglTZXja51YQlnuFd_qcJrfRAZ3BG9nLnQkxh7oRvDA&oe=6AD768CC", desc: "Available in Blueberry, Biscoff, and Strawberry." }
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

function sendMessengerOrder(event) {
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
const hasPhoto = !!selectedPhoto;

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

if (hasPhoto) {
message += "%0A%0A(I have a reference photo to send in this chat too.)";
}

message += "%0A%0AThank you!";

const messengerUrl = `https://m.me/${MESSENGER_USERNAME}?text=${message}`;
const messengerWindow = window.open(messengerUrl, "_blank");

if (!messengerWindow) {
window.location.href = messengerUrl;
}

if (hasPhoto) {
tryCopyPhotoToClipboard().then(copied => {
window.setTimeout(() => {
alert(copied
? "Your photo was copied — paste it (Ctrl+V or long-press → Paste) into the Messenger chat that just opened."
: "Don't forget to manually attach your reference photo in the Messenger chat that just opened.");
}, 300);
});
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