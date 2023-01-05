import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Row} from 'react-bootstrap';
import './Home.css';
import '../../../styles/style.css';


import K100buy from '../../../img/k100buy.jpg';
import useDocumentTitle from "../../../utils/UseDocumentTitle";

export const Home = () => {
    useDocumentTitle('Energie-Stromerzeugung | Home');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Thank you for your Order! You have just bought a new K100 from Corsair.');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Container fluid className="Background">
                <Row>
                    <Col>
                        <img className="ImgLeftBuy" src={K100buy} alt={"daumenrunter"}/>
                    </Col>
                    <Col>
                        <div className="TextRightBuy">
                            <h4 className='K100'>Corsair K100</h4>
                            <p className="Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                            <button type="submit" className="Button">
                                Kaufen
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </form>
    );
}

export default Home;