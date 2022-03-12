import React from "react";
import Footer from "./Footer";
import { Button } from "react-bootstrap";

export default function RentPagetwo(props) {
  // const { firstName, lastName, pickupDate, dropOffDate, age } = customerInfo;

  // place info in table or custom divs ??
  // need to calculate fees due and have a insert confirmation button which leads to payment page
  // and back button which takes customer to previous page to edit details

  

  return (
    <>
      <div className="main-body">
        RentPagetwo
        <div>FirstName: {props.firstName}</div>
        <div>LastName: {props.lastName}</div>
        <div>Age: {props.age}</div>
        <div>x days</div>
        <div>Cost</div>

      <Button variant="dark" size="lg" onClick={(e) => props.handleChangeStage(0)}>
        Back
      </Button>
      <Button variant="dark" size="lg" onClick={(e) => props.handleChangeStage(2)}>
        Confirm
      </Button>
      </div>
    </>
  );
}
