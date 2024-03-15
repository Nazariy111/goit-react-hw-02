import React from 'react'
import css from "./Options.module.css"

const Options = ({updateFeedback, totalFeedback, handleResetBtn}) => {
    return (
        <div className={css.optionsSection}>
            <button onClick={() => updateFeedback('good')}>Good</button>
            <button onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button onClick={() => updateFeedback('bad')}>Bad</button>
            {totalFeedback !== 0 && (<button onClick={handleResetBtn}>Reset</button>)}
        </div>
    )
}

export default Options