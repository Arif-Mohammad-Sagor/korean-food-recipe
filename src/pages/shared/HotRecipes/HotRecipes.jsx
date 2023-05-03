import React from 'react'
import { Container } from 'react-bootstrap'
import banner1 from '../../../assets/banner-1.jpg';
import recipe1  from '../../../assets/recipe-1.jpg'
import recipe2  from '../../../assets/banner-2.webp'
import recipe3 from "../../../assets/banner-3.jpg";
import './HotRecipe.css';
const HotRecipes = () => {
  return (
    <Container >
      <h1 className="text-center py-5">Our Hot Recipes </h1>
      <div className="row">
        <div className="col-sm-12 col-lg-6 flex">
          <div className="d-flex ">
            <img src={banner1} className="featuredImg" />
            <div>
              <small className="text-justify text-secondary fw-semibold">
                One of the most popular Korean dishes is bulgogi, which consists
                of marinated slices of beef that are grilled or stir-fried. The
                beef is typically marinated in a mixture of soy sauce, sugar,
                sesame oil, garlic, and other seasonings, which gives it a sweet
                and savory flavor. pickledBulgogi is a beloved Korean
              </small>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6">
          <div className="d-flex ">
            <img src={recipe1} className="featuredImg" />
            <div>
              <small className="text-justify text-secondary fw-semibold">
                Bibimbap, which literally means "mixed rice" in Korean. It is a
                rice bowl dish that consists of a bed of rice topped with an
                array of colorful vegetables, protein (such as beef, chicken, or
                tofu), and a fried egg, all drizzled with a spicy gochujang
                sauce. The vegetables used in bibimbap can vary depending on the
                season and
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-5">
        <div className="col-sm-12 col-lg-6 flex">
          <div className="d-flex ">
            <img src={recipe2} className="featuredImg" />
            <div>
              <small className="text-justify text-secondary fw-semibold">
                Bibimbap, which literally means "mixed rice" in Korean. It is a
                rice bowl dish that consists of a bed of rice topped with an
                array of colorful vegetables, protein (such as beef, chicken, or
                tofu), and a fried egg, all drizzled with a spicy gochujang
                sauce. The vegetables used in bibimbap can vary depending on the
                season and
              </small>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 flex">
          <div className="d-flex ">
            <img src={recipe3} className="featuredImg" />
            <div>
              <small className="text-justify text-secondary fw-semibold">
                One of the most popular Korean dishes is bulgogi, which consists
                of marinated slices of beef that are grilled or stir-fried. The
                beef is typically marinated in a mixture of soy sauce, sugar,
                sesame oil, garlic, and other seasonings, which gives it a sweet
                and savory flavor. pickledBulgogi is a beloved Korean
              </small>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HotRecipes