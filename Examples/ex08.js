// ex08.js

// get the orders where there are more than 5 products 

use training;

db.orders.find(
	{
		$where: "this.products.length > 5"
	},
	{
		className: 0,
		employee: 0,
		customer: 0,
		products: 0
	}
).pretty();