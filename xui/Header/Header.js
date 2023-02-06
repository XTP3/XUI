import './Header.css';
import '../Theme.css';

function Header(props) {
    let id;
    function classNameGenerator() {
        let className = "Header";

        if(props.fixed) {
            className += " F";
            id = "FixedHeader";
        }

        return className;
    }

    return (
        <div className={classNameGenerator()} {...props} id={id}>
            {props.children}
        </div>
    );
}

export default Header;