function addToCart(productName, productPrice) {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    
    if (cart[productName]) {
        cart[productName].quantity += 1; 
    } else {
        cart[productName] = { name: productName, quantity: 1, price: productPrice }; 
    }
    
    localStorage.setItem('cart', JSON.stringify(cart)); 
    updateCartCount();
}
