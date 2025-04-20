// Get product ID from URL
const productId = window.location.pathname.split('/').pop();

fetch(`/api/products/${productId}`)
  .then(res => {
    if (!res.ok) throw new Error("Product not found");
    return res.json();
  })
  .then(product => {
    const div = document.getElementById('product');
    div.innerHTML = `
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <strong>Price: ₹${product.price}</strong>
    `;
  })
  .catch(err => {
    document.getElementById('product').innerHTML = `<p style="color:red">${err.message}</p>`;
  });
