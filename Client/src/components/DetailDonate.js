import React from "react";
import { Progress } from "reactstrap";

const DetailDonate = (props) => {
  return (
    <div>
      <div className="picture60">
        <img src={props.location.state.Img} alt="pictures from card" />
      </div>
      <div className="textdetaildonate">{props.location.state.Title}</div>
      <div className="textdetaildonate2">{props.location.state.Text}</div>
      <div className="progressdetaildonate">
        <Progress color="danger" value={40} />
      </div>
      <div className="textdetaildonate4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div>
        <button className="buttondetaildonate">
          <div className="donate5">Donate Now</div>
        </button>
        <div className="listDonation">
          <h1>List Donation (200)</h1>
        </div>
      </div>
    </div>
  );
};

export default DetailDonate;
