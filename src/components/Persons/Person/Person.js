import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthContext, { AuthConsumer } from '../../../context/auth-context';
import classes from './Person.module.css';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  // Set "contextType", but we have to use "this.context" to retreive data from context
  static contextType = AuthContext;

  componentDidMount() {
    //console.log(this.context.authenticated)
    this.inputElementRef.current.focus();
  }

  render() {
    console.log('[Person.js] rendering...')
    return (
      <>
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in.</p>}
        <React.Fragment>
          <div className={classes.Person} >
            <p onClick={this.props.click}>
              I'm {this.props.name} and I am {this.props.age} years old!
        </p>
            <p>{this.props.children}</p>
            <input
              ref={this.inputElementRef}
              type="text"
              onChange={this.props.changed}
              value={this.props.name} />
          </div>
        </React.Fragment>
      </>
    )
  }
};

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
}

export default Person;
