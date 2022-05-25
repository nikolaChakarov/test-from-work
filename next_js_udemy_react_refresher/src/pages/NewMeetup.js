import styled from "styled-components";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
	return (
		<Section>
			<h1>Add New Meetup</h1>

			<NewMeetupForm />
		</Section>
	);
};

const Section = styled.section``;

export default NewMeetupPage;
