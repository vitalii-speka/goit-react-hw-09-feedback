import React, { useState, useCallback, useEffect } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const option = { good, neutral, bad };

  const onLeaveFeedback = useCallback(e => {
    const name = e.target.name;
    console.log(name);
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        break;
    }
  }, []);

  const total = good + neutral + bad;

  useEffect(() => {
    document.title = `Positive: ${positivePercent()}%`;
  });

  const positivePercent = useCallback(() => {
    const percent = Math.round((100 * good) / total);
    return percent > 0 ? percent : 0;
  }, [good, total]);

  return (
    <div className="section">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(option)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {total === 0 ? (
        <Notification message="No feedback given"></Notification>
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercent()}
          ></Statistics>
        </Section>
      )}
    </div>
  );
}

/*

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    const percent = Math.round((100 * good) / total);

    return percent > 0 ? percent : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercent = this.countPositiveFeedbackPercentage();

    const objkey = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={objkey}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {total === 0 ? (
          <Notification message="No feedback given"></Notification>
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercent}
            ></Statistics>
          </Section>
        )}
      </>
    );
  }
}

export default App;
*/
