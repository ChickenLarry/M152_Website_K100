import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Row} from 'react-bootstrap';

import './Video.css';
import '../../../styles/style.css';


import useDocumentTitle from "../../../utils/UseDocumentTitle"; 

export const Video = () => {
    useDocumentTitle('Energie-Stromerzeugung | Video');

    return (
        <div>
            <Container fluid className="Background">
                <Row>
                    <Col>
                        <div className="video-container">
                            <video className="video" src="/path/to/video.mp4" controls />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}