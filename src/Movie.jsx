import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import movies from "./movies";
import { Link } from 'react-router-dom';

function  Movie({ id,title, description, imageurl, rating }) {
  
  return (
    <Card
      style={{
        width: "20rem",
        backgroundColor: "#FFDD95",
        margin: 15,
        padding: 10,
      }}
    >
      <Card.Img variant="top" src={imageurl} />
      <Card.Body>
        <Card.Title>Title: {title}</Card.Title>
        <Card.Text>Description : {description}</Card.Text>
        <Card.Text> Reating:{rating}</Card.Text>
        <Link to={`/film/${id}`}>
        <Button variant="primary"> Voir trailer link</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default Movie;
