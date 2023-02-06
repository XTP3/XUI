import './Checkbox.css';
import '../Theme.css';
import { IDGen } from '../';

function Checkbox(props) {
    const id = IDGen();

    return (
        <div className="CheckboxWrapper">
            <input className="Checkbox" type="checkbox" id={id} name={id} {...props} />
            <div className="CheckboxSquare" />
            <label className="CheckboxLabel" htmlFor={id}>{props.label}</label>
        </div>
    );
}

export default Checkbox;