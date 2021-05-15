import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const profile = () => {
  return (
    <div>
      <div className="header">
        <p>My Profile</p>
      </div>
      <div className="header1">
        <p>History Donation</p>
      </div>
      <div className="text">
        <p>Full Name</p>
      </div>
      <div className="text1">
        <p>Andi</p>
      </div>
      <div className="text2">
        <p>Email</p>
      </div>
      <div className="text3">
        <p>andigans@gmail.com</p>
      </div>
      <div className="text4">
        <p>Phone</p>
      </div>
      <div className="text5">
        <p>083896833122</p>
      </div>
      <div className="pictures1">
        <img src="/Rectangle 12.svg" alt="" />
      </div>
      <div className="row1">
        <Card>
          <CardBody>
            <CardTitle>The Strength of a People. Power of Community</CardTitle>
            <CardTitle>Saturday, 12 April 2021</CardTitle>
            <CardSubtitle>Total : Rp 45.000</CardSubtitle>
          </CardBody>
          <Card className="row2">
            <CardTitle className="textcard">Finished</CardTitle>
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default profile;
