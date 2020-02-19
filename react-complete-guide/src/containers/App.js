import React, {
  Component
} from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import WithClass from '../hoc/WithClass';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: '001', name: 'Max', age: 28 },
      { id: '002', name: 'Manu', age: 29 },
      { id: '003', name: 'Stephanie', age: 26 }
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // will be removed in the future, instead use getDerivedStateFromProps
  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // this guarantees that you are updating the correct value for the
    // change counter from the previous value
    // this is needed when you are dependent on the previous state value
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    })
    // // this does not execute immediately, 
    // // but when React things it is a good time to do so
    // this.setState({
    //   persons: persons,
    //   changeCounter: this.state.changeCounter + 1
    // })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    return (
      <Aux>
        <button onClick={() => {
          this.setState({ showCockpit: false })
        }}>
          Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler} />
          : null}
        {persons}
      </Aux>
    );
    // return (
    //   <WithClass classes={styles.App}>
    //     <button onClick={() => {
    //       this.setState({ showCockpit: false })
    //     }}>
    //       Remove Cockpit</button>
    //     {this.state.showCockpit ? <Cockpit
    //       title={this.props.appTitle}
    //       showPersons={this.state.showPersons}
    //       personsLength={this.state.persons.length}
    //       clicked={this.togglePersonsHandler} />
    //       : null}
    //     {persons}
    //   </WithClass>
    // );
    // return (
    //   <div className={styles.App}>
    //     <button onClick={() => {
    //       this.setState({ showCockpit: false })
    //     }}>
    //       Remove Cockpit</button>
    //     {this.state.showCockpit ? <Cockpit
    //       title={this.props.appTitle}
    //       showPersons={this.state.showPersons}
    //       personsLength={this.state.persons.length}
    //       clicked={this.togglePersonsHandler} />
    //       : null}
    //     {persons}
    //   </div>
    // );
  }
}

export default withClass(App, styles.App);