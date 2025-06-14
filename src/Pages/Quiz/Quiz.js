import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';


const Quiz = () => {
  const location = useLocation();
  //const { questions, setQuestions } = location.state || {};
  const {word, word1} = location.state || {};
    useEffect( () => {
      console.log(word);},[]);

    


  return (
    <div>
      Quiz Page
    
    </div>
  )
}

export default Quiz
