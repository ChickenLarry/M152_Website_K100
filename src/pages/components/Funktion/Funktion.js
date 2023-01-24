import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Row} from 'react-bootstrap';

import './Funktion.css';
import '../../../styles/style.css';

import corsair1 from '../../../img/corsair1.jpg';
import corsair2 from '../../../img/corsair2.jpg';
import useDocumentTitle from "../../../utils/UseDocumentTitle";

export const Funktion = () => {
    useDocumentTitle('Werbung K100 | Funktion');

    return (
        <div>
            <Container fluid className="Background">
                <Row>
                    <Col>
                        <img className="ImgLeft" src={corsair2} alt={"corsair2"}/>
                    </Col>
                    <Col>
                        <div className="TextRight">
                            <h4 className="H4">Beschreibung</h4>
                                <p>
                                    Die Tastatur ist in Schweizer Layout (QWERTZ) angelegt und kann einfach über eine USB-A Schnittstelle <br/>
                                    mit deinem PC verbunden werden. 
                                    <br/><br/>
                                    Das schwarzes minimalistische Design der Tastatur wird von der RGB Beleuchtung der Tasten kontrastiert. 
                                    <br/>
                                    Diese Art von Beleuchtung kann Millionen verschiedener Lichtfarben erzeugen, für das richtige Ambiente <br/>
                                    zu deinem Game. Ausserdem kannst du sechs Zusatztasten programmieren und mit Shortcuts hinterlegen. <br/>
                                    Für dein next-level Gamingerlebnis sorgen die PBT-Double-Shot-Tastenkappen die für eine lange <br/>
                                    Lebensdauer und maximalen Grip versprechen.<br/>
                                </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="TextLeft">
                        <h4 className="H4">Fakten</h4>
                                    Die einzigartige optisch-mechanische Corsair K100 RGB Gaming-Tastatur kombiniert ein eindrucksvolles <br/>
                                    Aluminiumdesign mit RGB-Beleuchtung einzelner Tasten und LightEdge mit <strong>44 Beleuchtungszonen</strong>. <br/>
                                    Leistungsstarke Corsair Axon Hyper-Processing-Technologie ermöglicht unvergleichliche Funktionen wie <br/>
                                    <strong>Polling mit 4.000 Hz</strong>. Corsair OPX RGB optisch-mechanische Tastenschalter <br/>
                                    ausgelegt für <strong>150 Millionen Tastenbetätigungen</strong> ermöglichen mit einem <br/>
                                    <strong>Betätigungsweg von nur 1,0 mm</strong> ultraschnelle Reaktionen und registrieren <br/>
                                    dank AXON jeden Tastendruck bis zu vier Mal schneller als normale mechanische Gaming-Tastaturen.
                        </div>
                    </Col>  
                    <Col>
                        <img className="ImgRight" src={corsair1} alt={"corsair1"}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}