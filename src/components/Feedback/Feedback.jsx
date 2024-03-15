import React from 'react'
import css from "./Feedback.module.css"

const Feedback = ({feedbacks, totalFeedback, positiveFeedbacksPercents}) => {
    return (
        <ul>
            <li>Good: {feedbacks.good}</li>
            <li>Neutral: {feedbacks.neutral}</li>
            <li>Bad: {feedbacks.bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positive: {positiveFeedbacksPercents}%</li>
        </ul>
    )
}

export default Feedback