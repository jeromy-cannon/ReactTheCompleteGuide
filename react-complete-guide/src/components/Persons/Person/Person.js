import React, { Component, Fragment } from 'react';
//import styles from './Person.css';
//import Aux from '../../../hoc/Auxiliary';


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

export default Person;