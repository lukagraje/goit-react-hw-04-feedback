import { Component } from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (feedbackType) => {
    this.setState((prevState) => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  totalFeedbackCounter() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  positiveFeedbackCounter() {
    const { good } = this.state;
    const total = this.totalFeedbackCounter();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.totalFeedbackCounter();
    const PositiveFeedbackPercentage = this.positiveFeedbackCounter();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total >= 1 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={PositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
