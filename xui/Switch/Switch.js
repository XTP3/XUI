import './Switch.css';
import '../Theme.css';

function Switch(props) {
    let label;
    if(props.label) label = <span className="SwitchLabel">{props.label}</span>;

    return (
        <div>
            <label className="Switch">
                <input type="checkbox" className="SwitchInput" {...props} />
                <span className="Slider" />
            </label>
            {label}
        </div>
    );
}

export default Switch;