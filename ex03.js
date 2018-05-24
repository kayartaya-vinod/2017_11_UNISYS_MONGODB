use training;


// projection: filter the properties
// SQL --> select col1, col2, .. from table1

// db.persons.find({},{
// 	_id: false,
// 	first_name: true,
// 	last_name: true
// }, 5).pretty();


print("Person data in ascending order of id (top 5)");
db.persons.find({},{
	first_name: true,
	last_name: true
}, 5).sort({ _id: 1}).pretty();

print("Person data in descending order of id (bottom 5)");
db.persons.find({},{
	first_name: true,
	last_name: true
}, 5).sort({ _id: -1}).pretty();
