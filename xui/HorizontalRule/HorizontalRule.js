import './HorizontalRule.css';

function HorizontalRule(props) {
    function classNameGenerator() {
        let className = "HorizontalRule";
        if(props.size) {
            className += " S" + props.size;

        }else {
            className += " Ss"
        }
        return className;
    }

    return <div className={classNameGenerator()} {...props} />;
}

export default HorizontalRule;