const monthlyExpenses = [ 201.43, 189.22, 132.09,  238.85, 195.41 ]
let totalExpense = 0

for (const cost of monthlyExpenses) {
        totalExpense += cost
	// Add the current monthly cost to the value of totalExpense
}

// Calculate your average monthly food costs
const averageExpense = totalExpense / monthlyExpenses.length

// Make sure you use backticks for multi-line string output
console.log(`On average, I spend ${averageExpense} dollars on groceries per month. So far this year, I spent ${totalExpense} on groceries.`)
