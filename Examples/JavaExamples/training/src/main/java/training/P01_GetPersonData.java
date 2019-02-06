package training;

import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class P01_GetPersonData {

	public static void main(String[] args) {
		
		String host = "localhost";
		int port = 28017;
		
		MongoClient mc = new MongoClient(host, port);
		MongoDatabase db = mc.getDatabase("training");
		
		MongoCollection<Document> persons = db.getCollection("persons");
		FindIterable<Document> data = persons.find();
		
		Document d = data.first();
		System.out.println(d);
		
		Document p1 = new Document().append("name", "Ramesh")
				.append("city", "Chennai")
				.append("city", "Chennai")
				.append("phone", "987777222");
		
		persons.insertOne(p1);
		
		
		
	}
}
