import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Recipe = () => {
  const [recipes, setRecipes] = useState(null);
  const [action, setAction] = useState([]);

  const chefsRecipe = useLoaderData();
  const { id, chefbio, picture, numberOfRecipe, experience, likes, chefName } =
    chefsRecipe;


  useEffect(() => {
    fetch(
      `https://assignment10-server-arif-mohammad-sagor.vercel.app/recipes/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data?.recipes);
      });
  }, [])

   const showToaster = (i) => {
     toast("This is my Favourite Recipe !");
     setAction([...action,i]);
  };






  // console.log(recipes?.recipes?.map(recipe=>console.log(recipe?.id)));
  return (
    <div>
      <Container>
        <div className="row">
          <div className="col-sm-12 mb-sm-4 col-lg-5">
            <img src={picture} style={{ width: "100%", height: "100%" }} />
          </div>

          <div className="col-sm-12 col-lg-7">
            <h3>
              <span className="fw-bold">Name:</span> {chefName}
            </h3>
            <p>
              {" "}
              <span className="fw-bold">Bio:</span> {chefbio}
            </p>
            <p>
              <span className="fw-bold">Experience:</span> {experience} years
            </p>
            <p>
              <span className="fw-bold">No.Recipes:</span> {numberOfRecipe}
            </p>
            <p>
              <span className="fw-bold">Likes:</span> {likes}
            </p>
          </div>
        </div>
        <h3 className="text-left my-5">My Recipes have a look !!</h3>
        <div className="row" style={{ margin: "mx-auto" }}>
          {recipes &&
            recipes.map((recipe,i) => (
              <div

                key={recipe.id}
                className="col-md-12 col-lg-3 "
                style={{
                  backgroundColor: "#DBDFEA",
                  padding: "20px",
                  margin: "20px",
                  borderRadius: "20px",
                }}
              >
                <p>
                  <span className="fw-bold"> RacipeName:</span> {recipe.name}
                </p>

                <p>
                  <span className="fw-bold">Method: </span>
                  <br />
                  {recipe.method}
                </p>
                <p>
                  <span className="fw-bold"> Ingredients:</span>

                  <br />
                  {recipe.ingredients &&
                    recipe.ingredients.map((ingre) => (
                      <small>
                        {ingre}
                        <br />
                      </small>
                    ))}
                </p>
                <p className="d-flex">
                  <p className="fw-bold">Rating: </p>

                  <Rating initialRating={recipe.ratings} readonly />
                </p>

                <Button
                  className='mt-auto'
                  onClick={() => { showToaster(i)}}
                  variant="warning"
                  disabled={action.includes(i)? true:false}

                >
                  Favourite
                </Button>
                <ToastContainer />
              </div>
            ))}
        </div>
        {/* alternative  */}
        {/* <div>
          <div>

              <p>
                  <span className="fw-bold"> RacipeName:</span> {recipes && recipes[1].name}
                </p>

                <p>
                  <span className="fw-bold">Method: </span>
                  <br />
                  {recipes && recipes[1].method}
                </p>
                <p>
                  <span className="fw-bold"> Ingredients:</span>
                </p>

          </div>
          <div></div>
          <div></div>
        </div> */}
        {/* alternative  */}
      </Container>
    </div>
  );
}

export default Recipe