const products = [
  { id: 1, name: "Shoes", price: 999 },
  { id: 2, name: "Watch", price: 1499 }
];

function viewProduct(id) {
  localStorage.setItem("productId", id);
  window.location.href = "product.html";
}

function addToCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const id = localStorage.getItem("productId");
  const product = products.find(p => p.id == id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart");
}

if (document.getElementById("name")) {
  const id = localStorage.getItem("productId");
  const product = products.find(p => p.id == id);
  document.getElementById("name").innerText = product.name;
  document.getElementById("price").innerText = "₹" + product.price;
}

if (document.getElementById("cartItems")) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  cart.forEach(p => {
    document.getElementById("cartItems").innerHTML += <p>${p.name} - ₹${p.price}</p>;
    total += p.price;
  });
  document.getElementById("total").innerText = "Total: ₹" + total;
}

if (document.getElementById("cartCount")) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cartCount").innerText = cart.length;
}