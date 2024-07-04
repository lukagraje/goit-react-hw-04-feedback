import React, { useState } from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";

export default function Feedback() {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (feedbackType) => {
    setState((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const totalFeedbackCounter = () => {
    return state.good + state.neutral + state.bad;
  };

  const positiveFeedbackCounter = () => {
    return total > 0 ? Math.round((state.good / total) * 100) : 0;
  };

  const total = totalFeedbackCounter();
  const positivePercentage = positiveFeedbackCounter();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total >= 1 ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
