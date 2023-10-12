import React from "react";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GitHub, Globe } from "react-feather";
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
      <div className="projects">
        <h3 className="dev-widget">My Web Projects and Recent Designs</h3>
        <div className="project-main">
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
          autoPlaySpeed={3000}
          transitionDuration={2000}
          infinite
          responsive={responsive}
          autoPlay={true}
          containerClass="carousel_container"
        >
          {img.map((item, index) => (
            <img src={item} alt="reference" className="project_img" />
          ))}
        </Carousel>

        <div className="projectDisplayWrap">
          <div className="project_display">
            <div className="project_link">
              <a href={githubLink} target="_blank" rel="noreferrer">
                <GitHub size={30} />
              </a>
            </div>
            <div className="project_link_github">
              <a href={link} target="_blank" rel="noreferrer">
                <Globe size={30} />
              </a>
            </div>
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
    ],
    link: "https://otaillaw.netlify.app",
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
      "images/project/analytics2.png",
      "images/project/analytics3.png",
      "images/project/analytics4.png",
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
];
