const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    user.transactions.push(transaction)
    if (transaction.type == 'credit') {
        user.balance += transaction.value
    } else {
        user.balance -= transaction.value
    }

}

function getHigherTransactionByType(type) {
    let higher = 0
    let higherObj = 0
    for (let transactionType of user.transactions) {
        if (transactionType.type == type) {
            if (transactionType.value > higher ) {
                higher = transactionType.value
                higherObj = transactionType
            }
        }
    }
    return higherObj
}

function getAverageTransactionValue(user) {
    let sum = 0
    for (let i = 0; i < user.transactions.length; i++) {
     sum += user.transactions[i].value
    }
    return sum / user.transactions.length
}

function getTransactionsCount(user) {
    let countdebit = 0
    let countcredit = 0
    let obj = 0
    for (let i of user.transactions) {
        if (i.type == 'credit') {
            countcredit += 1
        } else {
            countdebit += 1
        }
    }
    obj = {'credit': countcredit, 'debit': countdebit}
    return obj    

    
}


createTransaction({ type: 'credit', value: 50})
createTransaction({ type: 'credit', value: 120})
createTransaction({ type: 'debit', value: 80})
createTransaction({ type: 'debit', value: 30})
createTransaction({ type: 'debit', value: 30})




// higherNumberCredit = getHigherTransactionByType('credit')
higherNumberDebit = getHigherTransactionByType('credit')
// console.log(higherNumberCredit)
console.log(higherNumberDebit)


mean = getAverageTransactionValue(user)
console.log(mean)

count = getTransactionsCount(user)
console.log(count)