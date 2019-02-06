use training;

// db.blogs.update({}, { $unset: { id: 1}}, { multi: 1});

// db.blogs.createIndex({ "content.text": "text"})

var token = "animal|bird[s]?";

var cnt = db.blogs.find({
	$text: {
		$search: token,
		$caseSensitive: false
	}
}).count();

print(`There are ${cnt} documents containing the token: "${token}"`);
