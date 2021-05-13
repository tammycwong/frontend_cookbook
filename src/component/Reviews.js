import React from "react";
import NewCommentForm from "./NewCommentForm";
import ReviewCardComponent from "./ReviewCardComponent";

function Reviews({ recipesData }) {
  const recipesR = recipesData.map((recipe) => {
    return recipe;
  });

  const rr = recipesR.map((recipe_hash) => {
    return recipe_hash.reviews;
  });

  const review = rr.flat().map((review) => {
    return (review = { review });
  });

  console.log(review);
  return (
    <div>
      <ReviewCardComponent review={review}/>
      <NewCommentForm />
    </div>
  );
}
export default Reviews;
