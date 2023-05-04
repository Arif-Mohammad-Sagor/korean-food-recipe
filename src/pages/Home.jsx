import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import LazyLoad from "react-lazy-load";

import banner3 from "../assets/banner-3.jpg";
import beef from "../assets/beef.jpg";
import chicken from "../assets/chicken.jpg";
import veg from "../assets/veg.jpg";
import dessert from "../assets/dessert.jpg";

import { Link, useLoaderData } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import HotRecipes from "./shared/HotRecipes/HotRecipes";

const Home = () => {
  const chefs = useLoaderData();

  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} lg={6}>
            <div className="h-100 mt-3">
              <img className="w-100 rounded" src={banner3} />
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <div>
              <h1 className="mt-3">KoriTaste Foods</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit iusto itaque sit. Deleniti ea cupiditate, esse
                laboriosam dolorum aperiam excepturi. Eius quae magnam totam
                culpa veniam ipsam libero dicta consequuntur placeat non, cum
                magni quas corrupti nam quod neque incidunt beatae esse numquam.
                Molestias a voluptatem deleniti in amet animi exercitationem
                sint, veritatis, magni vel id mollitia et fugit esse. Sapiente,
                quasi molestias unde perspiciatis quos placeat temporibus
                nostrum minus fuga.
              </p>
            </div>
          </Col>
        </Row>
        <div>
          <h1 className="text-center  my-5">Our Master Chefs </h1>
          <div className="row">
            {chefs.map((chef) => (
              <div key={chef.id} className=" col-lg-4">
                <Card>
                  <LazyLoad>
                    <Card.Img variant="top" src={chef.picture} />
                  </LazyLoad>

                  <Card.Body>
                    <Card.Title>{chef.chefName}</Card.Title>
                    <Card.Text>
                      <p>Experience: {chef.experience} years</p>
                      <p>numberOfRecipe: {chef.numberOfRecipe}</p>
                      <p>
                        Likes: {chef.likes} <FaHeart></FaHeart>
                      </p>
                    </Card.Text>
                    <Link to={`/chefs/${chef.id}`}>
                      <Button className="d-block w-full" variant="primary">
                        View Recipe
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-5 text-center">
          <h1 className="text-center  my-5">Recipe Category </h1>
          <div className="row">
            <div className="col-lg-3">
              <img
                src={beef}
                style={{
                  width: "200px",
                  height: "200px ",
                  borderRadius: "50%",
                }}
              />
              <h3 className="ms-5">Beef</h3>
            </div>
            <div className="col-lg-3">
              <div className="">
                <img
                  src={chicken}
                  style={{
                    width: "200px",
                    height: "200px ",
                    borderRadius: "50%",
                  }}
                />
                <h3 className="ms-5">Chicken</h3>
              </div>
            </div>
            <div className="col-lg-3">
              <img
                src={veg}
                style={{
                  width: "200px",
                  height: "200px ",
                  borderRadius: "50%",
                }}
              />
              <h3 className="ms-5">Vege</h3>
            </div>
            <div className="col-lg-3">
              <img
                src={dessert}
                style={{
                  width: "200px",
                  height: "200px ",
                  borderRadius: "50%",
                }}
              />
              <h3 className="ms-5">Desserts</h3>
            </div>
          </div>
        </div>
        <HotRecipes></HotRecipes>
      </Container>
    </div>
  );
};

export default Home;
