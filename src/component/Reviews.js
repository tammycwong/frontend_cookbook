import React from "react"
import { useParams } from "react-router-dom";

function Reviews() {
    const { id } = useParams() 
    
    return (<h1>Reviews</h1>)
}
export default Reviews