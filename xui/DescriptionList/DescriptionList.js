import './DescriptionList.css';
import '../Theme.css';

function DescriptionList(props) {

    return (
        <dl className="DescriptionList">
            {
                Object.keys(props.items).map(item => 
                    <>
                        <dt className="DescriptionListTitle">{props.items[item].title}</dt>
                        <dd className="DescriptionListDescription">{props.items[item].description}</dd>
                    </>
                )
            }
        </dl>
    );
}

export default DescriptionList;