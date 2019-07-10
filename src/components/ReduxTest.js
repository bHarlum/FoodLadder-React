import React, { Component } from "react";
import { connect } from "react-redux";
import { testAction } from "./../actions";

class ReduxTest extends Component {

  componentDidMount() {
    this.props.testAction();
  }

  render(){
    return(
      <div>
        <h1>Redux Test</h1>
        <p>{this.props.redux_test} </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    redux_test: state.redux_test.value
  }
}

export default connect(mapStateToProps, {testAction})(ReduxTest);