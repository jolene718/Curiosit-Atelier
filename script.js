const STORAGE_KEYS = {
  accounts: "ca.accounts",
  currentUser: "ca.currentUser",
  products: "ca.products",
};

document.addEventListener("DOMContentLoaded", () => {
  initializeRegistrationForm();
  initializeLoginForm();
  initializeProductForm();
  renderSellerProducts();
  renderOrderSummary();
  enforceLoginState();
});

function initializeRegistrationForm() {
  const form = document.getElementById("registerForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!/^[A-Za-z0-9_]{4,20}$/.test(username)) {
      alert("Username must be 4-20 characters and use only letters, numbers, or underscores.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const accounts = readStorage(STORAGE_KEYS.accounts, []);
    const alreadyExists = accounts.some(
      (account) => account.username === username || account.email === email,
    );

    if (alreadyExists) {
      alert("This username or email is already registered.");
      return;
    }

    const account = {
      username,
      email,
      createdAt: new Date().toISOString(),
    };

    accounts.push(account);
    writeStorage(STORAGE_KEYS.accounts, accounts);
    writeStorage(STORAGE_KEYS.currentUser, account);

    alert("Demo account created. You are now signed in.");
    window.location.href = "home.html";
  });
}

function initializeLoginForm() {
  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (password.length < 6) {
      alert("Please enter the same demo password length you used during registration.");
      return;
    }

    const accounts = readStorage(STORAGE_KEYS.accounts, []);
    const account = accounts.find((item) => item.username === username);

    if (!account) {
      alert("Account not found. Please register first.");
      return;
    }

    writeStorage(STORAGE_KEYS.currentUser, account);
    alert(`Welcome back, ${account.username}.`);
    window.location.href = "home.html";
  });
}

function initializeProductForm() {
  const form = document.getElementById("productForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const currentUser = readStorage(STORAGE_KEYS.currentUser, null);
    if (!currentUser) {
      alert("Please sign in before adding a product.");
      window.location.href = "login.html";
      return;
    }

    const productImageInput = document.getElementById("productImage");
    const productImageFile = productImageInput.files[0];

    if (!productImageFile) {
      alert("Please upload a product image.");
      return;
    }

    const draftProduct = {
      sellerName: document.getElementById("sellerName").value.trim(),
      sellerEmail: document.getElementById("sellerEmail").value.trim().toLowerCase(),
      brandName: document.getElementById("brandName").value.trim(),
      gender: document.getElementById("gender").value,
      category: document.getElementById("category").value.trim(),
      condition: document.getElementById("condition").value,
      color: document.getElementById("colour").value.trim(),
      size: document.getElementById("size").value.trim(),
      location: document.getElementById("location").value.trim(),
      price: Number(document.getElementById("price").value),
      description: document.getElementById("description").value.trim(),
      createdBy: currentUser.username,
      createdAt: new Date().toISOString(),
    };

    if (!draftProduct.sellerName || !draftProduct.brandName || !draftProduct.category) {
      alert("Please complete the required seller and product fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draftProduct.sellerEmail)) {
      alert("Please enter a valid public contact email.");
      return;
    }

    if (draftProduct.price <= 0) {
      alert("Price must be greater than 0.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const products = readStorage(STORAGE_KEYS.products, []);
      products.push({
        ...draftProduct,
        image: reader.result,
      });
      writeStorage(STORAGE_KEYS.products, products);

      alert("Product added to the local demo catalogue.");
      form.reset();
      window.location.href = "brands.html";
    };
    reader.readAsDataURL(productImageFile);
  });
}

function renderSellerProducts() {
  const brandList = document.getElementById("brandList");
  if (!brandList) return;

  const products = readStorage(STORAGE_KEYS.products, []);

  if (products.length === 0) {
    brandList.innerHTML = `
      <article class="product-item empty-state">
        <h3>No seller listings yet</h3>
        <p>Create one from the Add Product page to see it rendered here.</p>
      </article>
    `;
    return;
  }

  brandList.innerHTML = products
    .map(
      (entry) => `
        <article class="product-item">
          <img src="${entry.image}" alt="${escapeHtml(entry.brandName)} ${escapeHtml(entry.category)}">
          <div class="product-copy">
            <h3>${escapeHtml(entry.brandName)}</h3>
            <p><strong>Category:</strong> ${escapeHtml(entry.category)}</p>
            <p><strong>Condition:</strong> ${escapeHtml(entry.condition)}</p>
            <p><strong>Color:</strong> ${escapeHtml(entry.color)}</p>
            <p><strong>Size:</strong> ${escapeHtml(entry.size)}</p>
            <p><strong>Location:</strong> ${escapeHtml(entry.location)}</p>
            <p><strong>Price:</strong> $${entry.price.toFixed(2)}</p>
            <p><strong>Seller:</strong> ${escapeHtml(entry.sellerName)}</p>
            <p><strong>Public contact:</strong> ${escapeHtml(entry.sellerEmail)}</p>
            <p>${escapeHtml(entry.description || "No extra description provided.")}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderOrderSummary() {
  const target = document.getElementById("orderSummary");
  if (!target) return;

  const currentUser = readStorage(STORAGE_KEYS.currentUser, null);
  const products = readStorage(STORAGE_KEYS.products, []);

  target.innerHTML = `
    <div class="order-item">
      <p><strong>Demo account:</strong> ${currentUser ? escapeHtml(currentUser.username) : "Guest"}</p>
      <p><strong>Local listings created:</strong> ${products.length}</p>
      <p>This page now explains the project state instead of exposing fake order IDs as real data.</p>
    </div>
  `;
}

function enforceLoginState() {
  const loginModal = document.getElementById("loginModal");
  if (!loginModal) return;

  const currentUser = readStorage(STORAGE_KEYS.currentUser, null);
  loginModal.style.display = currentUser ? "none" : "flex";
}

function redirectToLogin() {
  window.location.href = "login.html";
}

function logout() {
  localStorage.removeItem(STORAGE_KEYS.currentUser);
  window.location.href = "login.html";
}

function readStorage(key, fallbackValue) {
  try {
    const rawValue = localStorage.getItem(key);
    return rawValue ? JSON.parse(rawValue) : fallbackValue;
  } catch (error) {
    console.error(`Failed to read ${key} from localStorage.`, error);
    return fallbackValue;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
