import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
    render() {
        return(
            <div>
                <h1>О нас</h1>
                <Link to='/'>Главная</Link>
            </div>
        )
    }
}

export default About;