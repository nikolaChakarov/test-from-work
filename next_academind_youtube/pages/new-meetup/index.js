import Head from "next/head";
import { useRouter } from "next/router";

// new meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
	const router = useRouter();

	const onAddMeetup = async (data) => {
		const response = await (
			await fetch("/api/new-meetup", {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json",
				},
			})
		).json();

		console.log(response);

		router.push("/");
	};

	return (
		<>
			<Head>
				<title>Add a New Meetup</title>
				<meta name="description" content="Add you own meetups" />
			</Head>
			<NewMeetupForm onAddMeetup={onAddMeetup} />;
		</>
	);
};

export default NewMeetupPage;
