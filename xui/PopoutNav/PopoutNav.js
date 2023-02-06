import './PopoutNav.css';
import '../Theme.css';
import { Overlay, Panel } from '../';

function PopoutNav(props) {
    return (
        <Overlay visible={props.visible} exclusionaryID="PopoutNavPanel" {...props}>
            <div className="PopoutNavWrapper">
                <Panel hasShadow id="PopoutNavPanel">
                    {props.children}
                </Panel>
            </div>
        </Overlay>
    );
}

export default PopoutNav;