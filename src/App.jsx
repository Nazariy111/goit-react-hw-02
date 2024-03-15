import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

const initialFeedbacks = {good: 0, neutral: 0, bad: 0};


function App() {

  const [feedbacks, setFeedbacks] = useState(() => {
    const stringifiedFeedbacks = localStorage.getItem("feedbacksValues");
    const parsedFeedbacks = JSON.parse(stringifiedFeedbacks) ?? initialFeedbacks;
    return parsedFeedbacks;
  });
  

  const updateFeedback = feedbackType => {
    setFeedbacks({
      ...feedbacks,
			[feedbackType]: feedbacks[feedbackType] + 1  
		});
  }


  const handleResetBtn = () => { 
    setFeedbacks(initialFeedbacks);
  };


  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedbacksPercents = Math.round(((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100);
  

  useEffect(() => { 
    localStorage.setItem("feedbacksValues", JSON.stringify(feedbacks))
  }, [feedbacks]);

  
  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} handleResetBtn={handleResetBtn} />
      {totalFeedback !== 0 ? (
        <Feedback feedbacks={feedbacks}
        totalFeedback={totalFeedback}
        positiveFeedbacksPercents={positiveFeedbacksPercents} />) : (<Notification />)}
    </>
  )
}

export default App
