import "./Hero.scss";
import Wrapper from "../wrapper/Wrapper";
import Img from "../../assets/hero.png";
const Hero = () => {
  return (
    <section className="hero">
      <Wrapper className="hero__container">
        <div className="hero__left">
          <h1>
            Fresh <span>&</span> Tasty
          </h1>
          <p className="p-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            consectetur dignissimos libero quaerat, velit deleniti est eius
            maxime id quia atque, commodi excepturi enim reprehenderit
            recusandae deserunt natus, ut non?
          </p>
          <button className="button-primary">Make a Reservation</button>
        </div>
        <div className="hero__right">
          <img src={Img} alt="hero Img" />
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
