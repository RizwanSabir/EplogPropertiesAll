import React, { useState } from "react";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import { Col, Row } from "reactstrap";
import { Controller } from "react-hook-form";

const EditorComponent = ({ control }) => {
  return (
    <Controller
      name="blogText"
      control={control}
      defaultValue={EditorState.createEmpty()}
      rules={{ 
        required: "Blog content is required",
        validate: (value) => {
          // Ensure content is not just empty spaces
          const contentLength = value.getCurrentContent().getPlainText().trim().length;
          return contentLength > 0 || "Please enter blog content";
        }
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Row className="justify-content-center">
          <Col md={12}>
          {error && <p className="text-danger">{error.message}</p>}
           
            <div className="App">
              <Editor
                editorState={value}
                onEditorStateChange={(newState) => {
                  onChange(newState);
                }}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
              />
            </div>
          </Col>
        </Row>
      )}
    />
  );
};

export default EditorComponent;