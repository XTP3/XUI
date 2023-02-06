import './Spacer.css';

function Spacer(props) {
    return (
        <div className={props.size ? "Spacer S" + props.size : "Spacer Sm"} />
    );
}

export default Spacer;