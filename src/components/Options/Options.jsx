import css from './Options.module.css'
import { PiArrowClockwiseLight, PiSmileyLight, PiSmileyMehLight, PiSmileySadLight } from "react-icons/pi";

export default function Options({ updateFeedback, total}) {
    return (
        <div className={css["btn-container"]}>
            <button onClick={() => updateFeedback('good')}
                type="button"
                className={`${css["btn"]} ${css["good"]}`}>
                <span className={css["btn-label"]}>Good</span>
                <PiSmileyLight className={css['icon']} />
            </button>
            <button onClick={() => updateFeedback('neutral')}
                type="button"
                className={`${css["btn"]} ${css["neutral"]}`}>
                <span className={css["btn-label"]}>Neutral</span>
                <PiSmileyMehLight className={css['icon']}/>
            </button>
            <button onClick={() => updateFeedback('bad')}
                type="button"
                className={`${css["btn"]} ${css["bad"]}`}>
                <span className={css["btn-label"]}>Bad</span>
                <PiSmileySadLight className={css['icon']}/>
            </button>
            {total > 0 && <button onClick={() => updateFeedback('reset')}
                type="button"
                className={`${css["btn"]} ${css["reset"]}`}>
                <span className={css["btn-label"]}>Reset</span>
                <PiArrowClockwiseLight className={css['icon']}/>
            </button>}
        </div>
    )
}
