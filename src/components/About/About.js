import { Skills } from "../../constants/images";
import "./About.scss";

const About = () => {
  return (
    <div className="container about" id="about">
      <div className="left">
        <img src={Skills} alt="" width="500px" height="500px" />
      </div>
      <div className="right">
        <h1 className="heading">About Me</h1>
        <p>
        Seeking a challenging position in a reputed organization where I can learn new skills, expand my knowledge, and leverage my learnings. To get an opportunity where I can make the best of my potential and contribute to the organization’s growth.
        </p>

        <div className="popup">
          <span>Qualification: BScIT</span>
        </div>
       
      </div>
    </div>
  );
};

export default About;
