import React, {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/cardList/cardList.component'
import { SearchBox } from './components/searchBox/searchBox.component'

class MonstersApp extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchValue: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({monsters: users})
      });
  }
  
  changeHandler = (e) => {
    this.setState({searchValue: e.target.value});
  }
 
  render() {
    const {monsters, searchValue }= this.state;
    let filtereredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchValue.toLowerCase());
    })
    return (
      <div className="MonstersApp">
      <SearchBox
            placeholder='E.g. Glen'
            changeHandler={this.changeHandler}></SearchBox>
      <CardList monsters={filtereredMonsters}/>
      </div>
    );
  }
}

export default MonstersApp;
