function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function() {
            count++;
            console.log(`Current count: ${count}`);
        },
        decrement: function() {
            count--;
            console.log(`Current count: ${count}`);
        },
        getCount: function() {
            console.log(`Current count: ${count}`);
        }
    };
}

function createBankAccount() {
    let balance = 0; 
    let transactionHistory = []; 

    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                transactionHistory.push({ type: "Deposit", amount });
                console.log(`Deposited: ${amount}`);
            } else {
                console.log("Deposit amount must be positive.");
            }
        },
        withdraw: function(amount) {
            if (amount > balance) {
                console.log("Insufficient balance");
            } else {
                balance -= amount;
                transactionHistory.push({ type: "Withdraw", amount });
                console.log(`Withdrawn: ${amount}`);
            }
        },
        checkBalance: function() {
            console.log(`Current balance: ${balance}`);
        },
        getTransactionHistory: function() {
            console.log("Transaction History:", transactionHistory);
        }
    };
}
