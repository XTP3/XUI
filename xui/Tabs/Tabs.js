import './Tabs.css';
import '../Theme.css';

function Tabs(props) {
    function classNameGenerator() {
        let className = "Tabs";

        if(props.justifyContent) className += " JC" + props.justifyContent;

        return className;
    }

    return (
        <div className={classNameGenerator()} {...props}>
            {props.children}
        </div>
    );
}

export default Tabs;