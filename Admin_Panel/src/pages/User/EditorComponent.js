import React, { useState } from "react";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import draftToHtml from "draftjs-to-html";
import { Col, Row } from "reactstrap";

const EditorComponent = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <Row className="justify-content-center">
      <Col md={12}>
        <div className="App">
          <Editor
            defaultEditorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
          />
        </div>
      </Col>
    </Row>
  );
};

export default EditorComponent;