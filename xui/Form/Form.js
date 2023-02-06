import './Form.css';

function Form(props) {
    return (
        <form class="Form" {...props}>
            {props.children}
        </form>
    );
}

export default Form;