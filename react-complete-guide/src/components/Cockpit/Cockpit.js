import React, { useEffect } from 'react';

import classes from './Cockpit.module.css';

const Cockpit = (props) => {

  // The second array point at all the varaibles or all the data that actually a sudes in your effect
  useEffect(() => {
    const timer = setTimeout(() => {
      alert('[Cockpit.js] componentDidMount once.');
    }, 1000);

    return () => {
      // If we run some cleaning method in componentWillMount => it will cancel the method in componentDidMount
      clearTimeout(timer);
      console.log('[Cockpit.js] 1st componentWillUnmount.');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] componentDidMount continually.')
    return () => {
      console.log('[Cockpit.js] 2nd componentWillUnmount.');
    }
  });

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
};

export default React.memo(Cockpit);