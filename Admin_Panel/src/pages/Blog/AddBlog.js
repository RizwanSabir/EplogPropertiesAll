import React, { useState, useEffect } from "react";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Form,
  FormGroup,
  Label,
  InputGroup,
  Spinner,
} from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { useForm, Controller } from "react-hook-form";
import EditorComponent from "./EditorComponent";
import FormUpload from "./FormUpload";
import Select from "react-select";
import draftToHtml from "draftjs-to-html";
import axios from 'axios';  // Import axios for making the post request
import { convertToRaw, EditorState } from "draft-js";
import Notify from "./Notification";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const optionGroup = [
  {
    label: "Picnic",
    options: [
      { label: "Mustard", value: "Mustard" },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" }
    ]
  },
  {
    label: "Camping",
    options: [
      { label: "Tent", value: "Tent" },
      { label: "Flashlight", value: "Flashlight" },
      { label: "Toilet Paper", value: "Toilet Paper" }
    ]
  }
];

const AddBlog = ({ product, match, onGetProductDetail }) => {
  const [loading, setLoading] = useState(false); // Loading state

  const navigate = useNavigate(); // Initialize navigate
  const [breadcrumbItems] = useState([
    { title: "Blog", link: "#" },
    { title: "Add Blog", link: "#" }
  ]);

  const { control, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (match && match.params && match.params.id) {
      onGetProductDetail(match.params.id);
    }
  }, [match, onGetProductDetail]);


  const onSubmit = async (data) => {
    setLoading(true); // Start loading
    setTimeout(() => { }, 10000000)
    try {
      const rawContent = convertToRaw(data.blogText.getCurrentContent());
      const htmlContent = draftToHtml(rawContent);
      data.blogText = htmlContent
      console.log(data)
      data.user = "674fe9bf152bc257a7f5dc31"
      const formData = new FormData();


      // Append basic fields (text-based fields)
      formData.append('title', data.title);
      formData.append('author', data.author);
      formData.append('user', "674fe9bf152bc257a7f5dc31");
      formData.append('category', JSON.stringify(data.category));  // Convert category object to string
      formData.append('tags', JSON.stringify(data.tags));          // Convert tags object to string
      formData.append('blogText', data.blogText);
      formData.append('likes', data.likes || 0);

      // Handle the featuredImage as a file URL (if the image is being sent as a URL)
      if (data.featuredImage) {
        console.log("Fetured iamge is ")
        console.log(data.featuredImage[0])
        formData.append('featuredImage', data.featuredImage[0]);  // Append image URL as text
      }

      // Handle the comments (You may need to decide how you want to send these)
      if (data.comments && Array.isArray(data.comments)) {
        formData.append('comments', JSON.stringify(data.comments));  // Convert the comments array to string
      }


      const response = await axios.post(`${process.env.REACT_APP_SERVER}/api/blogs/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // This is important for file uploads
        },
      });

      alert("Added Successfully")
      toast.success("Blog Added Successfully", {
        position: "top-right",
      });
      navigate("/blogs");

    } catch (error) {
      alert("there is an error")
      toast.error("There was an error", {
        position: "top-right",
      });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Add Blog" breadcrumbItems={breadcrumbItems} />
          <Col xl="12">
            <Card>
              <CardBody>
                <h4 className="card-title">New Blog</h4>
                <p className="card-title-desc">Add the Content of the new Blog</p>
                {loading ? (<div className="text-center my-5">
                  <Spinner color="primary" /> {/* Reactstrap Spinner */}
                  <p>Loading, please wait...</p>
                </div>) : (<form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
                  <Row>
                    <Col md="6">
                      <div className="mb-3">
                        <Label className="form-label" htmlFor="title">Blog title</Label>
                        <Controller
                          name="title"
                          control={control}
                          defaultValue=""
                          rules={{ required: "Blog title is required" }}
                          render={({ field }) => (
                            <input
                              {...field}
                              placeholder="Blog title"
                              type="text"
                              className="form-control"
                              id="title"
                            />
                          )}
                        />
                        {errors.title && <p className="text-danger">{errors.title.message}</p>}
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="12">
                      <Card>
                        <CardBody>
                          <form>
                            <Row>
                              <Col md="12">
                                <div className="mb-3">
                                  <Label className="form-label" htmlFor="author">Author</Label>
                                  <Controller
                                    name="author"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Author is required" }}
                                    render={({ field }) => (
                                      <input
                                        {...field}
                                        placeholder="Author"
                                        type="text"
                                        className="form-control"
                                        id="author"
                                      />
                                    )}
                                  />
                                  {errors.author && <p className="text-danger">{errors.author.message}</p>}
                                </div>
                              </Col>


                              <Col lg="6" className="mb-3">
                                <Label className="form-label">Category</Label>
                                <Controller
                                  name="category"
                                  control={control}
                                  rules={{
                                    required: "Category is required",
                                    validate: (value) => value !== null || "Please select a category"
                                  }}
                                  render={({ field }) => (
                                    <>
                                      <Select
                                        {...field}
                                        options={optionGroup}
                                        classNamePrefix="select2-selection"
                                        placeholder="Select Category"
                                      />
                                      {errors.category && (
                                        <p className="text-danger">{errors.category.message}</p>
                                      )}
                                    </>
                                  )}
                                />
                              </Col>

                              {/* Tags Selection with Validation */}
                              <Col lg="6">
                                <Label className="form-label">Tags</Label>
                                <Controller
                                  name="tags"
                                  control={control}
                                  rules={{
                                    required: "At least one tag is required",
                                    validate: (value) =>
                                      (value !== null && value.length > 0) || "Please select at least one tag"
                                  }}
                                  render={({ field }) => (
                                    <>
                                      <Select
                                        {...field}
                                        isMulti
                                        options={optionGroup}
                                        classNamePrefix="select2-selection"
                                        placeholder="Select Tags"
                                      />
                                      {errors.tags && (
                                        <p className="text-danger">{errors.tags.message}</p>
                                      )}
                                    </>
                                  )}
                                />
                              </Col>
                            </Row>
                          </form>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

                  <EditorComponent control={control} />
                  <FormUpload control={control} />
                  <Button color="primary" type="submit">Submit form</Button>

                </form>)}
              </CardBody>
            </Card>
          </Col>
        </Container>

      </div>
    </React.Fragment>
  );
};

export default AddBlog;
