import { Col, Container, Row } from "react-bootstrap"
import TrackVisibility from 'react-on-screen';
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"
import * as icons from 'react-icons/ai';
import headerImg from '../assets/imgs/avatar.png'
import 'animate.css'
import { ActiveSectionContext } from "../ActiveSectionContext";

const ComponentToTrack = ({ isVisible, setScrollToSection }) => {
    const { setActiveSection } = useContext(ActiveSectionContext);
    const toRotate = useMemo(() => ['<h1> Frontend Developer </h1>', '<h1> Backend Developer </h1>', '</h1> Game Modder <h1>', '</h1> Full-Stack Developer <h1>'], []);
    const [text, setText] = useState('');
    const [deltaTime, setDeltaTime] = useState(300);
    const [currentRotate, setCurrentRotate] = useState(0);
    const [isDelete, setDelete] = useState(false);
    const tick = useCallback(() => {
        let index = currentRotate % toRotate.length
        let indexTotext = toRotate[index]
        let updateIntext = isDelete ? indexTotext.substring(0, text.length - 1) : indexTotext.substring(0, text.length + 1)
        setText(updateIntext)
        if (isDelete) setDeltaTime(dtime => dtime / 2);
        if (!isDelete && updateIntext === indexTotext) {
            setDelete(true)
            setDeltaTime(2000)
        } else if (isDelete && updateIntext === '') {
            setDelete(false)
            setDeltaTime(300)
            setCurrentRotate(currentRotate + 1)
        }
    }, [text, currentRotate, isDelete, toRotate]);
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, deltaTime);
        return () => { clearInterval(ticker); }
    }, [deltaTime, tick])

    useEffect(() => {
        if (isVisible) {
            setActiveSection("home");
        }
    }, [setActiveSection, isVisible, setScrollToSection]);

    return (
        <Container>
            <Row className="align-items-center">
                <Col xl={7} md={12} xs={12}>
                    <div id="code-panel" className={isVisible ? "animate__animated animate__fadeIn" : "animate__animated animate__fadeOutLeft hidden"} >
                        <div id="code-header">
                            <icons.AiFillCode />
                            <h4>HTML</h4>
                        </div>
                        {`<!-- Hi! I'm NakreS -->`}<br>
                        </br> <code className="txt-rotate"><span className="wrap">{text}</span></code>
                    </div>
                </Col>
                <Col xl={5} md={12} xs={12}>
                    <div id="avatar_img" className={isVisible ? "animate__animated animate__zoomInUp" : "animate__animated animate__fadeOutUpBig hidden"}>
                        <img src={headerImg} alt="Header Astronot Img" />
                    </div>
                    <div id="bio_p" className={isVisible ? "animate__animated animate__fadeInUp" : "animate__animated animate__fadeOutDown hidden"}>
                        <p>Hi, I'm Nakres (Serkan). I'm a mid-level developer who constantly improves my skills in web development, game modding, and API creation. I build projects using technologies like Unity, FiveM, Angular, and React.

                            Feel free to check out my GitHub for free resources, and join my Discord for support, paid and free FiveM scripts, and more.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

const Banner = ({ scrollToSection, setScrollToSection }) => {
    const homeRef = useRef(null);
    const [offset, setOffset] = useState(200);
    const handleResize = () => {
        const newOffset = window.innerWidth < 768 ? 300 : 300;
        setOffset(newOffset);
    };
    useEffect(() => {
        handleResize();
        if (scrollToSection === 'home') {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [scrollToSection]);
    return (
        <section ref={homeRef} className="banner">
            <TrackVisibility offset={offset}>
                <ComponentToTrack setScrollToSection={setScrollToSection} />
            </TrackVisibility>
        </section >
    )
}

export default Banner
