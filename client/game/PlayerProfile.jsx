import React from "react";

import Timer from "./Timer.jsx";

export default class PlayerProfile extends React.Component {
  state = { score: 0 };

  renderProfile() {
    const { player } = this.props;
    return (
      <div className="profile-score">
        <p><b>Your Worker ID</b>: {player.id}<br/><br/></p>
      </div>
    );
  }

  renderScore() {
    const { score1, score2 } = this.props;

    return (
      <div className="profile-score">
        <b>Round 1</b>:<br/>
        <span>{score1} stories submitted</span><br/><br/>

        <b>Round 2</b>:<br/>
        <span>{score2} stories submitted</span><br/><br/>

        <b>Total</b>:<br/>
        <span>{score1 + score2} stories submitted</span><br/><br/>

      </div>

    );
  }
  render() {
    const { stage } = this.props;

    return (
      <aside className="player-profile">
        {this.renderProfile()}
        {this.renderScore()}
        <Timer stage={stage} />
      </aside>
    );
  }
}
