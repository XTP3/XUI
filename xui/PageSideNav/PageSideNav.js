import './PageSideNav.css';
import {
    ContentGroup,
    ContentGroupItem,
    EmptyButton,
    Icon
} from '../';
import { useState } from 'react';

function PageSideNav(props) {
    const [expanded, setExpanded] = useState(false);
    let className = "PageSideNav";
    if(expanded) className += " E";

    return (
        <>
            <div className="PageSideNavToggle" onClick={() => setExpanded(!expanded)}>
                <ContentGroup responsive={false}>
                    <ContentGroupItem>
                        <div><EmptyButton color="primary">Navigate</EmptyButton></div>
                    </ContentGroupItem>
                    <ContentGroupItem grow={false} justifyContent="center">
                        <Icon icon="ArrowIosDownwardOutline" fill="white" height="24" width="24" paddingSize="l" style={{'transform': 'rotate(180deg)'}} />
                    </ContentGroupItem>
                </ContentGroup>
            </div>
            <div className={className} {...props}>
                {props.children}
            </div>
        </>
    );
}

export default PageSideNav;