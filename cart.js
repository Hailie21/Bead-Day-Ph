document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updateCart = () => {
        const cartItemsElement = document.getElementById('cart-items');
        cartItemsElement.innerHTML = '';
        let totalAmount = 0; // Initialize total amount
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price} pesos`;
            cartItemsElement.appendChild(li);
            totalAmount += item.price; // Add item price to total amount
        });
        document.getElementById('total-amount').textContent = `Total: ${totalAmount} pesos`;
    };

    document.getElementById('checkout-button').addEventListener('click', () => {
        document.getElementById('checkout-form').style.display = 'block';
    });

    document.getElementById('customer-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        alert(`Order placed successfully!\nName: ${name}\nAddress: ${address}`);

        localStorage.removeItem('cart');
        cart.length = 0; // Clear the cart array
        updateCart();
        document.getElementById('checkout-form').style.display = 'none';
    });

    updateCart();
});
