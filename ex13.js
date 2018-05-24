// ex13.js

use training;
db.auth("rama", "rama123");

db.salesdata.mapReduce(
	function(){
		var cat = this.category;

		if(cat=="Dairy Products" || cat=="Grains/Cereals")
			return;

		if(["Seafood", "Meat/Poultry"].indexOf(cat)>=0){
			emit("Non-vegitarian", 1)
		}
		else {
			emit("Vegitarian", 1);
		}
	},
	function(key, values){
		return Array.sum(values);
	},
	{
		out: "sales_by_veg_nonveg"
	}
);
