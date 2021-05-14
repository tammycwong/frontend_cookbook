import React, {useEffect} from "react";
function RccChild({review2, id}) {
    // const {rating, comment, recipe_id, user_id} = review2
console.log(id)
    useEffect(() => {
        fetch(`http://localhost:9292/recipes/${id}`)
          .then(res => res.json())
          .then(toysArr => {
            console.log(toysArr)
          })
      }, [id])

    return (
        <div>
            <p>Rating: </p>
            <p>Comment:</p>
        </div>
    )
}

export default RccChild;