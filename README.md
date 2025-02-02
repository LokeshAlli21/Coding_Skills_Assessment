
# Coding Skills Assessment Solution

## Overview
This solution contains code for an e-commerce system design, business logic implementation for inventory management, and SQL queries for a bookstore database.

### Part 1: System Design
- The code defines classes for `User`, `Product`, `Order`, and `Payment` with relationships modeled appropriately.
- You can run `system_design.js` in a Node.js environment to see how these classes interact.

### Part 2: Business Logic Implementation
- The `processOrders()` function handles order processing and triggers restock alerts if the stock falls below a certain threshold.
- The `restockItems()` function updates stock levels for products that need restocking.
- You can run `business_logic.js` in a Node.js environment to test the inventory management system.

### Part 3: SQL Queries
- The `queries.sql` file contains three SQL queries to retrieve customer data, calculate total revenue by authors, and find books ordered more than 10 times.

## How to Run
1. Ensure Node.js is installed on your machine.
2. Run the system design code: `node system_design.js`
3. Run the business logic code: `node business_logic.js`
4. Review the SQL queries in `queries.sql` and run them in your SQL environment.