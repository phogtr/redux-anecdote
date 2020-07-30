import React, { useEffect } from "react";
import { connect } from "react-redux";
import { AnecList, AnecForm, Notify, Filter } from "./components";
import { initAnec } from "./actions/anecActions";

function App(props) {
  useEffect(() => {
    props.initAnec();
  }, []);

  return (
    <div className="App">
      <Notify />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecList />
      <AnecForm />
    </div>
  );
}

export default connect(null, { initAnec })(App);
