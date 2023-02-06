import './Overlay.css';
import '../Theme.css';

function Overlay(props) {
    if(props.visible) {//used to be within useEffect
        document.body.style.overflow = "hidden";
        
    }else {
        document.body.style.overflow = "auto";
    }

    function overlayClick(e) {
        e.stopPropagation();
        if(e.target.id !== props.exclusionaryID && e.target.id !== undefined && !props.noClickClose) props.close();
    }

    return (
        <div className={props.visible ? "Overlay" : "Overlay Closed"} onClick={overlayClick} {...props}>
            {props.children}
        </div>
    );
}

export default Overlay;