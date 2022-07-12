import React from "react";
import { ListGroup } from "react-bootstrap";
import { useState } from "react";

const Book = (props) => {
  // console.log(props.arr[0]);
  return (
    <div>
      <div className="bg-light container-fluid image">
        <div className="conatiner">
          <h1 className="text-center text-white">{props.title}</h1>

          {props.arr.map((a) => (
            <ListGroup as="ol" numbered>
              <ListGroup.Item as="li" className="list mt-3">
                {a}
              </ListGroup.Item>
            </ListGroup>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Book;
