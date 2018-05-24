use training;

// c1 is a cursor representing all documents from "persons" collection
var c1 = db.persons.find();

var names = [];

while(c1.hasNext()){
	var p1 = c1.next();
	var title = p1.gender=="Male" ? "Mr." : "Ms.";
	names.push(title + p1.first_name + " " + p1.last_name + 
		" is from " + p1.city);
}


// names.forEach(name=>print(name));
names.forEach(function(name){
	print(name);
});


// from your OS command prompt, issue the following command:
// mongo < ex01.js