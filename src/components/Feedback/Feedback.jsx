// import css from './Feedback.module.css'

export default function Feedback ({good, neutral, bad, total, stat}) {
    return (
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive: {stat}%</p>
        </>
    )
}