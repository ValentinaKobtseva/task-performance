const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];
let items = [];
function addContacts() {items = [];
for (let i = 0; i < 50000; i++) {const child = document.createElement("div");child.textContent = i;child.classList.add("contact");contacts.appendChild(child);items[i] = child;} }
contacts.addEventListener("scroll", (e) => {let i = 0;while (contacts.scrollTop - items[i].offsetTop > -18) {++i;}const topItemIndex = i;if (topItemIndex !== -1) {
stickyHeader.textContent = items[topItemIndex].textContent;}});addContacts();