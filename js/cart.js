function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ''; 

    let totalPrice = 0;

    for (const product in cart) {
        const item = cart[product];
        const itemTotal = item.price * item.quantity; // Считаем сумму для каждого продукта

        const itemElement = document.createElement('tr');
        itemElement.innerHTML = `
            <td>${item.name}</td>
            <td>
                <button class="cart-button" onclick="updateQuantity('${item.name}', -1)">-</button>
                ${item.quantity}
                <button class="cart-button" onclick="updateQuantity('${item.name}', 1)">+</button>
            </td>
            <td>${item.price} рублей</td>
            <td>${itemTotal} рублей</td>
        `;
        cartContainer.appendChild(itemElement);
        totalPrice += itemTotal; 
    }

    const totalElement = document.getElementById('total-price');
    totalElement.innerText = `Общая сумма: ${totalPrice} рублей`;
}


function updateQuantity(productName, change) {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    if (cart[productName]) {
        cart[productName].quantity += change;
        if (cart[productName].quantity <= 0) {
            delete cart[productName]; // Удаляем товар, если количество <= 0
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart(); 
    }
}


function clearCart() {
    localStorage.removeItem('cart');
    displayCart(); 
}


function placeOrder() {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    if (Object.keys(cart).length === 0) {
        alert('Корзина пуста!'); 
        return;
    }
    localStorage.removeItem('cart'); 
    alert('Заказ оформлен успешно!'); 
    displayCart(); 
}


function initCart() {
    displayCart();
}


window.onload = initCart;
