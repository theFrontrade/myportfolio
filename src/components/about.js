import React from "react";
// import { WidgetsRounded } from "@material-ui/icons";
import { GitHub, LinkedIn, Twitter, LocalPhone, MailOutline, Code, Brush, Facebook } from "@material-ui/icons";
import FadeIn from './fadeIn'
import * as Icon from 'react-feather'

const About = () => {
    return(
        <React.Fragment>
            <FadeIn>
                <div className="about">
                    {/* <h3>WHAT DO I DO?</h3> */}
                    <div className="flex centralized-v">
                        <DevWidget />
                        <div className="about-right">
                            <DevCards 
                                headText="Who am I?"
                                bodyText="My name is Samuel Adeniyi, A front End Developer. I am cool-headed, fast learner and also the lover of growth of others."
                            />
                            <DevCards
                                headText="What do I do?"
                                bodyText="Through my custom Agile development method, I bring your web app ideas (Social Media Network, Business Websites, Landing pages, complex Web Apps) to reality . I stand out for my top development skills but I am much more than that. I am a genuine strategic business partner and a good one to work with."
                            />
                            <DevCards
                                headText="Experience"
                                bodyText="I have been a developer for the past one year and in the process, I have gained lot of experience and also worked with different organizations and also collaborated with quite a number of good developers, which helped my growth."
                            />
                        </div>
                    </div>
                    <h3 className="little-text-head">Technologies</h3>
                    <div
                        style={{
                            width: '100%'
                        }}
                    >
                        <div 
                            className="techArray"
                            style={{
                                width: '96%'
                            }}
                        >
                            {
                                TechList.map((item) => 
                                <Techs 
                                    key={item.id} 
                                    iconName={item.icon}
                                    techName={item.name}
                                    link={item.link} 
                                    nameDisplay={item.nameDisplay}
                                />
                            )
                            }
                        </div>
                    </div>
                </div>
            </FadeIn>
        </React.Fragment>
    )
}

export default About;

export const DevCards = ({headText, bodyText}) => {
    return(
        <React.Fragment>
            <div style={{margin:" 0 0 3rem 0"}}>
                <h3  className="little-text-head">{headText}</h3>
                <p>{bodyText}</p>
            </div>
        </React.Fragment>
    )
}

export const DevWidget = () => {
    return(
        <React.Fragment>
            <div>
                <div className="dev-widget"> 
                    <img
                        src="images/thefrontrade.jpg"
                        alt='Daniel Adewale'
                    />
                    <h3>Samuel Adeniyi</h3>
                    <p>Front End Developer</p>
                    <p>B.tech Surveying and Geo-Informatics</p>

                    {
                        social.map((item) => 
                            <Techs 
                                key={item.id} 
                                iconName={item.icon}
                                techName={item.name} 
                                link={item.link}
                                nameDisplay={item.nameDisplay}
                            />
                    )}
                </div>
            </div>
        </React.Fragment>
    )
}

export const Techs = ({iconName, link, techName, nameDisplay}) => {

    return(
        <React.Fragment>
            <a href={link ? link : '#'} target='_blank' rel='noreferrer'>
                <div className="techArray-item">
                    <div>
                        {
                            iconName ?
                                <>
                                    <i>
                                        {
                                            React.createElement(iconName, {color:'#fff'})
                                        }
                                    </i>
                                </>
                            : null   
                        }
                        {
                            nameDisplay ?
                                <h4>
                                    {techName}
                                </h4>

                                : null
                        }
                    </div>
                    
                    
                </div>
            </a>
        </React.Fragment>
    )
}

export const social = [
    {
        id: '1',
        name: 'Github',
        icon: GitHub,
        link: 'https://github.com/thfrontrade',
        nameDisplay: true
    },
    {
        id: '2',
        name: 'Linkedin',
        icon: LinkedIn,
        link: 'https://www.linkedin.com/thefrontrade/',
        nameDisplay: true
    },
    {
        id: '3',
        name: 'Twitter',
        icon: Twitter,
        link: 'https://twitter.com/thefrontrade',
        nameDisplay: true
    },
    {
        id: '4',
        name: 'Email',
        icon: MailOutline,
        link: 'mailto:Sadeniyi016@gmail.com',
        nameDisplay: true
    },
    {
        id: '5',
        name: 'Phone',
        icon: LocalPhone,
        link: 'tel:08175547226',
        nameDisplay: true
    },
    {
        id: '6',
        name: 'Facebook',
        icon: Facebook,
        link: 'http://www.facebook.com/samuel.oyeniran.7758',
        nameDisplay: true
    },
   
]
export const TechList = [
    {
        id: "1",
        name: "HTML",
        icon: Code,
        nameDisplay: true
    },
    {
        id: "2",
        name: "CSS",
        icon: Brush,
        nameDisplay: true
    },
    {
        id: "3",
        name: "Js",
        icon: Icon.Hash,
        nameDisplay: true
    },
    {
        id: "4",
        name: "React",
        icon: Code,
        nameDisplay: true
    },
    {
        id: "5",
        name: "Redux",
        icon: Code,
        nameDisplay: true
    },
    {
        id: "6",
        name: "Tailwind",
        icon: Brush,
        nameDisplay: true
    },
    {
        id: "7",
        name: "Next Js",
        icon: Icon.Hash,
        nameDisplay: true
    },
    {
        id: "11",
        name: "Git",
        icon: GitHub,
        nameDisplay: true
    },
    {
        id: "11",
        name: "TS",
        icon: Code,
        nameDisplay: true
    },

]