import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";

const FadeIn = ({ children }) => {
  const [inView, setInview] = useState(false);

  const transition = useSpring({
    delay: 500,
    from: {
            marginTop: '5rem',
            opacity: '0'
        },
    to: {marginTop: !inView ? '5rem' : '0', opacity: !inView ? '0' : '1'},
    config: {duration: '1000'}
  });
  return (
    <Waypoint onEnter={() => setInview(true)} >
      <animated.div style={transition}>
        {children}
      </animated.div>
    </Waypoint>
  );
};

export default FadeIn;