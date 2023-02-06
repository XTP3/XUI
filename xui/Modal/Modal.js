import './Modal.css';
import '../Theme.css'
import {
    Overlay,
    Panel,
    IconButton
} from '../';

function Modal(props) {
    if(props.visible) {
        document.body.style.overflow = "hidden";
        
    }else {
        document.body.style.overflow = "auto";
    }

    function overlayClick(e) {
        e.stopPropagation();
        if(e.target.id === "Modal" && e.target.id !== undefined && !props.noClickClose) props.close();
    }

    function getModalPanelId() {
        let id;

        if(props.form) {
            id = "ModalPanelForm";
            
        }else {
            if(props.responsive || typeof(props.responsive) === "undefined") {
                id = "ModalPanel";
            }else {
                id = "ModalPanelUnresponsive"
            }
        }

        return id;
    }
    
    let closeIcon;
    if(props.closeIcon) closeIcon = <IconButton icon="CloseOutline" size="l" fill="white" id="ModalCloseIcon" onClick={props.close} />;
    
    return (
        <Overlay visible={props.visible} id="ModalOverlay" onClick={overlayClick}>
            <div className="Modal" id="Modal" {...props}>
                <Panel hasShadow id={getModalPanelId()} paddingSize={props.paddingSize}>
                    {closeIcon}
                    {props.children}
                </Panel>
            </div>
        </Overlay>
    );
}

export default Modal;