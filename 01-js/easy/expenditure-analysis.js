/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  transactions.forEach(transaction => {
    const { category, price } = transaction;

    if (!categoryTotals[category]) {
      categoryTotals[category] = 0;
    }

    categoryTotals[category] += price;
  });

  const result = Object.keys(categoryTotals).map(category => ({
    category,
    totalSpent: categoryTotals[category],
  }));

  return result;
  return [];
}

const transactions=[
  {
    id:1,timestamp:1359856755,price:10,category:'food',itemName:'Pizza'
  },
  {
    id:1,timestamp:1359846755,price:20,category:'food',itemName:'Burger'
  },
  {
    id:1,timestamp:1359856855,price:30,category:'food',itemName:'Coke'
  },
  {
    id:1,timestamp:1359896755,price:40,category:'food',itemName:'Fries'
  }

]

module.exports = calculateTotalSpentByCategory;
