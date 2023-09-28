const { Component } = require('react');

class Feedbacks extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  handleClickGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
    this.countTotalFeedback();
  };
  handleClickNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    this.countTotalFeedback();
  };
  handleClickBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
    this.countTotalFeedback();
  };
  countTotalFeedback = () => {
    this.setState(prevState => ({ total: prevState.total + 1 }));
    this.countPositiveFeedbackPercentage();
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      console.log(prevState.positiveFeedback);
      return {
        positiveFeedback: (prevState.positiveFeedback =
          ((this.state.good / this.state.total) * 100).toFixed(0) + '%'),
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <ul>
          <li>
            <button onClick={this.handleClickGood}>Good</button>
          </li>
          <li>
            <button onClick={this.handleClickNeutral}>Neutral</button>
          </li>
          <li>
            <button onClick={this.handleClickBad}>Bad</button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.state.total}</li>
          <li>Positive feedback: {this.state.positiveFeedback}</li>
        </ul>
      </div>
    );
  }
}

export { Feedbacks };
