import './Tab.css';
import '../Theme.css';

function Tab(props) {
    function classNameGenerator() {
        let className = "Tab";

        if(props.active) className += " A";

        return className;
    }

    let children;
    if(props.children) children = <div className="TabContentWrapper">{props.children}</div>;

    return (
        <div className={classNameGenerator()} {...props}>
            {props.iconLeft}
            {children}
            {props.iconRight}
        </div>
    );
}

export default Tab;