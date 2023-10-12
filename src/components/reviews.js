import React from "react";
import FadeIn from "./fadeIn";

const Reviews = () => {
    return(
        <React.Fragment>
            <FadeIn>
                <div className="comment-widget">
                    <h3 
                        className="little-text-head"
                        style={{
                            textAlign: 'center'
                        }}
                    >Comments & Reviews</h3>
                    <div>
                        {
                            commentList.map((item) => <CommentCard key={item.id} img={item.img} name={item.name} msg={item.msg} />)
                        }
                    </div>
                </div>
            </FadeIn>
        </React.Fragment>
    )
}

export default Reviews;

export const CommentCard = ({img, name, role, msg}) => {
    return(
        <React.Fragment>
            <div className="comment-card">
                <div className="flex">
                    <img 
                        src={img}
                        alt='Reviewer' 
                    />
                    <div>
                        <h4>{name}</h4>
                        <p>{msg}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const commentList = [
    {
        id:"1",
        name: "Danel Adewale",
        img:"images/User/comment/daniel_testimonial.jpg",
        msg:'Looking at his design and how far he has come so far is something I"m proud of, his design  are top notch and Pixel perfect '
    },
    {
        id:"2",
        name: "Femi Fatokun",
        img:"images/User/comment/femi_testimonials.jpg",
        msg:'I love how he has developed so far in coding I would recommend him to anyone , because I know he is good at what he does'
    },
    {
        id:"3",
        name: "Samson Onifade",
        img:"images/User/comment/testifier_1.jpg",
        msg:'I"ve watched him grown from nothing to something in tech, he is good at what he does, and never giving up'
    },
    {
        id:"3",
        name: "Omenudo Martins",
        img:"images/User/comment/omens.jpg",
        msg:' One of the good frontend developer I"ve met, dedicated and also willing to learn more and more'
    }
]