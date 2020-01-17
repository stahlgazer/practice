import React, { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Collapse
} from "reactstrap";

const PlanetCard = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Card id={props.planets.name} key={props.planets.name + "card"}>
        <CardBody>
          <CardTitle>Planet: {props.planets.name}</CardTitle>
          <CardSubtitle>Climate: {props.planets.climate}</CardSubtitle>
          <Collapse isOpen={isOpen}>
            <CardText>Hours per day: {props.planets.rotation_period}</CardText>
            <CardText>Gravity: {props.planets.gravity}</CardText>
            <CardText>Population: {props.planets.population}</CardText>
          </Collapse>
          <Button onClick={toggle} style={{ marginBottom: "1rem" }}>
            Details
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default PlanetCard;

