import { Button } from '@mui/material'
import React from 'react'
import { useNavigate} from "react-router-dom";

function Profile() {

  const navigate = useNavigate();
  const username = "syedsamsu"
  return (
    <div>Profile

      <div>
        <Button onClick={() => {
          navigate(`/about/${username}`)
        }}>Route to about page</Button>
      </div>
    </div>
  )
}

export default Profile