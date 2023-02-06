import './PageFooter.css';

function PageFooter(props) {
    return (
        <div className="PageFooter" {...props}>
            {props.children}
        </div>
    );
}

export default PageFooter;