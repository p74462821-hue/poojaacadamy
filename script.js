
const products = [
    {
        name: "Notebook",
        price: 50,
        image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500"
    },
    {
        name: "Pen Set",
        price: 100,
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500"
    },
    {
        name: "School Bag",
        price: 499,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    },
    {
        name: "Art Supplies",
        price: 199,
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500"
    }
];

let cart = [];

function displayProducts(items = products) {
    const list = document.getElementById("productList");

    list.innerHTML = "";

    items.forEach((product) => {
        list.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">₹${product.price}</p>
                <button onclick="addToCart('${product.name}')">
                    Add to Cart
                </button>
            </div>
        `;
    });
}

function addToCart(name) {
    const product = products.find(p => p.name === name);

    if (product) {
        cart.push(product);
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "Your cart is empty.";
    } else {
        cartItems.innerHTML = cart.map((item, index) => `
            <p>
                ${item.name} - ₹${item.price}
                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </p>
        `).join("");
    }

    cart.forEach(item => {
        total += item.price;
    });

    document.getElementById("total").innerText =
        "Total: ₹" + total;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function searchProducts() {
    const query = document
        .getElementById("search")
        .value.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query)
    );

    displayProducts(filtered);
}

function goToProducts() {
    document.getElementById("products")
        .scrollIntoView({ behavior: "smooth" });
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Thank you for shopping at Pooja Academy!");

    cart = [];
    updateCart();
}

displayProducts();
