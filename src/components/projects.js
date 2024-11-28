import React from "react";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GitHub, ArrowRight } from "react-feather";
import * as Icon from "react-feather";
import { Techs } from "./about";
import { Brush, Code } from "@material-ui/icons";
import * as icon from "react-feather";
import Carousel from "react-multi-carousel";

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 1,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const Project = () => {
	return (
		<React.Fragment>
			<div className='projects'>
				<h3 className='dev-widget'>My Web Projects and Recent Designs</h3>
				<div className='project-main'>
					{projectList.map((item, index) => (
						<ProjectCard
							key={item.id}
							index={index}
							name={item.name}
							img={item.img}
							desc={item.desc}
							link={item.link}
							techUsed={item.tecnologies}
							githubLink={item.githubLink}
						/>
					))}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;

export const ProjectCard = ({
	name,
	desc,
	img,
	link,
	githubLink,
	index,
	techUsed,
}) => {
	return (
		<React.Fragment>
			<div
				className={index % 2 === 1 ? "project-lone reversed" : "project-lone"}
			>
				<Carousel
					swipeable={true}
					draggable={true}
					autoPlaySpeed={1000}
					transitionDuration={1000}
					infinite={true}
					responsive={responsive}
					autoPlay={true}
					containerClass='carousel_container'
				>
					{img.map((item, index) => (
						<img src={item} alt='reference' className='project_img' />
					))}
				</Carousel>

				<div className='projectDisplayWrap'>
					<div className='project_display'>
						{githubLink ? (
							<div className='project_link'>
								<a href={githubLink} target='_blank' rel='noreferrer'>
									<GitHub size={35} />
								</a>
							</div>
						) : (
							<div></div>
						)}
						{link ? (
							<div className='project_link_github'>
								<a href={link} target='_blank' rel='noreferrer'>
									<ArrowRight size={35} />
								</a>
							</div>
						) : (
							<div></div>
						)}
					</div>

					<div>
						<h3>{name}</h3>
						<p>{desc}</p>
					</div>
					<div>
						<h3>Technologiesy Used</h3>
						<div>
							{techUsed.map((item, index) => (
								<Techs
									key={item.id}
									iconName={item.icon}
									techName={item.name}
									link={item.link}
									nameDisplay={item.nameDisplay}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

const projectList = [
	{
		id: "20",
		name: "Renewed Hope Housing Delivery Portal",
		desc: "Renewedhope is a federal ministry project which aims to make the dream of owning a home a reality for you. Join us in our journey towards a future where every Nigerian has a place to call home. ",
		img: [
			"images/project/rh1.png",
			"images/project/rh2.png",
			"images/project/rh3.png",
			"images/project/rh4.png",
		],
		link: "https://renewedhopehomes.fmhud.gov.ng/",
		tecnologies: [
			{
				id: "3",
				name: "Js",
				icon: Icon.Hash,
				nameDisplay: true,
			},
			{
				id: "4",
				name: "React",
				icon: Code,
				nameDisplay: true,
			},
			{
				id: "6",
				name: "Tailwind",
				icon: Brush,
				nameDisplay: true,
			},
			{
				id: "7",
				name: "Next Js",
				icon: Icon.Hash,
				nameDisplay: true,
			},
			{
				id: "11",
				name: "TS",
				icon: Code,
				nameDisplay: true,
			},
		],
	},
	{
		id: "21",
		name: "Tidmuv",
		desc: "Tidmuv is a platform, which caters for package sending and delivery, either you want to send a package or you are traveling and wishes to make some money by delivering packages and documents  to people around your destination ",
		img: [
			"images/project/tidmuv1.png",
			"images/project/tidmuv2.png",
			"images/project/tidmuv3.png",
			"images/project/tidmuv4.png",
			"images/project/tidmuv5.png",
		],
		tecnologies: [
			{
				id: "3",
				name: "Js",
				icon: Icon.Hash,
				nameDisplay: true,
			},
			{
				id: "4",
				name: "React",
				icon: Code,
				nameDisplay: true,
			},
			{
				id: "6",
				name: "Tailwind",
				icon: Brush,
				nameDisplay: true,
			},
			{
				id: "7",
				name: "Next Js",
				icon: Icon.Hash,
				nameDisplay: true,
			},
			{
				id: "11",
				name: "TS",
				icon: Code,
				nameDisplay: true,
			},
		],
	},
	{
		id: "9",
		name: "Afrotrips",
		desc: "AfroTrips is a website which handle everything from accommodations to transportation, ensuring your adventure is hassle-free and packed with unforgettable moments. Community of Travelers, ",
		img: [
			"images/project/afrotrips.png",
			"images/project/afrotrips1.png",
			"images/project/afrotrips2.png",
			"images/project/afrotrips3.png",
		],
		tecnologies: [
			{
				id: "3",
				name: "Js",
				icon: Icon.Hash,
				nameDisplay: true,
			},
			{
				id: "4",
				name: "React",
				icon: Code,
				nameDisplay: true,
			},
			{
				id: "6",
				name: "Tailwind",
				icon: Brush,
				nameDisplay: true,
			},
			{
				id: "7",
				name: "Next Js",
				icon: Icon.Hash,
				nameDisplay: true,
			},
			{
				id: "11",
				name: "TS",
				icon: Code,
				nameDisplay: true,
			},
		],
	},
	{
		id: "10",
		name: "DevAsk",
		desc: " Devask is a website that  helps you get answers to your technical questions immediately. You also get rewarded when you provide correct answers to questions. ",
		img: [
			"images/project/DevAsk1.png",
			"images/project/DevAsk.png",
			"images/project/DevAsk2.png",
		],
		link: "https://devask.hng.tech/#/",
		tecnologies: [
			{
				id: "3",
				name: "Js",
				icon: Icon.Hash,
				nameDisplay: true,
			},
			{
				id: "4",
				name: "React",
				icon: Code,
				nameDisplay: true,
			},
			{
				id: "2",
				name: "CSS",
				icon: Brush,
				nameDisplay: true,
			},
		],
	},
	{
		id: "11",
		name: "Zurichat",
		desc: " ZuriChat is an open source workspace app that provides the opportunity for people to network, collaborate, educate and learn remotely. It allows people to take their classroom everywhere, make learning fun, stay engaged and inspired with the virtual lounge and games. One of its unique features are the variety of plugins designed to add function… ",
		img: [
			"images/project/zurichat.jpeg",
			"images/project/zurichat3.jpeg",
			"images/project/zurichat2.jpeg",
		],
		link: "https://zuri.chat/#/",
		tecnologies: [
			{
				id: "3",
				name: "Js",
				icon: Icon.Hash,
				nameDisplay: true,
			},
			{
				id: "4",
				name: "React",
				icon: Code,
				nameDisplay: true,
			},
			{
				id: "2",
				name: "CSS",
				icon: Brush,
				nameDisplay: true,
			},
		],
	},
	{
		id: "12",
		name: "Metabnb",
		desc: " One of the task from hng intership  ",
		img: [
			"images/project/metabnb.png",
			"images/project/metabnb2.png",
			"images/project/metabnb4.png",
			"images/project/metabnb3.png",
		],
		link: "https://metabnb-hng-task3.netlify.app/",
		githubLink: "https://github.com/theFrontrade/ZuriTask",
		tecnologies: [
			{
				id: "3",
				name: "Js",
				icon: Icon.Hash,
				nameDisplay: true,
			},
			{
				id: "4",
				name: "React",
				icon: Code,
				nameDisplay: true,
			},
			{
				id: "2",
				name: "CSS",
				icon: Brush,
				nameDisplay: true,
			},
		],
	},
	{
		id: "1",
		name: "Currency  Converter",
		desc: "Currency Converter is a webpage which allows you check and converts all currency from one form The data are gotten from Api that gives out all currency rates",
		img: [
			"images/project/currency_convert.jpg",
			"images/project/currency_convert2.png",
		],
		link: " https://mycurrent.netlify.app",
		githubLink: "https://github.com/theFrontrade/currency-converter",
		tecnologies: [
			{
				id: "1",
				name: "HTML",
				icon: icon.Code,
				nameDisplay: true,
			},
			{
				id: "2",
				name: "CSS",
				icon: Brush,
				nameDisplay: true,
			},
			{
				id: "3",
				name: "Js",
				icon: Icon.Hash,
				nameDisplay: true,
			},
		],
	},
	{
		id: "02",
		name: "E Commerce",
		desc: "E Commerce site is a landing page for a proper E Commerce website Currently working on using Api to all adding to Cart and others",
		img: [
			"images/project/e-commerce.jpg",
			"images/project/e_commerce2.png",
			"images/project/e_commerce3.png",
			"images/project/e_commerce4.png",
			"images/project/e_commerce5.png",
		],
		link: "https://samcommerce.netlify.app/",
		githubLink: "https://github.com/theFrontrade/e-commerce",
		tecnologies: [
			{
				id: "1",
				name: "HTML",
				icon: icon.Code,
				nameDisplay: true,
			},
			{
				id: "2",
				name: "CSS",
				icon: Brush,
				nameDisplay: true,
			},
			{
				id: "3",
				name: "Js",
				icon: Icon.Hash,
				nameDisplay: true,
			},
		],
	},
	{
		id: "2",
		name: "My Analytics",
		desc: "My Analyics is an average template for a good landing page A Suitable Landing page for a websites that helps others manages their websites",
		img: [
			"images/project/analytics.jpg",
			"images/project/analytics2.png",
			"images/project/analytics3.png",
			"images/project/analytics4.png",
		],
		link: " http://myanalytics.netlify.app/",
		githubLink: "https://github.com/theFrontrade/Analytics",
		tecnologies: [
			{
				id: "1",
				name: "HTML",
				icon: icon.Code,
				nameDisplay: true,
			},
			{
				id: "2",
				name: "CSS",
				icon: Brush,
				nameDisplay: true,
			},
			{
				id: "3",
				name: "Js",
				icon: Icon.Hash,
				nameDisplay: true,
			},
		],
	},
	{
		id: "5",
		name: "NFT Landing Page",
		desc: "NFt Landing Page is a  responsive Landing Page built with react Awesome design suitable for Nft project",
		img: [
			"images/project/nftlanding.jpg",
			"images/project/nft1.png",
			"images/project/nft2.png",
		],
		link: "http://snftland.netlify.app/",
		githubLink: "https://github.com/theFrontrade/Analytics",
		tecnologies: [
			{
				id: "1",
				name: "HTML",
				icon: icon.Code,
				nameDisplay: true,
			},
			{
				id: "2",
				name: "CSS",
				icon: Brush,
				nameDisplay: true,
			},
			{
				id: "3",
				name: "Js",
				icon: Icon.Hash,
				nameDisplay: true,
			},
			{
				id: "4",
				name: "React",
				icon: Code,
				nameDisplay: true,
			},
		],
	},
	{
		id: "5",
		name: "User Search Filter",
		desc: "User Search filter is website that allows searching of users gotten from Api and also checking the user details",
		img: ["images/project/userfilter1.png", "images/project/userfilter2.png"],
		link: "https://suser.netlify.app/",
		githubLink: "https://github.com/theFrontrade/Analytics",
		tecnologies: [
			{
				id: "1",
				name: "HTML",
				icon: icon.Code,
				nameDisplay: true,
			},
			{
				id: "2",
				name: "CSS",
				icon: Brush,
				nameDisplay: true,
			},
			{
				id: "3",
				name: "Js",
				icon: Icon.Hash,
				nameDisplay: true,
			},
			{
				id: "4",
				name: "React",
				icon: Code,
				nameDisplay: true,
			},
		],
	},
];
