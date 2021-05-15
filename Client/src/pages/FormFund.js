import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

const Example = (props) => {
  return (
    <Form>
      <Label className="titlefund">Make Raise Fund</Label>
      <FormGroup className="title">
        <Input type="text" placeholder="Title" />
      </FormGroup>
      <button className="button1">
        <FormGroup className="button11">Attache Thumbnail</FormGroup>
      </button>
      <FormGroup className="goal">
        <Input type="number" placeholder="Goal Donation" />
      </FormGroup>
      <FormGroup className="description">
        <Input type="textarea" placeholder="Description" />
      </FormGroup>
      <button className="button2">
        <FormGroup className="button22">Public Fundraising</FormGroup>
      </button>
    </Form>
  );
};

export default Example;
