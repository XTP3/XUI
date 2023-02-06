import './PageHeader.css';
import '../Theme.css';

function PageHeader(props) {
    return (
        <div className={props.bottomBar ? "PageHeader BottomBar" : "PageHeader"} {...props}>
            {props.children}
        </div>
    );
}

export default PageHeader; 