import Title from "../../components/title/Title";
import "./home.css";
import Work from "../../components/workBox/Work";
import Member from "../../components/memberBox/Member";
import Review from "../../components/reviewBox/Review";
import { useEffect } from "react";

const Home = () => {
  return (
    <>
      <Landing />
      <TeamWork />
      <TeamMembers />
      <Reviews />
      <Hiring />
    </>
  );
};

function Landing() {
  return (
    <div className="home" id="home">
      <div className="container">
        <div
          className="home-text"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h1>
            Build <span>anything</span> you want
          </h1>
          <p>
            Legacy Code is a team of experts in web development and graphic
            design, delivering innovative and high-quality digital solutions.
          </p>
        </div>
        <div className="home-img" data-aos="fade-up" data-aos-duration="1200">
          <img
            src={process.env.PUBLIC_URL + "/assets/landing.png"}
            alt="home"
          />
        </div>
      </div>
    </div>
  );
}

function TeamWork() {
  return (
    <div className="work" id="work">
      <Title text={"Work"} number={"1"} />
      <div className="container">
        <div className="work-boxes">
          <Work
            image={"/assets/work.png"}
            name={"Legacy Code"}
            type={"React"}
            link={"https://xalphaend.vercel.app/"}
            duration={"1200"}
          />
          <Work
            image={"/assets/work.png"}
            name={"Legacy Code"}
            type={"React"}
            link={"https://xalphaend.vercel.app/"}
            duration={"1400"}
          />
          <Work
            image={"/assets/work.png"}
            name={"Legacy Code"}
            type={"React"}
            link={"https://xalphaend.vercel.app/"}
            duration={"1800"}
          />
        </div>
      </div>
    </div>
  );
}

function TeamMembers() {
  return (
    <div className="members">
      <Title text={"Members"} number={"2"} />
      <div className="container">
        <div className="member-boxes">
          <Member
            image={"https://i.postimg.cc/jqD2qv5p/image.png"}
            name={"Ahmed Sallam"}
            description={`works as a graphic designer and website interface 
              designer. He can design professional website interfaces and 
              works as an integrated website programmer. 
              He has two years of experience in this field of website 
              programming and three years of design.`}
            fs={"https://web.facebook.com/xravox"}
            ln={"https://www.linkedin.com/in/ahmed-sallam-767616249/"}
            gh={"https://github.com/AhmedSallam100"}
            duration={"1200"}
          />
          <Member
            image={"https://i.postimg.cc/JncfMfXN/image.png"}
            name={"Ibrahim Albialy"}
            description={`He works as a programmer and developer of professional 
              website interfaces with an attractive and fun design that is 
              responsive to all devices. He has one year of experience in the 
              field of developing and programming front-ends.`}
            fs={"https://web.facebook.com/xrobexz"}
            ln={"https://www.linkedin.com/in/ibrahim-albialy-005a272a7/"}
            gh={"https://github.com/AhmedSallam100"}
            duration={"1400"}
          />
          <Member
            image={"https://i.postimg.cc/WtLj4G3r/image.png"}
            name={"Abdulrahman Mohammed"}
            description={`He works as an integrated website programmer, 
              where he designs the website interface in addition to the 
              back end of the website. He has two years of experience in 
              the field of integrated website programming`}
            fs={"https://web.facebook.com/xPecoz"}
            ln={"https://www.linkedin.com/in/abdulrahman-mohammed-ba6410272/"}
            gh={"https://github.com/xPecoz"}
            duration={"1800"}
          />
        </div>
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <div className="reviews">
      <Title text={"Reviews"} number={"2"} />
      <div className="container">
        <div className="review-boxes">
          <Review
            name={"Hani Daraji"}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aspernatur
            fugiat cum animi. Nihil, explicabo totam iure sapiente id, delectus
            voluptas unde beatae, esse aliquam laudantium consequatur et molestias
            doloribus!`}
            duration={"1200"}
          />
          <Review
            name={"Hani Daraji"}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aspernatur
            fugiat cum animi. Nihil, explicabo totam iure sapiente id, delectus
            voluptas unde beatae, esse aliquam laudantium consequatur et molestias
            doloribus!`}
            duration={"1400"}
          />
          <Review
            name={"Hani Daraji"}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aspernatur
            fugiat cum animi. Nihil, explicabo totam iure sapiente id, delectus
            voluptas unde beatae, esse aliquam laudantium consequatur et molestias
            doloribus!`}
            duration={"1800"}
          />
          <Review
            name={"Hani Daraji"}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aspernatur
            fugiat cum animi. Nihil, explicabo totam iure sapiente id, delectus
            voluptas unde beatae, esse aliquam laudantium consequatur et molestias
            doloribus!`}
            duration={"2200"}
          />
        </div>
      </div>
    </div>
  );
}

function Hiring() {
  return (
    <div className="hiring">
      <Title text={"Hiring"} number={"4"} />
      <div className="container">
        <form className="hiring-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              data-aos="fade-right"
              data-aos-duration="1000"
            />
            <input
              type="text"
              placeholder="Phone"
              data-aos="fade-left"
              data-aos-duration="1000"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            data-aos="fade-up"
            data-aos-duration="1400"
          />
          <textarea
            placeholder="Message"
            data-aos="fade-up"
            data-aos-duration="1200"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
