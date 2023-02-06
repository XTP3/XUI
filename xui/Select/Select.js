import './Select.css';

function Select(props) {
    return (
        <div className="SelectWrapper">
            <select className="Select">
                {props.children}
            </select>
        </div>
    );
}

export default Select;