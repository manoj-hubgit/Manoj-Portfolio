import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <section className="home-section">
      <div className="container">
        <div className="row align-items-center py-4 g-5">
          <div className="col-12 col-md-6">
            <div className="text-center text-md-start">
              <h1>Hello! I'm MANOJ A.</h1>
              <h2>I'm a passionate</h2>
              <h2>Full Stack Web Developer</h2>
              <p>
                I specialize in the MERN stack. With a strong foundation in both
                frontend and backend development, I create dynamic,
                user-friendly, and efficient web applications.
              </p>
              <div className="fw-bold px-5 py-3 mt-3 fs-5">
                <button className="btn">Resume</button>
                <Link to='/skills'><button className="btn">Skills</button></Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 align-items-center">
            <img
              className="profileImage h-75 w-75"
              src="https://github.com/manoj-hubgit/portfolioImages/blob/main/portfolioImage.jpg?raw=true"
              alt="ProfileImage"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
