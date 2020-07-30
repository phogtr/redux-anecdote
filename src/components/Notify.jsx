import React from "react";
import { connect } from "react-redux";

const Notify = ({ notify }) => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return (
    <>
      <div>{notify ? <div style={style}>{notify}</div> : null}</div>
    </>
  );
};

const mapStateToProps = (state) => ({ notify: state.notify });

export default connect(mapStateToProps, null)(Notify);
