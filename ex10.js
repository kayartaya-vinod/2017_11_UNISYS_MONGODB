// mongo < ex10.js
use training;
db.auth("rama", "rama123");

var where_clause = {
		$match: { quarter: { $in: [1, 2]} }
	};
var group_by_clause = {
		$group : {
			_id: "$category",
			sales_count: { $sum: 1 }, 
			total_sales: { $sum: "$sales"}, 
			max_sales_amount: { $max: "$sales"}, 
			min_sales_amount: { $min: "$sales"}, 
			avg_sale: { $avg: "$sales"}
		}
	};
var having_caluse = {
		$match: { avg_sale: { $gte: 2500 } }
	};
var order_by_clause = {
		$sort: { avg_sale: 1 }
	};
db.salesdata.aggregate( 
	where_clause,
	group_by_clause,
	having_caluse, 
	order_by_clause
).pretty();