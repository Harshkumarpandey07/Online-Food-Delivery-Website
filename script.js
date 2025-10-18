let cart = [];
let total = 0;

function addToCart(itemName, price) {
  cart.push({ itemName, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-list");
  const totalEl = document.getElementById("total");
  cartList.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.itemName} - ₹${item.price}`;
    cartList.appendChild(li);
  });
  totalEl.textContent = total;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thank you for your order! Your food is on the way 🚗💨");
  cart = [];
  total = 0;
  updateCart();
}
