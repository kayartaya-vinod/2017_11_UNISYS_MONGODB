// ex09.js

use training

// some update commands

// remove the "className" property from all documents;
// db.orders.update(
// 	{
// 		// find criteria
// 	}, 
// 	{
// 		// updating document
// 		$unset: { className: 1 }
// 	},
// 	{
// 		// options
// 		multi: true
// 	}
// );


// db.persons.update(
// 	{
// 		_id: 20
// 	},
// 	{
// 		$set: {
// 			first_name: "John",
// 			last_name: "Doe",
// 			remarks: "a nice guy..."
// 		}
// 	}
// );


// db.salesdata.update(
// 	{
// 	},
// 	{
// 		$inc: { sales: 10 } 
// 	},
// 	{
// 		multi: true
// 	}
// );


db.persons.update(
	{
		// _id: 1999	
		email: "michael.444@mail.com"
	},
	{
		$set: {
			name: "Michael Jackson",
			city: "Newyork",
			phone: "1248885444",
			email: "michael.444@mail.com"
		}
	},
	{
		upsert: true
	}
);












