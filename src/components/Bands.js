import React, { Component } from 'react'
import Band from './Band'

class Bands extends Component {
    renderBands = () => { 
        return this.props.bands.map((band) => (
            console.log(<Band delete={this.props.delete} key={band.id} band={band} />)
        ))
    };
    
    render() {
        return (<div> {this.renderBands()} </div>)
    }
}

export default Bands