import Head from "next/head";
import { MongoClient } from "mongodb";

// import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

// const meetups = [
// 	{
// 		id: "m1",
// 		title: "A Firs Meetup",
// 		image:
// 			"https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782__340.jpg",
// 		address: "Some address",
// 		description: "This is a first meetup",
// 	},
// 	{
// 		id: "m2",
// 		title: "A Second Meetup",
// 		image:
// 			"https://cdn.pixabay.com/photo/2015/01/07/11/31/tigers-591359__340.jpg",
// 		address: "Some second address",
// 		description: "This is a second meetup",
// 	},
// ];

const HomePage = (props) => {
	// const [loadedMeetups, setLoadedMeetups] = useState([]);

	// useEffect(() => {
	// 	setLoadedMeetups(meetups);
	// }, []);

	return (
		<>
			<Head>
				<title>React Meetups</title>
				<meta
					name="description"
					content="Brows a huge list of higly active React meetups"
				/>
			</Head>
			<MeetupList meetups={props.db} />
		</>
	);
};

// export async function getServerSideProps(context) {
// 	const { req, res } = context;

// 	// fetch data from API

// 	return {
// 		props: {
// 			db: meetups,
// 		},
// 	};
// }

export async function getStaticProps() {
	// fetch data from an API
	const client = await MongoClient.connect(
		`mongodb+srv://nikola_chakarov:3000@nikk-cluster.egmzd.mongodb.net/next_test?retryWrites=true&w=majority`
	);

	const db = client.db();

	const meetupsCollection = db.collection("meetups");

	const data = await meetupsCollection.find().toArray();

	client.close();

	return {
		props: {
			db: data.map((el) => ({
				title: el.title,
				address: el.address,
				image: el.image,
				description: el.description,
				id: el._id.toString(),
			})),
		},
		revalidate: 10,
	};
}

export default HomePage;
