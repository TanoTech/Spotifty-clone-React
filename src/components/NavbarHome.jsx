import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './NavbarHome.css'

const NavbarHome = () => {
    return (
        <Row className="navHome">
            <Col>
                <Link >TRENDING</Link>
                <Link >PODCAST</Link>
                <Link >MOODS AND GENRES</Link>
                <Link >NEW RELEASES</Link>
                <Link >DISCOVER</Link>
            </Col>
        </Row>
    );
};

export default NavbarHome;