import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  console.log("render", props);
  return (
    <div>
      <h1>I am a Counter</h1>
      <p>count: {props.count}</p>
      <button onClick={props.onIncrementClick}> increment </button>
    </div>
  );
}

function mapStateToProps(state) {
  console.log("mapStateToProps", state);
  return {
    count: state.count,
    agesCount: state.agesCount
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => {
      console.log("clicking");
      const action = { type: "INCREMENT" };
      dispatch(action);
    },

    onAgesClick: () => {
      console.log("ages has been clicked");
      const action = { type: "AGES_INCREMENT" };
      dispatch(action);
    },

    agesDecrement: () => {
      console.log("decrement age");
      const action = { type: "AGES_DECREMENT" };
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
