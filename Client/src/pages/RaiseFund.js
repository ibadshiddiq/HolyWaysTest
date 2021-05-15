import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";

import { API } from "../config/api";
import CardDonate from "../components/Card/CardDonate";

const Raisefund = () => {
  const [myfunds, setMyFunds] = useState([]);
  const loadTodos = async () => {
    try {
      const response = await API.get(`/funds`);
      setMyFunds(response.data.data.fund);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div>
      <div className="Raise-Fund-Position">
        <h1 className="Raise-Fund-Font">My Raise Fund</h1>
      </div>
      <div>
        <Link to="/FormFund">
          <button className="makeFundBtn">Make Raise Fund</button>
        </Link>
      </div>
      <Row>
        {myfunds?.map((myrisefund) => {
          return (
            <Col className="mr-1 mb-5" style={{ maxWidth: "330px" }}>
              <CardDonate donateList={myrisefund} tes="viewFund" />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Raisefund;
