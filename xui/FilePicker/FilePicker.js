import './FilePicker.css';
import '../Theme.css';
import {
    ContentGroup,
    ContentGroupItem,
    IconButton,
    Icon,
    EmptyButton,
    IDGen
} from '../';

const FileInfoText = (props) => <span className="FileInfoText">{props.children}</span>;

function FilePicker(props) {
    const id = IDGen();
    const onDragOver = (e) => e.preventDefault();
    function clearFilesIntercept(e) {
        document.getElementById(id).value = "";
        props.clearFiles(e);
    }

    function FilePickerInfo() {
        if(props.files.length > 0) {
            if(props.files.length === 1) {
                return (
                    <FileInfoText>{props.files[0].name}</FileInfoText>
                );
            }else {
                return (
                    <FileInfoText>{props.files.length} files selected</FileInfoText>
                );
            }
        }else {
            return (
                <>
                    <FileInfoText>{props.placeholder ? props.placeholder : "Click or drag and drop file(s) here"}</FileInfoText>
                </>
            );
        }
    }

    if(props.expanded) {
        let expandedFilePickerClearButton;
        if(props.files.length > 0) {
            expandedFilePickerClearButton = (
                <ContentGroupItem justifyContent="center" alignItems="center" id="FilePickerExtendedClearButton">
                    <div><EmptyButton color="primary" small onClick={clearFilesIntercept}>Clear</EmptyButton></div>
                </ContentGroupItem>
            );
        }
        return (
            <div className="FilePickerWrapper E" onDragOver={onDragOver}>
                <input type="file" id={id} className="FilePicker" {...props} onInput={props.onInput} />
                <div className="FilePickerInfo">
                    <ContentGroup direction="column" rowGap="s" responsive={false} id="FilePickerInfoContentGroup">
                        <ContentGroupItem alignItems="center" justifyContent="center">
                            <Icon icon="CloudUploadOutline" fill="white" height="32" width="32" paddingSize="l" />
                        </ContentGroupItem>
                        <ContentGroupItem justifyContent="center" alignItems="center">
                            <FilePickerInfo />
                        </ContentGroupItem>
                        {expandedFilePickerClearButton}
                    </ContentGroup>
                </div>
            </div>
        );

    }else {
        let filePickerClearButton;
        if(props.files.length > 0) {
            filePickerClearButton = (
                <ContentGroupItem grow={false} id="FilePickerClearButton">
                    <IconButton icon="CloseOutline" size="l" fill="red" onClick={clearFilesIntercept} />
                </ContentGroupItem>
            );
        }
        return (
            <div className="FilePickerWrapper" onDragOver={onDragOver}>
                <input type="file" id={id} className="FilePicker" {...props} onInput={props.onInput} />
                <div className="FilePickerInfo">
                    <ContentGroup columnGap="none" responsive={false} id="FilePickerInfoContentGroup">
                        <ContentGroupItem grow={false} justifyContent="center">
                            <Icon icon="CloudUploadOutline" fill="white" height="24" width="24" paddingSize="l" />
                        </ContentGroupItem>
                        <ContentGroupItem justifyContent="center" id="FilePickerInfoContentGroupItem">
                            <FilePickerInfo />
                        </ContentGroupItem>
                        {filePickerClearButton}
                    </ContentGroup>
                </div>
            </div>            
        );
    }
}

export default FilePicker;