import './ModalTitle.css';
import '../../Theme.css';

function ModalTitle(props) {
    return <span className="ModalTitle">{props.children}</span>;
}

export default ModalTitle;