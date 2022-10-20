import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  // console.log(allNews);
  const { image_url, details, title, _id } = news;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
              <Card.Title>{ title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Button variant="danger"><Link to='/'>Read another news</Link></Button>
      </Card.Body>
    </Card>
  );
};

export default News;
