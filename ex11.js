
use training;
db.auth("rama", "rama123");


// find the documents for each category with highest and lowest sales
db.salesdata.aggregate(
	{
		$sort: {
			sales: -1
		}
	},
	{
		$group: {
			_id: "$category",
			product_with_most_sales: { $first: "$product" },
			max_sales: { $first: "$sales"},
			product_with_least_sales: { $last: "$product" },
			min_sales: { $last: "$sales"}
		}	
	}
).pretty();