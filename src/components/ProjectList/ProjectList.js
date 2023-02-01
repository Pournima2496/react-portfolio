import "./ProjectList.scss";
import "../../darkTheme.scss"
import { useState } from "react";
import { projectInfo } from "../../constants/projectInfo";
import Project from "../Project/Project";

const ProjectList = () => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);

  const getData = (image, title, date, d_links, g_links, desc) => {
    let tempData = [image, title, date, d_links, g_links, desc];
    setData((item) => [1, ...tempData]);
    return setModal(true);
  };
  return (
    <div className="projects" id="projects">
      <h1 className="heading">Projects</h1>
      <div className="cards">
        {projectInfo.map((info) => (
          <div className="card" key={info.id}>
            <img src={info.image} alt="loading" width="300px" height="200px" />

            <h2
              onClick={() =>
                getData(
                  info.image,
                  info.title,
                  info.date,
                  info.links.d_link,
                  info.links.g_link,
                  info.desc
                )
              }
            >
              {info.title}
            </h2>
          </div>
        ))}
      </div>
      {modal === true ? (
        <Project
          closeModal={setModal}
          img={data[1]}
          title={data[2]}
          date={data[3]}
          d_links={data[4]}
          g_links={data[5]}
          desc={data[6]}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ProjectList;
