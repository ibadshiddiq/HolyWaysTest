import Card from "../components/Card/Card";
import Information1 from "../components/Hero1/Information1";
import Information2 from "../components/Hero2/Information2";
import "bootstrap/dist/css/bootstrap.min.css";
import pict1 from "../img/pict1.svg";
import pict2 from "../img/pict2.svg";
import pict3 from "../img/pict3.svg";

const Home = () => {
  return (
    <div>
      <Information1 />
      <Information2 />
      <div className="donate-container">
        <h5 className="text-center dono-header"> Donate Now </h5>
        <div className="row">
          <div className="col-sm-3">
            <Card
              id="1"
              Title="The Strength of a People. Power of Community"
              Paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              Img={pict1}
              Text="Rp 25.000.000"
            />
          </div>
          <div className="col-sm-3">
            <Card
              id="2"
              Title="Empowering Communities Ending Poverty"
              Paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              Img={pict2}
              Text="Rp 50.000.000"
            />
          </div>
          <div className="col-sm-3">
            <Card
              id="3"
              Title="Please our brothers in flores"
              Paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              Img={pict3}
              Text="Rp 100.000.000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
