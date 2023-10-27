import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { CardGroup } from 'react-bootstrap';

export default function Cards() {
  return (
    <div style={{marginLeft:300, width:900}}>
      <CardGroup>
    <Card style={{ width: '18rem', height:450, marginLeft:15}}>
      <Card.Img variant="top" src="https://en.wikiarquitectura.com/wp-content/uploads/2017/01/Dall27Ava_10.jpg" />
      <Card.Body>
        <Card.Title style={{marginTop: 60, marginBottom:-265, marginLeft: 43}}>Card Title</Card.Title>
        <Card.Text style={{marginTop:273}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{marginLeft:30, marginTop:20}}>Find Out More</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', height:450, marginLeft:15}}>
      <Card.Img variant="top" src="https://en.wikiarquitectura.com/wp-content/uploads/2017/01/Sears_Tower_cabinas.jpg" />
      <Card.Body>
        <Card.Title style={{marginTop: 60, marginBottom:-265, marginLeft: 43}}>Card Title</Card.Title>
        <Card.Text style={{marginTop:273}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{marginLeft:30, marginTop:20}}>Find Out More</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', height:450, marginLeft:15}}>
      <Card.Img variant="top" src="https://blog.crowncruisevacations.com/wp-content/uploads/2018/05/1.-Carnival-Sensation-Decor-500x325.jpg" />
      <Card.Body>
        <Card.Title style={{marginTop: 60, marginBottom:-265, marginLeft: 43}}>Card Title</Card.Title>
        <Card.Text style={{marginTop:273}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{marginLeft:30, marginTop:20}}>Find Out More</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', height:450, marginLeft:15}}>
      <Card.Img variant="top" src="https://faithgateway.com/cdn/shop/articles/humble-grace-humility-before-happiness-500x325.jpg?v=1657025395" />
      <Card.Body>
        <Card.Title style={{marginTop: 60, marginBottom:-265, marginLeft: 43}}>Card Title</Card.Title>
        <Card.Text style={{marginTop:273}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{marginLeft:30, marginTop:20}}>Find Out More</Button>
      </Card.Body>
    </Card>
    </CardGroup>
    </div>
  );
}

