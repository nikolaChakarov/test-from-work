import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
	return (
		<>
			<Head>
				<title>{props.data.title}</title>
			</Head>
			<MeetupDetail info={props.data} />
		</>
	);
};

export async function getStaticPaths() {
	const client = await MongoClient.connect(
		`mongodb+srv://nikola_chakarov:3000@nikk-cluster.egmzd.mongodb.net/next_test?retryWrites=true&w=majority`
	);

	const db = client.db();

	const meetupsCollection = db.collection("meetups");

	const data = await meetupsCollection.find({}, { _id: 1 }).toArray();

	client.close();

	return {
		fallback: "blocking",
		paths: data.map((el) => ({
			params: { meetupId: el._id.toString() },
		})),
	};
}

export async function getStaticProps(context) {
	// fetch data for a single meetup

	const id = context.params.meetupId;

	const client = await MongoClient.connect(
		`mongodb+srv://nikola_chakarov:3000@nikk-cluster.egmzd.mongodb.net/next_test?retryWrites=true&w=majority`
	);

	const db = client.db();

	const meetupsCollection = db.collection("meetups");

	const data = await meetupsCollection.findOne({ _id: ObjectId(id) });
	console.log(id, "...id");
	console.log(data, "...data");

	client.close();

	const { _id, ...fields } = data;

	return {
		props: {
			data: {
				id: _id.toString(),
				...fields,
			},
		},
	};
}

export default MeetupDetails;
