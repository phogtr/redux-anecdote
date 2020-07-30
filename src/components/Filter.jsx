import React from "react";
import { connect } from "react-redux";
import { filterAnec } from "../actions/filterAction";

const Filter = ({ filterAnec }) => {
  const onChange = (e) => {
    filterAnec(e.target.value);
  };

  const style = {
    marginBottom: 10,
  };
  return (
    <div style={style} id="go-top">
      filter <input onChange={onChange} />
    </div>
  );
};

export default connect(null, { filterAnec })(Filter);
