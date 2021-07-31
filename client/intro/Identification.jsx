import React, { Component } from 'react';
import { Centered } from "meteor/empirica:core";

export default class Identification extends Component {
    state = { id: "" };
    
    // Update the stored state of the id
    handleUpdate = event => {
        const { value, name } = event.currentTarget;
        this.setState({ [name]: value });
    };
    
    // Submit the id when submit button is clicked
    handleSubmit = event => {
        event.preventDefault();

        const { handleNewPlayer } = this.props;
        const { id } = this.state;
        handleNewPlayer(id);
    };

    render() {
        const { id } = this.state;

        return (
            <Centered>
                <div className="new-player">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Identification</h1>

                        <p>
                            Please enter your name:
                        </p>

                        <input
                            className="bp3-input"
                            dir="auto"
                            type="text"
                            name="id"
                            id="id"
                            value={id}
                            onChange={this.handleUpdate}
                            placeholder="e.g., John Doe"
                            required
                            autoComplete="off"
                        />

                        <p className="button-holder">
                            <button type="submit">Submit</button>
                        </p>

                    </form>
                </div>
            </Centered>
        )
    }
}