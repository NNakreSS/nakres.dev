import { Col, Container, Row } from "react-bootstrap";
import * as iconsai from 'react-icons/ai';
import * as iconsfa from 'react-icons/fa';
import TrackVisibility from "react-on-screen";
import 'animate.css'

const InFooter = function ({ isVisible }) {
    return (
        <Container className={isVisible ? "animate__animated animate__fadeInLeftBig" : "animate__animated animate__zoomOut hidden"}>
            <Row className="align-items-center">
                <Col xl={3} md={3} xs={0} id="dc-widget">
                    <div>
                        <iframe title="discord widget" src="https://discord.com/widget?id=867730571533615154&theme=dark" width="400" height="200" allowtransparency="false"  sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                    </div>
                </Col>
                <Col xl={6} md={6} xs={12}>
                    <div id="copright">
                        Copyright &copy; 2023 NakreS Development. All rights reserved.
                    </div>
                </Col>
                <Col xl={3} md={3} xs={12}>
                    <div className="footer-icons">
                        <a href="https://github.com/NNakreSS" target="_blank" rel="noopener noreferrer">
                            <iconsai.AiFillGithub />
                        </a>
                        <a href="https://nakres-development.tebex.io/" target="_blank" rel="noopener noreferrer">
                            <iconsfa.FaShoppingCart />
                        </a>
                        <a href="https://discord.com/invite/dqVdxm589c" target="_blank" rel="noopener noreferrer">
                            <iconsfa.FaDiscord />
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

const Footer = () => {
    return (
        <section className="footer">
            <TrackVisibility offset={200}>
                <InFooter />
            </TrackVisibility>
        </section>
    )
}

export default Footer;