import React from "react";

function NewCommentForm() {
  return (
    <form className="comment" >
      <textarea placeholder="comment here"></textarea> <br />
      <button className="reviews" type="submit">submit</button>
    </form>
  );
}

export default NewCommentForm;
