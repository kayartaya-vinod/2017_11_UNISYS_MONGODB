use training;

// db.sbi_atms.createIndex({ coords: "2d" });

db.sbi_atms.find({
	coords: {
		$near: [ 12.926583, 77.515592 ]
	}
}).limit(5).pretty();

