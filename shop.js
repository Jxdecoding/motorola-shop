// motorola-shop client-side cart logic
// Demo for Motorola CMSO Agentic AI training.

let cartCount = 0;

function addToCart() {
  cartCount += 1;
  document.getElementById("cart-count").textContent = cartCount;
  const status = document.getElementById("cart-status");
  if (status) {
    status.textContent = "Added! Cart has " + cartCount + " item(s).";
  }
}

// BUG: wrong button id. The HTML uses id="add-to-cart-btn" but this line
// queries "add-cart". getElementById returns null, addEventListener throws,
// and the button does nothing. Fix: change "add-cart" to "add-to-cart-btn".
document.getElementById("add-to-cart-btn").addEventListener("click", addToCart);
