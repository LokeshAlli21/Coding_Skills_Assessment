
// Function to process orders
function processOrders(products, orders) {
    const restockThreshold = 10;
    for (const order of orders) {
        for (const productId in order) {
            if (products[productId] >= order[productId]) {
                products[productId] -= order[productId];
            } else {
                console.log(`Insufficient stock for product ${productId}`);
                continue; // Skip rest of the checks for this product
            }
            if (products[productId] < restockThreshold) {
                console.log(`Alert: Product ${productId} needs restocking`);
            }
        }
    }
    return products;
}

// Function to restock items
function restockItems(products, restockList) {
    for (const productId in restockList) {
        products[productId] += restockList[productId];
    }
    return products;
}

// Example usage
const products = { 1: 50, 2: 5 };  // {product_id: stock}
const orders = [{ 1: 2 }, { 2: 3 }];

console.log("Processing Orders:");
let updatedStock = processOrders(products, orders);
console.log("Updated Stock:", updatedStock);

console.log("Restocking Items:");
const restockList = { 2: 20 };
updatedStock = restockItems(products, restockList);
console.log("Stock after Restocking:", updatedStock);
