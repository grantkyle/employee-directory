import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Navbar extends Component {
    static defaultProps = {
        title: 'Github Finder',
        icon: '{faGlassCheers}'
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    };
    
    render() {
        return (
            <nav className='navbar bg-primary'>
            <h1>
            <FontAwesomeIcon icon={this.props.icon} />
            {this.props.title}
            </h1> 
            </nav>
        );
    }
}

export default Navbar
