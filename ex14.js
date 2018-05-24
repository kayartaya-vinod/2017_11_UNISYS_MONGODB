use training;

// single field index
db.salesdata.createIndex({ category: 1 });

db.salesdata.dropIndex("category_1")
db.salesdata.dropIndex("category_1_quarter_1")

// compound index
db.salesdata.createIndex({ category: 1, quarter: 1});

db.salesdata.getIndexes();

// uses COLLSCAN
db.salesdata.find(
{
	$or: [
		{ category: "Beverages"}, 
		{ quarter: 1}
	]
}).explain();


// uses IXSCAN
db.salesdata.find(
{
	$and: [
		{ category: "Beverages"}, 
		{ quarter: 1}
	]
}).explain();
