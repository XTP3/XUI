import './Avatar.css';
import '../Theme.css';

function Avatar(props) {
    function classNameGenerator() {
        let className = "Avatar";

        if(props.size) {
            className += " S" + props.size;

        }else {
            className += " Sm";
        }

        return className;
    }

    let name, style;
    if(props.name && !props.imageUrl) name = <span>{props.name.charAt(0).toUpperCase()}</span>;
    if(props.imageUrl) {
        style = {"background-image": "url(" + props.imageUrl + ")"};
        
    }else {
        style = {"background-color": "rgb(238, 120, 157)"};
    }

    return (
        <div className={classNameGenerator()} {...props} style={style}>
            {name}
        </div>
    );
}

export default Avatar;