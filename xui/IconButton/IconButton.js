import './IconButton.css';
import '../Theme.css';
import { Icon, Loading } from '..';

function    IconButton(props) {
    function classNameGenerator() {
        let className = "IconButton";

        if(props.size) {
            className += " S" + props.size;

        }else {
            className += " Sl";
        }

        if(props.color) className += " C" + props.color;
        if(props.alwaysFilled) className += " AF";
        if(props.filled) className += " F";
        if(props.empty) className += " E";

        return className;
    }

    function iconSize() {
        const iconSizes = {
            "s": 16,
            "m": 18,
            "l": 24
        }

        let size = 16;
        if(props.size) size = iconSizes[props.size];

        return size;
    }

    return (
        <div className={classNameGenerator()} onClick={props.onClick} {...props}>
            <div className="IconButtonIcon" >
                {props.loading ? <Loading fill="white" height={iconSize()} width={iconSize()} {...props} /> : <Icon icon={props.icon} fill={props.fill} height={iconSize()} width={iconSize()} />}
            </div>
        </div>
    );
}

export default IconButton;
