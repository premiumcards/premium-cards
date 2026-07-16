const STORE_CONFIG = {
  paymentGatewayName: "UPI Payment",
  upiId: "shaileshpnl@fam",
  telegramSupportUrl: "https://t.me/Premium_cards_shop_support",
  supportMessage: "Pay full amount",
};

const products = [
  {
    id: "pcs-1048",
    type: "visa",
    network: "VISA",
    number: "1048",
    holder: "ETHAN HUNT",
    expiry: "06/2029",
    limit: "4999",
    price: "₹499",
    qty: 9,
  },
  {
    id: "pcs-2250",
    type: "mastercard",
    network: "MASTERCARD",
    number: "2250",
    holder: "ALEX CARTER",
    expiry: "08/2029",
    limit: "₹13000",
    price: "₹999",
    qty: 7,
  },
  {
    id: "pcs-7744",
    type: "visa",
    network: "VISA",
    number: "7744",
    holder: "MARCUS AURELIUS",
    expiry: "03/2030",
    limit: "₹23,456",
    price: "₹1,550",
    qty: 5,
  },
  {
    id: "pcs-5511",
    type: "mastercard",
    network: "MASTERCARD",
    number: "5511",
    holder: "BRUCE WAYNE",
    expiry: "05/2030",
    limit: "₹33,496",
    price: "₹2,250",
    qty: 3,
  },
  {
    id: "pcs-6021",
    type: "rupay",
    network: "RUPAY",
    number: "6021",
    holder: "LUCAS KANE",
    expiry: "10/2030",
    limit: "₹42,500",
    price: "₹2,950",
    qty: 2,
  },
  {
    id: "pcs-9900",
    type: "visa",
    network: "VISA",
    number: "9900",
    holder: "JAMES BOND",
    expiry: "12/2030",
    limit: "₹56,742",
    price: "₹3,700",
    qty: 1,
  },
  {
    id: "pcs-0077",
    type: "visa",
    network: "VISA",
    number: "0077",
    holder: "DOMINIC TORETTO",
    expiry: "01/2031",
    limit: "₹75,000",
    price: "₹4,500",
    qty: 1,
  },
];

const productGrid = document.querySelector("#productGrid");
const loginScreen = document.querySelector("#loginScreen");
const loginForm = document.querySelector("#loginForm");
const loginName = document.querySelector("#loginName");
const loginTelegram = document.querySelector("#loginTelegram");
const userLabel = document.querySelector("[data-user-label]");
const logoutButton = document.querySelector("[data-logout]");
const checkoutDialog = document.querySelector("#checkoutDialog");
const dialogCard = document.querySelector("#dialogCard");
const checkoutSummary = document.querySelector("#checkoutSummary");
const paymentDone = document.querySelector("#paymentDone");
const paymentScreenshot = document.querySelector("#paymentScreenshot");
const checkoutTelegram = document.querySelector("#checkoutTelegram");
const checkoutMessage = document.querySelector("#checkoutMessage");
const sendReceipt = document.querySelector("#sendReceipt");
const gatewayName = document.querySelector("#gatewayName");
const upiId = document.querySelector("#upiId");
const supportMessage = document.querySelector("#supportMessage");
const ordersDialog = document.querySelector("#ordersDialog");
const ordersList = document.querySelector("#ordersList");
const adminButton = document.querySelector("[data-open-admin]");
const adminLoginDialog = document.querySelector("#adminLoginDialog");
const adminLoginForm = document.querySelector("#adminLoginForm");
const adminPassword = document.querySelector("#adminPassword");
const adminLoginError = document.querySelector("#adminLoginError");
const adminPanelDialog = document.querySelector("#adminPanelDialog");
const adminStats = document.querySelector("#adminStats");
const adminUsers = document.querySelector("#adminUsers");
const adminOrders = document.querySelector("#adminOrders");
const adminLockButton = document.querySelector("[data-admin-lock]");
const authStorageKey = "premiumCardsShopUser";
const usersStorageKey = "premiumCardsShopUsers";
const ordersStorageKey = "premiumCardsShopOrders";
const adminSessionKey = "premiumCardsShopAdminUnlocked";
const adminPasswordHash = "f7f2e286f369bda632f732a7848ae945bb103c47638d83e25afaca90bfcc36d8";
let currentCheckoutProduct = null;

function getSavedUser() {
  try {
    return JSON.parse(localStorage.getItem(authStorageKey));
  } catch (error) {
    return null;
  }
}

function getStoredList(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return Array.isArray(value) ? value : [];
  } catch (error) {
    return [];
  }
}

function saveStoredList(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function normalizeTelegram(value) {
  const username = value.trim().replace(/^@+/, "");
  return `@${username}`;
}

function formatDate(value) {
  return new Date(value).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function recordUser(user) {
  const users = getStoredList(usersStorageKey);
  const telegram = normalizeTelegram(user.telegram);
  const existing = users.find((item) => item.telegram.toLowerCase() === telegram.toLowerCase());
  if (existing) {
    existing.name = user.name;
    existing.telegram = telegram;
    existing.lastLoginAt = new Date().toISOString();
    existing.loginCount = (existing.loginCount || 1) + 1;
  } else {
    users.unshift({
      name: user.name,
      telegram,
      firstLoginAt: user.loggedInAt,
      lastLoginAt: user.loggedInAt,
      loginCount: 1,
    });
  }
  saveStoredList(usersStorageKey, users);
}

function setAuthState(user) {
  const isLoggedIn = Boolean(user?.name && user?.telegram);
  document.body.classList.toggle("auth-locked", !isLoggedIn);
  loginScreen.hidden = isLoggedIn;
  userLabel.hidden = !isLoggedIn;
  logoutButton.hidden = !isLoggedIn;
  if (isLoggedIn) {
    userLabel.textContent = `${user.name} ${user.telegram}`;
  }
}

function requireLogin() {
  const user = getSavedUser();
  if (user?.name && user?.telegram) return true;
  setAuthState(null);
  loginName.focus();
  return false;
}

function getOrders() {
  return getStoredList(ordersStorageKey);
}

function saveOrders(orders) {
  saveStoredList(ordersStorageKey, orders);
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

async function hashText(value) {
  const data = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function cardMarkup(product, isDialog = false) {
  return `
    <div class="chip"></div>
    <div class="card-network">${product.network}</div>
    <div class="card-number">•••• •••• •••• ${product.number}</div>
    <div class="card-row">
      <span><small>Card Holder</small>${product.holder}</span>
      <span><small>Valid Thru</small>${product.expiry}</span>
    </div>
    ${isDialog ? "" : ""}
  `;
}

function productMarkup(product) {
  return `
    <article class="product-card" data-type="${product.type}">
      <div class="status-line">
        <span>Available</span>
        <span>Qty: ${product.qty}</span>
      </div>
      <div class="mini-card">${cardMarkup(product)}</div>
      <div class="product-meta">
        <div><span>Limit</span><strong>${product.limit}</strong></div>
        <div><span>Expiry</span><strong>${product.expiry}</strong></div>
        <div><span>Refund</span><strong>Available</strong></div>
        <div><span>Delivery</span><strong>10 Mins</strong></div>
      </div>
      <div class="price-line">
        <div><span>Entry Fee</span><strong>${product.price}</strong></div>
        <button class="primary-button buy-button" type="button" data-buy="${product.id}">Buy</button>
      </div>
    </article>
  `;
}

function renderProducts(filter = "all") {
  const visibleProducts = filter === "all" ? products : products.filter((product) => product.type === filter);
  productGrid.innerHTML = visibleProducts.map(productMarkup).join("");
}

function openCheckout(product) {
  if (!requireLogin()) return;
  const user = getSavedUser();
  currentCheckoutProduct = product;
  dialogCard.innerHTML = cardMarkup(product, true);
  checkoutSummary.textContent = `${product.network} ending ${product.number} - ${product.price}. Delivery starts after admin verifies your payment receipt.`;
  gatewayName.textContent = STORE_CONFIG.paymentGatewayName;
  upiId.textContent = STORE_CONFIG.upiId;
  supportMessage.textContent = STORE_CONFIG.supportMessage;
  checkoutTelegram.value = user?.telegram || "";
  paymentScreenshot.value = "";
  checkoutMessage.hidden = true;
  sendReceipt.href = STORE_CONFIG.telegramSupportUrl;
  checkoutDialog.showModal();
}

function renderUserOrders() {
  const user = getSavedUser();
  if (!user) {
    ordersList.innerHTML = "<p>No login found.</p>";
    return;
  }
  const userOrders = getOrders().filter(
    (order) => order.telegram.toLowerCase() === user.telegram.toLowerCase(),
  );
  if (!userOrders.length) {
    ordersList.innerHTML = "<p>No orders yet.</p>";
    return;
  }
  ordersList.innerHTML = userOrders
    .map(
      (order) => `
        <div>
          <span>${escapeHtml(order.id)}</span>
          <strong>${escapeHtml(order.productNetwork)} ending ${escapeHtml(order.productNumber)}</strong>
          <small>Status: ${escapeHtml(order.status)} | ${escapeHtml(order.productPrice)} | ${formatDate(order.createdAt)}</small>
        </div>
      `,
    )
    .join("");
}

async function submitPaymentDone() {
  if (!requireLogin() || !currentCheckoutProduct) return;
  const user = getSavedUser();
  const telegram = normalizeTelegram(checkoutTelegram.value);
  const file = paymentScreenshot.files[0];

  if (!telegram || telegram === "@") {
    checkoutMessage.textContent = "Please enter Telegram username.";
    checkoutMessage.hidden = false;
    return;
  }

  if (!file) {
    checkoutMessage.textContent = "Please upload payment screenshot.";
    checkoutMessage.hidden = false;
    return;
  }

  if (!file.type.startsWith("image/")) {
    checkoutMessage.textContent = "Please upload an image screenshot.";
    checkoutMessage.hidden = false;
    return;
  }

  if (file.size > 1800000) {
    checkoutMessage.textContent = "Screenshot is too large. Please upload an image under 1.8 MB.";
    checkoutMessage.hidden = false;
    return;
  }

  const receiptImage = await readFileAsDataUrl(file);
  const order = {
    id: `PCS-${Date.now().toString(36).toUpperCase()}`,
    userName: user.name,
    loginTelegram: user.telegram,
    telegram,
    productId: currentCheckoutProduct.id,
    productNetwork: currentCheckoutProduct.network,
    productNumber: currentCheckoutProduct.number,
    productHolder: currentCheckoutProduct.holder,
    productPrice: currentCheckoutProduct.price,
    productLimit: currentCheckoutProduct.limit,
    receiptName: file.name,
    receiptImage,
    status: "Pending",
    createdAt: new Date().toISOString(),
  };

  try {
    const orders = getOrders();
    orders.unshift(order);
    saveOrders(orders);
    checkoutMessage.textContent = "Please kindly wait for receiving card.";
    checkoutMessage.hidden = false;
    renderUserOrders();
    if (sessionStorage.getItem(adminSessionKey) === "true") renderAdminPanel();
  } catch (error) {
    checkoutMessage.textContent = "Screenshot file is too large. Please upload a smaller image.";
    checkoutMessage.hidden = false;
  }
}

function orderStatusClass(status) {
  if (status === "Approved") return "status-approved";
  if (status === "Rejected") return "status-rejected";
  return "";
}

function renderAdminPanel() {
  const users = getStoredList(usersStorageKey);
  const orders = getOrders();
  const pending = orders.filter((order) => order.status === "Pending").length;

  adminStats.innerHTML = `
    <div class="admin-stat"><span>Total Users</span><strong>${users.length}</strong></div>
    <div class="admin-stat"><span>Total Orders</span><strong>${orders.length}</strong></div>
    <div class="admin-stat"><span>Pending Orders</span><strong>${pending}</strong></div>
  `;

  adminUsers.innerHTML = users.length
    ? users
        .map(
          (user) => `
            <div class="admin-item">
              <strong>${escapeHtml(user.name)}</strong>
              <small>Telegram: ${escapeHtml(user.telegram)}</small>
              <small>First login: ${formatDate(user.firstLoginAt)}</small>
              <small>Last login: ${formatDate(user.lastLoginAt)}</small>
              <small>Total logins: ${escapeHtml(user.loginCount)}</small>
            </div>
          `,
        )
        .join("")
    : "<p>No users yet.</p>";

  adminOrders.innerHTML = orders.length
    ? orders
        .map(
          (order) => `
            <div class="admin-item">
              <div class="admin-item-grid">
                <div>
                  <div class="admin-row-head">
                    <strong>${escapeHtml(order.id)}</strong>
                    <span class="status-badge ${orderStatusClass(order.status)}">${order.status}</span>
                  </div>
                  <div class="admin-meta">
                    <div><span>User</span><strong>${escapeHtml(order.userName)}</strong><small>${escapeHtml(order.telegram)}</small></div>
                    <div><span>Login Telegram</span><strong>${escapeHtml(order.loginTelegram)}</strong></div>
                    <div><span>Card</span><strong>${escapeHtml(order.productNetwork)} ${escapeHtml(order.productNumber)}</strong><small>${escapeHtml(order.productHolder)}</small></div>
                    <div><span>Amount</span><strong>${escapeHtml(order.productPrice)}</strong><small>Limit ${escapeHtml(order.productLimit)}</small></div>
                    <div><span>Receipt File</span><strong>${escapeHtml(order.receiptName)}</strong></div>
                    <div><span>Created</span><strong>${formatDate(order.createdAt)}</strong></div>
                  </div>
                  <div class="admin-actions">
                    <button class="primary-button" type="button" data-order-action="Approved" data-order-id="${escapeHtml(order.id)}">Approve</button>
                    <button class="ghost-button danger-button" type="button" data-order-action="Rejected" data-order-id="${escapeHtml(order.id)}">Reject</button>
                  </div>
                </div>
                <img class="receipt-preview" src="${order.receiptImage}" alt="Payment screenshot for ${escapeHtml(order.id)}" />
              </div>
            </div>
          `,
        )
        .join("")
    : "<p>No orders yet.</p>";
}

function updateOrderStatus(orderId, status) {
  const orders = getOrders();
  const order = orders.find((item) => item.id === orderId);
  if (!order) return;
  order.status = status;
  order.reviewedAt = new Date().toISOString();
  saveOrders(orders);
  renderAdminPanel();
  renderUserOrders();
}

function openAdminPanel() {
  renderAdminPanel();
  adminPanelDialog.showModal();
}

document.addEventListener("click", (event) => {
  const buyButton = event.target.closest("[data-buy]");
  const filterButton = event.target.closest("[data-filter]");
  const ordersButton = event.target.closest("[data-open-orders]");
  const orderAction = event.target.closest("[data-order-action]");

  if (buyButton) {
    const product = products.find((item) => item.id === buyButton.dataset.buy);
    if (product) openCheckout(product);
  }

  if (filterButton) {
    document.querySelectorAll("[data-filter]").forEach((button) => button.classList.remove("active"));
    filterButton.classList.add("active");
    renderProducts(filterButton.dataset.filter);
  }

  if (ordersButton) {
    if (!requireLogin()) return;
    renderUserOrders();
    ordersDialog.showModal();
  }

  if (orderAction && sessionStorage.getItem(adminSessionKey) === "true") {
    updateOrderStatus(orderAction.dataset.orderId, orderAction.dataset.orderAction);
  }
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = {
    name: loginName.value.trim(),
    telegram: normalizeTelegram(loginTelegram.value),
    loggedInAt: new Date().toISOString(),
  };
  localStorage.setItem(authStorageKey, JSON.stringify(user));
  recordUser(user);
  setAuthState(user);
});

paymentDone.addEventListener("click", submitPaymentDone);

logoutButton.addEventListener("click", () => {
  localStorage.removeItem(authStorageKey);
  if (checkoutDialog.open) checkoutDialog.close();
  if (ordersDialog.open) ordersDialog.close();
  setAuthState(null);
});

adminButton.addEventListener("click", () => {
  if (sessionStorage.getItem(adminSessionKey) === "true") {
    openAdminPanel();
    return;
  }
  adminPassword.value = "";
  adminLoginError.hidden = true;
  adminLoginDialog.showModal();
});

adminLoginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const enteredHash = await hashText(adminPassword.value);
  if (enteredHash !== adminPasswordHash) {
    adminLoginError.hidden = false;
    return;
  }
  sessionStorage.setItem(adminSessionKey, "true");
  adminLoginDialog.close();
  openAdminPanel();
});

adminLockButton.addEventListener("click", () => {
  sessionStorage.removeItem(adminSessionKey);
  adminPanelDialog.close();
});

document.querySelectorAll('a[href*="Premium_cards_shop_support"]').forEach((link) => {
  link.href = STORE_CONFIG.telegramSupportUrl;
});

renderProducts();
setAuthState(getSavedUser());
