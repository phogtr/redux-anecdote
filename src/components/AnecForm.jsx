import React from "react";
import { connect } from "react-redux";
import { createAnec } from "../actions/anecActions";
import { displayNotify } from "../actions/notifyActions";
import { Link } from "react-scroll";

const AnecForm = ({ createAnec, displayNotify }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const content = e.target.anec.value;
    createAnec(content);
    displayNotify(`You just added ${content}`, 5);

    e.target.anec.value = "";
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={onSubmit}>
        <div>
          <input name="anec" />
        </div>
        <button type="submit">create</button>
      </form>
      {/* <a href={"#go-top"}>Back to the top</a> */}
      <Link activeClass="active" to="go-top" spy={true} smooth={true} offset={-70} duration={500}>
        Scroll to top
      </Link>
    </div>
  );
};

export default connect(null, { createAnec, displayNotify })(AnecForm);
