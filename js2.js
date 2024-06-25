let isLoggedIn = false; 

function addItemToCart(item) {
    if (isLoggedIn) {
        console.log(`${item} added to cart.`);
    } else {
        console.log("Please log in to add items to your cart.");
    }
}


addItemToCart("Product A");

let products = ["Product A", "Product B", "Product C"];

function displayProducts() {
    console.log("Available products:");
    for (let i = 0; i < products.length; i++) {
        console.log(`${i + 1}. ${products[i]}`);
    }
}


function addItemToCart(itemIndex) {
    if (isLoggedIn) {
        if (itemIndex >= 1 && itemIndex <= products.length) {
            console.log(`${products[itemIndex - 1]} added to cart.`);
        } else {
            console.log("Invalid product selection.");
        }
    } else {
        console.log("Please log in to add items to your cart.");
    }
}


displayProducts();
addItemToCart(2);  
let cart = [10.99, 5.99, 7.49]; 


function calculateTotalCost() {
    let total = 0;
    for (let price of cart) {
        total += price;
    }
    return total.toFixed(2); 
}


let totalCost = calculateTotalCost();
console.log(`Total cost: $${totalCost}`);
let accountBalance = 1000;  

function deposit(amount) {
    accountBalance += amount;
    console.log(`Deposited $${amount}. New balance is $${accountBalance}.`);
}


deposit(500); 
function withdraw(amount) {
    if (amount > accountBalance) {
        console.log("Insufficient funds.");
    } else {
        accountBalance -= amount;
        console.log(`Withdrawn $${amount}. New balance is $${accountBalance}.`);
    }
}


withdraw(200);  
function checkBalance() {
    console.log(`Current balance: $${accountBalance}`);
}


checkBalance();  
