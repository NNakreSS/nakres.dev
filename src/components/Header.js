import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import instagram from '../assets/imgs/instagram.svg'
import youtube from '../assets/imgs/youtube.svg'
import linkedin from '../assets/imgs/linkedin.svg'
import { useContext, useEffect, useState } from 'react';
import { ActiveSectionContext } from "../ActiveSectionContext";
import { scroller } from 'react-scroll';
import mylogo from '../assets/imgs/logo-white.png'
import axios from 'axios';
function Header() {
    const { activeSection } = useContext(ActiveSectionContext);
    const [scrolled, setScrolled] = useState(false)
    const handleScrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
            duration: 100,
            delay: 0,
            smooth: 'smooth'
        });
    };
    useEffect(() => {
        const getPackageList = async () => {
            const options = {
                method: 'GET',
                url: 'http://servers-live.fivem.net',
            };
            axios.request(options).then(function (response) {
                console.log(response)
            }).catch(function (error) {
            console.error(error);
            });
        };
        getPackageList();

        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])


    return (
        <section className={scrolled ? "header scrolled" : "header"} >
            <Navbar bg="none" variant="dark"  >
                <Container>
                    <Navbar.Brand id='nav-logo' className='me-5' href="home" onClick={(e) => { e.preventDefault(); handleScrollToSection('home') }}>
                        <span id='logo' >
                            <img
                                src={mylogo}
                                alt="Logo"
                            />
                        </span>
                    </Navbar.Brand>
                    <Navbar.Brand id='nav-textlogo' className='me-5' href="home" onClick={(e) => { e.preventDefault(); handleScrollToSection('home') }}>NakreS Development</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link  className={activeSection === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={(e) => { e.preventDefault(); handleScrollToSection('home') }}> Home</Nav.Link>
                        <Nav.Link  className={activeSection === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={(e) => { e.preventDefault(); handleScrollToSection('skills') }}> Skills</Nav.Link>
                        <Nav.Link  className={activeSection === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={(e) => { e.preventDefault(); handleScrollToSection('projects') }} >Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/serkan-atmaca-04a60a277/"><img src={linkedin} alt="linkedin" /></a>
                            <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/serkanb.a/"><img src={instagram} alt="instagram" /></a>
                            <a target='_blank' rel="noopener noreferrer" href="https://www.youtube.com/channel/UCkHHGxb-5Dun5xcBRZM9CEQ"><img src={youtube} alt="youtube" /></a>
                        </div>
                    </span>
                </Container>
            </Navbar>
        </section>
    )
}

export default Header;