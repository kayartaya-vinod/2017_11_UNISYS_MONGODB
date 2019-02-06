use training;

db.auth("rama", "rama123");

db.salesdata.mapReduce(
	function mapFunction(){
		// called once per document in the collection
		// referred as "this"
		emit(this.category, 1);
	},
	function reduceFunction(key, values){
		return Array.sum(values);
	},
	{
		out: { inline: true }
	}
);