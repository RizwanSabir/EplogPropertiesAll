import React, { useState } from "react";
import { Row, Col, Card, Form, CardBody, CardTitle, Container } from "reactstrap";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";
import { Controller } from "react-hook-form";

const FormUpload = ({ control }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleAcceptedFiles = (files) => {
    const processedFiles = files.map(file => 
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size)
      })
    );

    setSelectedFiles(processedFiles);
  };

  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i];
  };

  return (
    <Controller
      name="featuredImage"
      control={control}
      rules={{ 
        required: "Featured image is required",
        validate: (value) => value && value.length > 0 || "Please upload an image"
      }}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <div>
          <Card>
            <CardBody>
              <CardTitle className="h4">Featured Image</CardTitle>
              <Form>
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    handleAcceptedFiles(acceptedFiles);
                    onChange(acceptedFiles);
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div className="dropzone">
                      <div
                        className="dz-message needsclick"
                        {...getRootProps()}
                      >
                        <input {...getInputProps()} />
                        <div className="mb-3">
                          <i className="display-4 text-muted ri-upload-cloud-2-line"></i>
                        </div>
                        <h4>Drop files here or click to upload.</h4>
                      </div>
                    </div>
                  )}
                </Dropzone>
                {error && <p className="text-danger">{error.message}</p>}
                
                <div className="dropzone-previews mt-3" id="file-previews">
                  {selectedFiles.map((f, i) => (
                    <Card
                      className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                      key={i + "-file"}
                    >
                      <div className="p-2">
                        <Row className="align-items-center">
                          <Col className="col-auto">
                            <img
                              height="80"
                              className="avatar-sm rounded bg-light"
                              alt={f.name}
                              src={f.preview}
                            />
                          </Col>
                          <Col>
                            <Link to="#" className="text-muted fw-bold">
                              {f.name}
                            </Link>
                            <p className="mb-0">
                              <strong>{f.formattedSize}</strong>
                            </p>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                  ))}
                </div>
              </Form>
            </CardBody>
          </Card>
        </div>
      )}
    />
  );
};

// const rawContent = convertToRaw(editorState.getCurrentContent());
// const htmlContent = draftToHtml(rawContent);

export default FormUpload;