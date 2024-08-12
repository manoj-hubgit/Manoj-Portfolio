import React from "react";
import "./Skills.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import swal from 'sweetalert';
import * as Yup from "yup";

const initialValues = {
  email: "",
  name: "",
  message: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  name: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});

const Contact = () => {
  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    Object.keys(values).forEach(key => formData.append(key, values[key]));
    formData.append("access_key", "120911db-db41-4e5a-9247-63bf36d50443");

    const json = JSON.stringify(Object.fromEntries(formData.entries()));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        swal({
          title: "Success!!!",
          text: "Your message was sent successfully 🎉",
          icon: "success",
        });
        resetForm();
      } else {
        swal({
          title: "Error",
          text: "There was an issue submitting your message 😔",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      swal({
        title: "Error",
        text: "There was an error submitting your message 😔",
        icon: "error",
      });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-11 col-md-6">
          <h2>Contact Me</h2>
          <h4>Excited for new opportunities! Let's connect and collaborate.</h4>
          <div className="image-container">
            <img
              className="cropped-image"
              src="https://static.vecteezy.com/system/resources/previews/002/993/861/original/a-man-receive-and-sending-email-from-laptop-free-vector.jpg"
              alt="contact vector image"
            />
          </div>
        </div>
        <div className="col-11 col-md-6 mt-md-5">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ resetForm }) => (
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
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
