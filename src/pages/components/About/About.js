import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './About.css';
import '../../../styles/style.css';
import useDocumentTitle from "../../../utils/UseDocumentTitle"; 

export const About = () => {
    useDocumentTitle('Werbung K100 | Über Uns');

    return (
         <div fluid className="Background1">
            <div class="text1">
               <h4 className="title1">Über Uns</h4>
                  <br/>
                  <br/>
                     Willkommen bei Corsair, einem führenden Technologieunternehmen, das hochleistungsfähige <br/>
                     Computerperipheriegeräte und -komponenten entwirft und herstellt. Gegründet 1994, haben wir eine lange <br/>
                     Geschichte der Schaffung innovativer Produkte, die die Grenzen dessen, was möglich ist, verschieben.<br/><br/>


                     Unsere Produktpalette:<br/>
                     Wir bieten eine breite Palette von Produkten, um die Bedürfnisse jedes Computerbegeisterten zu erfüllen. <br/>
                     Unsere Produktpalette umfasst hochleistungsfähige Speicher, Solid-State-Laufwerke, Netzteile, Gehäuse, <br/>
                     Kühlungslösungen und Gaming-Peripheriegeräte. Ob Sie ein Hardcore-Gamer sind, der das Neueste an <br/>
                     Hochleistungstechnologie sucht, oder ein Profi, der auf zuverlässige, hochwertige Komponenten setzt, <br/>
                     wir haben etwas für Sie.<br/><br/>

                     Unser Qualitätsversprechen:<br/>
                     Bei Corsair legen wir großen Wert auf Qualität. Wir verwenden nur die feinsten Materialien und die <br/>
                     fortschrittlichsten Technologien, um Produkte herzustellen, die langlebig sind. Unsere Produkte <br/>
                     unterziehen sich rigorosen Prüf- und Qualitätssicherungsprozessen, um sicherzustellen, dass sie <br/>
                     unsere hohen Standards erfüllen. Wir stehen hinter unseren Produkten mit branchenführenden Garantien <br/>
                     und einer Hingabe an den Kundensupport.<br/><br/>

                     Unsere Community:<br/>
                     Wir glauben, dass wir durch Zusammenarbeit große Dinge erreichen können. Aus diesem Grund engagieren <br/>
                     wir uns aktiv in unserer Community über soziale Medien, Foren und Veranstaltungen. Wir hören immer <br/>
                     auf das Feedback unserer Kunden und nutzen es, um unsere Produkte und Dienstleistungen zu verbessern.<br/><br/>

                     Warum uns wählen:<br/>
                     Wir sind darauf bedacht, unseren Kunden die bestmögliche Erfahrung zu bieten. Von unserem <br/>
                     Qualitätsversprechen bis hin zu unserem aktiven Engagement in der Community setzen wir uns dafür ein, <br/>
                     Ihre Erwartungen zu übertreffen. Mit unserer breiten Palette an hochleistungsfähigen Produkten und <br/>
                     unserem engagierten Kundensupport sind wir zuversichtlich, dass wir Ihnen dabei helfen können, <br/>
                     Ihre Ziele zu erreichen.<br/><br/>

                     Vielen Dank, dass Sie Corsair als Ihre erste Wahl für Computerperipheriegeräte und -komponenten <br/>
                     in Betracht ziehen. Wir freuen uns darauf, Sie zu bedienen und Ihnen dabei zu helfen, Ihr <br/>
                     Computererlebnis auf die nächste Stufe zu heben.

            </div>
         </div>
    );
}