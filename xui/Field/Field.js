import './Field.css';
import '../Theme.css';

function Field(props) {
    let wrapperClassName = "FieldWrapper", fieldClassName = "Field";
    if(props.fullWidth) wrapperClassName += " F";
    if(props.prepend) fieldClassName += " NTI";

    return (
        <div className={wrapperClassName}>
            {props.prepend}
            <input className={fieldClassName} {...props} />
            {props.append}
        </div>
    );
}

export default Field;