import './ContentGroup.css';
import '../Theme.css';

function ContentGroup(props) {
    function classNameGenerator() {
        let className = "ContentGroup";
        
        if(props.direction) {
            className += " D" + props.direction;

        }else {
            className += " Drow";
        }

        if(props.rowGap) {
            className += " RG" + props.rowGap;
            
        }else {
            className += " RGm"
        }

        if(props.columnGap) {
            className += " CG" + props.columnGap;

        }else {
            className += " CGm";
        }

        if(props.responsive !== undefined && !props.responsive) { //If a group direction is row & unresponsive, just leave row  
            className += " NR";

        }else {
            className += " R";
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

export default ContentGroup;