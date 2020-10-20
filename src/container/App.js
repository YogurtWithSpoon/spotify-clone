import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Login from "../components/login/login";

export const App = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <Login />
    </div>
  );
};

App.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
