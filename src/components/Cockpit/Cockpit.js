import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);


  // The second array point at all the varaibles or all the data that actually a sudes in your effect
  useEffect(() => {

    const timer = setTimeout(() => {
      alert('[Cockpit.js] componentDidMount once.');
    }, 1000);
    toggleBtnRef.current.click();

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
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
      <button onClick={authContext.login}>Log in</button>
    </div>

  );
};

export default React.memo(Cockpit);