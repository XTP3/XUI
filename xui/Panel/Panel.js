import './Panel.css';
import '../Theme.css';

function Panel(props) {
    function classNameGenerator() {
        let className = "Panel";
        if(props.paddingSize) {
            className += " P" + props.paddingSize;

        }else {
            className += " Pm";
        }

        if(props.hasShadow) className += " HS";
        if(props.grow !== undefined && !props.grow) className += " NoGrow";
        if(props.hasBorder) className += " HB";
        if(props.subdued) className += " S";

        return className;
    }

    return (
        <div className={classNameGenerator()} {...props}>
            {props.children}
        </div>
    );
}

export default Panel;