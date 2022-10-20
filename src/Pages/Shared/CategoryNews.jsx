import React from "react";
import Card from "react-bootstrap/Card";
import { FaEye, FaShareAlt, FaStar, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryNews = ({ news }) => {
  console.log(news);
  const { _id, author, details, image_url, title, rating, total_view, thumbnail_url } = news;
  return (
    <Card className="mb-3">
      <Card.Header className="d-flex justify-content-between">
        <div className="d-flex justify-content-center">
          <div>
            <img style={{ height: "50px", borderRadius: "50%", marginRight:"10px" }} src={author?.img} alt="" />
          </div>
          <div>
            <p className="mb-0">{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div>
          <FaUser></FaUser>
          <FaShareAlt className="ms-2"></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
              <Card.Title className="text-primary">{title}</Card.Title>
              <Card.Img variant="top" src={image_url} />
              <Card.Text>
                  {details.length > 250 ?
                      <>{details.slice(0, 250) + " ..."} <Link to={`/news/${_id}`}>Read more</Link></>
                      : details}
              </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <p>
            <FaStar className="text-warning me-2"></FaStar>
          </p>
          <p>{rating?.number}</p>
        </div>
        <div className="d-flex">
          <p>
            <FaEye />
          </p>
          <p className="ms-2">{total_view}</p>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default CategoryNews;
