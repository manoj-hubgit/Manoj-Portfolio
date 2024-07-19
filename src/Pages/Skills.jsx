// import React from "react";
// import "./Skills.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHtml5, faCss3Alt, faJs, faBootstrap, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
// import { faServer, faDatabase } from "@fortawesome/free-solid-svg-icons";

// const skill = [
//   {
//     id: "1",
//     name: "HTML",
//     icon: faHtml5,
//   },
//   {
//     id: "2",
//     name: "CSS",
//     icon: faCss3Alt,
//   },
//   {
//     id: "3",
//     name: "JavaScript",
//     icon: faJs,
//   },
//   {
//     id: "4",
//     name: "Bootstrap",
//     icon: faBootstrap,
//   },
//   {
//     id: "5",
//     name: "ReactJS",
//     icon: faReact,
//   },
//   {
//     id: "6",
//     name: "NodeJS",
//     icon: faNodeJs,
//   },
//   {
//     id: "7",
//     name: "ExpressJS",
//     icon: faServer,
//   },
//   {
//     id: "8",
//     name: "MongoDB",
//     icon: faDatabase,
//   },
// ];

// const Skills = () => {
//   return (
//     <div>
//       <h1 className="text-center py-5">My Skills</h1>
//       <div className="container">
//         <div className="row">
//           {skill.map((ele) => {
//             return (
//               <div key={ele.id} className="col-12 col-md-4 col-lg-3 mb-4">
//                 <div className="card text-center p-3">
//                   <div className="card-body">
//                     <FontAwesomeIcon icon={ele.icon} className="skill-icon mb-2" />
//                     <h5 className="card-title">{ele.name}</h5>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faBootstrap, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
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

const Skills = () => {
  return (
    <div>
      <h1 className="text-center py-5">My Skills</h1>
      <div className="container">
        <div className="row justify-content-center">
          {skill.map((ele) => {
            return (
              <div key={ele.id} className="col-9 col-md-4 col-lg-3 mb-4">
                <div className="card p-3 d-flex flex-row align-items-center justify-content-center">
                  <FontAwesomeIcon icon={ele.icon} className="skill-icon me-3" />
                  <h5 className="card-title">{ele.name}</h5>
                </div>
              </div>  
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;


           

