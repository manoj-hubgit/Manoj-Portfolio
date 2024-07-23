import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faBootstrap,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faServer, faDatabase } from "@fortawesome/free-solid-svg-icons";

const skill = [
  {
    id: "1",
    name: "HTML",
    icon: faHtml5,
  },
  {
    id: "2",
    name: "CSS",
    icon: faCss3Alt,
  },
  {
    id: "3",
    name: "JavaScript",
    icon: faJs,
  },
  {
    id: "4",
    name: "Bootstrap",
    icon: faBootstrap,
  },
  {
    id: "5",
    name: "ReactJS",
    icon: faReact,
  },
  {
    id: "6",
    name: "NodeJS",
    icon: faNodeJs,
  },
  {
    id: "7",
    name: "ExpressJS",
    icon: faServer,
  },
  {
    id: "8",
    name: "MongoDB",
    icon: faDatabase,
  },
];

const others = [
  {
    id: "100",
    name: "git",
    icon: faGitAlt,
  },
  {
    id: "101",
    name: "github",
    icon: faGithub,
  },
  {
    id: "102",
    name: "VScode",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
  },
  {
    id: "103",
    name: "Render",
    icon: "https://media.licdn.com/dms/image/D4E0BAQGGDoFoqHtOvA/company-logo_200_200/0/1702595267620/renderco_logo?e=2147483647&v=beta&t=Ywm0UZpTXbiXPopyfCDty8QXSEVz88QWWCwy28qLUyE",
  },
  {
    id: "104",
    name: "Netlify",
    icon: "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
  },
  {
    id: "105",
    name: "Vite",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgKsOUxPZWMr5fghOqf7BbAHH5reNlLpiflw&s",
  },
];

const Skills = () => {
  return (
    <div>
      <h1 className="text-center mt-md-4 py-2">My Skills</h1>
      <div className="container">
        <div className=" skills card p-4">
          <div className="row justify-content-center">
            {skill.map((ele) => {
              return (
                <div key={ele.id} className="col-9 col-md-4 col-lg-3 mb-2 mt-2">
                  <div className="skills card p-3 d-flex flex-row align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={ele.icon}
                      className="skill-icon me-3"
                    />
                    <h5 className="card-title">{ele.name}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <h1 className="text-center mt-md-4 py-2">Others</h1>
      <div className="container">
        <div className="skills card p-4">
          <div className="row justify-content-center">
            {others.map((element) => {
              return (
                <div
                  key={element.id}
                  className="col-9 col-md-4 col-lg-3 mb-2 mt-2"
                >
                  <div className="skills card p-3 d-flex flex-row align-items-center justify-content-center">
                    {typeof element.icon === "string" ? (
                      <img
                        src={element.icon}
                        alt={element.name}
                        className="skill-icon me-3"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={element.icon}
                        className="skill-icon me-3"
                      />
                    )}
                    <h5 className="card-title">{element.name}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
