import './EmptyButton.css';

function EmptyButton(props) {
    function classNameGenerator() {
        let className = "EmptyButton";

        if(props.color) {
            className += " C" + props.color;

        }else {
            className += " Ctext";
        }

        if(props.small) className += " S";
        
        return className;
    }

    return (
        <div className={classNameGenerator()} {...props}>
            <div className="EmptyButtonTextWrapper">
                {props.children}
            </div>
        </div>
    );
}

export default EmptyButton;