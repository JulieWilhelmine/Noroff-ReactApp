// imports
import React from 'react';

export default class CharacterSpesificComponent extends React.Component {
    render() {
        return (
            <div className="[ row spesific ]">
                <div className="[ col-sm-12 ]">
                <br /><br /><br />
                </div>
                <div className="[ col-sm-4 spesific__image ]">
                    <img src={this.props.image} />
                </div>
                <div className="[ col-sm-8 spesific__info ]">
                    <h2>
                        {this.props.name}
                    </h2>
                    <p>{this.props.species}</p> 
                    <p>{this.props.gender}</p>     
                </div>
            </div>
        );
    }
}