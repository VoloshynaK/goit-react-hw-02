import './App.css';
import { useState, useEffect } from 'react';

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

export default function App() {
  const [options, setOptions] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {};
  });

  const updateFeedback = feedbackType => {
    switch (feedbackType) {
      case 'good':
        setOptions({
          ...options,
          good: options.good + 1
        });
        break;
      case 'neutral':
        setOptions({
          ...options,
          neutral: options.neutral + 1
        });
        break;
      case 'bad':
        setOptions({
          ...options,
          bad: options.bad + 1
        });
        break;
      case 'reset':
        setOptions({
          good: 0,
          neutral: 0,
          bad: 0
        })
    }
  }

  const totalFeedback = options.good + options.neutral + options.bad;
  const stat = Math.round((options.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify({ good: options.good, neutral: options.neutral, bad: options.bad, total: totalFeedback, stat }))
  }, [options, totalFeedback, stat]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback}
        total={totalFeedback} />
      {totalFeedback === 0 ? <Notification/> : <Feedback
        good={options.good}
        neutral={options.neutral}
        bad={options.bad}
        total={totalFeedback}
        stat={stat}/>}
      
    </>
  )
}
