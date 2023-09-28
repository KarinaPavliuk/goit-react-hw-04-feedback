import { useState } from 'react';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    if (option === 'good') {
      setGood(good + 1);
    } else if (option === 'neutral') {
      setNeutral(neutral + 1);
    } else if (option === 'bad') {
      setBad(bad + 1);
    } else {
      return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = total =>
    total && ((good / total) * 100).toFixed(0) + '%';

  const total = countTotalFeedback();
  const positiveRatio = countPositiveFeedbackPercentage(total);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveRatio={positiveRatio}
          />
        )}
      </Section>
    </div>
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = feedback => {
//     this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
//   };

//   countTotalFeedback = () => {
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = total => {
//     return total && ((good / total) * 100).toFixed(0) + '%';
//   };

//   render() {
//     const total = this.countTotalFeedback();
//     const positiveRatio = this.countPositiveFeedbackPercentage(total);

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positiveRatio={positiveRatio}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
