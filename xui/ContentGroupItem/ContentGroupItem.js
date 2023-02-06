import './ContentGroupItem.css';

function ContentGroupItem(props) {
    function classNameGenerator() {
        let className = "ContentGroupItem";

        if(props.direction) {
            className += " D" + props.direction;

        }else {
            className += " Dcolumn";
        }
        
        if(props.grow !== undefined && !props.grow) {
            className += " NoGrow"

        }else {
            className += " Grow"
        }
        
        if(props.justifyContent) className += " JC" + props.justifyContent;
        if(props.alignItems) className += " AI" + props.alignItems;

        return className;
    }

    return (
        <div className={classNameGenerator()} {...props}>
            {props.children}
        </div>
    );
}

export default ContentGroupItem;