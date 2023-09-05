import { Col, Container, Row } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import * as iconsai from 'react-icons/ai';
import * as iconsio from "react-icons/io";
import * as iconsdi from "react-icons/di";
import * as iconssi from "react-icons/si";
import 'animate.css'
import { ActiveSectionContext } from "../ActiveSectionContext";
import { useContext, useEffect, useRef, useState } from 'react';

const CircleProgress = ({ radius, strokeWidth, progress, logo }) => {
    const Iconlogo = logo;
    const circumference = 2 * Math.PI * (radius - strokeWidth / 2);
    const progressOffset = circumference - (progress / 100) * circumference;

    return (
        <div className="circle-progress-container">
            <svg className="circle-progress" width={radius * 2} height={radius * 2}>
                <circle
                    className="circle-progress-bar"
                    stroke="#1d1d1d"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    r={radius - strokeWidth / 2}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    className="circle-progress-indicator"
                    stroke="orange"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    r={radius - strokeWidth / 2}
                    cx={radius}
                    cy={radius}
                    style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: progressOffset,
                        strokeLinecap: 'butt',
                        transform: 'rotate(90deg)',
                        transformOrigin: `${radius}px ${radius}px`,
                    }}
                />
                <text
                    className="circle-progress-text"
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                >
                    {progress}%
                </text>
            </svg>
            <div className="circle-progress-content">
                <Iconlogo className="circle-progress-icon" />
            </div>
        </div>
    );
};

const ComponentToTrack = ({ isVisible, setScrollToSection }) => {
    const { setActiveSection } = useContext(ActiveSectionContext);
    useEffect(() => {
        if (isVisible) {
            setActiveSection("skills");
        }
    }, [setActiveSection, isVisible, setScrollToSection]);


    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1
        }
    };

    return (
        <div id='progress-boxs' className={isVisible ? "animate__animated animate__fadeInDown" : "animate__animated animate__fadeOut hidden"}>
            <Carousel
                id="Carousel"
                responsive={responsive}
                rewind={true}
                autoPlay={isVisible}
                autoPlaySpeed={2000}
                arrows={false}
                rewindWithAnimation={true}
            >
                <div className='skill'>
                    <h6>LUA</h6>
                    <CircleProgress radius={60} strokeWidth={5} progress={87} logo={iconssi.SiLua} />
                </div>
                <div className='skill'>
                    <h6>C#</h6>
                    <CircleProgress radius={60} strokeWidth={5} progress={76} logo={iconssi.SiCsharp} />
                </div>
                <div className='skill'>
                    <h6>HTML</h6>
                    <CircleProgress radius={60} strokeWidth={5} progress={98} logo={iconsai.AiFillHtml5} />
                </div>
                <div className='skill'>
                    <h6>CSS</h6>
                    <CircleProgress radius={60} strokeWidth={5} progress={94} logo={iconsio.IoLogoCss3} />
                </div>
                <div className='skill'>
                    <h6>JS</h6>
                    <CircleProgress radius={60} strokeWidth={5} progress={89} logo={iconsdi.DiJavascript} />
                </div>
                <div className='skill'>
                    <h6>ANGULAR</h6>
                    <CircleProgress radius={60} strokeWidth={5} progress={70} logo={iconsdi.DiAngularSimple} />
                </div>
                <div className='skill'>
                    <h6>REACT</h6>
                    <CircleProgress radius={60} strokeWidth={5} progress={60} logo={iconssi.SiPreact} />
                </div>
            </Carousel>
        </div>
    )
}

function Skills({ scrollToSection, setScrollToSection }) {
    const skillsRef = useRef(null);

    const [offset, setOffset] = useState(100);

    const handleResize = () => {
        const newOffset = window.innerWidth < 768 ? 150 : 100;
        setOffset(newOffset);
    };

    useEffect(() => {
        handleResize();
        if (scrollToSection === 'skills') {
            skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [scrollToSection]);

    return (
        <section ref={skillsRef}  className="skills" >
            <Container>
                <Row>
                    <Col className="col-12">
                        <div className='skill-bx'>
                            <h2>Skills</h2>
                            <TrackVisibility offset={offset}>
                                <ComponentToTrack setScrollToSection={setScrollToSection} />
                            </TrackVisibility>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills;