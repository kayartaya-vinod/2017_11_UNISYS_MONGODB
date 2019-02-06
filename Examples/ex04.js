// ex04.js

// multi-key sorting along with projection (top 10)

// sort by gender (desc) , first name (asc)

use training;

var persons = db.persons.find(
	null, 	// selection criteria
	{
		gender: 1, 
		first_name: 1
	} 		// projection
).sort(
	{
		gender: -1,
		first_name: 1
	}
);

persons.forEach(p => print(JSON.stringify(p)));
