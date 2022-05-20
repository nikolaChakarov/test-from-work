import { MongoClient } from "mongodb";

// api/new-meetup

async function handler(req, res) {
	if (req.method === "POST") {
		const data = req.body;

		const { title, image, address, description } = data;

		const client = await MongoClient.connect(
			`mongodb+srv://nikola_chakarov:3000@nikk-cluster.egmzd.mongodb.net/next_test?retryWrites=true&w=majority`
		);

		const db = client.db();

		const meetupsCollection = db.collection("meetups");

		const result = await meetupsCollection.insertOne(data);

		console.log(result);

		client.close();

		res.status(201).json({ message: "Meetups iserted!" });
	}
}

export default handler;
