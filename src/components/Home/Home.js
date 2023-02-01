import "./Home.scss";
import { BG, Resume } from "../../constants/images";

const Home = () => {
  return (
    <div className="container home" id="home">
      <div className="left">
        <h1>
          Hi,
          I am 
          <br className="break" /> Pournima Gaikwad
        </h1>
        <h1 className="heading">Frontend Developer</h1>
        <br />
        <button className="btn" >
          <a href={Resume} target="_blank" rel="noreferrer" >Download CV</a>
        </button>
        <button className="btn">
          <a href="#contact">Contact Me</a>
        </button>
      </div>
      <div className="right">
        <img src={BG} alt="" />
      </div>
    </div>
  );
};

export default Home;
