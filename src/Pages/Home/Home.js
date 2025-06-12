import React from 'react'
import "./Home.css";
import { TextField } from "@mui/material";

const Home = () => {
  return (
    <div className='content'>
      <div className='settings'>
        <span style={{fontSize: 40, fontWeight: 600}}>
          Quiz Settings
        </span>
        <div className='settings_select'></div>
        <TextField style = {{fontWeight:"bold", marginBottom: 25}} id="outlined-basic" label="Enter your name" variant="outlined" />

      </div>
      <img src="/quizimg.png" width="500px" className='banner' alt='quiz banner img'></img>
    </div>
  )
}

export default Home
