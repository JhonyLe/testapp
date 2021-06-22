import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {
    render() {
        return(
            <div>
                <h1>Главная</h1>
                <Link to='/about'>О нас</Link>
                <div>
                    <button type="button" onClick={() => {window.ym(81519523,'reachGoal','TargetClick')}}>Кликни!</button>
                </div>
            </div>
        )
    }
}

export default Main;