// ex07.js

// get the number of orders placed by a customer id "ANTON"

use training;

var cnt = db.orders.find(
	{
		"customer.customerId": "ANTON"
	}
).count();

print("ANTON has placed " + cnt + " orders");


