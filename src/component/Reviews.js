import React from "react";
import ReviewCard from "react";

function Reviews({ testData }) {
  console.log(testData);
  return (
    <div>
      <h1>Reviews</h1>
      <h2>name</h2>
      <p>image</p>
      <p>ingredient</p>
      <p>direction</p>
      <p>reviews</p>
      <p>comments</p>
    </div>
  );
}
export default Reviews;
