document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Cherry Bracelet', price: 60 },
        { id: 2, name: 'Pearl Bracelet', price: 50 },
        { id: 3, name: 'Coquette Choker', price: 80 },
        { id: 4, name: 'Butterfly Necklace', price: 95 },
        { id: 5, name: 'Heart Bracelet', price: 50 },
        { id: 6, name: 'Taylor Version Phone Holder', price: 90 },
        { id: 7, name: 'Styles Phone Holder', price: 90 },
        { id: 8, name: '8ball Bracelet', price: 80 },
        { id: 9, name: 'Coquette Bracelet', price: 60 },
        { id: 10, name: 'Lover Bracelet', price: 50 },
        { id: 11, name: 'SG Bracelet', price: 60 },
        { id: 12, name: 'SZA Bracelet', price: 60 },
        { id: 13, name: 'B&R Bracelet', price: 50 },
        { id: 14, name: 'Tyler Bracelet', price: 70 },
        { id: 15, name: 'Stusy Bracelet', price: 90 },
        { id: 16, name: 'Smiley Necklace', price: 120 },
        { id: 17, name: 'Tyler Necklace', price: 120 },
        { id: 18, name: 'Star Chocker', price: 100 },
        { id: 19, name: 'Star Pearl Chocker', price: 120 },
        { id: 20, name: 'Limited Edition Bead Day Necklace', price: 180 }
        
    ];

    // Add to cart functionality
    document.querySelectorAll('.btn-add').forEach(button => {
        button.addEventListener('click', () => {
            const productId = parseInt(button.getAttribute('data-product-id'));
            const product = products.find(p => p.id === productId);
            if (product) {
                addToCart(product);
                alert(`${product.name} has been added to your cart!`);
            }
        });
    });

    // Add to cart in localStorage
    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    };
});
