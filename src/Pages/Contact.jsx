import React from "react";
import "./Skills.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  name: "",
  subject: "",
  message: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  name: Yup.string().required("Required"),
  subject: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});
const handleSubmit = (values) => {
  console.log(values);
};

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-11 col-md-6">
          <h2>Contact Me</h2>
          <h4>
          Excited for new opportunities! Let's connect and collaborate.
          </h4>
          <img
            className="cropped-image"
            src="https://static.vecteezy.com/system/resources/previews/002/993/861/original/a-man-receive-and-sending-email-from-laptop-free-vector.jpg"
            alt="contact vector image"
          />
        </div>
        <div className="col-11 col-md-6 mt-md-5">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="form-group">
                <Field
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="form-control border-0"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group">
                <Field
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="form-control border-0"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group">
                <Field
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="form-control border-0"
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group">
                <Field
                  name="message"
                  as="textarea"
                  placeholder="Message"
                  className="form-control-textarea border-0"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary py-2 px-3">
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
