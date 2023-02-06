import './Button.css';
import '../Theme.css';
import { 
    Loading
} from '../';

function Button(props) {
    function classNameGenerator() {
        let className = "Button";
        if(props.loading) {
            className += " L";
        }else {
            if(props.color) {
                className += " C" + props.color;

            }else {
                className += " Cprimary";
            }
        }
        if(props.filled) className += " F";
        if(props.outline) className += " O";
        if(props.spreadContent) className += " SC";
        if(props.empty) className += " E";

        return className;
    }
    let loading, children, iconLeft, iconRight;
    if(props.loading) loading = <Loading height="20" width="20" paddingSize="s" />;
    if(props.loading || props.children) children = <div className="ButtonTextWrapper">{props.loading ? "Loading..." : props.children}</div>
    if(props.iconLeft && !props.loading) iconLeft = props.iconLeft;
    if(props.iconRight && !props.loading) iconRight = props.iconRight;
    
    return (
        <div className={classNameGenerator()} {...props}>
            {loading}
            {iconLeft}
            {children}
            {iconRight}
        </div>
    );
}

export default Button; 