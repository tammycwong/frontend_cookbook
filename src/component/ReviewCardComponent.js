import React from "react";
import RccChild from "./RccChild";

function ReviewCardComponent({review, id}) {
  const test = review.map((review1)=> {
    return review1.review;
  })
  const test2 = test.map((review2) =>{
    return (
      <RccChild key={review2.id} review2={review2} />
    )
  })
  // console.log(review2)
  return (
    <div>
      {test2}
    </div>
  )
}

export default ReviewCardComponent;
