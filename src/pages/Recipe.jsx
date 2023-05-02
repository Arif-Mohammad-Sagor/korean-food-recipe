import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom'

const Recipe = () => {
  const [recipes, setRecipes] = useState(null);
  
  const chefsRecipe = useLoaderData();
  console.log(chefsRecipe);

  useEffect(() => {
    fetch("http://localhost:3000/chefss")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  },[])
  console.log(recipes);
  return (
    <div>
      <Container>
        <div className="row">
          <div className="col col-lg-5"></div>
          <div className="col col-lg-7"></div>
        </div>
      </Container>
    </div>
  );
}

export default Recipe