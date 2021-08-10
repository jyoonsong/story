import React from "react";

export default class TaskStimulus extends React.Component {
  render() {
    // game - round - stage
    const { round, stage, showA } = this.props;

    return (
      
        <div className="task-stimulus">
          Round {round.index + 1}. 
          {showA ?
            <div>
              <b>Please write as many good short short love stories as you can (150 ~ 250 words each).</b> <br/>
              You have 30 minutes for this round.<br/>  
              You can refer to the instructions by clicking on the button on the top right corner.<br/>
              Remember, the goal is not to create a literary masterpiece, but rather to write as many acceptable short stories as possible.
            </div>
            :
            <div>
              <b>Please edit as many drafts as you can into good short love stories (150 ~ 250 words).</b> <br/>
              If the draft below is unsatisfying, you can skip it and read a new one by clicking on the "Skip this draft" button.<br/>
              You can always choose to use or view the previous drafts using the sidebar on the right.<br/>
              You have 30 minutes.
              You can refer to the instructions by clicking on the button on the top right corner.<br/>
              Remember, the goal is not to create a literary masterpiece, but rather to write as many acceptable short stories as possible.
            </div>
          }
        </div>

    );
  }
}
