import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Container} from 'react-bootstrap';

import './Video.css';
import '../../../styles/style.css';
import video from '../../../video/m152_video_noel_schaerer.mp4'


import useDocumentTitle from "../../../utils/UseDocumentTitle"; 

export const Video = () => {
    useDocumentTitle('Werbung K100 | Video');

    return (
        <div>
            <Container fluid className="Background">
                <div class="video-container">
                        <video className="video" src={video} controls />
                </div>
            </Container>
        </div>
    );
}