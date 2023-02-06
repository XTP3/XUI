import './Title.css';

function Title(props) {
    function classNameGenerator() {
        let className = "Title";

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

export default Title;