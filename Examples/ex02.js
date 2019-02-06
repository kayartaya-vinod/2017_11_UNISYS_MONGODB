use training;

// select * from persons where gender = "Male"

var cnt = db.persons.find({
	gender: /^MALE/i
}).count();

print("There are " + cnt + " male contacts in the collection");