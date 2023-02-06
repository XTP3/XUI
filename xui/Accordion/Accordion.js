import './Accordion.css';
import {
    Text,
    ContentGroup,
    ContentGroupItem,
} from '../'
import { useState } from 'react';

function Accordion(props) {
    const [extended, setExtended] = useState(props.initialIsOpen);
    return (
        <div className="Accordion">
            <div className="AccordionHeader">
                <ContentGroup direction="row" alignItems="center" responsive={false}>
                    <ContentGroupItem grow={false}>
                        
                    </ContentGroupItem>
                    <ContentGroupItem grow={false}>
                        {props.title}
                    </ContentGroupItem>
                </ContentGroup>
            </div>
            <div className="AccordionChildren">
                {props.children}
            </div>
        </div>
    );
}

export default Accordion;