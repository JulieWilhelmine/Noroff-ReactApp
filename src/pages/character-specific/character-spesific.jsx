// imports
import React from 'react';
import CharacterSpesificComponent from './../../components/Character-Spesific-Component/Character-Specific-Component';

export default class CharacterSpesific extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            rickMortyObj: [],
            characterId: this.props.match.params.id
        }
    }

    componentDidMount(){
        const app = this;
        app.getData();
    }

    getData(){
        const app = this;
        fetch('https://rickandmortyapi.com/api/character/'+app.state.characterId)
        .then(response => {
            return response.json()
        })
        .then(result => {
            app.setState({
                rickMortyObj: result
            })
            console.log(result, 'result')
        });
    }

    render() {
        const app = this;
        let spesificCharacter = <CharacterSpesificComponent image={app.state.rickMortyObj.image}
                                                            name={app.state.rickMortyObj.name}
                                                            species={app.state.rickMortyObj.species}
                                                            gender={app.state.rickMortyObj.gender}>
        </CharacterSpesificComponent>;                            
        return (
            <div className="[ row ]">
              <div className="[ col-sm-12 ]">
                {spesificCharacter}
              </div>
            </div>   
        );
    }
}