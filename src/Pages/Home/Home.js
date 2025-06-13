import React, { use, useState } from 'react'
import "./Home.css";
import { MenuItem, TextField, Button } from "@mui/material";
import Categories from '../../Data/Categories';
import {useNavigate} from "react-router-dom";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';


const Home = ({name, setName}) => {

  const[category, setCategory] = useState("");
  const[difficulty,setDifficulty]=useState("");
  const[error,setError] =useState(false);
  const API_URL = "https://opentdb.com/api.php?amount=10&category="+{category}+"&difficulty="+{difficulty}+"&type=multiple"
  const API_URL1 = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

  const navigate = useNavigate();

   const fetchQuestions = async(category, difficulty) => {
    console.log(category);
    console.log(difficulty);
    console.log(API_URL);
    const data = await fetch(API_URL1)
        const result = await data.json();
        console.log(result.results);
      }
      

  const handleClick = () => {
    if(!category || !difficulty || !name){
      setError(true);
      return;
    } else {
      setError(false);
      console.log("point1")
      fetchQuestions(category, difficulty);
      console.log("point2");
      navigate('/quiz');
      console.log("point3");

    }

  }
  
  return (
    <div className='content'>
      <div className='settings'>
        <span style={{fontSize: 40, fontWeight: 600}}>
          Quiz Settings
        </span>

        <div className='settings_select'>
          {error && <ErrorMessage> Please Fill all the fields </ErrorMessage> }
        <TextField style = {{marginBottom: 25}} 
        id="outlined-basic" 
        label="Enter your name" 
        variant="outlined" 
        onChange={e=>setName(e.target.value)}/>

        <TextField style = {{marginBottom: 25}} 
        onChange={e=> setCategory(e.target.value)}
        value={category}
        select label="Select Category" 
        variant ="outlined">
        {Categories.map((option) => (
            <MenuItem key={option.category} value={option.value}>
              {option.category}
            </MenuItem>
          ))}
          </TextField> 
        

          <TextField style = {{marginBottom: 25}} 
          onChange={e=>(setDifficulty(e.target.value))}
          value={difficulty}
          select label="Select Difficulty" 
          variant ="outlined">
            <MenuItem key="Easy" value="easy">
            Easy
            </MenuItem>
            <MenuItem key="Medium" value="easy">
            Medium
            </MenuItem>
            <MenuItem key="Hard" value="easy">
            Hard
            </MenuItem>
      
          </TextField> 

          <Button variant="contained"
          onClick={handleClick}>
            Start Quiz
          </Button>

        </div>
      </div>
      <img src="/quizimg.png" width="500px" className='banner' alt='quiz banner img'></img>
    </div>
  )
}

export default Home
