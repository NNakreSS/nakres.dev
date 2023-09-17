import { useContext, useEffect, useRef } from "react"
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import TrackVisibility from "react-on-screen";
import { ActiveSectionContext } from "../ActiveSectionContext";

const CreateProjectCards = ({ isVisible, setScrollToSection }) => {
    const packages = [
        {
            "id": 4910502,
            "name": "Bodycam",
            "image": "https://dunb17ur4ymx4.cloudfront.net/packages/images/b778ea5aa5ae811dd5a743a683b398c4f7ac0180.png",
            "price": 30,
        },
        {
            "id": 5386103,
            "name": "[QBCore - ESX]   Taxi Job ",
            "image": "https://dunb17ur4ymx4.cloudfront.net/packages/images/d33340bcb847f3c40b927dbc939f2685fef25807.PNG",
            "price": 14.99,
        },
        {
            "id": 4674993,
            "name": "FREE -  Object Spawn",
            "image": "https://dunb17ur4ymx4.cloudfront.net/packages/images/4779cd76f7c4014068f7b08f8330e9a6edbe6938.jpg",
            "price": 0,
        },
        {
            "id": 4591878,
            "name": "FREE - ATM ROBBERY ",
            "image": "https://nakres-development.tebex.io/assets/img/empty.png",
            "price": 0,
        },
        {
            "id": 4618778,
            "name": "STATUS HUD",
            "image": "https://dunb17ur4ymx4.cloudfront.net/packages/images/be5bb5571bded0e8c06a97b64965910a78a1a7d2.png",
            "price": 5,
        },
        {
            "id": 4578864,
            "name": " UI Object Spawner ",
            "image": "https://dunb17ur4ymx4.cloudfront.net/packages/images/3b07d0dab4644eff41d0f1fe7f4368b1a5a44f2a.png",
            "price": 5,
        },
        {
            "id": 4583792,
            "name": "Nakres Barbecue",
            "image": "https://dunb17ur4ymx4.cloudfront.net/packages/images/b389fed736b7b927fbb4ded0746808096b6d6e3d.png",
            "price": 5,
        },
        {
            "id": 4568051,
            "name": "[ESX] - Nakres Supermod",
            "image": "https://dunb17ur4ymx4.cloudfront.net/packages/images/2aea29c6b4c247607a87ed2ef86e96e83a5713ca.png",
            "price": 5,
        },
        {
            "id": 4559183,
            "name": "[ESX] -  RGB HEADLİGHT",
            "image": "https://dunb17ur4ymx4.cloudfront.net/packages/images/f5c5f74e1ded913e339cb6c6b8d8f4d391affd82.png",
            "price": 10,
        },
        {
            "id": 5386142,
            "name": "[QBCore - ESX]   Taxi Job  (Open Source)",
            "image": "https://dunb17ur4ymx4.cloudfront.net/packages/images/d33340bcb847f3c40b927dbc939f2685fef25807.PNG",
            "price": 35,
        },
        {
            "id": 5023372,
            "name": "Supporter",
            "image": "https://nakres-development.tebex.io/assets/img/empty.png",
            "price": 1,
        }
    ];
    const { setActiveSection } = useContext(ActiveSectionContext);
    useEffect(() => {
        if (isVisible) {
            setActiveSection("projects");
        }
    }, [setActiveSection, isVisible, setScrollToSection]);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1
        }
    };

    return (
        <div className={isVisible ? "projects-box animate__animated animate__zoomIn" : "projects-box animate__animated animate__zoomOut hidden"}>
            <Carousel
                id="Carousel"
                responsive={responsive}
                rewind={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                arrows={false}
                stopOnHover={false}
                rewindWithAnimation={true}
                autoFocus={false}
            >
                {packages.map((paket) => (
                    <div key={paket.id} className="project-carousel-item" >
                        <Card className="bg-dark text-white">
                            <Card.Img variant="top" src={paket.image} style={{ height: '250px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>{paket.name}</Card.Title>
                                <Button href={'https://nakres-development.tebex.io/package/' + paket.id} target="_blank" variant="outline-primary">Buy {paket.price} USD </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

const Projects = ({ scrollToSection, setScrollToSection }) => {
    const projectreff = useRef(null);
    useEffect(() => {
        if (scrollToSection === 'projects') {
            projectreff.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [scrollToSection]);

    return (
        <section ref={projectreff} className="projects">
            <Container>
                <Row>
                    <Col className="col-12">
                        <div id="projects-box">
                            <TrackVisibility offset={250}>
                                <CreateProjectCards setScrollToSection={setScrollToSection} />
                            </TrackVisibility>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Projects
