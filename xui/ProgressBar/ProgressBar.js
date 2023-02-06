import './ProgressBar.css';
import '../Theme.css';
import {
    Text
} from '../';

function ProgressBar(props) {
    const percent = (props.value / props.max) * 100;
    let wrapperClassName = "ProgressBarWrapper S";
    wrapperClassName += props.size ? props.size : "m";

    let className = "ProgressBar";
    if(props.color) className += " C" + props.color;
    
    let progressText;
    if(props.size === "xl" && props.showProgressText && percent >= 10) progressText = (
        <Text>{Math.trunc(percent) + "%"}</Text>
    );

    return (
        <div className={wrapperClassName}>
            <div className={className} style={{width: percent + '%'}} {...props}>
                {progressText}
            </div>
        </div>
    );
}

export default ProgressBar;