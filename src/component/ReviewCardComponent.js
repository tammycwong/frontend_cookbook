import React from "react";
import RccChild from "./RccChild";
function ReviewCardComponent({review, id}) {
  const test = review.map((review1)=> {
    return review1.review;
  })
 console.log(test)
  const test2 = test.filter(correctRecipe => correctRecipe.recipe_id == id)
  console.log(test2)
  return (
    <div>
       <RccChild key={id} selectedRecipe={test2} />
    </div>
  )
}
export default ReviewCardComponent;
