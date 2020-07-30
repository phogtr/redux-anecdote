import React from "react";
import { connect } from "react-redux";
import { voteAnec, resetVote, removeAnec } from "../actions/anecActions";
import { displayNotify } from "../actions/notifyActions";

const AnecList = ({ voteAnec, resetVote, removeAnec, displayNotify, anec, filter }) => {
  const vote = (anec) => {
    voteAnec(anec);
    displayNotify(`You voted for ${anec.content}`, 5);
  };

  const reset = (anec) => {
    resetVote(anec);
    displayNotify(`You reseted the vote for ${anec.content}`, 5);
  };

  const removeA = (anec) => {
    const confirm = window.confirm(`Delete ${anec.content}?`);
    if (confirm) {
      removeAnec(anec);
      displayNotify(`You removed ${anec.content}`, 5);
    }
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anec
        .filter((a) => a.content.toLowerCase().includes(filter.toLowerCase()))
        // .sort((a, b) => b.votes - a.votes)
        .map((a) => (
          <div key={a.id}>
            <div>{a.content}</div>
            <div>
              has {a.votes}
              <button onClick={() => vote(a)}>vote</button>
              <button onClick={() => reset(a)}>reset</button>
              <button onClick={() => removeA(a)}>delete</button>
            </div>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({ anec: state.anec, filter: state.filter });

export default connect(mapStateToProps, { voteAnec, resetVote, removeAnec, displayNotify })(
  AnecList
);
