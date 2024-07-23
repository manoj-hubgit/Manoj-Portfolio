import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faGraduationCap,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const CustomTypewriter = ({ text, speed, delay }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeOutId;

    if (isDeleting) {
      if (index > 0) {
        timeOutId = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        }, speed);
      } else {
        setIsDeleting(false);
        timeOutId = setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
        }, delay);
      }
    } else {
      if (index < text.length) {
        timeOutId = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        }, speed);
      } else {
        timeOutId = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      }
    }

    return () => clearTimeout(timeOutId);
  }, [index, text, speed, delay, isDeleting]);

  return (
    <div className="typewriter">
      <div className="typewriter-container">
        <h2>
          {displayedText}
          <Cursor />
        </h2>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <section className="home-section">
        <div className="container">
          <div className="row align-items-center py-4 g-5 flex-sm-row-reverse">
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <img
                className="profileImage h-75 w-75"
                src="https://github.com/manoj-hubgit/portfolioImages/blob/main/portfolioImage.jpg?raw=true"
                alt="ProfileImage"
              />
            </div>
            <div className="col-12 col-md-6">
              <div className="text-center text-md-start">
                <h1>Hello! I'm MANOJ A.</h1>
                <h2>I'm a passionate </h2>
                <CustomTypewriter
                  text="Full Stack Web Developer."
                  speed={100}
                  delay={2000}
                />

                <p>
                  I specialize in the MERN stack. With a strong foundation in
                  both frontend and backend development, I create dynamic,
                  user-friendly, and efficient web applications.
                </p>
                <div className="fw-bold px-5 py-3 mt-3 fs-5">
                  <a href=""><button className="btn btns">Resume</button></a>
                  
                  <Link to="/skills">
                    <button className="btn btns">Skills</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="education-section">
        <div className="container py-4">
          <div className="row justify-content-center">
            <h1 className="text-center">Education</h1>
            <div className="col-sm-9 col-md-6 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-header">
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    className="icon icon-school"
                  />
                  <h5 className="card-title">
                    Guvi Geek Network Private Limited
                  </h5>
                </div>
                <div className="card-body">
                  <h6>Full Stack Web Development</h6>
                  <p>2024</p>
                  <p className="card-text p-4">
                    Learning MERN stack development has been a transformative
                    experience, enabling me to build dynamic and efficient web
                    applications. Mastering MongoDB for flexible data storage,
                    Express.js for streamlined server-side logic, React for
                    responsive user interfaces, and Node.js for high-performance
                    backend development has equipped me with the skills to
                    create full-stack applications. This journey has honed my
                    ability to develop scalable, robust, and interactive
                    solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-9 col-md-6 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-header">
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="icon icon-degree"
                  />
                  <h5 className="card-title">
                    Bannari Amman Institute of Technology
                  </h5>
                </div>
                <div className="card-body">
                  <h6>Bachelor of Engineering - BE, Agriculture Engineering</h6>
                  <p>2019-2023</p>
                  <p className="card-text">
                    As an agricultural engineer, my journey into the world of
                    computers began in college, where I learned web development.
                    This experience sparked my interest in how technology can
                    revolutionize agriculture. Combining my engineering
                    background with web development skills has allowed me to
                    create innovative solutions for the agricultural sector,
                    such as data-driven applications for precision farming,
                    resource management, and sustainable practices. Embracing
                    this technological journey has empowered me to contribute
                    meaningfully to the intersection of agriculture and
                    technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-9 col-md-6 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-header">
                  <FontAwesomeIcon
                    icon={faSchool}
                    className="icon icon-school"
                  />
                  <h5 className="card-title">
                    St John's Matriculation Higher Secondary School
                  </h5>
                </div>
                <div className="card-body">
                  <h6>HSC- XII(std) (Maths-Computer Science)</h6>
                  <p>2019</p>
                </div>
              </div>
            </div>

            <div className="col-sm-9 col-md-6 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-header">
                  <FontAwesomeIcon
                    icon={faSchool}
                    className="icon icon-school"
                  />
                  <h5 className="card-title">
                    Rose Mary Matriculation Higher Secondary School
                  </h5>
                </div>
                <div className="card-body">
                  <h6>SSLC - Xth(std)</h6>
                  <p>2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 d-flex justify-content-center d-none d-md-block">
              <img
                src="https://png.pngtree.com/png-vector/20220811/ourmid/pngtree-businessman-hand-shaking-for-the-collaboration-png-image_6104218.png"
                alt=""
              />
            </div>
            
            <div className="col-md-6 col-sm-11 text-sm-center">
              <h3 className="text-center">Reason To Hire Me</h3>
              <p>
                As a proficient MERN stack developer, I bring a comprehensive
                skill set in MongoDB, Express.js, React, and Node.js to deliver
                robust, scalable, and efficient web applications. My hands-on
                experience with these technologies allows me to build end-to-end
                solutions that meet modern web standards and exceed client
                expectations.By hiring me, you gain a developer who is
                passionate about technology, committed to quality, and driven to
                contribute meaningfully to your project's success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
