import "./Project.scss";
import "../../darkTheme.scss"

const Project = ({ closeModal, img, title, date, d_links, g_links, desc }) => {
  return (
    <div className="project">
      <div className="modal">
        <div className="top">
          <div className="title">{title}</div>
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="center">
          <img src={img} alt="loading" />
        </div>
        <div className="bottom">
          <span>{date}</span>
          <p>{desc}</p>
          <div className="btn-links">
            <button className="btn">
              <a href={d_links} target="_blank" rel="noreferrer">
                Project Link
              </a>
            </button>
            <button className="btn">
              <a href={g_links} target="_blank" rel="noreferrer">
                Github Link
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
