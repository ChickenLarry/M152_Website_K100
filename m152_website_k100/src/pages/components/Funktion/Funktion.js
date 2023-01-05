import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Row} from 'react-bootstrap';

import './Funktion.css';
import '../../../styles/style.css';

import corsair1 from '../../../img/corsair1.jpg';
import corsair2 from '../../../img/corsair2.jpg';
import useDocumentTitle from "../../../utils/UseDocumentTitle";

export const Funktion = () => {
    useDocumentTitle('Funktion');

    return (
        <div>
            <Container fluid className="Background">
                <Row>
                    <Col>
                        <img className="ImgLeft" src={corsair2} alt={"corsair2"}/>
                    </Col>
                    <Col>
                        <div className="TextRight">
                            <h4 className="H4">Fakten</h4>
                            In den Leichtwasserreaktoren hat das Wasser zwei Aufgaben:
                            Einerseits dient es als <strong>Kühlmittel</strong> und transportiert die
                            Energie aus dem Reaktor zu den <strong>Dampfturbinen</strong>. Andererseits
                            bremst es die bei der Kernspaltung freiwerdenden <strong>Neutronen </strong> 
                            ab und wirkt so als sogenannter <strong>Moderator</strong>. Nur wenn sie
                            gebremst werden, können die Neutronen weitere <strong>Kettenreaktion</strong> auslösen.
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="TextLeft">
                        <h4 className="H4">Fakten</h4>
                            Die Energie der Sonnenstrahlen, sogenannte Solarenergie,
                            entsteht im <strong>Inneren</strong> der <strong>Sonne</strong> durch Kernfusion und gelangt
                            als <strong>elektromagnetische Strahlung</strong> zur <strong>Erde</strong>. Hier kann die
                            <strong> Strahlung</strong> für die Erzeugung von <strong>Strom</strong> und Wärme
                            für <strong>Heisswasser</strong> genutzt werden. Da die meiste Energie tagsüber
                            gebraucht wird, passen <strong>solare Erzeugung</strong> und Energiebedarf gut zusammen.
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