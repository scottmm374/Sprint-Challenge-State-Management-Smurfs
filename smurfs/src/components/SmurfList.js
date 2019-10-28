import React from "react";
import { Container, Card, CardTitle, CardText, CardBody } from "reactstrap";

function SmurfList(props) {
  return (
    <div>
      <Container>
        {props.smurfs.map(smurf => {
          return (
            <Card key={smurf.id}>
              <CardTitle>Name: {smurf.name}</CardTitle>
              <CardBody>
                <CardText>
                  <p>Age: {smurf.age}</p>
                  <p>Height: {smurf.height}</p>
                </CardText>
              </CardBody>
            </Card>
          );
        })}
      </Container>
    </div>
  );
}

export default SmurfList;
