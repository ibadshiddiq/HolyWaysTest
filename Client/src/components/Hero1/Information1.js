import "../Hero1/information1.css";

function Information1() {
  return (
    <div className="red-box">
      <div className="header1">
        <p>
          {" "}
          While you are still standing, try to reach out to the people who are
          falling.
        </p>
      </div>
      <div className="paragraph">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div>
        <button type="button" className="button">
          Donate Now
        </button>
      </div>
      <div>
        <img
          src="/information1.svg"
          alt="information1-holyways"
          className="picture1"
        />
      </div>
    </div>
  );
}

export default Information1;
