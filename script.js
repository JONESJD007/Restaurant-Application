// Sample restaurant data with proper image URLs
const restaurants = [
    {
        id: 1,
        name: "Pizza Palace",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        rating: 4.5,
        cuisine: "Italian",
        deliveryTime: "25-35 min",
        deliveryFee: "$2.99",
        minOrder: "$10.00",
        fastDelivery: true,
        hasOffers: true,
        isVeg: false,
        menu: [
            {
                category: "Pizzas",
                items: [
                    {
                        id: 101,
                        name: "Margherita Pizza",
                        description: "Classic pizza with tomato sauce, mozzarella, and basil",
                        price: 12.99,
                        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                        options: [
                            { name: "Size", choices: ["Small", "Medium", "Large"], selected: 1 },
                            { name: "Crust", choices: ["Thin", "Regular", "Thick"], selected: 1 }
                        ]
                    },
                    {
                        id: 102,
                        name: "Pepperoni Pizza",
                        description: "Classic pizza with tomato sauce, mozzarella, and pepperoni",
                        price: 14.99,
                        image: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                        options: [
                            { name: "Size", choices: ["Small", "Medium", "Large"], selected: 1 },
                            { name: "Crust", choices: ["Thin", "Regular", "Thick"], selected: 1 }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Burger Barn",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        rating: 4.2,
        cuisine: "American",
        deliveryTime: "20-30 min",
        deliveryFee: "$1.99",
        minOrder: "$5.00",
        fastDelivery: true,
        hasOffers: false,
        isVeg: false,
        menu: [
            {
                category: "Burgers",
                items: [
                    {
                        id: 201,
                        name: "Classic Cheeseburger",
                        description: "Beef patty with cheese, lettuce, tomato, and special sauce",
                        price: 8.99,
                        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                        options: [
                            { name: "Doneness", choices: ["Medium", "Medium Well", "Well Done"], selected: 0 },
                            { name: "Cheese", choices: ["American", "Cheddar", "Swiss"], selected: 0 }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Sushi Express",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        rating: 4.7,
        cuisine: "Japanese",
        deliveryTime: "30-45 min",
        deliveryFee: "$3.99",
        minOrder: "$15.00",
        fastDelivery: false,
        hasOffers: true,
        isVeg: false,
        menu: [
            {
                category: "Sushi Rolls",
                items: [
                    {
                        id: 301,
                        name: "California Roll",
                        description: "Crab, avocado, and cucumber",
                        price: 8.99,
                        image: "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                        options: [
                            { name: "Quantity", choices: ["6 pieces", "12 pieces"], selected: 0 }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Green Leaf",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        rating: 4.3,
        cuisine: "Indian",
        deliveryTime: "35-45 min",
        deliveryFee: "$2.99",
        minOrder: "$12.00",
        fastDelivery: false,
        hasOffers: false,
        isVeg: true,
        menu: [
            {
                category: "Main Course",
                items: [
                    {
                        id: 401,
                        name: "Vegetable Curry",
                        description: "Mixed vegetables in a flavorful curry sauce",
                        price: 10.99,
                        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                        options: [
                            { name: "Spice Level", choices: ["Mild", "Medium", "Spicy"], selected: 1 }
                        ]
                    }
                ]
            }
        ]
    }
];

// Sample orders data
const sampleOrders = [
    {
        id: "FF1001",
        date: "2023-11-15",
        restaurant: "Pizza Palace",
        items: [
            { name: "Margherita Pizza", quantity: 1, price: 12.99 },
            { name: "Garlic Bread", quantity: 2, price: 4.99 }
        ],
        status: "delivered",
        total: 22.97
    },
    {
        id: "FF1002",
        date: "2023-11-10",
        restaurant: "Burger Barn",
        items: [
            { name: "Classic Cheeseburger", quantity: 2, price: 8.99 },
            { name: "French Fries", quantity: 1, price: 3.99 }
        ],
        status: "delivered",
        total: 21.97
    }
];

// Cart state
let cart = [];
let currentRestaurant = null;
let currentPage = "home";

// DOM Elements
const mainContent = document.getElementById('mainContent');
const homePage = document.getElementById('homePage');
const restaurantsPage = document.getElementById('restaurantsPage');
const offersPage = document.getElementById('offersPage');
const ordersPage = document.getElementById('ordersPage');
const restaurantList = document.getElementById('restaurantList');
const restaurantListFull = document.getElementById('restaurantListFull');
const cartItems = document.getElementById('cartItems');
const cartSidebar = document.querySelector('.cart-sidebar');
const cartOverlay = document.querySelector('.cart-overlay');
const cartCount = document.querySelector('.cart-count');
const subtotalEl = document.querySelector('.subtotal');
const totalEl = document.querySelector('.total-amount');
const cartIcon = document.getElementById('cartIcon');
const closeCart = document.querySelector('.close-cart');
const checkoutBtn = document.getElementById('checkoutBtn');
const restaurantModal = document.querySelector('.restaurant-modal');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModal = document.querySelector('.close-modal');
const checkoutModal = document.querySelector('.checkout-modal');
const checkoutOverlay = document.querySelector('.checkout-overlay');
const closeCheckout = document.querySelector('.close-checkout');
const confirmationModal = document.querySelector('.confirmation-modal');
const confirmationOverlay = document.querySelector('.confirmation-overlay');
const checkoutItems = document.getElementById('checkoutItems');
const checkoutSubtotal = document.querySelector('.checkout-subtotal');
const checkoutTotal = document.querySelector('.checkout-total');
const confirmOrderBtn = document.getElementById('confirmOrderBtn');
const continueShopping = document.querySelector('.continue-shopping');
const orderIdEl = document.getElementById('orderId');
const deliveryTimeEl = document.getElementById('deliveryTime');
const navLinks = document.querySelectorAll('.nav-link');
const filterBtns = document.querySelectorAll('.filter-btn');
const categoryCards = document.querySelectorAll('.category-card');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const restaurantSearch = document.getElementById('restaurantSearch');
const cuisineFilter = document.getElementById('cuisineFilter');
const orderFilterBtns = document.querySelectorAll('.order-filter-btn');
const browseBtn = document.querySelector('.browse-btn');
const paymentSelect = document.getElementById('payment');
const cardDetails = document.getElementById('cardDetails');

// Initialize the app
function init() {
    renderRestaurants();
    renderAllRestaurants();
    setupEventListeners();
    updateCartCount();
    showPage(currentPage);
}

// Show specific page
function showPage(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => {
        p.style.display = 'none';
    });
    
    // Show selected page
    document.getElementById(`${page}Page`).style.display = 'block';
    
    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) {
            link.classList.add('active');
        }
    });
    
    currentPage = page;
}

// Render restaurant list for home page
function renderRestaurants(filter = 'all') {
    restaurantList.innerHTML = '';
    
    let filteredRestaurants = restaurants;
    
    // Apply filters
    switch(filter) {
        case 'fast':
            filteredRestaurants = restaurants.filter(r => r.fastDelivery);
            break;
        case 'rating':
            filteredRestaurants = restaurants.filter(r => r.rating >= 4);
            break;
        case 'veg':
            filteredRestaurants = restaurants.filter(r => r.isVeg);
            break;
        case 'offers':
            filteredRestaurants = restaurants.filter(r => r.hasOffers);
            break;
    }
    
    filteredRestaurants.forEach(restaurant => {
        const restaurantCard = document.createElement('div');
        restaurantCard.className = 'restaurant-card';
        restaurantCard.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-img">
            <div class="restaurant-info">
                <h3 class="restaurant-name">${restaurant.name}</h3>
                <div class="restaurant-rating">
                    <span class="restaurant-rating">${restaurant.rating}</span>
                    <i class="fas fa-star"></i>
                </div>
                <p class="restaurant-cuisine">${restaurant.cuisine}</p>
                <p class="restaurant-delivery">
                    <i class="fas fa-clock"></i>
                    ${restaurant.deliveryTime} • ${restaurant.deliveryFee} delivery
                </p>
            </div>
        `;
        
        restaurantCard.addEventListener('click', () => openRestaurantModal(restaurant));
        restaurantList.appendChild(restaurantCard);
    });
}

// Render all restaurants for restaurants page
function renderAllRestaurants(search = '', cuisine = 'all') {
    restaurantListFull.innerHTML = '';
    
    let filteredRestaurants = restaurants;
    
    // Apply search filter
    if (search) {
        const searchTerm = search.toLowerCase();
        filteredRestaurants = filteredRestaurants.filter(r => 
            r.name.toLowerCase().includes(searchTerm) || 
            r.cuisine.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply cuisine filter
    if (cuisine !== 'all') {
        filteredRestaurants = filteredRestaurants.filter(r => 
            r.cuisine.toLowerCase() === cuisine.toLowerCase()
        );
    }
    
    if (filteredRestaurants.length === 0) {
        restaurantListFull.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>No restaurants found</p>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }
    
    filteredRestaurants.forEach(restaurant => {
        const restaurantCard = document.createElement('div');
        restaurantCard.className = 'restaurant-card';
        restaurantCard.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-img">
            <div class="restaurant-info">
                <h3 class="restaurant-name">${restaurant.name}</h3>
                <div class="restaurant-rating">
                    <span class="restaurant-rating">${restaurant.rating}</span>
                    <i class="fas fa-star"></i>
                </div>
                <p class="restaurant-cuisine">${restaurant.cuisine}</p>
                <p class="restaurant-delivery">
                    <i class="fas fa-clock"></i>
                    ${restaurant.deliveryTime} • ${restaurant.deliveryFee} delivery
                </p>
            </div>
        `;
        
        restaurantCard.addEventListener('click', () => openRestaurantModal(restaurant));
        restaurantListFull.appendChild(restaurantCard);
    });
}

// Render orders
function renderOrders(status = 'all') {
    const ordersList = document.getElementById('ordersList');
    
    let filteredOrders = sampleOrders;
    
    // Apply status filter
    if (status !== 'all') {
        filteredOrders = sampleOrders.filter(order => order.status === status);
    }
    
    if (filteredOrders.length === 0) {
        ordersList.innerHTML = `
            <div class="no-orders">
                <i class="fas fa-box-open"></i>
                <p>No orders found</p>
                <button class="browse-btn">Browse Restaurants</button>
            </div>
        `;
        
        // Add event listener to browse button
        const browseBtn = document.querySelector('.no-orders .browse-btn');
        if (browseBtn) {
            browseBtn.addEventListener('click', () => {
                showPage('restaurants');
            });
        }
        
        return;
    }
    
    ordersList.innerHTML = '';
    
    filteredOrders.forEach(order => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        
        // Format date
        const formattedDate = new Date(order.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Get status class
        let statusClass = '';
        if (order.status === 'delivered') {
            statusClass = 'status-delivered';
        } else if (order.status === 'processing') {
            statusClass = 'status-processing';
        } else if (order.status === 'cancelled') {
            statusClass = 'status-cancelled';
        }
        
        orderItem.innerHTML = `
            <div class="order-info">
                <p class="order-id">Order #${order.id}</p>
                <p class="order-date">${formattedDate} • ${order.restaurant}</p>
                <div class="order-items">
                    ${order.items.map(item => `
                        <p>${item.name} × ${item.quantity}</p>
                    `).join('')}
                </div>
                <span class="order-status ${statusClass}">${order.status}</span>
            </div>
            <div class="order-total">$${order.total.toFixed(2)}</div>
        `;
        
        ordersList.appendChild(orderItem);
    });
}

// Open restaurant modal
function openRestaurantModal(restaurant) {
    currentRestaurant = restaurant;
    
    // Set restaurant info
    document.querySelector('.modal-restaurant-img').src = restaurant.image;
    document.querySelector('.modal-restaurant-name').textContent = restaurant.name;
    document.querySelector('.modal-restaurant-rating').textContent = restaurant.rating;
    document.querySelector('.modal-restaurant-cuisine').textContent = restaurant.cuisine;
    document.querySelector('.modal-restaurant-delivery').innerHTML = `
        <i class="fas fa-clock"></i> ${restaurant.deliveryTime} • 
        <i class="fas fa-truck"></i> ${restaurant.deliveryFee} delivery • 
        <i class="fas fa-dollar-sign"></i> Min order: ${restaurant.minOrder}
    `;
    
    // Render menu categories
    const menuCategories = document.querySelector('.menu-categories');
    menuCategories.innerHTML = '';
    
    restaurant.menu.forEach((category, index) => {
        const categoryTab = document.createElement('div');
        categoryTab.className = `category-tab ${index === 0 ? 'active' : ''}`;
        categoryTab.textContent = category.category;
        categoryTab.addEventListener('click', () => {
            document.querySelectorAll('.category-tab').forEach(tab => tab.classList.remove('active'));
            categoryTab.classList.add('active');
            renderMenuItems(category.items);
        });
        menuCategories.appendChild(categoryTab);
    });
    
    // Render first category items by default
    if (restaurant.menu.length > 0) {
        renderMenuItems(restaurant.menu[0].items);
    }
    
    // Show modal
    restaurantModal.classList.add('active');
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Render menu items
function renderMenuItems(items) {
    const menuItems = document.querySelector('.menu-items');
    menuItems.innerHTML = '';
    
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item-img">
            <div class="menu-item-details">
                <h4 class="menu-item-name">${item.name}</h4>
                <p class="menu-item-price">$${item.price.toFixed(2)}</p>
                <p class="menu-item-desc">${item.description}</p>
                ${item.options ? renderOptions(item.options) : ''}
                <div class="menu-item-controls">
                    <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
                </div>
            </div>
        `;
        
        menuItems.appendChild(menuItem);
    });
    
    // Add event listeners to add-to-cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = parseInt(e.target.getAttribute('data-id'));
            const item = findMenuItem(itemId);
            if (item) {
                addToCart(item);
            }
        });
    });
}

// Render options for menu items
function renderOptions(options) {
    let html = '';
    options.forEach(option => {
        html += `
            <div class="menu-option">
                <p>${option.name}: ${option.choices[option.selected]}</p>
            </div>
        `;
    });
    return html;
}

// Find menu item by ID
function findMenuItem(id) {
    if (!currentRestaurant) return null;
    
    for (const category of currentRestaurant.menu) {
        const item = category.items.find(item => item.id === id);
        if (item) return item;
    }
    return null;
}

// Add item to cart
function addToCart(item) {
    // Check if item already exists in cart
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1,
            restaurantId: currentRestaurant.id,
            restaurantName: currentRestaurant.name
        });
    }
    
    updateCartCount();
    renderCartItems();
    showCart();
    
    // Show added to cart animation
    const addButton = document.querySelector(`.add-to-cart[data-id="${item.id}"]`);
    if (addButton) {
        addButton.textContent = 'Added!';
        addButton.style.backgroundColor = '#4CAF50';
        setTimeout(() => {
            addButton.textContent = 'Add to Cart';
            addButton.style.backgroundColor = '#ff6b6b';
        }, 1000);
    }
}

// Render cart items
function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-basket"></i>
                <p>Your cart is empty</p>
                <p>Add items to get started</p>
            </div>
        `;
        subtotalEl.textContent = '$0.00';
        totalEl.textContent = '$2.99';
        checkoutBtn.disabled = true;
        return;
    }
    
    checkoutBtn.disabled = false;
    
    cartItems.innerHTML = '';
    let subtotal = 0;
    
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <p class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                <p class="cart-item-options">${item.restaurantName}</p>
                <div class="cart-item-controls">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    <span class="remove-item" data-id="${item.id}">Remove</span>
                </div>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    // Add event listeners to quantity buttons
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = parseInt(e.target.getAttribute('data-id'));
            decreaseQuantity(itemId);
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = parseInt(e.target.getAttribute('data-id'));
            increaseQuantity(itemId);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(itemId);
        });
    });
    
    // Update totals
    const deliveryFee = 2.99;
    const total = subtotal + deliveryFee;
    
    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    totalEl.textContent = `$${total.toFixed(2)}`;
}

// Update cart count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Increase item quantity
function increaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += 1;
        updateCartCount();
        renderCartItems();
    }
}

// Decrease item quantity
function decreaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            removeFromCart(id);
            return;
        }
        updateCartCount();
        renderCartItems();
    }
}

// Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartCount();
    renderCartItems();
}

// Show cart sidebar
function showCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Hide cart sidebar
function hideCart() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Open checkout modal
function openCheckout() {
    if (cart.length === 0) return;
    
    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('payment').value = '';
    cardDetails.style.display = 'none';
    
    // Clear error messages
    document.querySelectorAll('.error-message').forEach(el => {
        el.style.display = 'none';
    });
    
    // Render checkout items
    checkoutItems.innerHTML = '';
    let subtotal = 0;
    
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        
        const checkoutItem = document.createElement('div');
        checkoutItem.className = 'checkout-item';
        checkoutItem.innerHTML = `
            <span>${item.name} × ${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        checkoutItems.appendChild(checkoutItem);
    });
    
    // Update totals
    const deliveryFee = 2.99;
    const total = subtotal + deliveryFee;
    
    checkoutSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    checkoutTotal.textContent = `$${total.toFixed(2)}`;
    
    // Show modal
    checkoutModal.classList.add('active');
    checkoutOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    hideCart();
}

// Validate checkout form
function validateCheckoutForm() {
    let isValid = true;
    
    // Validate required fields
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const paymentMethod = document.getElementById('payment').value;
    
    if (!name) {
        document.querySelector('#name + .error-message').style.display = 'block';
        isValid = false;
    }
    
    if (!address) {
        document.querySelector('#address + .error-message').style.display = 'block';
        isValid = false;
    }
    
    if (!phone) {
        document.querySelector('#phone + .error-message').style.display = 'block';
        isValid = false;
    }
    
    if (!paymentMethod) {
        document.querySelector('#payment + .error-message').style.display = 'block';
        isValid = false;
    }
    
    // Validate card details if payment method is card
    if (paymentMethod === 'card') {
        const cardNumber = document.getElementById('cardNumber').value.trim();
        const expiry = document.getElementById('expiry').value.trim();
        const cvv = document.getElementById('cvv').value.trim();
        
        if (!cardNumber) {
            document.querySelector('#cardNumber + .error-message').style.display = 'block';
            isValid = false;
        } else if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, ''))) {
            document.querySelector('#cardNumber + .error-message').textContent = 'Please enter a valid 16-digit card number';
            document.querySelector('#cardNumber + .error-message').style.display = 'block';
            isValid = false;
        }
        
        if (!expiry) {
            document.querySelector('#expiry + .error-message').style.display = 'block';
            isValid = false;
        }
        
        if (!cvv) {
            document.querySelector('#cvv + .error-message').style.display = 'block';
            isValid = false;
        } else if (!/^\d{3,4}$/.test(cvv)) {
            document.querySelector('#cvv + .error-message').textContent = 'Please enter a valid CVV';
            document.querySelector('#cvv + .error-message').style.display = 'block';
            isValid = false;
        }
    }
    
    return isValid;
}

// Place order
function placeOrder() {
    if (!validateCheckoutForm()) return;
    
    // Generate random order ID and delivery time
    const orderId = 'FF' + Math.floor(1000 + Math.random() * 9000);
    const deliveryTime = Math.floor(Math.random() * 30) + 20;
    
    // Show confirmation
    orderIdEl.textContent = orderId;
    deliveryTimeEl.textContent = `${deliveryTime} minutes`;
    
    // Hide checkout modal and show confirmation
    checkoutModal.classList.remove('active');
    checkoutOverlay.classList.remove('active');
    confirmationModal.classList.add('active');
    confirmationOverlay.classList.add('active');
    
    // Create new order
    const newOrder = {
        id: orderId,
        date: new Date().toISOString().split('T')[0],
        restaurant: cart.length > 0 ? cart[0].restaurantName : 'Multiple Restaurants',
        items: cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price
        })),
        status: 'processing',
        total: parseFloat(checkoutTotal.textContent.replace('$', ''))
    };
    
    // Add to orders history
    sampleOrders.unshift(newOrder);
    
    // Clear cart
    cart = [];
    updateCartCount();
    renderCartItems();
}

// Continue shopping
function continueToShop() {
    confirmationModal.classList.remove('active');
    confirmationOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    showPage('home');
}

// Setup event listeners
function setupEventListeners() {
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            showPage(page);
            
            // Load specific content for pages
            if (page === 'orders') {
                renderOrders();
            }
        });
    });
    
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderRestaurants(btn.dataset.filter);
        });
    });
    
    // Category cards
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            showPage('restaurants');
            cuisineFilter.value = category;
            renderAllRestaurants('', category);
        });
    });
    
    // Search functionality
    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            showPage('restaurants');
            restaurantSearch.value = searchTerm;
            renderAllRestaurants(searchTerm, cuisineFilter.value);
        }
    });
    
    // Restaurant search
    restaurantSearch.addEventListener('input', (e) => {
        renderAllRestaurants(e.target.value, cuisineFilter.value);
    });
    
    // Cuisine filter
    cuisineFilter.addEventListener('change', (e) => {
        renderAllRestaurants(restaurantSearch.value, e.target.value);
    });
    
    // Order filter buttons
    orderFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            orderFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderOrders(btn.dataset.status);
        });
    });
    
    // Browse restaurants button
    if (browseBtn) {
        browseBtn.addEventListener('click', () => {
            showPage('restaurants');
        });
    }
    
    // Cart icon click
    cartIcon.addEventListener('click', showCart);
    
    // Close cart
    closeCart.addEventListener('click', hideCart);
    cartOverlay.addEventListener('click', hideCart);
    
    // Checkout button
    checkoutBtn.addEventListener('click', openCheckout);
    
    // Close modal
    closeModal.addEventListener('click', () => {
        restaurantModal.classList.remove('active');
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    modalOverlay.addEventListener('click', () => {
        restaurantModal.classList.remove('active');
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close checkout
    closeCheckout.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
        checkoutOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    checkoutOverlay.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
        checkoutOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Payment method change
    paymentSelect.addEventListener('change', (e) => {
        if (e.target.value === 'card') {
            cardDetails.style.display = 'block';
        } else {
            cardDetails.style.display = 'none';
        }
    });
    
    // Confirm order button
    confirmOrderBtn.addEventListener('click', placeOrder);
    
    // Continue shopping
    continueShopping.addEventListener('click', continueToShop);
    
    // Find food button
    document.getElementById('findFoodBtn').addEventListener('click', () => {
        const location = document.getElementById('locationInput').value.trim();
        if (location) {
            alert(`Finding food near: ${location}`);
            // In a real app, you would use this location to filter restaurants
        }
    });
    
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
        renderCartItems();
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', init);