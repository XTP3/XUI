import './TextArea.css';
import '../Theme.css';

function TextArea(props) {
    return (
        <textarea className="TextArea" {...props} />
    );
}

export default TextArea;