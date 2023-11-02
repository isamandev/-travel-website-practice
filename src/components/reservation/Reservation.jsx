import "./Reservation.scss";
import Wrapper from "../wrapper/Wrapper";
import Img from "../../assets/reservation.webp";
const Reservation = () => {
  return (
    <section className="reservation">
      <Wrapper className="reservation__container">
        <div className="reservation__left">
          <img src={Img} alt="img" />
        </div>
        <div className="reservation__right">
          <h2>
            Make a <br /> Reservation
          </h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email Address" />
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]+"
              placeholder="Phone no"
            />
            <button className="button-primary">Reserve</button>
          </form>
        </div>
      </Wrapper>
    </section>
  );
};

export default Reservation;
