import classes from "./MeetupDetail.module.css";

const MeetupDetail = ({ info }) => {
	console.log(info);
	return (
		<section className={classes.detail}>
			<img src={info.image} alt="" />
			<h1>{info.title}</h1>
			<address>{info.address}</address>
			<p>{info.description}</p>
		</section>
	);
};

export default MeetupDetail;
