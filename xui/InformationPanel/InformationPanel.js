import {
    Panel,
    ContentGroup,
    ContentGroupItem,
    Icon,
    Title,
    Text,
    Spacer,
    Button
} from '../';

function InformationPanel(props) {
    let icon, title, text, button;
    if(props.icon) icon = (
        <ContentGroupItem alignItems="center">
            <Icon icon={props.icon} fill={props.iconFill} height="30" width="30" />
        </ContentGroupItem>
    );
    if(props.title) title = (
        <ContentGroupItem alignItems="center">
            <Title>{props.title}</Title>
        </ContentGroupItem>
    );
    if(props.text) text = (
        <ContentGroupItem alignItems="center">
            <Text size="m">{props.text}</Text>
        </ContentGroupItem>
    );
    if(props.button) button = (
        <>
            <Spacer />
            <ContentGroupItem>
                <Button 
                    color="primary"
                    onClick={props.onButtonClick}
                    loading={props.buttonLoading}
                >{props.buttonText}</Button>
            </ContentGroupItem>
        </>
    );

    return (
        <div className="InformationPanelWrapper">
            <div className="InformationPanel">
                <Panel hasBorder>
                    <ContentGroup direction="column">
                        {icon}
                        {title}
                        {text}
                        {button}
                    </ContentGroup>
                </Panel>
            </div>
        </div>
    );
}

export default InformationPanel;