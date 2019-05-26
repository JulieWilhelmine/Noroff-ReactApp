// imports
import React from 'react';
import Layout from './../components/Layout/Layout';
import CharacterComponent from './../components/Character-Component/Character-Component';
import Search from './../components/Search/Search';


export default class Homepage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rickMortyObj: [],
            rickMortyCards: []
        }
    }

    componentDidMount(){
        const app = this;
        app.getData();
    }

    getData(){
        const app = this;
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => {
            return response.json()
        })
        .then(result => {
            app.setState({
                rickMortyObj: result.results
            })
        });
    }

    handleSearchTerm(searchTerm) {
        const app = this;
        let characterObj = app.state.rickMortyObj;

        let characters = characterObj.filter((character) => {
            return character.name.indexOf(dearchTerm) !== -1;
        });

        app.setState({
            rickMortyCards: [],
            rickMortyObj: characters
        },app.createCards());
    }

    createCards() {
    const app = this;
        const rickMortyArray = app.state.rickMortyObj;
          rickMortyArray.forEach((value, key) =>{
            app.state.rickMortyCards.push(
                <CharacterComponent image={value.image}
                                    name={value.name}
                                    species={value.species}
                                    gender={value.gender}
                                    status={value.status}
                                    location={value.location.name}
                                    origin={value.origin.name}
                                    id={value.id}
                                    key={key}>
                </CharacterComponent>
            );
          });
        }     

    render(){
        const app = this;
        app.createCards();
        return (
            <div className="[ row ]">
                <div className="[ col-sm-12 heading ]">
                    <h2>
                        Home Page
                    </h2>    
                </div>
                <div className="[ col-sm-12 ]">
                    <Search onSearchTerm={app.handleSearcherm}></Search>
                </div>
                <div className="[ col-sm-12 ]">
                    {app.state.rickMortyCards}
                </div>
            </div>
        );
    }    
}
