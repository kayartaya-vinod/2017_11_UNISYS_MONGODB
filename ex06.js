// ex06.js

use training;


// All sales between $1000 and $1050
// db.salesdata.find(
// 	{
// 		$and : [  // an array of conditions (predicates)
// 			{sales: { $gte: 1000 }},  // condition #1
// 			{sales: { $lte: 1050 }}   // condition #2
// 		]
// 	}
// ).pretty();



// all sales less than $500 or more than $10000
// var sales = db.salesdata.find(
// 	{
// 		$or : [  // an array of conditions (predicates)
// 			{sales: { $lte: 500 }},  // condition #1
// 			{sales: { $gte: 10000 }}   // condition #2
// 		]
// 	}
// );

// sales.forEach(s => print(JSON.stringify(s)));


// var cnt = db.salesdata.find(
// 	{
// 		quarter: { $nin : [1, 3] }	
// 	}
// ).count();

// print("There are " + cnt + " sales in quarter 2 and 4");


var cond1 = "(this.sales >= 1000 && this.sales <= 2000)";
var cond2 = "(this.sales >= 10000 && this.sales <= 15000)";

var cnt = db.salesdata.find(
	{
		$where: cond1 + " || " + cond2
	}
).count();

print("There are " + cnt + " sales in the range of $1000-$2000 and $10000-$15000");












