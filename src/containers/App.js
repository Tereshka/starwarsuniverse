import React, {Component} from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import '../containers/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      starwars: [],
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield : event.target.value});
  }

  async componentDidMount(){
    await fetch('https://swapi.co/api/people/')
    .then( response => response.json())
    .then( data => this.setState({starwars: data.results}));
  }

  render(){
    let filtStarWars = this.state.starwars.filter( r => {
      return r.name.toLowerCase()
          .includes(this.state.searchfield.toLowerCase());
    });

    return !this.state.starwars.length ?
       <h1 className="text-white">Loading...</h1> :
        ( 
          <div>
            <div className="navbar sticky-top">
              <h1 className="text-white">StarWars Characters</h1>
              <SearchBox searchChange={this.onSearchChange} />
            </div>
            <CardList starwars={filtStarWars}/>
          </div>
        );
  }
  
}

export default App;