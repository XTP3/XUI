import './FormRow.css';
import '../Theme.css';
import {
    ContentGroup,
    ContentGroupItem,
} from '../';

function FormRow(props) {
    let label, description;
    if(props.label) {
        label = (
            <div className="FormRowLabelWrapper">
                <ContentGroup>
                    <ContentGroupItem justifyContent="space-between" grow={true}>
                        <span className="FormRowLabel">{props.label}</span>
                    </ContentGroupItem>
                </ContentGroup>
            </div>
        );
    } 
    if(props.description) {
        description = (
            <div className="FormRowDescriptionWrapper">
                <ContentGroup>
                    <ContentGroupItem>
                        <span className="FormRowDescription">{props.description}</span>
                    </ContentGroupItem>
                </ContentGroup>
            </div>
        );
    }
    return (
        <div className={props.button ? "FormRow B" : "FormRow"} {...props}>
            {label}
            <ContentGroup id="FormRowChildren">
                <ContentGroupItem>
                    {props.children}
                </ContentGroupItem>
            </ContentGroup>
            {description}
        </div>
    );
}

export default FormRow;