
// User class
class User {
    constructor(userId, name, email) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.orders = [];
    }

    createOrder(order) {
        this.orders.push(order);
    }
}

// Product class
class Product {
    constructor(productId, name, price) {
        this.productId = productId;
        this.name = name;
        this.price = price;
    }
}

// Order class
class Order {
    constructor(orderId, user, products, status = 'pending') {
        this.orderId = orderId;
        this.user = user;
        this.products = products;
        this.status = status;
    }
}

// Payment class
class Payment {
    constructor(paymentId, order, amount, status = 'pending') {
        this.paymentId = paymentId;
        this.order = order;
        this.amount = amount;
        this.status = status;
    }
}

// Example usage
const user1 = new User(1, "Alice", "alice@example.com");
const product1 = new Product(1, "Laptop", 1000);
const product2 = new Product(2, "Mouse", 50);

const order1 = new Order(1, user1, [product1, product2]);
const payment1 = new Payment(1, order1, 1050);

user1.createOrder(order1);
console.log(`User ${user1.name} created an order with total amount: ${payment1.amount}`);
