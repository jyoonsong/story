import React from "react";

export default class InstructionText extends React.Component {


  render() {
    const { game } = this.props;

    const text1 = (!game || game.treatment.order == 0) ? (
      <span>
        In round 1 (30 minutes), you will write as many stories as you can <b>from scratch.</b><br/>
        In round 2 (30 minutes), you will write as many stories as you can <b>by editing the drafts provided.</b><br/>
        <br/>
      </span>
    ): (
      <span>
        In round 1 (30 minutes), you will write as many stories as you can <b>by editing the drafts provided.</b><br/>
        In round 2 (30 minutes), you will write as many stories as you can <b>from scratch.</b><br/>
        <br/>
      </span>
    );

    return (
        <div>
          <h1>Instructions</h1>

          <p className="instruction-text">
            You should NOT start this job unless you have about 90 minutes of uninterrupted time to work on this task, because you will NOT receive payment unless you complete the whole job in one session.
          </p>

          <h3>Task</h3>
          <p className="instruction-text">
            This experiment involves writing short love stories that might be used, for example, as part of a service that provides subscribers with a new short love story every day. <br/>
            Your task is to write as many short love stories as you can in each of two rounds. <br/>
            The stories should be about 200 words each (between 150 and 250 words).<br/>
            <br/>
            {text1}
          </p>

          <h3>Payment</h3>
          <p className="instruction-text">
            <b>Base payment: $30 for participation</b><br/>
            - Requirements: 
            &nbsp; &nbsp; - Pass a quiz that teaches you how to recognize what we consider “good” stories for the purpose of this experiment<br/>
            &nbsp; &nbsp; - Write as many good 150- to 250-word stories as you can in each of the two 30-minute rounds.<br/>
            <br/>
            <b>Bonus payment: $3 for each good story</b><br/>
            - Requirement: If you meet our base payment requirements (above), you will also be paid $3 for each story you write story that meets our criteria for "good" stories.<br/>
            <br/>
            {/* Ex. Payment for writing 1 quality story in round 1 and 1 quality story in round 2 = $1<br/>
            Ex. Payment for writing 4 quality stories in round 1 and 4 quality stories in round 2 = 1 + 6 * 2 = $13<br/>
            Ex. Payment for writing 2 quality stories in round 1 only = $0<br/>
            Ex. Payment for writing 1 unacceptable story in round 1 and 1 unacceptable story in round 2 = $0<br/> */}
          </p>
        </div>
    );
  }
}
