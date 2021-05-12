import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Reviews() {
  const [project, setProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [project2, setProject2] = useState(null);
  const [isLoaded2, setIsLoaded2] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/recipes/${id}`)
      .then((r) => r.json())
      .then((project) => {
        setProject(project);
        setIsLoaded(true);
      });
  }, [id]);

  // useEffect(() => {
  fetch(`http://localhost:9292/reviews/${id}`)
    .then((r) => r.json())
    .then((project2) => {
      setProject2(project2);
      setIsLoaded2(true);
    });

  // }, [id]);

  if (!isLoaded) return <h2>Loading...</h2>;
  if (!isLoaded2) return <h2>Loading...</h2>;
  const { image, name, ingredient, direction } = project;
  const { rating, comment } = project2;

  return (
    <div>
      <h1>Reviews</h1>
      <h2>{name}</h2>
      <img src={image} alt="food-image" width="525px" height="400" />
      <p>{ingredient}</p>
      <p>{direction}</p>
      <p>{rating}</p>
      <p>{comment}</p>
    </div>
  );
}
export default Reviews;
