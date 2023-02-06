import './Text.css';

function Text(props) {
    function classNameGenerator() {
        let className = "Text";

        if(props.size) {
            className += " S" + props.size;

        }else {
            className += " Sm";
        }

        return className;
    }

    return (
        <span className={classNameGenerator()} {...props}>{props.children}</span>
    );
}

export default Text;