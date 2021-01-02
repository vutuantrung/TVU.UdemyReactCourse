import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...')
    return (
      <React.Fragment>
        <div className={classes.Person} >
          <p onClick={this.props.click}>
            I'm {this.props.name} and I am {this.props.age} years old!
      </p>
          <p>{this.props.children}</p>
          <input type="text" onChange={this.props.changed} value={this.props.name} />
        </div>
      </React.Fragment>
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
