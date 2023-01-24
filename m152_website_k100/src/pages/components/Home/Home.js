import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Row} from 'react-bootstrap';
import './Home.css';
import '../../../styles/style.css';


import K100buy from '../../../img/k100buy.jpg';
import useDocumentTitle from "../../../utils/UseDocumentTitle";

export const Home = () => {
    useDocumentTitle('Werbung K100 | Home');

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
                            <p className="Text">
                                K100 RGB Optisch-mechanische<br/>
                                Gaming-Tastatur<br/>
                                CORSAIR OPX Switch<br/>
                            </p>
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