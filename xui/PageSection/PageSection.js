import './PageSection.css';

function PageSection(props) {
    return (
        <div 
            className={props.paddingSize ? "PageSection PS" + props.paddingSize : "PageSection PSs"}
            {...props}
        >
            {props.children}
        </div>
    );
}

export default PageSection;