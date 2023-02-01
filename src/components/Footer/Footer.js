import "./Footer.scss";
import { MdLocationPin } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "../../darkTheme.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-container">
        <div className="f-left">
          <div className="location">
            <MdLocationPin className="icons" />
            <span>Thane, Maharashtra</span>
          </div>

          <div className="phone">
            <BsTelephoneFill className="icons" />
            <span>+91 8097639445</span>
          </div>

          <div className="email">
            <BsFillEnvelopeFill className="icons" />
            <span>pournima2496@gmail.com</span>
          </div>
        </div>
        <div className="f-right">
          <h3>About My Portfolio</h3>
          <p>
            I have created my portfolio to showcase my skills and programming
            knowledge where I used whatever I learned about react and styling. I
            hope you like it.

            <span>
            <br />
              - Creative and responsive desing using sass.
              <br />- Using react hooks and features.
            </span>
            <br />
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/pournima-gaikwad-476810242/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="icons" />
            </a>

            <a
              href="https://github.com/Pournima2496"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="icons" />
            </a>
          </div>
        </div>
      </div>
      <div className="copy">
        <span>copyright&copy;2022</span>
      </div>
    </div>
  );
};

export default Footer;
