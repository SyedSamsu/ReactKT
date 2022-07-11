import React from 'react'
import { useParams } from "react-router-dom";

function About() {

  const {username} = useParams();
  return (
    <div>About {username}</div>
  )
}

export default About