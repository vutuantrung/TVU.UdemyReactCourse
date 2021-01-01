import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
  // This method initialize state from props
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // Note: not used anymore
  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps - props', props);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate - nextProps', nextProps);
    //console.log('[Persons.js] nextState', nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate - prevProps', prevProps);
    //console.log('[Persons.js] prevState: ', prevState);
    return { message: 'testing snapshot.' };
  }

  // Note: not used anymore
  // componentWillUpdate(props) {
  //   console.log('[Persons.js] componentWillUpdate - props', props);
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate - snapshot', snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
};

export default Persons;
