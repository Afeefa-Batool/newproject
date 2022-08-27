import React from "react";
import { Table } from "react-bootstrap";

const Object = (props) => {
  // destructuring a object
  let { firstName, lastName, age, eyeColor } = props.person;
  // console.log(firstName)
  // console.log(eyeColor);
  // object py map nhi chalta
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>{firstName}</th>
            <th>{lastName}</th>
            <th>{age}</th>
            <th>{eyeColor}</th>
          </tr>
        </thead>
      </Table>
    </div>
  );
};

export default Object;
