// get the person data by _id

use training;

// db.persons.find({ _id: 100 }).pretty();

db.persons.find(
	{
		_id: { $eq: 100 }
	},
	{
		_id: 1, first_name: 1, last_name: 1, city: 1
	}
).pretty();

