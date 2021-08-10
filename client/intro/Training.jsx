import React from "react";

import { Centered } from "meteor/empirica:core";

import { trainingStories } from "./trainingStories";

export default class Training extends React.Component {
  state = { count: 0, index: 0 };

  handleSubmit = event => {
    event.preventDefault();

    const el = event.currentTarget;
    const { count, index } = this.state;
    const answer = trainingStories[index].answer;

    let newCount = 0;

    if ((el.value === "yes" && answer >= 2.5) || (el.value === "no" && answer < 2.5)) {
        newCount = count + 1;
        alert("Correct!");
    }
    else {
      alert("Wrong!")
    }

    this.setState(prevState => ({
        ...prevState,
        count: newCount
    }));

    if (newCount < 5) {
        let newIndex = index + 1;
        if (index == trainingStories.length - 1) {
            newIndex = 0;
        }
        // show next story
        this.setState(prevState => ({
            ...prevState,
            index: newIndex
        }));
    } 
    else {
        this.props.onNext();
    }
  };

  render() {
    const { hasPrev, hasNext, onNext, onPrev } = this.props;
    const { index, count } = this.state;
    return (
      <Centered>
        <div className="quiz">
            <h1>Quiz: The definition of a "good" story in this experiment</h1>
            <p className="quiz-instruction">
                This quiz teaches you how to recognize what we consider "good" stories for the purpose of this experiment. 
                For each story, you will guess whether the story is "good" or not and then be told whether you were right or wrong. 
                When you guess <b>5 stories correctly in a row</b>, you will pass the quiz and be eligible to participate in the rest of the experiment.<br/>
                <br/>
                You need to ask yourself the following questions in order to judge whether a story is "good" for the purposes of this experiment.<br/>
                <br/>
                1. Is this a love story?<br/>
                2. Is this story reasonably well-written? <br/>
                3. Would people who generally enjoy reading love stories enjoy reading this story?<br/>
                4. Does this story contain errors or mistakes that would make it not suitable for publication in its current form (e.g., grammatical errors, logical flaws, incomplete sentences)? <br/>
                <br/>
                If the answers to the first three questions are "yes," and the answer to the last question is "no," then the story is probably a "good" story.
                If the answer for both these questions is "yes", then the story is probably a "good" story. <br/>
                Specifically, a bad story would be not well-written and most people who generally enjoy reading short love stories would not enjoy reading it. Or it could also be a story that is reasonably well-written but contains some errors or mistakes.
                On the other hand, a good story would be a well-written story that most people would enjoy reading.<br/><br/>

                <b>Currently, you got {count} correct in a row</b><br/>
            </p>

            <p><b>Is the following story good or not?</b></p>

            <p>{trainingStories[index] ? trainingStories[index].story : "Loading..."}</p>

            <button className="btn-blue" value="yes" onClick={this.handleSubmit}>It is GOOD</button>
            <button className="btn-red" value="no" onClick={this.handleSubmit}>It is NOT GOOD</button>
            
            <p>
                <button type="button" onClick={onPrev} disabled={!hasPrev}>
                Back to instructions
                </button>
            </p>
        </div>
      </Centered>
    );
  }
}