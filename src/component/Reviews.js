import React from "react";
import { useParams } from "react-router-dom";
import NewCommentForm from "./NewCommentForm";
import ReviewCardComponent from "./ReviewCardComponent";

function Reviews({ recipesData}) {
  // const recipesR = recipesData.map((recipe) => {
  //   return recipe;
  // });

  
  let {id} = useParams()

  console.log(id)
  const rr = recipesData.map((recipe_hash) => {
    return recipe_hash.reviews;
  });

  const review = rr.flat().map((review) => {
    return (review = { review });
  });

  console.log(review);
  return (
    <div>
      <ReviewCardComponent review={review} id={id}/>
      <NewCommentForm />
    </div>
  );
}
export default Reviews;
