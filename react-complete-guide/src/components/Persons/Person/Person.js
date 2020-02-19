import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

//import styles from './Person.css';
//import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import styles from './Person.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (<Fragment>
      <p onClick={this.props.click}>I'm {this.props.name} and {this.props.age} years old!</p>
      <p>{this.props.children}</p>
      <input type="text" onChange={this.props.changed} value={this.props.name} />
    </Fragment>);
    // return (<Aux>
    //   <p onClick={this.props.click}>I'm {this.props.name} and {this.props.age} years old!</p>
    //   <p>{this.props.children}</p>
    //   <input type="text" onChange={this.props.changed} value={this.props.name} />
    // </Aux>);
    // return [
    //   <p key="i1" onClick={this.props.click}>I'm {this.props.name} and {this.props.age} years old!</p>,
    //   <p key="i2">{this.props.children}</p>,
    //   <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
    // ];
    // return (
    //   <div className={styles.Person}>
    //     <p onClick={this.props.click}>I'm {this.props.name} and {this.props.age} years old!</p>
    //     <p>{this.props.children}</p>
    //     <input type="text" onChange={this.props.changed} value={this.props.name} />
    //   </div>
    // );
  }
};

// this is useful when developing components that others besides you will use
// in the future.  3rd party, or for large teams.
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, styles.Person);