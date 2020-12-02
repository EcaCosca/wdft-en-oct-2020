import React from 'react';
//import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'; // [{},{},{},{},{}, {},{},{},{},{},{},{},{},{}]
import ContactCard from './ContactCard';


class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5), // contacts displayed    [{},{},{},{},{}]
    remainingContacts: contacts.slice(5)   // [{},{},{},{},{},{},{},{},{},{},{}]
  };  

  //  [  {}  ]

//ADD
  addContact = () => {
    const contactsCopy = [...this.state.contacts];
    const remainingContantsCopy = [...this.state.remainingContacts];

    const randomIndex = Math.floor(Math.random() * remainingContantsCopy.length);
    // get random contact and remove it from the remainingContactsCopy
    const randomContact = remainingContantsCopy.splice(randomIndex, 1)[0];

    contactsCopy.push(randomContact);

    this.setState({ contacts: contactsCopy, remainingContacts: remainingContantsCopy });
  };

  //SORT BY NAME
  sortByName = () => {
    const sortedContacts = this.state.contacts.sort((contact1, contact2) => {
      // If compareFunction(a, b) returns  -1 ,  
      // a is sorted before b ( leaves a to be first in the pair).
      if (contact1.name < contact2.name) {
        return -1;
      }
    });

    this.setState({ contacts: sortedContacts });
  };

  //SORT  BY POPULARITY
  sortByPopularity = () => {
    const sortedContacts = this.state.contacts.sort((contact1, contact2) => {
      return contact2.popularity - contact1.popularity
    });
    this.setState({ contacts: sortedContacts });
  };

//REMOVE
  removeContact = (contactId) => {
    const filteredContacts = this.state.contacts.filter((contactObj) => {
      if (contactObj.id !== contactId) {
        return true;
      } else {
        return false;
      }
    });

    this.setState({ contacts: filteredContacts });
  };


  render() {
    // Pass an inactive function that can be invoked
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <h3 style={  {color: 'red', fontSize: '20px'}  } >Inline styling</h3>

        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </thead>

        <tbody>
          {this.state.contacts.map((contact) => {
            return (
              <ContactCard 
                contactObj={contact} 
                removeContactFunc={this.removeContact}
                />
            );
          })}
        </tbody>
      </div>
    );
  }
}

export default App;
