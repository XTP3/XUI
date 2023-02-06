import './Dropdown.css';
import '../Theme.css';
import { Icon } from '../';

function Dropdown(props) {
    return (
        <div className="Dropdown">
            {props.anchor}
            <div className="DropdownContentWrapper">
                <div className="DropdownContentArrow">
                    <Icon icon="ArrowUp" fill="grey" height="15" width="15" />
                </div>
                <div className="DropdownContent">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Dropdown;