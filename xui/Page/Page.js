import './Page.css';
import '../Theme.css';
import { Panel } from '../';
import { useEffect, useState } from 'react';

function Page(props) {
    const [fixedHeader, setFixedHeader] = useState(false);
    const isFixedHeader = window.document.getElementById("FixedHeader");

    useEffect(() => {
        if(window.document.getElementById("FixedHeader")) setFixedHeader(true);
    }, [isFixedHeader]);

    function classNameGenerator() {
        let className = "Page";

        if(fixedHeader) className += " H";

        return className;
    }

    let pageHeader, pageFooter;
    if(props.pageHeader) {
        pageHeader = (
            <>
                {props.pageHeader}
            </>
        );
    }

    let sideNav;
    if(props.sideNav) sideNav = props.sideNav;

    return (
        <div className={classNameGenerator()} {...props}>
            <div className={props.sideNav ? "PageWrapper SN" : "PageWrapper"}>
                {sideNav}
                <Panel paddingSize={props.paddingSize}>
                    {pageHeader}
                    <div className="PageContentWrapper">
                        {props.children}
                    </div>
                    {pageFooter}
                </Panel>
            </div>
        </div>
    );
}

export default Page;